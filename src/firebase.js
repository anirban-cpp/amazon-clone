import  firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAqe8IxMO_3eXt_xC1YggQ9yvIdLehmPpA",
    authDomain: "clone-b3318.firebaseapp.com",
    projectId: "clone-b3318",
    storageBucket: "clone-b3318.appspot.com",
    messagingSenderId: "781884397101",
    appId: "1:781884397101:web:9771a736327cbdaa340aa4",
    measurementId: "G-97CHMNE827"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };