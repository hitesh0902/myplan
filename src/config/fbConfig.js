import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBe4NYKrMwuR25KJk6izVUtvVISfMWjDTU",
  authDomain: "my-plan-5f6eb.firebaseapp.com",
  databaseURL: "https://my-plan-5f6eb.firebaseio.com",
  projectId: "my-plan-5f6eb",
  storageBucket: "my-plan-5f6eb.appspot.com",
  messagingSenderId: "571916700855",
  appId: "1:571916700855:web:248df531869f477106d132",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true }); // not needed in latest

export default firebase;
