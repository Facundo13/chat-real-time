import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCFvsoXLJlYPtbMcs1WvASyUW7No_HfZ_w",
    authDomain: "chat-real-time-94311.firebaseapp.com",
    projectId: "chat-real-time-94311",
    storageBucket: "chat-real-time-94311.appspot.com",
    messagingSenderId: "949964898401",
    appId: "1:949964898401:web:09fd394ab6aa534f64aa20"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}