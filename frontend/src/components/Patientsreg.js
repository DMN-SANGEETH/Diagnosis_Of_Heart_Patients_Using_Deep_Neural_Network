import { useRef, useState } from "react";
import { async } from "@firebase/util";
import { signup } from "./firebase/firebase";
import '../styles/Pationentreg.css';

export default function App(){
  const [ loading, setLoading ] = useState(false);
  const emailRef =useRef();
  const passwordRef =useRef();

  async function handlesignup(){
    setLoading(true);
    try{
    await signup(emailRef.current.value ,passwordRef.current.value);
    }catch{
      alert("Error");
    }
    setLoading(false);
  }

  return (
    <div className="main" id="main">
      <div className="img">
        <img src='./img/download.png' alt= "logimag" width="100px" />
      </div>

      <div className="fields" id="fields">
        <label>Enter Your Name :</label><br/>
        <input  placeholder="First Name"/><br/><br/>
        <label>Enter Email address :</label><br/>
        <input ref={ emailRef } placeholder="Email"/><br/><br/>
        <label>Enter Passworad :</label><br/>
        <input ref={ passwordRef } type="password" placeholder="Passworad"/><br/><br/>
        <label>Gender :</label>
        <select defaultValue="Select Gender">
            <option defaultValue>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select><br /><br/>

        <button disabled={loading} onClick={handlesignup}>signup</button>
      </div>

      

    </div>
  );
} 