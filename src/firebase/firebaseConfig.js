import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth";


 const firebaseConfig = {
    apiKey: "AIzaSyALq6BtexU8dvQSsf4p-E52N1DhHevSM-Y",
    authDomain: "app-heroes-2b8c0.firebaseapp.com",
    projectId: "app-heroes-2b8c0",
    storageBucket: "app-heroes-2b8c0.appspot.com",
    messagingSenderId: "3370311291",
    appId: "1:3370311291:web:618b5e0dcda14aff670cde",
    measurementId: "G-E6SHP4W8QG"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db, 
      googleAuthProvider,
      firebase 
       }