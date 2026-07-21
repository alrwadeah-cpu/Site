from fastapi import FastAPI, Form, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from datetime import datetime, date, timedelta
from database import fetch_query, execute_query
from pydantic import BaseModel
from typing import Optional, Literal
import base64
import json
import hmac
import hashlib
import time

SECRET_KEY = "nexuslink_super_secure_jwt_secret_key"
ALGORITHM = "HS256"

def base64url_encode(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b'=').decode('utf-8')

def base64url_decode(data: str) -> bytes:
    padding = '=' * (4 - len(data) % 4)
    return base64.urlsafe_b64decode(data + padding)

def create_jwt(payload: dict) -> str:
    header = {"alg": ALGORITHM, "typ": "JWT"}
    header_b64 = base64url_encode(json.dumps(header).encode('utf-8'))
    
    payload_copy = payload.copy()
    payload_copy["exp"] = int(time.time()) + 24 * 3600
    
    payload_b64 = base64url_encode(json.dumps(payload_copy).encode('utf-8'))
    
    signature_input = f"{header_b64}.{payload_b64}".encode('utf-8')
    signature = hmac.new(SECRET_KEY.encode('utf-8'), signature_input, hashlib.sha256).digest()
    signature_b64 = base64url_encode(signature)
    
    return f"{header_b64}.{payload_b64}.{signature_b64}"

def verify_jwt(token: str) -> dict:
    try:
        parts = token.split('.')
        if len(parts) != 3:
            return None
        header_b64, payload_b64, signature_b64 = parts
        
        signature_input = f"{header_b64}.{payload_b64}".encode('utf-8')
        expected_signature = hmac.new(SECRET_KEY.encode('utf-8'), signature_input, hashlib.sha256).digest()
        expected_signature_b64 = base64url_encode(expected_signature)
        
        if not hmac.compare_digest(signature_b64, expected_signature_b64):
            return None
            
        payload = json.loads(base64url_decode(payload_b64).decode('utf-8'))
        
        if "exp" in payload and payload["exp"] < time.time():
            return None
            
        return payload
    except Exception:
        return None

security = HTTPBearer()

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)) -> dict:
    token = credentials.credentials
    payload = verify_jwt(token)
    if not payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return payload

def get_user_logs_with_absences(email_clean: str):
    # Fetch all logs for this email
    rows = fetch_query("SELECT time, type FROM attendance WHERE LOWER(email) = ? ORDER BY time ASC", (email_clean,))
    
    logs = []
    log_dates = set()
    for row in rows:
        full_time = row["time"]
        log_type = row["type"]
        
        parts = full_time.split(" ")
        log_date = parts[0] if len(parts) >= 1 else ""
        log_time = parts[1] if len(parts) >= 2 else ""
        
        logs.append({
            "date": log_date,
            "time": log_time,
            "type": log_type
        })
        if log_type == "check-in":
            log_dates.add(log_date)
            
    if not logs:
        return []
        
    # Find start date (earliest log date)
    try:
        start_parts = logs[0]["date"].split("-")
        start_d = date(int(start_parts[0]), int(start_parts[1]), int(start_parts[2]))
    except Exception:
        start_d = date.today()
        
    now = datetime.now()
    # 5 PM rule: Today's absence is evaluated only if it's after 5 PM
    if now.hour >= 17:
        end_d = date.today() + timedelta(days=1)
    else:
        end_d = date.today()
    
    # Generate absences for any working day between start_d and end_d
    # Python weekday(): Monday=0, Tuesday=1, Wednesday=2, Thursday=3, Friday=4, Saturday=5, Sunday=6
    # Friday (4) and Saturday (5) are weekend.
    curr_d = start_d
    absences = []
    while curr_d < end_d:
        if curr_d.weekday() not in (4, 5): # Sunday-Thursday
            date_str = curr_d.strftime("%Y-%m-%d")
            if date_str not in log_dates:
                absences.append({
                    "date": date_str,
                    "in": "--:--",
                    "out": "--:--",
                    "status": "absent"
                })
        curr_d += timedelta(days=1)
        
    # Group logs by date
    daily_records = {}
    for log in logs:
        d = log["date"]
        if d not in daily_records:
            daily_records[d] = {"in": "--:--", "out": "--:--"}
        if log["type"] == "check-in":
            # Keep earliest check-in
            if daily_records[d]["in"] == "--:--" or log["time"][:5] < daily_records[d]["in"]:
                daily_records[d]["in"] = log["time"][:5]
        elif log["type"] == "check-out":
            # Keep latest check-out
            if daily_records[d]["out"] == "--:--" or log["time"][:5] > daily_records[d]["out"]:
                daily_records[d]["out"] = log["time"][:5]
            
    all_records = []
    for d, times in daily_records.items():
        all_records.append({
            "date": d,
            "in": times["in"],
            "out": times["out"],
            "status": "recorded"
        })
        
    for abs_rec in absences:
        all_records.append(abs_rec)
        
    # Sort all_records by date descending (newest first)
    all_records.sort(key=lambda x: x["date"], reverse=True)
    return all_records

