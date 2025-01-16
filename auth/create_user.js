import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import { auth } from './initAuthApp.js';
import { postUserData } from './index.js';

const emailInp = document.getElementById('email-reg');
const nameInp = document.getElementById('name-reg');
const bdDateInp = document.getElementById('bday-reg');
const passwlInp = document.getElementById('password-reg');

const createUser = async () => {
  try {
    const response = await createUserWithEmailAndPassword(
      await auth,
      emailInp.value,
      passwlInp.value
    );
    await postUserData({...response.user, name: nameInp.value, birth: bdDateInp.value});

    window.location.href = './pages/signedin.html';
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/email-already-in-use') {
      console.log(
        'Error: The email address is already in use by another account.'
      );
    } else if (errorCode === 'auth/invalid-email') {
      console.log('Error: Invalid email address.');
    } else if (errorCode === 'auth/weak-password') {
      console.log('Error: Weak password.');
    } else {
      console.log('Unexpected error:', errorCode, errorMessage);
    }
  }
};

export default createUser;
