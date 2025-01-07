import app from './init.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';


const signOutFunc = () => {
  signOut(app.auth)
    .then(() => {
      console.log('User loged out successfully');
      window.location.href = './index.html';
      return true
    })
    .catch((error) => {
      console.error('Error signing out:', error);
      return false;
    });
}
export default signOutFunc;