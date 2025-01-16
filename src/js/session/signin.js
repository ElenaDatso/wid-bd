import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import { auth } from '../index.js';

const emailInp = document.getElementById('email-login');
const passwordInp = document.getElementById('password-login');
const errorLine = document.getElementById('login-password-error');
const emailError = document.getElementById('login-email-error');

const signIn = async () => {
  errorLine.innerText = '';
  emailError.innerText = '';
  try {
    if (!emailInp.value || !passwordInp.value) {
      throw new Error('Email and password fields cannot be empty.');
    }
    await signInWithEmailAndPassword(
      await auth,
      emailInp.value,
      passwordInp.value
    );
    window.location.href = './pages/signedin.html';
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
    if (errorCode === 'auth/invalid-credential') {
      errorLine.innerText = 'Wrong email or password. Try again.';
    } else if (errorCode === 'auth/invalid-email') {
      emailError.innerText = 'Wrong email.';
    } else {
      errorLine.innerText('Something went wrong. Try again.');
    }
  }
};
export default signIn;
