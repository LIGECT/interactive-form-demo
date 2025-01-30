const password = document.getElementById('password');
const passwordRepeat = document.getElementById('password-repeat');
const passwordRepeatError = document.getElementById('password-repeat-error');

passwordRepeat.addEventListener('input', () => {
  if (passwordRepeat.value === '') {
    passwordRepeat.setCustomValidity('');
    passwordRepeatError.textContent = '';
  } else if (password.value !== passwordRepeat.value) {
    passwordRepeat.setCustomValidity('Пароли не совпадают');
    passwordRepeat.classList.add('invalid');
    passwordRepeatError.textContent = 'Пароли не совпадают';
  } else {
    passwordRepeat.setCustomValidity('');
    passwordRepeat.classList.remove('invalid');
    passwordRepeatError.textContent = '';
  }
});

document.querySelector('form').addEventListener('submit', (e) => {
  if (password.value !== passwordRepeat.value) {
    e.preventDefault();
    passwordRepeat.reportValidity();
  }
});

function validateName() {
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('name-error');

  if (nameInput.value.trim() === '') {
    nameInput.setCustomValidity('Ну, и где имя?');
    nameError.textContent = 'Ну, и где имя?';
  } else {
    nameInput.setCustomValidity('');
    nameError.textContent = '';
  }
}

function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');

  if (emailInput.value.trim() === '') {
    emailInput.setCustomValidity('Ну, и где имейл?');
    emailError.textContent = 'Ну, и где имейл?';
  } else {
    emailInput.setCustomValidity('');
    emailError.textContent = '';
  }
}