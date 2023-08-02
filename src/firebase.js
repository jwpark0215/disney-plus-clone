// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtii6iXoXdEKNRdtPaRyhIt04O6oMR_ds",
  authDomain: "disney-clone-c0384.firebaseapp.com",
  projectId: "disney-clone-c0384",
  storageBucket: "disney-clone-c0384.appspot.com",
  messagingSenderId: "170034663686",
  appId: "1:170034663686:web:c13bff41ec8152a3810e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}



