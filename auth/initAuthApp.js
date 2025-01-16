import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';


const firebaseConfig = {
  apiKey: 'AIzaSyAy12gZWIAZT4-ox-uJxms3N_lW95qFXCg',
  authDomain: 'wit-bd.firebaseapp.com',
  databaseURL: 'https://wit-bd-default-rtdb.firebaseio.com',
  projectId: 'wit-bd',
  storageBucket: 'wit-bd.firebasestorage.app',
  messagingSenderId: '705310372906',
  appId: '1:705310372906:web:c561da6d410cfbbe2a3f53',
};

export const firebaseApp = await initializeApp(firebaseConfig);
export const auth = await getAuth(firebaseApp);

