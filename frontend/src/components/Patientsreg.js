import { useRef, useState } from "react";
import { async } from "@firebase/util";
import { signup } from "./firebase/firebase";
import '../styles/Pationentreg.css';
// import Profile from "./img/AAAA.png";

export default function App(){
  const [ loading, setLoading ] = useState(false);
  const emailRef =useRef();
  const passwardRef =useRef();

  async function handlesignup(){
    setLoading(true);
    try{
    await signup(emailRef.current.value ,passwardRef.current.value);
    }catch{
      alert("This Email Alrady Exist");
    }
    setLoading(false);
  }


  return (
    <div  id="main">
      <div id="sub-main" className="w3-padding-64 w3-panel">

        
        <div id="imag">

            <img src="./img/AAAA.png" alt= "profile" className="w3-image profile"  />

       </div>

      <div className="fields" id="fields">
        <label>Enter Your Name :</label><br/>
        <input  placeholder="First Name"/><br/>
        <label>Enter Email address :</label><br/>
        <input ref={ emailRef } placeholder="Email"/><br/>
        <label>Enter Passworad :</label><br/>
        <input ref={ passwardRef } type="password" placeholder="Passworad"/><br/>
        <label>Gender :</label>
        <select defaultValue="Select Gender">
            <option defaultValue>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select><br />

        </div>


      </div>   
    </div>
  );
}