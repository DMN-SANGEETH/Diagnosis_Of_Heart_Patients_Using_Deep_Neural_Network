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


        <div id="fields" >

          <label id = "lble">User Email</label>
          <input ref={ emailRef } placeholder="Email"  className="w3-input w3-text-black"/><br/>
          <label id = "lble">User passward</label>
          <input ref={ passwardRef } type="passward" placeholder="Passwarad" className="w3-input"/><br/>
          <label id = "lble">User Name</label>
          <input placeholder="User name" className="w3-input"/><br/>
          <label id = "lble">User Contact</label>
          <input placeholder="Contact Number" className="w3-input"/>
          <br/>
          <button disabled={loading} onClick={handlesignup} className="w3-button w3-white" >signup</button><hr className="w3-clear"/>

        </div>


      </div>   
    </div>
  );
}