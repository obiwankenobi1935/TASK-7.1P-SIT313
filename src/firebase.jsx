
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGD_MqVYPhj9DvxoYrUWcrOnx05tAj-vs",

  authDomain: "deakin-web-app-3e51f.firebaseapp.com",

  projectId: "deakin-web-app-3e51f",

  storageBucket: "deakin-web-app-3e51f.appspot.com",

  messagingSenderId: "1099134808042",

  appId: "1:1099134808042:web:fa92ca364a867286100c93",

  measurementId: "G-J96M1Y78FE"

  };
  


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;
