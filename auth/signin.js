import app from './init.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';

const emailInp = document.getElementById('email-login');
const passwordInp = document.getElementById('password-login');

const signIn = () => {
  let userData = null;
  signInWithEmailAndPassword(app.auth, emailInp.value, passwordInp.value)
    .then((userCredential) => {
      console.log('userCredential', userCredential);
      const user = userCredential.user;
      window.location.href = './signedin.html';
      console.log('Logged in successfully!', user);
      userData = user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      userData = null;
    });
    return userData;
}

export default signIn;