class AttendanceCreate(BaseModel):
    email: str
    type: Literal['check-in', 'check-out']
    name: Optional[str] = "Unknown"


app = FastAPI()

# CORS configuration to allow connections from browser
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Login authentication endpoint
@app.post("/api/login")
async def login(email: str = Form(...), password: str = Form(...)):
    try:
        # Check against the active user3 table
        # We query the name matching both email and password
        user_rows = fetch_query("SELECT name FROM user3 WHERE email = ? AND password = ?", (email, password))
        if user_rows:
            name = user_rows[0]["name"]
            token = create_jwt({"email": email, "name": name})
            return {"success": True, "name": name, "token": token}
        
        # Fallback to the users table if empty or not matched
        fallback_rows = fetch_query("SELECT name FROM users WHERE email = ? AND password = ?", (email, password))
        if fallback_rows:
            name = fallback_rows[0]["name"]
            token = create_jwt({"email": email, "name": name})
            return {"success": True, "name": name, "token": token}
            
        # Hardcoded fallback for admin testing
        if email == "admin@nexus.com" and password == "12345678":
            name = "Admin User"
            token = create_jwt({"email": email, "name": name})
            return {"success": True, "name": name, "token": token}
            
        return {"success": False}
    except Exception as e:
        print(f"Login error: {e}")
        return {"success": False, "error": str(e)}

# User registration endpoint
@app.post("/api/register")
async def register(name: str = Form(...), email: str = Form(...), password: str = Form(...)):
    try:
        email_clean = email.strip().lower()
        name_clean = name.strip()
        password_clean = password.strip()
        
        if not email_clean or not name_clean or not password_clean:
            return {"success": False, "error": "all_fields_required"}
            
        # Check if email already exists in the database
        existing_user3 = fetch_query("SELECT email FROM user3 WHERE LOWER(email) = ?", (email_clean,))
        existing_users = fetch_query("SELECT email FROM users WHERE LOWER(email) = ?", (email_clean,))
        
        if existing_user3 or existing_users or email_clean == "admin@nexus.com":
            return {"success": False, "error": "email_exists"}
            
        # Save user to active user3 table
        execute_query(
            "INSERT INTO user3 (email, name, password) VALUES (?, ?, ?)",
            (email_clean, name_clean, password_clean)
        )
        return {"success": True}
    except Exception as e:
        print(f"Registration error: {e}")
        return {"success": False, "error": str(e)}

# Retrieve attendance logs endpoint
@app.get("/api/logs")
async def get_logs(email: str, current_user: dict = Depends(get_current_user)):
    email_clean = email.strip().lower()
    token_email = current_user.get("email", "").strip().lower()
    if email_clean != token_email and token_email != "admin@nexus.com":
        raise HTTPException(status_code=403, detail="Forbidden: You cannot access logs of other users")
        
    return get_user_logs_with_absences(email_clean)

