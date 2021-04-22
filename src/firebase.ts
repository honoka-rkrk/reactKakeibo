import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBQx1G88AIWX3D3nIYC07h74yiYhcmQySM',
  authDomain: 'kakeibo-e2226.firebaseapp.com',
  projectId: 'kakeibo-e2226',
  storageBucket: 'kakeibo-e2226.appspot.com',
  messagingSenderId: '115197633824',
  appId: '1:115197633824:web:aadcec433a00df5895e345',
  measurementId: 'G-NNV50P5FPG'
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();
