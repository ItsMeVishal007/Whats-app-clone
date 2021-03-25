// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
 const firebaseConfig = {
    apiKey: "AIzaSyANqRauWr39VPFlmyg0WCLDtItNtKye2Mc",
    authDomain: "whatsapp-clone-d1756.firebaseapp.com",
    projectId: "whatsapp-clone-d1756",
    storageBucket: "whatsapp-clone-d1756.appspot.com",
    messagingSenderId: "982209994643",
    appId: "1:982209994643:web:84dc0d1d4951b969909266",
    measurementId: "G-N320EX1X0D"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;