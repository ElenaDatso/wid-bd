import { auth } from "./initAuthApp.js";
import signIn from "./signin.js";
import createUser from './create_user.js';
import signOutFunc from "./signout.js";
import getAuthState from "./routing.js";
import postUserData from "./postUserData.js";
import getUserData from "./getUserData.js";
import daysUntilBirthday from "./calcDays.js"

export {
  auth,
  signIn,
  createUser,
  signOutFunc,
  getAuthState,
  postUserData,
  getUserData,
  daysUntilBirthday,
};

