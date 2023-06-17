import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "ecommerce-agus.firebaseapp.com",
  projectId: "ecommerce-agus",
  storageBucket: "ecommerce-agus.appspot.com",
  messagingSenderId: "852002545438",
  appId: "1:852002545438:web:266bfc16c98f101210330f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


