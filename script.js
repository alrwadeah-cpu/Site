// Translation dictionary for login and dashboard pages
const translations = {
    en: {
        pageTitleLogin: "Employee Portal - NexusLink Systems",
        pageTitleDashboard: "NexusLink Operational Console",
        brandTitle: "Architecting the Future. Starting with Today.",
        brandDesc: "Securely access the NexusLink core workspace to log your daily attendance, sync with your team, and drive global IT innovation. Your presence shapes our progress.",
        systemStatus: "All Corporate Systems Operational",
        cardTitle: "Employee Portal",
        cardSubtitle: "Please authenticate to continue to your workspace",
        labelEmail: "Corporate Email / Employee ID",
        labelPassword: "Security Password",
        labelRemember: "Remember Device",
        forgotLink: "Forgot Password?",
        btnSubmit: "Authorize Session",
        ssoDivider: "or authenticate via",
        btnSSO: "Corporate SSO Security Key",
        footerText: "Need assistance? Contact ",
        linkSupport: "IT Support Desk",
        errorEmail: "Please enter a valid corporate email (name@nexuslink.com) or Employee ID (EMP-XXXXX)",
        errorPassword: "Password must be at least 8 characters long",
        loadingVerify: "Verifying Credentials...",
        loadingConnect: "Connecting to Secure LDAP Server",
        successTitle: "Access Granted",
        successDesc: "Redirecting to NexusLink Dashboard. Welcome back!",
        successReturn: "Return",
        alertForgot: "Please contact IT Support Desk to reset your password.",
        alertSupport: "Opening Support Desk Ticket System...",
        alertSSO: "Checking for USB Security Key (YubiKey)...",
        loginFailed: "Authentication failed. Please check your credentials.",
        cardTitleRegister: "Create Account",
        cardSubtitleRegister: "Register your credentials to access the workspace",
        labelName: "Full Name",
        btnSubmitRegister: "Create Account",
        toggleToRegister: "Don't have an account? Create one",
        toggleToLogin: "Already have an account? Log in",
        errorName: "Please enter your full name",
        emailExists: "Email is already registered!",
        registerSuccess: "Account created successfully! Redirecting to login...",
        registerFailed: "Registration failed. Please try again.",
        loadingRegister: "Creating Account...",
        successTitleRegister: "Account Created",
        successDescRegister: "Your account has been created successfully. Welcome!",
        
        // Dashboard
        logoConsole: "OPERATIONAL CONSOLE",
        clockTitle: "Time & Attendance Gateways",
        btnCheckin: "Check In",
        btnCheckout: "Check Out",
        logsTitle: "Historical Operational Logs",
        thDate: "DATE",
        thIn: "IN",
        thOut: "OUT",
        thStatus: "STATUS",
        badgeRecorded: "• RECORDED",
        badgeAbsent: "• ABSENT",
        badgeEmpty: "No logs found",
        btnTerminate: "Terminate Session",
        userDisplayLoading: "Loading...",
        workspaceActivated: "Workspace Activated",
        goodMorning: "Good morning",
        goodAfternoon: "Good afternoon",
        goodEvening: "Good evening",
        
        // Admin
        adminTitle: "Admin Attendance Console",
        adminManualTitle: "Manually Log Attendance Record",
        adminEmailLabel: "Employee Email",
        adminNameLabel: "Employee Name (Optional)",
        adminTypeLabel: "Movement Type",
        adminSubmitBtn: "Submit",
        optCheckin: "Check In",
        optCheckout: "Check Out",
        adminThName: "EMPLOYEE NAME",
        adminThEmail: "EMAIL",
        adminThType: "MOVEMENT",
        adminThDate: "DATE",
        adminThTime: "TIME",
        statTotal: "Total Records",
        statPresent: "Present Today",
        statAbsent: "Absent Today",
        filterAll: "All Movements",
        btnClear: "Clear",
        btnExport: "Export to Excel"
    },
    ar: {
        pageTitleLogin: "بوابة الموظفين - نيكسوس لينك سيستمز",
        pageTitleDashboard: "لوحة التحكم التشغيلية - نيكسوس لينك",
        brandTitle: "بناء المستقبل لتقنية المعلومات. يبدأ من اليوم.",
        brandDesc: "الوصول الآمن إلى بيئة العمل الرئيسية لشركة نيكسوس لينك لتسجيل الحضور اليومي، والتنسيق مع فريقك، وقيادة الابتكار التقني العالمي. وجودك يثري تقدمنا.",
        systemStatus: "جميع الأنظمة التشغيلية للشركة تعمل كالمعتاد",
        cardTitle: "بوابة الموظفين",
        cardSubtitle: "الرجاء تسجيل الدخول للمتابعة إلى بيئة العمل الخاصة بك",
        labelEmail: "البريد الإلكتروني للشركة / الرقم الوظيفي",
        labelPassword: "كلمة المرور الأمنية",
        labelRemember: "تذكر هذا الجهاز",
        forgotLink: "نسيت كلمة المرور؟",
        btnSubmit: "تفويض الجلسة",
        ssoDivider: "أو تسجيل الدخول بواسطة",
        btnSSO: "مفتاح الأمان المؤسسي الموحد (SSO)",
        footerText: "هل تحتاج للمساعدة؟ اتصل بـ ",
        linkSupport: "مكتب الدعم الفني وتقنية المعلومات",
        errorEmail: "الرجاء إدخال بريد إلكتروني صحيح (name@nexuslink.com) أو رقم وظيفي (EMP-XXXXX)",
        errorPassword: "يجب أن تتكون كلمة المرور من 8 خانات على الأقل",
        loadingVerify: "جاري التحقق من الهوية...",
        loadingConnect: "الاتصال بخادم LDAP الآمن للشركة",
        successTitle: "تمت الموافقة على الدخول",
        successDesc: "جاري توجيهك إلى لوحة التحكم لشركة نيكسوس لينك. مرحباً بعودتك!",
        successReturn: "العودة",
        alertForgot: "الرجاء التواصل مع مكتب الدعم الفني لإعادة تعيين كلمة المرور الخاصة بك.",
        alertSupport: "جاري فتح نظام تذاكر الدعم الفني...",
        alertSSO: "جاري البحث عن مفتاح الأمان USB (YubiKey)...",
        loginFailed: "فشل التحقق من الهوية. الرجاء التأكد من البيانات المدخلة.",
        cardTitleRegister: "إنشاء حساب",
        cardSubtitleRegister: "سجل بياناتك للوصول إلى بيئة العمل",
        labelName: "الاسم الكامل",
        btnSubmitRegister: "إنشاء حساب",
        toggleToRegister: "ليس لديك حساب؟ إنشاء حساب",
        toggleToLogin: "لديك حساب بالفعل؟ تسجيل الدخول",
        errorName: "الرجاء إدخال اسمك الكامل",
        emailExists: "البريد الإلكتروني مسجل بالفعل!",
        registerSuccess: "تم إنشاء الحساب بنجاح! جاري التوجيه لتسجيل الدخول...",
        registerFailed: "فشل تسجيل الحساب. الرجاء المحاولة مرة أخرى.",
        loadingRegister: "جاري إنشاء الحساب...",
        successTitleRegister: "تم إنشاء الحساب",
        successDescRegister: "تم إنشاء حسابك بنجاح. مرحباً بك!",
        
        // Dashboard
        logoConsole: "لوحة التحكم التشغيلية",
        clockTitle: "بوابات تسجيل الحضور والانصراف",
        btnCheckin: "تسجيل حضور",
        btnCheckout: "تسجيل انصراف",
        logsTitle: "سجل العمليات التاريخي",
        thDate: "التاريخ",
        thIn: "حضور",
        thOut: "انصراف",
        thStatus: "الحالة",
        badgeRecorded: "• مسجّل",
        badgeAbsent: "• غائب",
        badgeEmpty: "لا توجد سجلات",
        btnTerminate: "إنهاء الجلسة",
        userDisplayLoading: "جاري التحميل...",
        workspaceActivated: "تم تفعيل بيئة العمل",
        goodMorning: "صباح الخير",
        goodAfternoon: "طاب يومك",
        goodEvening: "مساء الخير",
        
        // Admin
        adminTitle: "لوحة تحكم الحضور للمشرف",
        adminManualTitle: "تسجيل حركة حضور وانصراف يدوياً",
        adminEmailLabel: "البريد الإلكتروني للموظف",
        adminNameLabel: "اسم الموظف (اختياري)",
        adminTypeLabel: "نوع الحركة",
        adminSubmitBtn: "إرسال",
        optCheckin: "تسجيل حضور",
        optCheckout: "تسجيل انصراف",
        adminThName: "اسم الموظف",
        adminThEmail: "البريد الإلكتروني",
        adminThType: "الحركة",
        adminThDate: "التاريخ",
        adminThTime: "الوقت",
        statTotal: "إجمالي السجلات",
        statPresent: "حاضرون اليوم",
        statAbsent: "غياب اليوم",
        filterAll: "كل الحركات",
        btnClear: "تفريغ",
        btnExport: "تصدير إلى إكسل"
    }
};

