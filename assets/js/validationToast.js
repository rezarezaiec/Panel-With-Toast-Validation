// Function to show toast message with an icon
function showToast(message) {
    Toastify({
        text: `<i class="fas fa-exclamation-circle toast-icon"></i>${message}`,
        duration: 2000,
        gravity: "top",
        position: "left",
        className: "custom-toast",
        close: true, // Enable close button
        escapeMarkup: false // Allows HTML in the text
    }).showToast();
}

// Function to validate username without showing toast
function validateUsername(username) {
    if (username.length < 5) {
        return { valid: false, message: 'Username must be at least 5 characters long' };
    }
    if (username.length > 20) {
        return { valid: false, message: 'Username must be no longer than 20 characters' };
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
        return { valid: false, message: 'Username can only contain letters, numbers, hyphens, and underscores' };
    }
    if (!/[a-zA-Z]/.test(username)) {
        return { valid: false, message: 'Username must include at least one letter' };
    }
    if (/^\d+$/.test(username)) {
        return { valid: false, message: 'Username cannot consist of only numbers' };
    }
    return { valid: true, message: '' };
}

// Function to validate password without showing toast
function validatePassword(password) {
    if (password.length < 8) {
        return { valid: false, message: 'Password must be at least 8 characters long' };
    }
    if (!/[A-Z]/.test(password)) {
        return { valid: false, message: 'Password must include at least one uppercase letter' };
    }
    if (!/[a-z]/.test(password)) {
        return { valid: false, message: 'Password must include at least one lowercase letter' };
    }
    if (!/[0-9]/.test(password)) {
        return { valid: false, message: 'Password must include at least one number' };
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return { valid: false, message: 'Password must include at least one special character' };
    }
    return { valid: true, message: '' };
}

// Function to validate confirm password without showing toast
function validateConfirmPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
        return { valid: false, message: 'Passwords do not match' };
    }
    return { valid: true, message: '' };
}

// Function to check if fields are empty without showing toast
function checkEmptyFields(fields) {
    for (const field of fields) {
        if (!field.value.trim()) {
            return { valid: false, message: 'Please fill out all fields' };
        }
    }
    return { valid: true, message: '' };
}