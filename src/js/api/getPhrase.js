const apiUrl = 'https://api.adviceslip.com/advice';
const getPhrase = async() => await fetch(apiUrl)
  .then((data) => data.json())
  .then((data) => data.slip.advice)
  .catch((e) => console.error(e));

export default getPhrase;
