import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-L8vqjzHD_Na1usFufW52migumWMfkKM",
  authDomain: "chuck4ever-7e708.firebaseapp.com",
  projectId: "chuck4ever-7e708",
  storageBucket: "chuck4ever-7e708.appspot.com",
  messagingSenderId: "189746568952",
  appId: "1:189746568952:web:e73748c8f2f25ad2b0a50d"
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const database = firebase.firestore(app).collection("ProductosAdidas");

