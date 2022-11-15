// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyChttGsCdO0bjxbqnksLXYgYx6N8L7dzQY",
  authDomain: "dnn-project-82042.firebaseapp.com",
  projectId: "dnn-project-82042",
  storageBucket: "dnn-project-82042.appspot.com",
  messagingSenderId: "75766107776",
  appId: "1:75766107776:web:8dc0d0ebb013ed2f6b6065",
  measurementId: "G-4SVN96318B"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//const app = !getApp().length? initializeApp(firebaseConfig): getApp(); 
const auth = getAuth(app);

export default auth;