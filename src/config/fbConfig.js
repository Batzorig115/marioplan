import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDVFaA5Qxjdosqzv8bL1LwI6NzCGr0v_Kw",
    authDomain: "net-marioplan-d0b7f.firebaseapp.com",
    databaseURL: "https://net-marioplan-d0b7f.firebaseio.com",
    projectId: "net-marioplan-d0b7f",
    storageBucket: "net-marioplan-d0b7f.appspot.com",
    messagingSenderId: "199769982546",
    appId: "1:199769982546:web:00ad01cc319b146c23818b",
    measurementId: "G-9LNJGY8C2K"
};

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;