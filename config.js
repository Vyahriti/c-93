import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDePM6gvhfKV4lJv5WIwmXOruHYmZ2eqJE",
    authDomain: "fitness101-762a8.firebaseapp.com",
    projectId: "fitness101-762a8",
    storageBucket: "fitness101-762a8.appspot.com",
    messagingSenderId: "177828717769",
    appId: "1:177828717769:web:150676a32ce83e01649918"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
 }
 else{
   firebase.app()
 }
 export default firebase.firestore()