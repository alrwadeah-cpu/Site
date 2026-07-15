// === INITIAL SYSTEM CONFIGURATION & STATE ===
let currentLang = 'en';

// Translations - Using pure Unicode Escapes for Arabic to keep the source code 100% English.
// No Arabic characters exist in this file, preventing encoding errors in English-only environments.
const translations = {
    en: {
        pageTitle: "Employee Portal - NexusLink Systems",
        brandTitle: "Empowering Corporate Innovation.",
        brandDesc: "Access your secure workspace, cloud environments, and developer resources. NexusLink Systems delivers leading-edge IT infrastructure and solutions globally.",
        systemStatus: "All Corporate Systems Operational",
        cardTitle: "Employee Portal",
        cardSubtitle: "Please authenticate to continue to your workspace",
        labelEmail: "Corporate Email / Employee ID",
        errEmail: "Please enter a valid corporate email (name@nexuslink.com)",
        labelPassword: "Security Password",
        errPassword: "Password must be at least 8 characters long",
        labelRemember: "Remember Device",
        linkForgot: "Forgot Password?",
        btnSubmit: "Authorize Session",
        ssoText: "or authenticate via",
        btnSsoText: "Corporate SSO Security Key",
        footerText: "Need assistance? Contact ",
        linkSupport: "IT Support Desk",
        loadingText: "Verifying Credentials...",
        loadingSubtext: "Connecting to Secure LDAP Server",
        successTitle: "Access Granted",
        successDesc: "Redirecting to NexusLink Dashboard. Welcome back!",
        successBtn: "Return"
    },
    ar: {
        // Arabic texts encoded in Unicode (Standard JS Escape Sequences)
        pageTitle: "\u0628\u0641\u0648\u0627\u0628\u0629 \u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646 - \u0646\u0643\u0633\u0633 \u0644\u064a\u0646\u0643",
        brandTitle: "\u062a\u0645\u0643\u064a\u0646 \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631 \u0627\u0644\u0645\u0624\u0633\u0633\u064a.",
        brandDesc: "\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0622\u0645\u0646\u0629 \u0648\u0627\u0644\u062e\u0648\u0627\u062f\u0645. \u062a\u0642\u062f\u0645 \u0646\u0643\u0633\u0633 \u0644\u064a\u0646\u0643 \u062d\u0644\u0648\u0644\u0627\u064b \u062a\u0642\u0646\u064a\u0629 \u0639\u0627\u0644\u0645\u064a\u0629.",
        systemStatus: "\u062c\u0645\u064a\u0639 \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0634\u0631\u0643\u0629 \u062a\u0639\u0645\u0644 \u0628\u0646\u062c\u0627\u062d",
        cardTitle: "\u0628\u0641\u0648\u0627\u0628\u0629 \u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646",
        cardSubtitle: "\u064a\u0631\u062c\u0649 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u0644\u0645\u062a\u0627\u0628\u0639\u0629",
        labelEmail: "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0645\u0646\u064a / \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0638\u064a\u0641\u064a",
        errEmail: "\u064a\u0631\u062c\u064a \u0625\u062f\u062e\u0627\u0644 \u0628\u0631\u064a\u062f \u0645\u0624\u0633\u0633\u064a \u0635\u062d\u064a\u062d",
        labelPassword: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u0623\u0645\u0646\u064a\u0629",
        errPassword: "\u0643\u0644\u0645\u062a\u0643 \u064a\u062c\u0628 \u0623\u0646 \u0644\u0627 \u062a\u0642\u0644 \u0639\u0646 8 \u062e\u0627\u0646\u0627\u062a",
        labelRemember: "\u062d\u0641\u0638 \u0627\u0644\u062c\u0647\u0627\u0632",
        linkForgot: "\u0646\u0633\u064a\u062a \u0643\u0644\u0645\u062a \u0627\u0644\u0633\u0631\u061f",
        btnSubmit: "\u062a\u0641\u0648\u064a\u0636 \u0627\u0644\u062c\u0644\u0633\u0629",
        ssoText: "\u0623\u0648 \u0627\u0644\u062a\u062d\u0642\u0642 \u0639\u0628\u0631",
        btnSsoText: "\u0645\u0641\u062a\u0627\u062d \u0623\u0645\u0627\u0646 SSO \u0644\u0644\u0634\u0631\u0643\u0629",
        footerText: "\u0647\u0644 \u062a\u062d\u062a\u0627\u062c \u0645\u0633\u0627\u0639\u062f\u0629\u061f \u0627\u062a\u0635\u0644 \u0628\u0640 ",
        linkSupport: "\u062f\u0639\u0645 \u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a",
        loadingText: "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0642\u0642...",
        loadingSubtext: "\u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u062e\u0627\u062f\u0645 LDAP \u0627\u0644\u0622\u0645\u0646",
        successTitle: "\u062a\u0645 \u0645\u0646\u062d \u0627\u0644\u0625\u0630\u0646",
        successDesc: "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0648\u062c\u064a\u0647 \u0625\u0644\u064a \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645. \u0645\u0631\u062d\u0628\u0627\u064b \u0628\u0643!",
        successBtn: "\u0639\u0648\u062f\u0629"
    }
};

