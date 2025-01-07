import app from './init.js';
import {
  createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';

const emailInp = document.getElementById('email-reg');
const passwlInp = document.getElementById('password-reg');
const createUser = () => {
  createUserWithEmailAndPassword(app.auth, emailInp.value, passwlInp.value)
    .then((userCredential) => {
      const user = userCredential.user;
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return false;
    });
}

export default createUser;