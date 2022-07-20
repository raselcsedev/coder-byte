// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9T-lx34vP2C5OaCdtbtzb4ZgcTTATo0Y",
  authDomain: "coderaccess-1f6e0.firebaseapp.com",
  projectId: "coderaccess-1f6e0",
  storageBucket: "coderaccess-1f6e0.appspot.com",
  messagingSenderId: "992278939094",
  appId: "1:992278939094:web:5f622b22c17430410f9077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;