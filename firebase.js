// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBin1oy78TD-L0v2e1oebi7qTlX9VMrYSw",
  authDomain: "pantry-tracker-830c0.firebaseapp.com",
  projectId: "pantry-tracker-830c0",
  storageBucket: "pantry-tracker-830c0.appspot.com",
  messagingSenderId: "862547405099",
  appId: "1:862547405099:web:2e9d00575ccde6ce26fd6e",
  measurementId: "G-GPTTWDK9EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
// as we have gotten the firestore at once and exporting it so we just need to use that one
export{firestore} // this store
