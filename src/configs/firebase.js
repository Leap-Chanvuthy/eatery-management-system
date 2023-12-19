import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgWXBKWClKn4jxgcfg2tY-xCKclClGvZU",
  authDomain: "ecomerce-app-e78f2.firebaseapp.com",
  projectId: "ecomerce-app-e78f2",
  storageBucket: "ecomerce-app-e78f2.appspot.com",
  messagingSenderId: "125021957447",
  appId: "1:125021957447:web:e28bef47526de6f7b3f062",
  measurementId: "G-GV654N85MW"
};

const app = initializeApp(firebaseConfig);


export const database = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const Google = new GoogleAuthProvider();