// State variables
let currentLang = localStorage.getItem('lang') || 'en';
let allAdminRecords = []; // Global cache for admin records
const API_BASE = window.location.origin.startsWith('file') ? 'http://127.0.0.1:8000' : '';

// Function to translate all elements with data-i18n attributes
function updatePageTexts() {
    const t = translations[currentLang];
    if (!t) return;

    // Document Title
    const isDashboard = document.getElementById('logs-body') !== null;
    document.title = isDashboard ? t.pageTitleDashboard : t.pageTitleLogin;
    
    // HTML Lang & Direction
    document.documentElement.lang = currentLang;
    document.documentElement.dir = (currentLang === 'ar') ? 'rtl' : 'ltr';

    // Simple text replacement
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerText = t[key];
        }
    });

    // Input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // Update switcher UI
    const langSlider = document.getElementById('lang-slider');
    const btnEn = document.getElementById('btn-en');
    const btnAr = document.getElementById('btn-ar');

    if (langSlider && btnEn && btnAr) {
        const isRtl = document.documentElement.dir === 'rtl';
        if (currentLang === 'en') {
            btnEn.classList.add('active');
            btnAr.classList.remove('active');
            // English is physically on the left (0px) in LTR, and on the right (54px) in RTL
            langSlider.style.transform = isRtl ? 'translateX(54px)' : 'translateX(0px)';
        } else {
            btnAr.classList.add('active');
            btnEn.classList.remove('active');
            // Arabic is physically on the right (54px) in LTR, and on the left (0px) in RTL
            langSlider.style.transform = isRtl ? 'translateX(0px)' : 'translateX(54px)';
        }
    }
    
    // Update Greeting on dashboard if available
    if (isDashboard) {
        updateDashboardGreeting();
    }
}