// === INTERACTIVE CANVAS BACKGROUND SYSTEM (PARTICLES) ===
const canvas = document.getElementById('particle-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles = [];
    const maxParticles = 80;

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.radius = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
            ctx.fill();
        }
    }

    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - dist / 100)})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;
    });
}

// === UTILITY & PORTAL OPERATIONS ===

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`;
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
    }
}

function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const errorMsg = document.getElementById('error-' + fieldId);

    if (fieldId === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(field.value) || /^\d+$/.test(field.value);
        if (!isValid && field.value.trim() !== '') {
            errorMsg.style.display = 'flex';
        } else {
            errorMsg.style.display = 'none';
        }
    } else if (fieldId === 'password') {
        if (field.value.length < 8 && field.value.trim() !== '') {
            errorMsg.style.display = 'flex';
        } else {
            errorMsg.style.display = 'none';
        }
    }
}

// Function that handles the language switching
function toggleLanguage() {
    const htmlDoc = document.documentElement;
    const btnEn = document.getElementById('btn-en');
    const btnAr = document.getElementById('btn-ar');
    const slider = document.getElementById('lang-slider');

    if (currentLang === 'en') {
        currentLang = 'ar';
        htmlDoc.dir = 'rtl';
        htmlDoc.lang = 'ar';
        if (btnEn) btnEn.classList.remove('active');
        if (btnAr) btnAr.classList.add('active');
        if (slider) slider.style.transform = 'translateX(-100%)';
    } else {
        currentLang = 'en';
        htmlDoc.dir = 'ltr';
        htmlDoc.lang = 'en';
        if (btnAr) btnAr.classList.remove('active');
        if (btnEn) btnEn.classList.add('active');
        if (slider) slider.style.transform = 'translateX(0)';
    }

    updatePageTexts();
}

// DOM translation
function updatePageTexts() {
    const t = translations[currentLang];

    document.title = t.pageTitle;
    document.getElementById('brand-title').textContent = t.brandTitle;
    document.getElementById('brand-desc').textContent = t.brandDesc;
    document.getElementById('system-status-text').textContent = t.systemStatus;
    document.getElementById('card-title').textContent = t.cardTitle;
    document.getElementById('card-subtitle').textContent = t.cardSubtitle;

    document.getElementById('label-email').textContent = t.labelEmail;
    document.getElementById('err-text-email').textContent = t.errEmail;

    document.getElementById('label-password').textContent = t.labelPassword;
    document.getElementById('err-text-password').textContent = t.errPassword;

    document.getElementById('label-remember').textContent = t.labelRemember;
    document.getElementById('link-forgot').textContent = t.linkForgot;
    document.getElementById('btn-submit-text').textContent = t.btnSubmit;

    document.getElementById('sso-text').textContent = t.ssoText;
    document.getElementById('btn-sso-text').textContent = t.btnSsoText;

    const footerContainer = document.querySelector('.card-footer');
    if (footerContainer) {
        footerContainer.innerHTML = `${t.footerText} <a href="#" class="support-link" id="link-support" onclick="alertSupport(event)">${t.linkSupport}</a>`;
    }

    document.getElementById('loading-text').textContent = t.loadingText;
    document.getElementById('loading-subtext').textContent = t.loadingSubtext;
    document.getElementById('success-title').textContent = t.successTitle;
    document.getElementById('success-desc').textContent = t.successDesc;
    document.getElementById('success-btn').textContent = t.successBtn;
}

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '' || password.length < 8) {
        return;
    }

    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'flex';
    }

    localStorage.setItem('loggedInUser', email);

    setTimeout(() => {
        if (loadingOverlay) {
            loadingOverlay.style.display = 'none';
        }

        const successOverlay = document.getElementById('success-overlay');
        if (successOverlay) {
            successOverlay.style.display = 'flex';
        }

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);

    }, 1500);
}

function resetForm() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

    const successOverlay = document.getElementById('success-overlay');
    if (successOverlay) {
        successOverlay.style.display = 'none';
    }
}

function triggerSSO() {
    alert("Please insert your SSO security key...");
}

function alertForgot(e) {
    e.preventDefault();
    alert("Please contact your system administrator to reset your password.");
}

function alertSupport(e) {
    e.preventDefault();
    alert("Please contact IT support at extension: 5500");
}

document.addEventListener("DOMContentLoaded", () => {
    updatePageTexts();
});