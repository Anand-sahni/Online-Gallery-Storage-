import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCY6ITzxXVOHzElO50N8-PlCxLw95yfchk",
    authDomain: "firegram-8ab35.firebaseapp.com",
    databaseURL: "https://firegram-8ab35.firebaseio.com",
    projectId: "firegram-8ab35",
    storageBucket: "firegram-8ab35.appspot.com",
    messagingSenderId: "393694313832",
    appId: "1:393694313832:web:4a007322464c3a8c156add"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export { projectStorage, projectFirestore, timestamp  };
