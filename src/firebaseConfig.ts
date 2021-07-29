import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCt2rtZ4PkG9eeoeYtG44zQ0gMuIMYxK4U",
  authDomain: "marvin-health.firebaseapp.com",
  databaseURL: "https://marvin-health-default-rtdb.firebaseio.com",
  projectId: "marvin-health",
  storageBucket: "marvin-health.appspot.com",
  messagingSenderId: "1065937255065",
  appId: "1:1065937255065:web:f9f2f14bd615395ac1d608",
  measurementId: "G-69VY4HBKVS"
};

  firebase.initializeApp(firebaseConfig);
export default firebaseConfig;
  // const database = firebaseApp.firestore();

// export default database;


