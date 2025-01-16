import { signOut } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import { auth } from './index.js';



const signOutFunc = async () => {
  signOut(auth)
    .then(() => {
      window.location.href = '../index.html';
      return true
    })
    .catch((error) => {
      console.error('Error signing out:', error);
      return false;
    });
}
export default signOutFunc;