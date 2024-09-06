document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const [usernameInput,passwordInput] = document.querySelectorAll(".form-control");
    const googleButton = document.getElementById('googleButton'); // دکمه گوگل
    // const usernameInput = document.getElementById('username');
    // const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (e) => {
        let valid = true;

        // Get field values
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Check if all fields are empty
        if (!username && !password) {
            showToast('Please fill out all fields');
            valid = false;
        } else {
            // Validate Username
            const usernameValidation = validateUsername(username);
            const passwordValidation = validatePassword(password);
            if (!usernameValidation.valid && !passwordValidation.valid ) {
                showToast('Invalid username or password');
                valid = false;
            }
        }

        // Prevent form submission if validation fails
        if (!valid) {
            e.preventDefault();
        }
    });

    // Prevent form submission on Google button click
    if (googleButton) {
        googleButton.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Google login is not available');
        });
    }
});