// Switch Language handler
function toggleLanguage() {
    currentLang = (currentLang === 'en') ? 'ar' : 'en';
    localStorage.setItem('lang', currentLang);
    updatePageTexts();
}

/* === LOGIN PAGE LOGIC === */

// Field Validations
function validateField(fieldId) {
    const el = document.getElementById(fieldId);
    const errEl = document.getElementById(`error-${fieldId}`);
    if (!el || !errEl) return false;

    let isValid = true;
    if (fieldId === 'email') {
        const val = el.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
        const empIdRegex = /^EMP-\d{5}$/i;
        
        // Supports standard email or EMP-12345
        isValid = emailRegex.test(val) || empIdRegex.test(val);
    } else if (fieldId === 'password') {
        isValid = el.value.trim().length >= 8;
    }

    if (isValid) {
        errEl.style.display = 'none';
        el.classList.remove('input-invalid');
    } else {
        errEl.style.display = 'flex';
        el.classList.add('input-invalid');
    }
    return isValid;
}

// Show/Hide Password
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
    if (!passwordInput) return;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        if (eyeIcon) {
            eyeIcon.innerHTML = `
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
            `;
        }
    } else {
        passwordInput.type = 'password';
        if (eyeIcon) {
            eyeIcon.innerHTML = `
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            `;
        }
    }
}

// Login Submission
async function handleLogin(event) {
    event.preventDefault();
    
    const emailValid = validateField('email');
    const passwordValid = validateField('password');
    if (!emailValid || !passwordValid) return;

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const rememberMe = document.getElementById('remember-me').checked;

    // Show loading overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    const errBox = document.getElementById('server-error');
    if (errBox) errBox.style.display = 'none';
    if (loadingOverlay) loadingOverlay.style.display = 'flex';

    try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        const response = await fetch(`${API_BASE}/api/login`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) throw new Error("Connection failed");

        const result = await response.json();

        if (result.success) {
            // Store credentials
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', result.name || "NexusLink Employee");
            localStorage.setItem('userToken', result.token);
            if (rememberMe) {
                localStorage.setItem('rememberUser', 'true');
            } else {
                localStorage.removeItem('rememberUser');
            }

            // Hide loading, show success overlay
            if (loadingOverlay) loadingOverlay.style.display = 'none';
            const successOverlay = document.getElementById('success-overlay');
            if (successOverlay) successOverlay.style.display = 'flex';

            // Wait and redirect to dashboard.html
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1800);
        } else {
            // Failed check
            if (loadingOverlay) loadingOverlay.style.display = 'none';
            showServerError(translations[currentLang].loginFailed);
        }
    } catch (error) {
        if (loadingOverlay) loadingOverlay.style.display = 'none';
        showServerError(translations[currentLang].loginFailed);
        console.error("Login request error:", error);
    }
}

