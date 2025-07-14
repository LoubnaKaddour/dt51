// npm install firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1234567890Abc",
  authDomain: "dt51-app.firebaseapp.com",
  projectId: "dt51-app",
  storageBucket: "dt51-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
