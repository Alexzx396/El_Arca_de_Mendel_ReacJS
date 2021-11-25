import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCjLUcev4NLc4z-9DoOQZbq4BG0zWiteKk",
  authDomain: "proyecto-react-semillas.firebaseapp.com",
  projectId: "proyecto-react-semillas",
  storageBucket: "proyecto-react-semillas.appspot.com",
  messagingSenderId: "1081397938386",
  appId: "1:1081397938386:web:013a7845e2c239be0a450b"
};

// Initialize Firebase
const catalogue = firebase.initializeApp(firebaseConfig);

export function getFirestore(){    
    return firebase.firestore(catalogue)
}