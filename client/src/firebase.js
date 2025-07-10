import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBQnHJyONpjyw9EBntSS4BUtdw3fQ-ABUA",
  authDomain: "bloggingplatform-ba9b4.firebaseapp.com",
  projectId: "bloggingplatform-ba9b4",
  storageBucket: "bloggingplatform-ba9b4.appspot.com",
  messagingSenderId: "238139633547",
  appId: "1:238139633547:web:2870b3bb86f4c3a984c98e",
  measurementId: "G-EGY79S4F28"
};

export const app = initializeApp(firebaseConfig); // 
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
