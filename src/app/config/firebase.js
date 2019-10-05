import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAmX95qAs40WPtk3NYmH_8XHt_VvDLABeo",
  authDomain: "reventdemo-4a253.firebaseapp.com",
  databaseURL: "https://reventdemo-4a253.firebaseio.com",
  projectId: "reventdemo-4a253",
  storageBucket: "",
  messagingSenderId: "955383280363",
  appId: "1:955383280363:web:1544a350098c027c2544ae"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
