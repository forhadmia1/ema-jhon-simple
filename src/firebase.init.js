// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7W-jsp18rf4KVqhGiWY3iQqd4QJqBfTE",
    authDomain: "ema-jhon-simple-7d18e.firebaseapp.com",
    projectId: "ema-jhon-simple-7d18e",
    storageBucket: "ema-jhon-simple-7d18e.appspot.com",
    messagingSenderId: "884879205777",
    appId: "1:884879205777:web:d844856adb2aabdb57e630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;