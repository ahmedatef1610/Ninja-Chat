  import firebase from 'firebase/app';
  import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCvOgagg1BhRKt0mKi5ZVAcM1OZLe8hgXw",
    authDomain: "ninja-chat-15219.firebaseapp.com",
    databaseURL: "https://ninja-chat-15219.firebaseio.com",
    projectId: "ninja-chat-15219",
    storageBucket: "",
    messagingSenderId: "1030326329549",
    appId: "1:1030326329549:web:afc72289f557499d"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //firebaseApp.firestore().settings({timestampsInSnapshots:true});

  export default firebaseApp.firestore();