
   // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHzlvnDqKH9_FMYVtBz13S8unKsiBaQ0s",
    authDomain: "fir-crud-4235e.firebaseapp.com",
    projectId: "fir-crud-4235e",
    storageBucket: "fir-crud-4235e.appspot.com",
    messagingSenderId: "667735568219",
    appId: "1:667735568219:web:81ef687a2b64db320cb47e",
    measurementId: "G-88W0NTNXC9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveTask = (title, description) => 
    addDoc(collection(db,'tasks'),{title,description});
    