  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAWe1_Iyk0PZxYSua2S5uFeqXV1ieySFQU",
        authDomain: "react-instagram-clone07.firebaseapp.com",
        databaseURL: "https://react-instagram-clone07.firebaseio.com",
        projectId: "react-instagram-clone07",
        storageBucket: "react-instagram-clone07.appspot.com",
        messagingSenderId: "701140963151",
        appId: "1:701140963151:web:68807dccd228dbd0fb7f3a",
        measurementId: "G-CDXTV34BTN"
    });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

  export  { db , auth, storage};