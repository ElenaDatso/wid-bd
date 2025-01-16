import {
  getDatabase,
  ref,
  child,
  get
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js';


const db = ref(getDatabase());
const getUserData = async (uid) => {
  try {
    const snapshot = await get(child(db, `users/${uid}`));
    if (snapshot.exists()) {
      console.log(snapshot.val())
      return snapshot.val();
    } else {
      console.log('no data available');
      return null;
    }
  } catch (e) {
    console.error(e);
  }
}

export default getUserData;
