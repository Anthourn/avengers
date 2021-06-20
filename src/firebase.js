import firebase from 'firebase'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDHkWHjoefOnfZzs5mNscaIJxFw1ON0CAU",
  authDomain: "avengers-local.firebaseapp.com",
  projectId: "avengers-local",
  storageBucket: "avengers-local.appspot.com",
  messagingSenderId: "561612713549",
  appId: "1:561612713549:web:5756efe518579ce1dfb604"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
