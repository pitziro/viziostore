import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/*
const app = firebase.initializeApp ({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId:  process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APIID,
    measurementId:  process.env.REACT_APP_MEASUREMENTID
})

export const getFirebase = () => app

export const getFireStore = () => firebase.firestore(app)

*/

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId:  process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APIID,
    measurementId:  process.env.REACT_APP_MEASUREMENTID
}


const app = initializeApp(firebaseConfig);
export const getDataBase  = getFirestore(app);