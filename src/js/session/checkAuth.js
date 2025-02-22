import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import { auth } from '../index.js';

const getAuthState = async () => {
  try {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
  } catch (e) {
    console.error(e);
    throw 'something went wrong';
  }
};
export default getAuthState;
