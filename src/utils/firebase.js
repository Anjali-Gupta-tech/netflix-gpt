// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJNn5MdYHtQSn3fZN6LgfyOwpZm1_CmvE",
  authDomain: "netflix-gpt-22024.firebaseapp.com",
  projectId: "netflix-gpt-22024",
  storageBucket: "netflix-gpt-22024.firebasestorage.app",
  messagingSenderId: "1032646319876",
  appId: "1:1032646319876:web:ebebd585e8c956fb84fa51",
  measurementId: "G-B8VERKMNK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();