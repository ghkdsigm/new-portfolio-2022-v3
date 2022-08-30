import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDK3qWR8ks6qr2wlmvavQIIj3ariWKV0g0",
    authDomain: "my-portfolio-5c7a1.firebaseapp.com",
    projectId: "my-portfolio-5c7a1",
    storageBucket: "my-portfolio-5c7a1.appspot.com",
    messagingSenderId: "1073723100435",
    appId: "1:1073723100435:web:7e097f88772408d31cdee6"
  };

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export const USER_COLEECTION = db.collection('users')
export const BOARD_COLEECTION = db.collection('board')
export const COMMENT_COLEECTION = db.collection('comment')