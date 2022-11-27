import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "./components/firebase/firebase";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footbar from "./components/Footbar";
import Home from "./components/Home";
// import SignUp_Docter from "./components/SignUp_Docter";
import SignUp_Patients from "./components/SignUp_Patients";
import Patientsreg from "./components/Patientsreg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "./components/Logout";
function App() {
  // const [isuser, setIsuser] = useState(false);

  // useEffect(() => {
  //   const userCheck = () => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // User is signed in, see docs for a list of available properties
  //         // https://firebase.google.com/docs/reference/js/firebase.User
  //         const uid = user.uid;
  //         // ...
  //         console.log(uid);
  //         setIsuser(true);
  //       } else {
  //         // User is signed out
  //         // ...
  //         setIsuser(false);
  //       }
  //     });
  //   };
    // userCheck();
  //   return () => {
  //     userCheck();
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Patientsreg />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup-patient" element={<SignUp_Patients />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
