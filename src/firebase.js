// Add Firebase SDK
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.16.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>


// npm install -g firebase-tools

// firebase login
// firebase init
// firebase deploy

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZBrryG4_ohbACVFACHL5jt2Ux9KhY7Xs",
    authDomain: "todoapp-72cdb.firebaseapp.com",
    databaseURL: "https://todoapp-72cdb.firebaseio.com",
    projectId: "todoapp-72cdb",
    storageBucket: "todoapp-72cdb.appspot.com",
    messagingSenderId: "1035017121594",
    appId: "1:1035017121594:web:5864ae41ba979948646a03"
});
const db = firebaseApp.firestore();
export default db;