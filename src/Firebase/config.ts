// src/firebase/config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4aUTwCxh3iBqgbGySPWvhrvb-JOhkWIc",
    authDomain: "facebookclone-704e1.firebaseapp.com",
    projectId: "facebookclone-704e1",
    storageBucket: "facebookclone-704e1.appspot.com",
    messagingSenderId: "1098104480489",
    appId: "1:1098104480489:web:8387b88371e5f452168678",
    measurementId: "G-800P2F11GC"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
