import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHVjLHrGq6HJAlazztrTj5bHgL1ou9WKs",
  authDomain: "geo-app-d1f15.firebaseapp.com",
  databaseURL: "https://geo-app-d1f15.firebaseio.com",
  projectId: "geo-app-d1f15",
  storageBucket: "geo-app-d1f15.appspot.com",
  messagingSenderId: "238246884526",
  appId: "1:238246884526:web:9a119097b7c7a92c0ca93f",
  measurementId: "G-Y3VNSWM9BS"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()