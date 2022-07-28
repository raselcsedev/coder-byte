// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB1oHTyLshVtlfxXVg7hu9mE76sNRcO0E",
  authDomain: "coder-access.firebaseapp.com",
  projectId: "coder-access",
  storageBucket: "coder-access.appspot.com",
  messagingSenderId: "178241023891",
  appId: "1:178241023891:web:bf9a01a94136ecbecf4266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;