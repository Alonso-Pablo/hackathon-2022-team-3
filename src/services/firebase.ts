// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCciQ7bgnphm9X0KMpSjTDBDN3GOegbCtA',
  authDomain: 'hackaton-group3-fcd62.firebaseapp.com',
  projectId: 'hackaton-group3-fcd62',
  storageBucket: 'hackaton-group3-fcd62.appspot.com',
  messagingSenderId: '781785767515',
  appId: '1:781785767515:web:6fa74be5b4eb7977d7e97e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
