import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import { auth } from './initAuthApp.js';
import { postUserData } from './index.js';

const emailInp = document.getElementById('email-reg');
const nameInp = document.getElementById('name-reg');
const bdDateInp = document.getElementById('bday-reg');
const passwlInp = document.getElementById('password-reg');
const passwError = document.getElementById('reg-password-error');
const emailpasswError = document.getElementById('reg-email-error');
const dateError = document.getElementById('reg-date-error');

const ifDateValid = (bdDate) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return new Date (bdDate) <= now;
}

const createUser = async () => {
  try {
  passwError.innerText = '';
  emailpasswError.innerText = '';
  dateError.innerText = '';
  if (
    !emailInp.value ||
    !nameInp.value ||
    !bdDateInp.value ||
    !passwlInp.value
  ) {
    passwError.innerText = 'All fields are mandory.';
    throw new Error('All fields are mandory.');
  } else if (!ifDateValid(bdDateInp.value)) {
    dateError.innerText = "Birthday can't be in future.";
    throw new Error('Birthday can\'t be in future.')
  }
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      emailInp.value,
      passwlInp.value
    );
    const result = await postUserData({
      ...response.user,
      name: nameInp.value,
      birth: bdDateInp.value,
    });

    if (result) {
      window.location.href = './pages/signedin.html';
    } else {
      console.log('Failed to save user data, not redirecting.');
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/email-already-in-use') {
      console.log(
        error.code,
        'Error: The email address is already in use by another account.'
      );
      emailpasswError.innerText = 'The email address is already in use.';
    } else if (errorCode === 'auth/invalid-email') {
      console.log('Error: Invalid email address.');
      emailpasswError.innerText = 'Invalid email address.';
    } else if (errorCode === 'auth/weak-password') {
      console.log('Error: Weak password.');
      passwError.innerText = 'Password is too weak.';
    } else {
      console.log('Unexpected error:', errorCode, errorMessage);
      passwError.innerText = 'Unexpected error.';
    }
  }
  } catch (e) {
    console.log(e);
  }

};

export default createUser;
