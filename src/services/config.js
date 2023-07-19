import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from "uuid";

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
export const storage = getStorage(app);




export function uploadImg(file) {
  const storage = getStorage();
  const fileId = v4();
  const extension = file.name.split('.').pop();
  const filename = `imgProducts/${fileId}.${extension}`;
  const storageRef = ref(storage, filename);
  
  return uploadBytes(storageRef, file)
    .then(() => getDownloadURL(storageRef))
    .catch((error) => {
      console.error('Error al subir la imagen:', error);
      throw error;
    });
}