# Save attendance logs endpoint
@app.post("/api/attendance")
async def attendance(type: str = Form(...), email: str = Form(...), name: str = Form("Unknown"), current_user: dict = Depends(get_current_user)):
    email_clean = email.strip().lower()
    token_email = current_user.get("email", "").strip().lower()
    if email_clean != token_email and token_email != "admin@nexus.com":
        raise HTTPException(status_code=403, detail="Forbidden: You cannot record attendance for other users")
        
    now = datetime.now()
    date_str = now.strftime("%Y-%m-%d")
    
    # Enforce limit of 1 check-in/check-out per day
    existing = fetch_query(
        "SELECT id FROM attendance WHERE LOWER(email) = ? AND type = ? AND time LIKE ?", 
        (email_clean, type, f"{date_str}%")
    )
    if existing:
        action_name_ar = "تسجيل الدخول" if type == "check-in" else "تسجيل الخروج"
        raise HTTPException(
            status_code=400, 
            detail=f"عذراً، لقد قمت ب{action_name_ar} لهذا اليوم بالفعل!"
        )
        
    try:
        import os
        import csv
        
        time_str = now.strftime("%H:%M:%S")
        now_str = f"{date_str} {time_str}"
        
        # Insert log into database
        execute_query("INSERT INTO attendance (email, type, time) VALUES (?, ?, ?)", (email_clean, type, now_str))
        
        # Append directly to Excel-friendly CSV
        try:
            csv_file = "attendance_full_logs.csv"
            file_exists = os.path.isfile(csv_file)
            type_ar = "تسجيل دخول" if type == "check-in" else "تسجيل خروج"
            with open(csv_file, mode="a", encoding="utf-8-sig", newline="") as f:
                writer = csv.writer(f)
                if not file_exists or os.path.getsize(csv_file) == 0:
                    writer.writerow(["اسم الموظف", "البريد الإلكتروني", "الحركة", "التاريخ", "الوقت"])
                writer.writerow([name, email, type_ar, date_str, time_str])
        except PermissionError:
            print("Warning: CSV file is locked by another process. Skipping CSV write.")
            
        return {"success": True}
    except Exception as e:
        print(f"Error saving attendance: {e}")
        return {"success": False, "error": str(e)}

# Read all attendance records API
@app.get("/api/attendance/all")
async def get_all_attendance(current_user: dict = Depends(get_current_user)):
    try:
        token_email = current_user.get("email", "").strip().lower()
        if token_email != "admin@nexus.com":
            raise HTTPException(status_code=403, detail="Forbidden: Admin access required")
            
        # Fetch user mappings first (email -> name)
        user_rows = fetch_query("SELECT email, name FROM user3")
        user_map = {}
        for row in user_rows:
            email = row['email'].strip().lower() if row['email'] else ""
            name = row['name'].strip() if row['name'] else "غير معروف"
            user_map[email] = name
            
        fallback_rows = fetch_query("SELECT email, name FROM users")
        for row in fallback_rows:
            email = row['email'].strip().lower() if row['email'] else ""
            name = row['name'].strip() if row['name'] else "غير معروف"
            if email not in user_map:
                user_map[email] = name
                
        user_map["admin@nexus.com"] = "Admin User"
        
        # Fetch all attendance logs
        rows = fetch_query("SELECT email, type, time FROM attendance ORDER BY id ASC")
        
        records = []
        user_checkins = {}
        
        for row in rows:
            email = row["email"]
            email_lower = email.strip().lower() if email else ""
            name = user_map.get(email_lower, "غير معروف")
            
            log_type = row["type"]
            type_ar = "تسجيل دخول" if log_type == "check-in" else "تسجيل خروج"
            
            full_time = row["time"]
            date_str = ""
            time_str = ""
            if full_time:
                parts = full_time.split(" ")
                if len(parts) >= 1:
                    date_str = parts[0]
                if len(parts) >= 2:
                    time_str = parts[1]
                    
            if email_lower not in user_checkins:
                user_checkins[email_lower] = set()
            if log_type == "check-in":
                user_checkins[email_lower].add(date_str)
                
            records.append({
                "name": name,
                "email": email,
                "type": type_ar,
                "date": date_str,
                "time": time_str
            })
            
        # Add absences dynamically for each user starting from earliest date
        start_date_str = "2026-07-20"
        for rec in records:
            if rec["date"] and rec["date"] < start_date_str:
                start_date_str = rec["date"]
                
        try:
            start_parts = start_date_str.split("-")
            start_d = date(int(start_parts[0]), int(start_parts[1]), int(start_parts[2]))
        except Exception:
            start_d = date.today()
            
        now = datetime.now()
        # 5 PM rule: Today's absence is evaluated only if it's after 5 PM
        if now.hour >= 17:
            end_d = date.today() + timedelta(days=1)
        else:
            end_d = date.today()
        
        for email_lower, name in user_map.items():
            if email_lower == "admin@nexus.com":
                continue
            curr_d = start_d
            checkin_dates = user_checkins.get(email_lower, set())
            while curr_d < end_d:
                if curr_d.weekday() not in (4, 5): # Sunday-Thursday
                    date_str = curr_d.strftime("%Y-%m-%d")
                    if date_str not in checkin_dates:
                        records.append({
                            "name": name,
                            "email": email_lower,
                            "type": "غياب",
                            "date": date_str,
                            "time": "--:--:--"
                        })
                curr_d += timedelta(days=1)
                
        records.sort(key=lambda x: (x["date"], x["time"]), reverse=True)
        return records
    except Exception as e:
        print(f"Error fetching all attendance: {e}")
        return []

