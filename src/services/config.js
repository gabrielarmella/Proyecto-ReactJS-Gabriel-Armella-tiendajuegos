import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore" 


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tienda-juegos-ar.firebaseapp.com",
  projectId: "tienda-juegos-ar",
  storageBucket: "tienda-juegos-ar.appspot.com",
  messagingSenderId: "282834506303",
  appId: "1:282834506303:web:de1483a0a4c40a7cf05e8a"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
