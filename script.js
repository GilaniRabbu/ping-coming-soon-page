document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!validateEmail(emailInput.value)) {
            errorMessage.textContent = 'Please provide a valid email address';
            return;
        }
        errorMessage.textContent = '';
        alert('Form submitted successfully!');
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
    }
});