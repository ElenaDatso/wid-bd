import { auth } from './firebase/initAuthApp.js';
import signIn from './session/signin.js';
import createUser from './user/create_user.js';
import signOutFunc from './session/signout.js';
import getAuthState from './session/checkAuth.js';
import postUserData from './user/postUserData.js';
import getUserData from './user/getUserData.js';
import daysUntilBirthday from './utils/calcDays.js';
import getPhrase from './api/getPhrase.js';
import verifyLocation from './session/varifyLocation.js';

export {
  auth,
  signIn,
  createUser,
  signOutFunc,
  getAuthState,
  postUserData,
  getUserData,
  daysUntilBirthday,
  getPhrase,
  verifyLocation
};
