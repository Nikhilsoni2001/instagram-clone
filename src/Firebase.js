import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBpqUCR3ZJJJlAYa3r9PiesqdiWkyG6gSk",
    authDomain: "instagram-clone-93e59.firebaseapp.com",
    databaseURL: "https://instagram-clone-93e59.firebaseio.com",
    projectId: "instagram-clone-93e59",
    storageBucket: "instagram-clone-93e59.appspot.com",
    messagingSenderId: "401567191203",
    appId: "1:401567191203:web:8a4b9ca52a222eca5a6f16",
    measurementId: "G-YPKBDVYW9N"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {
    db,
    auth,
    storage
};