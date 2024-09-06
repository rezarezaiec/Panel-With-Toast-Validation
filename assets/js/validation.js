// Function to validate username
function validateUsername(username) {
    if (username.length < 5) {
        return 'Username must be at least 5 characters long';
    }
    if (username.length > 20) {
        return 'Username must be no more than 20 characters long';
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
        return 'Username can only contain letters, numbers, hyphens, and underscores';
    }
    if (!/[a-zA-Z]/.test(username)) {
        return 'Username must contain at least one letter';
    }
    if (/^\d+$/.test(username)) {
        return 'Username cannot consist only of numbers';
    }
    return ''; // No error
}

// Function to validate password
function validatePassword(password) {
    if (password.length < 8) {
        return 'Password must be at least 8 characters long';
    }
    if (!/[A-Z]/.test(password)) {
        return 'Password must contain at least one uppercase letter';
    }
    if (!/[a-z]/.test(password)) {
        return 'Password must contain at least one lowercase letter';
    }
    if (!/[0-9]/.test(password)) {
        return 'Password must contain at least one number';
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return 'Password must contain at least one special character';
    }
    return ''; // No error
}

// Function to validate confirm password
function validateConfirmPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
        return 'Passwords do not match';
    }
    return ''; // No error
}

// Function to check if fields are empty
function checkEmptyFields(fields) {
    for (const field of fields) {
        if (!field.value.trim()) {
            return 'Please fill out all fields';
        }
    }
    return ''; // No empty fields
}
