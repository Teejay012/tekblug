// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDb3dZmK9J8vnx6KyID3gJtqYfIPqEsFwQ",
  authDomain: "tekblug.firebaseapp.com",
  projectId: "tekblug",
  storageBucket: "tekblug.appspot.com",
  messagingSenderId: "493438370351",
  appId: "1:493438370351:web:20becf76d7c43ee5dc3cda",
  measurementId: "G-7ZWVBMQ1BH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);