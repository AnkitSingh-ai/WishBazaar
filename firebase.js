import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBIIKthoJiUIOl7GlzaiJeszSetGzMczjI',
  authDomain: 'wishbazzar.firebaseapp.com',
  projectId: 'wishbazzar-15892',
  storageBucket: 'wishbazzar.appspot.com',
  messagingSenderId: '287455605777',
  appId: '1:287455605777:web:0c3f4a2b5d8e7c9f1a2b3d',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);