import {
  signIn,
  createUser,
  signOutFunc,
  getAuthState,
  getUserData,
  daysUntilBirthday,
  getPhrase,
  verifyLocation,
  toggleClasses,
  getContent,
} from './src/js/index.js';

const mainContainer = document.getElementById('main-container');
const spinContainer = document.getElementById('spin-container');

const toLogin = document.getElementById('redir-to-login');
const toReg = document.getElementById('redir-to-reg');
const loginForm = document.getElementById('login-form');
const regFrom = document.getElementById('reg-form');
const regBtn = document.getElementById('reg-subm');
const loginBtn = document.getElementById('login-subm');
const logOutBtn = document.getElementById('logout-btn');

const ifLogged = await getAuthState();

verifyLocation(ifLogged);

const userData = ifLogged
  ? await getUserData(ifLogged.uid)
  : null;

ifLogged && userData && await getContent(userData);


mainContainer?.classList.remove('d-none');
spinContainer?.classList.add('d-none');

toLogin?.addEventListener('click', () => {
  toggleClasses(loginForm, regFrom, loginBtn, regBtn);
});

toReg?.addEventListener('click', () => {
  toggleClasses(loginForm, regFrom, loginBtn, regBtn);
});

document.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    if (regBtn && !regBtn.className.includes('d-non')) await createUser();
    if (loginBtn && !loginBtn.className.includes('d-none')) await signIn();
  }
});

regBtn && regBtn.addEventListener('click', async () => await createUser());
loginBtn && loginBtn.addEventListener('click', async () => await signIn());
logOutBtn &&
  logOutBtn.addEventListener('click', async () => await signOutFunc());
