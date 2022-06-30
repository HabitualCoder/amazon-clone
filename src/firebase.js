import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBKjeqvJHxBRP1EewFSsVAO901QsmGBPz0",
    authDomain: "clone-369f7.firebaseapp.com",
    projectId: "clone-369f7",
    storageBucket: "clone-369f7.appspot.com",
    messagingSenderId: "367550426405",
    appId: "1:367550426405:web:3a58f6668f2bf616dffecc",
    measurementId: "G-WCXTCZKB9G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };