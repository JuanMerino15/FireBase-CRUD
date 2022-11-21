// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore, 
  collection, 
  addDoc, 
  getDocs,  
  deleteDoc,
  onSnapshot,
  doc,
  getDoc,
  updateDoc 
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
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
    addDoc(collection(db,"tasks"),{title,description});

export const getTasks = () => getDocs(collection(db,'tasks')) 

export const onGetTasks =  (callback) => onSnapshot(collection(db,'tasks'),callback)

export const deleteTasks = id => deleteDoc(doc(db,'tasks',id))

export const getTask = id => getDoc(doc(db,'tasks',id)) 

export const updateTask = (id,newFields) => updateDoc(doc(db,'tasks',id),newFields) 
