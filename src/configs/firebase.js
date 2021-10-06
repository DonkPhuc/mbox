import * as firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCYkLQElXNwaBAOOJXvwQ3BZhhdDvbo_-E",
    authDomain: "mbox-auth.firebaseapp.com",
    projectId: "mbox-auth",
    storageBucket: "mbox-auth.appspot.com",
    messagingSenderId: "76185570185",
    appId: "1:76185570185:web:ec3dc467b148afc8456f58"
};

firebase.initializeApp(firebaseConfig)

