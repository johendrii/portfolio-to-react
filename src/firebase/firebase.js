import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD74sLnaExcTLrHY5cujRQqX7vToB2gJx4",
  authDomain: "johendri-portfolio.firebaseapp.com",
  projectId: "johendri-portfolio",
  storageBucket: "johendri-portfolio.appspot.com",
  messagingSenderId: "656863338438",
  appId: "1:656863338438:web:7ac7e34492da59bc61dcc7",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const projectStorage = firebase.storage();
const contactRef = firebase.database().ref().child("contact");
const taskRef = firebase.database().ref().child("taskTracker");
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
const auth = firebase.auth();

export { db, contactRef, timestamp, taskRef, auth, projectStorage };
