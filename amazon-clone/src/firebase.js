// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBBXcQpKoWoZIv754haHj5ZD55x9zVlqQ",
  authDomain: "challenge-8e2f1.firebaseapp.com",
  databaseURL: "https://challenge-8e2f1.firebaseio.com",
  projectId: "challenge-8e2f1",
  storageBucket: "challenge-8e2f1.appspot.com",
  messagingSenderId: "821421095192",
  appId: "1:821421095192:web:2141e3cb01c3f176d9066d",
  measurementId: "G-5HMG5LT4KR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