// Helper to show errors inline
function showServerError(msg) {
    const errBox = document.getElementById('server-error');
    const errText = document.getElementById('server-error-text');
    if (errBox && errText) {
        errText.innerText = msg;
        errBox.style.display = 'flex';
    } else {
        alert(msg);
    }
}

function dismissError() {
    const errBox = document.getElementById('server-error');
    if (errBox) errBox.style.display = 'none';
}

function resetForm() {
    const successOverlay = document.getElementById('success-overlay');
    if (successOverlay) successOverlay.style.display = 'none';
    const form = document.getElementById('login-form');
    if (form) form.reset();
    const rform = document.getElementById('register-form');
    if (rform) rform.reset();
}

let currentFormMode = 'login';

function toggleFormMode(e) {
    if (e) e.preventDefault();
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const ssoDivider = document.querySelector('.sso-divider');
    const ssoBtn = document.querySelector('.sso-btn');
    const cardTitle = document.getElementById('card-title');
    const cardSubtitle = document.getElementById('card-subtitle');
    const toggleLink = document.getElementById('toggle-mode-link');
    const errBox = document.getElementById('server-error');

    if (errBox) errBox.style.display = 'none';

    if (currentFormMode === 'login') {
        currentFormMode = 'register';
        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'block';
        if (ssoDivider) ssoDivider.style.display = 'none';
        if (ssoBtn) ssoBtn.style.display = 'none';
        
        if (cardTitle) cardTitle.setAttribute('data-i18n', 'cardTitleRegister');
        if (cardSubtitle) cardSubtitle.setAttribute('data-i18n', 'cardSubtitleRegister');
        if (toggleLink) toggleLink.setAttribute('data-i18n', 'toggleToLogin');
    } else {
        currentFormMode = 'login';
        if (loginForm) loginForm.style.display = 'block';
        if (registerForm) registerForm.style.display = 'none';
        if (ssoDivider) ssoDivider.style.display = 'flex';
        if (ssoBtn) ssoBtn.style.display = 'flex';
        
        if (cardTitle) cardTitle.setAttribute('data-i18n', 'cardTitle');
        if (cardSubtitle) cardSubtitle.setAttribute('data-i18n', 'cardSubtitle');
        if (toggleLink) toggleLink.setAttribute('data-i18n', 'toggleToRegister');
    }
    
    resetForm();
    
    document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.input-field').forEach(el => el.classList.remove('input-invalid'));
    
    updatePageTexts();
}

function validateRegisterField(fieldId) {
    const el = document.getElementById(`register-${fieldId}`);
    const errEl = document.getElementById(`error-register-${fieldId}`);
    if (!el || !errEl) return false;

    let isValid = true;
    if (fieldId === 'name') {
        isValid = el.value.trim().length > 0;
    } else if (fieldId === 'email') {
        const val = el.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
        const empIdRegex = /^EMP-\d{5}$/i;
        isValid = emailRegex.test(val) || empIdRegex.test(val);
    } else if (fieldId === 'password') {
        isValid = el.value.trim().length >= 8;
    }

    if (isValid) {
        errEl.style.display = 'none';
        el.classList.remove('input-invalid');
    } else {
        errEl.style.display = 'flex';
        el.classList.add('input-invalid');
    }
    return isValid;
}

function toggleRegisterPasswordVisibility() {
    const passwordInput = document.getElementById('register-password');
    const eyeIcon = document.getElementById('register-eye-icon');
    if (!passwordInput) return;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        if (eyeIcon) {
            eyeIcon.innerHTML = `
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
            `;
        }
    } else {
        passwordInput.type = 'password';
        if (eyeIcon) {
            eyeIcon.innerHTML = `
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            `;
        }
    }
}

