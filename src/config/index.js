import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCY-Ndh-Or7pNVcqefTFSqL4MhzhldoXeg",
    authDomain: "projetobeyondrodrigo.firebaseapp.com",
    projectId: "projetobeyondrodrigo",
    storageBucket: "projetobeyondrodrigo.appspot.com",
    messagingSenderId: "38471851676",
    appId: "1:38471851676:web:89d9cee1fe76c905a59759",
    measurementId: "G-V2EZ6Y4X1Y"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);