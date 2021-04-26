  // import * as firebase from 'firebase'
  import firebase from 'firebase/app'
  require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBU3_TUH-jcI2RWgX-ywVYnTr1t_nA8rcE",
    authDomain: "santa-s-book-app.firebaseapp.com",
    projectId: "santa-s-book-app",
    storageBucket: "santa-s-book-app.appspot.com",
    messagingSenderId: "779858547870",
    appId: "1:779858547870:web:186f61dd20100c6b0b978f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