async function handleRegister(event) {
    event.preventDefault();

    const nameValid = validateRegisterField('name');
    const emailValid = validateRegisterField('email');
    const passwordValid = validateRegisterField('password');
    if (!nameValid || !emailValid || !passwordValid) return;

    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();

    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingText = document.getElementById('loading-text');
    const loadingSubtext = document.getElementById('loading-subtext');
    const errBox = document.getElementById('server-error');

    if (errBox) errBox.style.display = 'none';
    
    const origTextKey = loadingText.getAttribute('data-i18n') || 'loadingVerify';
    const origSubtextKey = loadingSubtext.getAttribute('data-i18n') || 'loadingConnect';

    loadingText.innerText = translations[currentLang].loadingRegister || "Creating Account...";
    loadingSubtext.innerText = currentLang === 'ar' ? "الاتصال بقاعدة بيانات SQL..." : "Connecting to SQL Database...";
    
    if (loadingOverlay) loadingOverlay.style.display = 'flex';

    try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);

        const response = await fetch(`${API_BASE}/api/register`, {
            method: 'POST',
            body: formData
        });

        if (loadingOverlay) loadingOverlay.style.display = 'none';
        
        loadingText.setAttribute('data-i18n', origTextKey);
        loadingSubtext.setAttribute('data-i18n', origSubtextKey);
        updatePageTexts();

        if (!response.ok) {
            let errMsg = translations[currentLang].registerFailed;
            try {
                const errJson = await response.json();
                if (errJson.error === 'email_exists') {
                    errMsg = translations[currentLang].emailExists;
                } else if (errJson.detail) {
                    errMsg = errJson.detail;
                }
            } catch(e) {}
            throw new Error(errMsg);
        }

        const result = await response.json();

        if (result.success) {
            const successOverlay = document.getElementById('success-overlay');
            const successTitle = document.getElementById('success-title');
            const successDesc = document.getElementById('success-desc');
            const successBtn = document.getElementById('success-btn');

            const origSuccessTitleKey = successTitle.getAttribute('data-i18n') || 'successTitle';
            const origSuccessDescKey = successDesc.getAttribute('data-i18n') || 'successDesc';

            successTitle.innerText = translations[currentLang].successTitleRegister || "Account Created";
            successDesc.innerText = translations[currentLang].successDescRegister || "Your account has been created successfully.";
            if (successBtn) successBtn.style.display = 'none';

            if (successOverlay) successOverlay.style.display = 'flex';

            setTimeout(() => {
                if (successOverlay) successOverlay.style.display = 'none';
                
                successTitle.setAttribute('data-i18n', origSuccessTitleKey);
                successDesc.setAttribute('data-i18n', origSuccessDescKey);
                if (successBtn) successBtn.style.display = 'block';
                updatePageTexts();

                toggleFormMode();
            }, 2500);
        } else {
            let errMsg = translations[currentLang].registerFailed;
            if (result.error === 'email_exists') {
                errMsg = translations[currentLang].emailExists;
            } else if (result.error) {
                errMsg = result.error;
            }
            showServerError(errMsg);
        }
    } catch (error) {
        if (loadingOverlay) loadingOverlay.style.display = 'none';
        loadingText.setAttribute('data-i18n', origTextKey);
        loadingSubtext.setAttribute('data-i18n', origSubtextKey);
        updatePageTexts();
        showServerError(error.message || translations[currentLang].registerFailed);
        console.error("Register request error:", error);
    }
}

// Custom alert triggers
function alertForgot(e) {
    e.preventDefault();
    alert(translations[currentLang].alertForgot);
}

// Custom support alert triggers
function alertSupport(e) {
    e.preventDefault();
    alert(translations[currentLang].alertSupport);
}

function triggerSSO() {
    alert(translations[currentLang].alertSSO);
}

/* === PARTICLES BACKGROUND INTERACTIVE RENDERING === */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let particlesArray = [];
    const colors = ['rgba(59, 130, 246, 0.4)', 'rgba(16, 185, 129, 0.3)', 'rgba(96, 165, 250, 0.4)'];
    
    function setSize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    setSize();
    window.addEventListener('resize', setSize);
    
    const mouse = {
        x: null,
        y: null,
        radius: 120
    };
    
    const brandPanel = canvas.parentElement;
    brandPanel.addEventListener('mousemove', (e) => {
        const rect = brandPanel.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    brandPanel.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1.5;
            this.speedX = Math.random() * 0.6 - 0.3;
            this.speedY = Math.random() * 0.6 - 0.3;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            
            // Mouse push force
            if (mouse.x !== null && mouse.y !== null) {
                let dx = this.x - mouse.x;
                let dy = this.y - mouse.y;
                let distance = Math.sqrt(dx*dx + dy*dy);
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = dx / distance;
                    const directionY = dy / distance;
                    this.x += directionX * force * 1.5;
                    this.y += directionY * force * 1.5;
                }
            }
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function createParticles() {
        const numberOfParticles = Math.floor((canvas.width * canvas.height) / 10000);
        particlesArray = [];
        for (let i = 0; i < Math.max(numberOfParticles, 25); i++) {
            particlesArray.push(new Particle());
        }
    }
    createParticles();
    
    function connectParticles() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = Math.sqrt(dx*dx + dy*dy);
                
                if (distance < 120) {
                    opacityValue = 1 - (distance / 120);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${opacityValue * 0.12})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        connectParticles();
        requestAnimationFrame(animate);
    }
    animate();
    
    window.addEventListener('resize', createParticles);
}


