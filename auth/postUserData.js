import {
  ref,
  set,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js';

async function postUserData(user) {
  const dataBase = getDatabase();
  try {
    const result = await set(ref(dataBase, 'users/' + user.uid), {
      username: user.name,
      email: user.email,
      birth: user.birth
    });
    console.log('result', result);
  } catch (e) {
    console.error(e);
  }
}

export default postUserData;
