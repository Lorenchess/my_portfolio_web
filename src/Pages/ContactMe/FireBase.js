// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyDQbh3kq8WGNK9GInx2cCzKUD9dzR1N7rg",
  authDomain: "contact-form-personal-we-555c6.firebaseapp.com",
  projectId: "contact-form-personal-we-555c6",
  storageBucket: "contact-form-personal-we-555c6.appspot.com",
  messagingSenderId: "501001148586",
  appId: "1:501001148586:web:ab6168e05e284b1d7318d3"
});

var dataBase = firebaseApp.firestore();

export {dataBase};