/* === DASHBOARD PAGE LOGIC === */

function setupDashboard() {
    const email = localStorage.getItem('userEmail');
    const token = localStorage.getItem('userToken');
    if (!email || !token) {
        // Redirect to login if user session is not active
        window.location.href = 'index.html';
        return;
    }

    // Set user info
    const nameDisplay = document.getElementById('user-name-display');
    const emailDisplay = document.getElementById('user-email-display');
    
    if (nameDisplay) nameDisplay.textContent = localStorage.getItem('userName') || "NexusLink Employee";
    if (emailDisplay) emailDisplay.textContent = email;

    // Start Clock
    updateClock();
    setInterval(updateClock, 1000);

    // Initial Load Logs
    loadLogs();

    // Check if admin user
    const adminSection = document.getElementById('admin-section');
    if (adminSection && email.toLowerCase() === 'admin@nexus.com') {
        adminSection.style.display = 'block';
        loadAdminLogs();
    }
}

async function loadAdminLogs() {
    const tbody = document.getElementById('admin-logs-body');
    if (!tbody) return;

    try {
        const token = localStorage.getItem('userToken');
        const response = await fetch(`${API_BASE}/api/attendance/all`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error("Failed to load admin logs");
        const records = await response.json();
        
        // Cache records globally
        allAdminRecords = records;
        
        // Calculate today's stats dynamically
        const todayStr = new Date().toLocaleDateString('en-CA');
        const uniquePresent = new Set();
        const uniqueAbsent = new Set();
        
        records.forEach(rec => {
            if (rec.date === todayStr) {
                const typeLower = rec.type.toLowerCase();
                if (typeLower === 'تسجيل دخول' || typeLower === 'check-in') {
                    uniquePresent.add(rec.email.toLowerCase());
                } else if (typeLower === 'غياب' || typeLower === 'absent') {
                    uniqueAbsent.add(rec.email.toLowerCase());
                }
            }
        });
        
        const totalEl = document.getElementById('stat-total');
        const presentEl = document.getElementById('stat-present');
        const absentEl = document.getElementById('stat-absent');
        
        if (totalEl) totalEl.textContent = records.length;
        if (presentEl) presentEl.textContent = uniquePresent.size;
        if (absentEl) absentEl.textContent = uniqueAbsent.size;
        
        // Render table
        renderAdminLogsTable(records);
    } catch (err) {
        console.error("Error loading admin logs:", err);
        const errText = currentLang === 'ar' ? 'فشل تحميل سجل المشرف' : 'Failed to load admin logs';
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--error-color);">${errText}</td></tr>`;
    }
}

function renderAdminLogsTable(recordsToRender) {
    const tbody = document.getElementById('admin-logs-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (recordsToRender.length === 0) {
        const emptyText = translations[currentLang].badgeEmpty;
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">${emptyText}</td></tr>`;
        return;
    }

    recordsToRender.forEach(record => {
        let displayType = record.type;
        if (currentLang === 'en') {
            if (record.type === 'تسجيل دخول') displayType = 'Check In';
            else if (record.type === 'تسجيل خروج') displayType = 'Check Out';
            else if (record.type === 'غياب') displayType = 'Absent';
        }
        
        const isCheckin = record.type === 'تسجيل دخول' || record.type.toLowerCase() === 'check-in';
        const isAbsent = record.type === 'غياب' || record.type.toLowerCase() === 'absent';
        
        let badgeStyle = "";
        if (isCheckin) {
            badgeStyle = 'background: rgba(16, 185, 129, 0.1); color: var(--success-color); border: 1px solid rgba(16, 185, 129, 0.2);';
        } else if (isAbsent) {
            badgeStyle = 'background: rgba(239, 68, 68, 0.1); color: var(--error-color); border: 1px solid rgba(239, 68, 68, 0.2); font-weight: bold;';
        } else {
            badgeStyle = 'background: rgba(245, 158, 11, 0.1); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.2);';
        }
        
        tbody.innerHTML += `
            <tr>
                <td>${record.name}</td>
                <td>${record.email}</td>
                <td><span class="badge" style="${badgeStyle}">${displayType}</span></td>
                <td>${record.date}</td>
                <td>${record.time}</td>
            </tr>`;
    });
}

