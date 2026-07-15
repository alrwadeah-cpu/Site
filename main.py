from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel
import bcrypt
import os

from database import find_user, create_user, init_db

# تأكد من إنشاء جدول المستخدمين
init_db()

app = FastAPI()

# المجلد الحالي للمشروع
BASE_DIR = os.path.dirname(os.path.abspath(__file__))


# --- نماذج البيانات (Pydantic Models) ---

class LoginRequest(BaseModel):
    email: str
    password: str


class RegisterRequest(BaseModel):
    email: str
    password: str


# --- نقاط النهاية (API Endpoints) ---

@app.post("/api/login")
async def login(request: LoginRequest):
    """تسجيل الدخول — التحقق من الإيميل والباسوورد"""
    email = request.email.strip()
    password = request.password

    # البحث عن المستخدم في قاعدة البيانات
    user = find_user(email)

    if user is None:
        return JSONResponse(
            status_code=401,
            content={"success": False, "message": "البريد الإلكتروني أو كلمة المرور غير صحيحة",
                     "message_en": "Invalid email or password"}
        )

    # التحقق من كلمة المرور المشفرة
    password_match = bcrypt.checkpw(
        password.encode("utf-8"),
        user["password_hash"].encode("utf-8")
    )

    if not password_match:
        return JSONResponse(
            status_code=401,
            content={"success": False, "message": "البريد الإلكتروني أو كلمة المرور غير صحيحة",
                     "message_en": "Invalid email or password"}
        )

    return {"success": True, "message": "تم تسجيل الدخول بنجاح", "message_en": "Login successful"}


@app.post("/api/register")
async def register(request: RegisterRequest):
    """تسجيل مستخدم جديد"""
    email = request.email.strip().lower()
    password = request.password

    if len(password) < 8:
        return JSONResponse(
            status_code=400,
            content={"success": False, "message": "كلمة المرور يجب أن تكون 8 أحرف على الأقل",
                     "message_en": "Password must be at least 8 characters"}
        )

    # تشفير كلمة المرور
    password_hash = bcrypt.hashpw(
        password.encode("utf-8"), bcrypt.gensalt()
    ).decode("utf-8")

    success = create_user(email, password_hash)

    if not success:
        return JSONResponse(
            status_code=409,
            content={"success": False, "message": "هذا البريد الإلكتروني مسجل مسبقاً",
                     "message_en": "This email is already registered"}
        )

    return {"success": True, "message": "تم إنشاء الحساب بنجاح", "message_en": "Account created successfully"}


# --- الصفحة الرئيسية ---

@app.get("/")
async def serve_index():
    return FileResponse(os.path.join(BASE_DIR, "index.html"))


# --- تقديم الملفات الثابتة (CSS, JS, etc.) ---
# يجب أن يكون هذا السطر بعد تعريف جميع الـ endpoints
app.mount("/", StaticFiles(directory=BASE_DIR), name="static")