# Create attendance record API
@app.post("/api/attendance/create")
async def create_attendance(data: AttendanceCreate, current_user: dict = Depends(get_current_user)):
    email = data.email.strip().lower()
    type = data.type
    name = data.name
    
    token_email = current_user.get("email", "").strip().lower()
    if email != token_email and token_email != "admin@nexus.com":
        raise HTTPException(status_code=403, detail="Forbidden: You cannot create attendance for other users")
        
    now = datetime.now()
    date_str = now.strftime("%Y-%m-%d")
    
    # Enforce limit of 1 check-in/check-out per day
    existing = fetch_query(
        "SELECT id FROM attendance WHERE LOWER(email) = ? AND type = ? AND time LIKE ?", 
        (email, type, f"{date_str}%")
    )
    if existing:
        action_name_ar = "تسجيل الدخول" if type == "check-in" else "تسجيل الخروج"
        raise HTTPException(
            status_code=400, 
            detail=f"عذراً، لقد قمت ب{action_name_ar} لهذا اليوم بالفعل!"
        )
        
    try:
        import os
        import csv
        
        # Resolve name from DB if not provided or unknown
        if not name or name == "Unknown" or name == "غير معروف":
            user_rows = fetch_query("SELECT name FROM user3 WHERE LOWER(email) = ?", (email,))
            if user_rows:
                name = user_rows[0]["name"]
            else:
                fallback_rows = fetch_query("SELECT name FROM users WHERE LOWER(email) = ?", (email,))
                if fallback_rows:
                    name = fallback_rows[0]["name"]
                else:
                    name = "غير معروف"
                    
        time_str = now.strftime("%H:%M:%S")
        now_str = f"{date_str} {time_str}"
        
        # Insert log into database
        execute_query("INSERT INTO attendance (email, type, time) VALUES (?, ?, ?)", (email, type, now_str))
        
        # Append directly to Excel-friendly CSV
        try:
            csv_file = "attendance_full_logs.csv"
            file_exists = os.path.isfile(csv_file)
            type_ar = "تسجيل دخول" if type == "check-in" else "تسجيل خروج"
            with open(csv_file, mode="a", encoding="utf-8-sig", newline="") as f:
                writer = csv.writer(f)
                if not file_exists or os.path.getsize(csv_file) == 0:
                    writer.writerow(["اسم الموظف", "البريد الإلكتروني", "الحركة", "التاريخ", "الوقت"])
                writer.writerow([name, email, type_ar, date_str, time_str])
        except PermissionError:
            print("Warning: CSV file is locked by another process. Skipping CSV write.")
            
        return {
            "success": True, 
            "message": "Attendance record created successfully", 
            "data": {
                "name": name, 
                "email": email, 
                "type": type_ar, 
                "date": date_str, 
                "time": time_str
            }
        }
    except Exception as e:
        print(f"Error creating attendance: {e}")
        return {"success": False, "error": str(e)}

# Mount static files to serve the frontend
app.mount("/", StaticFiles(directory=".", html=True), name="static")