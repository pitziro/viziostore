import firebase from 'firebase'

const app = firebase.initializeApp ({
    apiKey: "AIzaSyB4mGAvdbg9h1lyw9rBNUnTLU6NV6enS-c",
    authDomain: "viziostore-65623.firebaseapp.com",
    projectId: "viziostore-65623",
    storageBucket: "viziostore-65623.appspot.com",
    messagingSenderId: "66487927863",
    appId: "1:66487927863:web:35aa0059d62e81d61d6bb2",
    measurementId: "G-SEFDY2EZ76"
})

export const getFirebase = () => app

export const getFireStore = () => firebase.firestore(app)

