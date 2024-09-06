document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const googleButton = document.getElementById('googleButton');
    const [usernameInput, passwordInput, confirmPasswordInput] = document.querySelectorAll(".form-control");

    // تابع اعتبارسنجی فرم
    const validateForm = () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        
        const validations = [
            checkEmptyFields([usernameInput, passwordInput, confirmPasswordInput]), // بررسی خالی نبودن فیلدها
            validateUsername(username), // اعتبارسنجی نام کاربری
            validatePassword(password), // اعتبارسنجی رمز عبور
            validateConfirmPassword(password, confirmPassword) // بررسی تطابق رمز عبور با تأیید رمز عبور
        ];

        // نمایش پیام خطا در صورت نامعتبر بودن
        for (const validation of validations) {
            if (!validation.valid) {
                showToast(validation.message);
                return false;
            }
        }
        return true;
    };

    // رویداد ارسال فرم
    form.addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault(); // جلوگیری از ارسال فرم در صورت نامعتبر بودن
        }
    });

    // رویداد کلیک روی دکمه ورود با گوگل
    if (googleButton) {
        googleButton.addEventListener('click', (e) => {
            e.preventDefault(); // جلوگیری از رویداد پیش‌فرض دکمه
            showToast('Google login is not available'); // نمایش پیام مربوط به عدم دسترسی به ورود با گوگل
        });
    }
});
