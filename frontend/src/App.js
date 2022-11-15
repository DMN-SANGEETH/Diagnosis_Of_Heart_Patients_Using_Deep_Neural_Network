import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "./components/firebase/firebase";
import Login from "./components/Login";
import SignUp_Docter from "./components/SignUp_Docter";
import SignUp_Patients from './components/SignUp_Patients'

function App() {
  const [isuser,setIsuser] = useState(false);


  useEffect (()=>{
    const userCheck = () =>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log(uid);
          setIsuser(true); 
        } else {
          // User is signed out
          // ...
          setIsuser(false);
        }
      });
    };
    userCheck();
    return () => {
      userCheck();
    };
  },[])

  return (
    <div>
      {!isuser&&(<Login />)}
      
      {isuser&&<div><SignUp_Patients/>
        <button onClick={()=>{
          signOut(auth).then(() => {
            // Sign-out successful.
            alert ('User is sign out!'); 
          }).catch ((error) => {
            // An error happened.
          }); 
        }}>Sing out</button>
        </div>}
      
    </div>
  );
}

export default App;
