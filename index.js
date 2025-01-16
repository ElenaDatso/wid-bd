import {
  signIn,
  createUser,
  signOutFunc,
  getAuthState,
  getUserData,
  daysUntilBirthday,
  getPhrase,
  verifyLocation
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
const great = document.getElementById('greating');
const daysUntil = document.getElementById('daysUntill');
const contentContainer = document.getElementById('content');

const ifLogged = await getAuthState();

verifyLocation(ifLogged);

const userData = ifLogged
  ? await getUserData(ifLogged.uid)
  : null;

const daysUntilBd = ifLogged && daysUntilBirthday(userData.birth);

let phrase = '';
if (ifLogged && userData && !daysUntilBd) {
  phrase = await getPhrase();
};

mainContainer?.classList.remove('d-none');
spinContainer?.classList.add('d-none');


if (great) great.innerText = daysUntilBd ? 'Hi, ' + userData.username + '!' : '';
if (daysUntil) {
  daysUntil.innerText = daysUntilBd
    ? 'It is ' +
      daysUntilBirthday(userData.birth) +
      ' days left until your birthday!'
    : 'Happy birthday, ' + userData.username + '!';

  if (!daysUntilBd) {
    const image = document.createElement('img');
    image.src = '../src/images/wiseman.png';
    const imgCls = ['w-100'];
    image.classList.add(...imgCls);
    image.style['maxWidth'] = '300px';

    const phraseBlock = document.createElement('p');
    phraseBlock.innerText = phrase;
    const phraseCls = [
      'text-black',
      'bg-white',
      'position-sm-absolute',
      'end-0',
      'rounded-3',
      'p-2',
    ];
    phraseBlock.style['maxWidth'] = '600px';
    phraseBlock.classList.add(...phraseCls);

    contentContainer.append(phraseBlock);
    contentContainer.append(image);
  }
}
const toggleClasses = () => {
  loginForm.classList.toggle('d-none');
  regFrom.classList.toggle('d-none');
  loginBtn.classList.toggle('d-none');
  regBtn.classList.toggle('d-none');
};
toLogin?.addEventListener('click', () => {
  toggleClasses();
});

toReg?.addEventListener('click', () => {
  toggleClasses();
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
