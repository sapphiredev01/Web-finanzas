import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAoEj4a6LKk8ZA9oI7-PkTaM3d6U1ZcY7o",
    authDomain: "finanzas-c9f7d.firebaseapp.com",
    projectId: "finanzas-c9f7d",
    storageBucket: "finanzas-c9f7d.appspot.com",
    messagingSenderId: "883091471124",
    appId: "1:883091471124:web:b314cd2968f28232a86001",
    measurementId: "G-6Q1PVYK8RV"
  };;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };