
import {initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js"

import { getAuth  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"
const firebaseConfig = {
  apiKey: "AIzaSyAqFlKQZlPSz-riJZel9vx5t1jllAZ6HgM",
  authDomain: "pruebas-ac05f.firebaseapp.com",
  projectId: "pruebas-ac05f",
  storageBucket: "pruebas-ac05f.appspot.com",
  messagingSenderId: "360065097473",
  appId: "1:360065097473:web:d5bbe923742f847c620500"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


  