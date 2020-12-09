// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBNJIg2fa26GI_9Aeg77PZMAu3qOMpHjXc",
    authDomain: "tiktok-clone-bbb50.firebaseapp.com",
    databaseURL: "https://tiktok-clone-bbb50.firebaseio.com",
    projectId: "tiktok-clone-bbb50",
    storageBucket: "tiktok-clone-bbb50.appspot.com",
    messagingSenderId: "61483537240",
    appId: "1:61483537240:web:9fb89d11fdc5bbe3268b2d",
    measurementId: "G-Z13MPSH5HP"
  };
  const firebaseApp =
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;