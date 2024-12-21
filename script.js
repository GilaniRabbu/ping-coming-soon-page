const form = document.querySelector('form');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!email.value || !email.value.includes('@')) {
    email.style.borderColor = 'var(--secondary-red)';
    errorMessage.textContent = 'Please provide a valid email address';
  } else {
    email.style.borderColor = 'var(--secondary-blue)';
    errorMessage.textContent = '';
  }
});
