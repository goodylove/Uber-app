import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUaRRme4rqamJk5z0AXP-RfeA04S3xbxo",
  authDomain: "taxi-app-14b5b.firebaseapp.com",
  projectId: "taxi-app-14b5b",
  storageBucket: "taxi-app-14b5b.appspot.com",
  messagingSenderId: "419194249231",
  appId: "1:419194249231:web:dd9b3258ed971c0be6037a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
// export const db = getFirestore(app);
