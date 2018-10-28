 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCMo58qEX7MaF-Lvc8cTodEp-MfdW4CVOE",
    authDomain: "tutorstock-e7eff.firebaseapp.com",
    databaseURL: "https://tutorstock-e7eff.firebaseio.com",
    projectId: "tutorstock-e7eff",
    storageBucket: "tutorstock-e7eff.appspot.com",
    messagingSenderId: "1780872220"
  };
  
  
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  export default firebase;