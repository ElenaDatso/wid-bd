import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import authFuncs from './index.js';
import { firebaseConfig } from './firebaseConfig.js';

const { signIn, signOutFunc, createUser } = authFuncs;

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

let ifLoggedIn = null;

onAuthStateChanged(auth, (user) => {
  ifLoggedIn = user;
  console.log('ifLoggedIn', user);
});

const onButtonAction = async (condition, cb) => {
  if (condition) {
    try {
      cb();
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log('logged in = ', ifLoggedIn, 'action not permited');
  }
};

if (
  window.location.pathname.endsWith('index.html') ||
  window.location.pathname === '/'
) {
  const regBtn = document.getElementById('reg-subm');
  const loginBtn = document.getElementById('login-subm');

  if (regBtn) {
    regBtn.addEventListener('click', (e) => {
      e.preventDefault();
      onButtonAction(!ifLoggedIn || ifLoggedIn, createUser);
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      onButtonAction(!ifLoggedIn, signIn);
    });
  }
} else {
  const logOutBtn = document.getElementById('logout-btn');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is signed in:', user.email);
      const p = document.getElementById('greating');
      p.innerText = `Hello, ${user.email}`;
    } else {
      console.log('No user is signed in.');
    }
  });
    if (logOutBtn) {
      logOutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        onButtonAction(ifLoggedIn, signOutFunc);
      });
    }
}

export default { firebaseApp, auth };