function filterAdminLogs() {
    const searchVal = (document.getElementById('admin-search')?.value || "").trim().toLowerCase();
    const dateVal = document.getElementById('admin-date-filter')?.value || "";
    const statusVal = document.getElementById('admin-status-filter')?.value || "all";
    
    const filtered = allAdminRecords.filter(record => {
        // 1. Search term match
        const matchesSearch = !searchVal || 
            (record.name && record.name.toLowerCase().includes(searchVal)) || 
            (record.email && record.email.toLowerCase().includes(searchVal));
            
        // 2. Date match
        const matchesDate = !dateVal || record.date === dateVal;
        
        // 3. Status match
        let matchesStatus = true;
        if (statusVal !== 'all') {
            const typeLower = record.type.toLowerCase();
            if (statusVal === 'check-in') {
                matchesStatus = typeLower === 'check-in' || typeLower === 'تسجيل دخول';
            } else if (statusVal === 'check-out') {
                matchesStatus = typeLower === 'check-out' || typeLower === 'تسجيل خروج';
            } else if (statusVal === 'absent') {
                matchesStatus = typeLower === 'absent' || typeLower === 'غياب';
            }
        }
        
        return matchesSearch && matchesDate && matchesStatus;
    });
    
    renderAdminLogsTable(filtered);
}

function clearAdminFilters() {
    const searchEl = document.getElementById('admin-search');
    const dateEl = document.getElementById('admin-date-filter');
    const statusEl = document.getElementById('admin-status-filter');
    
    if (searchEl) searchEl.value = '';
    if (dateEl) dateEl.value = '';
    if (statusEl) statusEl.value = 'all';
    
    renderAdminLogsTable(allAdminRecords);
}

async function submitAdminAttendance(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('admin-email');
    const nameInput = document.getElementById('admin-name');
    const typeInput = document.getElementById('admin-type');
    
    if (!emailInput || !typeInput) return;
    
    const email = emailInput.value.trim();
    const name = nameInput ? nameInput.value.trim() : "";
    const type = typeInput.value;
    
    const payload = {
        email: email,
        type: type,
        name: name || "Unknown"
    };

    try {
        const token = localStorage.getItem('userToken');
        const response = await fetch(`${API_BASE}/api/attendance/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error("Failed to create attendance record");

        const result = await response.json();
        if (result.success) {
            // Clear form fields
            emailInput.value = '';
            if (nameInput) nameInput.value = '';
            typeInput.selectedIndex = 0;
            
            // Reload logs
            await loadAdminLogs();
            
            // Also reload user own logs just in case they created one for themselves
            if (email.toLowerCase() === localStorage.getItem('userEmail').toLowerCase()) {
                await loadLogs();
            }
            
            alert(currentLang === 'ar' ? 'تم تسجيل الحركة بنجاح!' : 'Attendance record logged successfully!');
        } else {
            throw new Error(result.error || "Unknown error");
        }
    } catch (err) {
        console.error("Error creating admin attendance:", err);
        const errMsg = currentLang === 'ar' ? 'فشل تسجيل الحركة: ' : 'Failed to record attendance: ';
        alert(errMsg + err.message);
    }
}

function updateClock() {
    const timeEl = document.getElementById('time');
    const dateEl = document.getElementById('date');
    if (!timeEl || !dateEl) return;

    const now = new Date();
    
    // Choose format locale based on language
    const timeLocale = currentLang === 'ar' ? 'ar-EG' : 'en-US';
    const dateLocale = currentLang === 'ar' ? 'ar-EG' : 'en-US';

    timeEl.textContent = now.toLocaleTimeString(timeLocale, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    dateEl.textContent = now.toLocaleDateString(dateLocale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function updateDashboardGreeting() {
    const greetingEl = document.getElementById('dashboard-greeting');
    if (!greetingEl) return;

    const now = new Date();
    const hour = now.getHours();
    let greetKey = 'goodMorning';

    if (hour >= 12 && hour < 17) {
        greetKey = 'goodAfternoon';
    } else if (hour >= 17 || hour < 5) {
        greetKey = 'goodEvening';
    }

    const name = localStorage.getItem('userName') || "";
    greetingEl.innerText = `${translations[currentLang][greetKey]}, ${name}`;
}

async function loadLogs() {
    const email = localStorage.getItem('userEmail');
    const tbody = document.getElementById('logs-body');
    if (!email || !tbody) return;

    try {
        const token = localStorage.getItem('userToken');
        const response = await fetch(`${API_BASE}/api/logs?email=${email}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error("Failed to load logs");
        const records = await response.json();
        
        tbody.innerHTML = '';
        
        if (records.length === 0) {
            const emptyText = translations[currentLang].badgeEmpty;
            tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">${emptyText}</td></tr>`;
            return;
        }

        records.forEach(record => {
            let statusText = "";
            let badgeClass = "";
            if (record.status === 'recorded') {
                statusText = translations[currentLang].badgeRecorded;
                badgeClass = "badge-comp";
            } else if (record.status === 'absent') {
                statusText = translations[currentLang].badgeAbsent;
                badgeClass = "badge-absent";
            }
            
            tbody.innerHTML += `
                <tr>
                    <td>${record.date}</td>
                    <td class="log-time-in">${record.in}</td>
                    <td class="log-time-out">${record.out}</td>
                    <td><span class="badge ${badgeClass}">${statusText}</span></td>
                </tr>`;
        });
    } catch (err) {
        console.error("Error loading logs:", err);
        const errText = currentLang === 'ar' ? 'فشل تحميل سجل العمليات' : 'Failed to load operation logs';
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--error-color);">${errText}</td></tr>`;
    }
}

