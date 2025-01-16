import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import { auth } from './index.js';


const emailInp = document.getElementById('email-login');
const passwordInp = document.getElementById('password-login');


const signIn = async () => {
  console.log('signing in')
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
    console.log(errorCode, errorMessage);
  };
};

export default signIn;
