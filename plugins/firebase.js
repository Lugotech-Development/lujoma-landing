import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCxS2cf9aHAqRJvrZPYifak5JvQ4Z7k8P4",
    authDomain: "ws-lujoma.firebaseapp.com",
    databaseURL: "https://ws-lujoma.firebaseio.com",
    projectId: "ws-lujoma",
    storageBucket: "ws-lujoma.appspot.com",
    messagingSenderId: "562502750285",
    appId: "1:562502750285:web:e469b9ef37465035a98c04"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const firestore = firebase.firestore;
export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase;