async function recordAttendance(type) {
    const email = localStorage.getItem('userEmail');
    const name = localStorage.getItem('userName') || "Unknown";
    if (!email) return;

    const formData = new FormData();
    formData.append('type', type);
    formData.append('email', email);
    formData.append('name', name);

    try {
        const token = localStorage.getItem('userToken');
        const response = await fetch(`${API_BASE}/api/attendance`, { 
            method: 'POST', 
            headers: { 'Authorization': `Bearer ${token}` },
            body: formData 
        });

        if (!response.ok) {
            let errMsg = "Failed to save attendance";
            try {
                const errData = await response.json();
                errMsg = errData.detail || errMsg;
            } catch(e) {}
            throw new Error(errMsg);
        }

        // Reload logs in real-time
        await loadLogs();
        if (email.toLowerCase() === 'admin@nexus.com') {
            await loadAdminLogs();
        }
    } catch (err) {
        console.error("Error recording attendance:", err);
        alert(err.message);
    }
}

function logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('userToken');
    window.location.href = 'index.html';
}

function exportAdminLogsToCSV() {
    const searchVal = (document.getElementById('admin-search')?.value || "").trim().toLowerCase();
    const dateVal = document.getElementById('admin-date-filter')?.value || "";
    const statusVal = document.getElementById('admin-status-filter')?.value || "all";
    
    const recordsToExport = allAdminRecords.filter(record => {
        const matchesSearch = !searchVal || 
            (record.name && record.name.toLowerCase().includes(searchVal)) || 
            (record.email && record.email.toLowerCase().includes(searchVal));
        const matchesDate = !dateVal || record.date === dateVal;
        
        let matchesStatus = true;
        if (statusVal !== 'all') {
            const typeLower = record.type.toLowerCase();
            if (statusVal === 'check-in') {
                matchesStatus = typeLower === 'check-in' || typeLower === 'تسجيل دخول';
            } else if (statusVal === 'check-out') {
                matchesStatus = typeLower === 'check-out' || typeLower === 'تسجيل خروج';
            } else if (statusVal === 'absent') {
                matchesStatus = typeLower === 'absent' || typeLower === 'غياب';
            }
        }
        return matchesSearch && matchesDate && matchesStatus;
    });

    // Create CSV content with UTF-8 BOM for Excel Arabic support
    let csvContent = "\uFEFF"; 
    csvContent += "اسم الموظف,البريد الإلكتروني,الحركة,التاريخ,الوقت\n";
    
    recordsToExport.forEach(rec => {
        const row = [
            `"${rec.name || ''}"`,
            `"${rec.email || ''}"`,
            `"${rec.type || ''}"`,
            `"${rec.date || ''}"`,
            `"${rec.time || ''}"`
        ];
        csvContent += row.join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    
    let filename = "attendance_full_logs.csv";
    if (dateVal) {
        filename = `attendance_logs_${dateVal}.csv`;
    }
    
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initialization triggers
document.addEventListener("DOMContentLoaded", () => {
    // Apply texts translations
    updatePageTexts();

    const isDashboard = document.getElementById('logs-body') !== null;
    if (isDashboard) {
        setupDashboard();
    } else {
        // Run login setup
        initParticles();
        
        // Auto fill email if remembered
        if (localStorage.getItem('rememberUser') === 'true') {
            const emailField = document.getElementById('email');
            const savedEmail = localStorage.getItem('userEmail');
            if (emailField && savedEmail) {
                emailField.value = savedEmail;
                // Trigger floating label behavior
                emailField.dispatchEvent(new Event('input'));
            }
        }
    }
});