import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDFLxDpZDTfi-69PxgHrxcYzfR2jxMvcj0",
    authDomain: "book-santa-ebced.firebaseapp.com",
    databaseURL: "https://book-santa-ebced.firebaseio.com",
    projectId: "book-santa-ebced",
    storageBucket: "book-santa-ebced.appspot.com",
    messagingSenderId: "1042501784038",
    appId: "1:1042501784038:web:964204b17c84ae78548627"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();