import firebase from'firebase';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCjWKMZKQoFkHtVKPRI3pKlnTy3uEqj4_I",
    authDomain: "hotel-management-app-auth.firebaseapp.com",
    projectId: "hotel-management-app-auth",
    storageBucket: "hotel-management-app-auth.appspot.com",
    messagingSenderId: "661744797134",
    appId: "1:661744797134:web:c95ce1d3f439ebc1ec179f",
    measurementId: "G-LNPXQFSD8C"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire