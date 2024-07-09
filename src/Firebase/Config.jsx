import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL-92JCjPyz9RM1lTguSaZkzqRO7Maakg",
  authDomain: "clone-olx-with-react-firebase.firebaseapp.com",
  projectId: "clone-olx-with-react-firebase",
  storageBucket: "clone-olx-with-react-firebase.appspot.com",
  messagingSenderId: "691486764046",
  appId: "1:691486764046:web:50e3d85df3a9c109a0a05f",
  measurementId: "G-32GNDBL95S"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);