// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyB527hyMfhmS-ZuZAC4s7_rnzz4OjQJbIc",
  authDomain: "dnnstore-2dfff.firebaseapp.com",
  databaseURL: "https://dnnstore-2dfff-default-rtdb.firebaseio.com",
  projectId: "dnnstore-2dfff",
  storageBucket: "dnnstore-2dfff.appspot.com",
  messagingSenderId: "63667204007",
  appId: "1:63667204007:web:b03d490eb966a6073d1082",
  measurementId: "G-GTM4H1SW6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//const app = !getApp().length? initializeApp(firebaseConfig): getApp(); 
const auth = getAuth(app);

export default auth;