import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // apiKey: "AIzaSyDDcwCjK-GRjOSUd8B3w5N2YpKVJ57pHKA",
  // authDomain: "plan-app-a6065.firebaseapp.com",
  // databaseURL: "https://plan-app-a6065.firebaseio.com",
  // projectId: "plan-app-a6065",
  // storageBucket: "plan-app-a6065.appspot.com",
  // messagingSenderId: "764700026508",
  // appId: "1:764700026508:web:7bd2913fffa1c9fd877da9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
