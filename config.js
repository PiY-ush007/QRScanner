import * as firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyASvHCxql2terNdM_P2yNoX8i1n-h7Caxo",
    authDomain: "wilyapp-95c2e.firebaseapp.com",
    databaseURL: "https://wilyapp-95c2e.firebaseio.com",
    projectId: "wilyapp-95c2e",
    storageBucket: "wilyapp-95c2e.appspot.com",
    messagingSenderId: "387341384619",
    appId: "1:387341384619:web:eac2739242d798a118f0ee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();