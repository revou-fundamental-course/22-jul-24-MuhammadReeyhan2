function validateForm() {
    // Clear any previous errors
    clearErrors();

    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value.trim();

    if (name === '') {
        showError('nameError', 'Name is required');
        isValid = false;
    }

    if (email === '') {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Invalid email format');
        isValid = false;
    }

    if (interest === '') {
        showError('interestError', 'Please select an option');
        isValid = false;
    }

    return isValid;
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId);
    errorElement.innerText = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.innerText = '');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
