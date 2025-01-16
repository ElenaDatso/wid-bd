import { getPhrase, daysUntilBirthday } from '../index.js';

const greet = document.getElementById('greating');
const daysUntil = document.getElementById('daysUntill');
const contentContainer = document.getElementById('content');

const getContent = async (userData) => {
  const daysUntilBd = daysUntilBirthday(userData.birth);
  let phrase = '';
  if (!daysUntilBd) {
    phrase = await getPhrase();
  }
  if (greet)
    greet.innerText = daysUntilBd ? 'Hi, ' + userData.username + '!' : '';
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
};

export default getContent;
