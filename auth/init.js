import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import authFuncs from './index.js';
const { signIn, signOutFunc, createUser } = authFuncs;

const firebaseConfig = {
  apiKey: 'AIzaSyAy12gZWIAZT4-ox-uJxms3N_lW95qFXCg',
  authDomain: 'wit-bd.firebaseapp.com',
  projectId: 'wit-bd',
  storageBucket: 'wit-bd.firebasestorage.app',
  messagingSenderId: '705310372906',
  appId: '1:705310372906:web:c561da6d410cfbbe2a3f53',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const logOutBtn = document.getElementById('logout-btn');

let ifLoggedIn = null;
onAuthStateChanged(auth, (user) => {
  ifLoggedIn = user;
  console.log('ifLoggedIn', user);
});

const onButtonAction = async (condition, cb) => {
  if (condition) {
    const result = await cb();
    if (result) {
      ifLoggedIn = !condition;
    }
  } else {
    console.log('logged in = ', ifLoggedIn);
  }
};

if (
  window.location.pathname.endsWith('index.html') ||
  window.location.pathname === '/'
) {
  const regBtn = document.getElementById('reg-subm');
  const loginBtn = document.getElementById('login-subm');

  if (regBtn) {
    regBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      await onButtonAction(!ifLoggedIn || ifLoggedIn, createUser);
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      await onButtonAction(!ifLoggedIn, signIn);
    });
  }
} else {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is signed in:', user.email);
      const p = document.getElementById('greating');
      p.innerText = `Hello, ${user.email}`;
    } else {
      console.log('No user is signed in.');
    }
  });
}

logOutBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  await onButtonAction(ifLoggedIn, signOutFunc);
});

export default { firebaseApp, auth };
