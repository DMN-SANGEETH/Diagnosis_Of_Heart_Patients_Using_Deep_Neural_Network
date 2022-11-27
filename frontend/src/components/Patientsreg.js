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
      <div id="sub-main" >

        
        <div id="imag">

            <img src="./img/AAAA.png" alt= "profile" className="w3-image profile"  />

        </div>


        <div id="fields" >

          <label id = "lble">User Email</label><br/>
          <input ref={ emailRef } placeholder="Email"  /><br/>
          <label id = "lble">User passward</label><br/>
          <input ref={ passwardRef } type="passward" placeholder="Passwarad" /><br/>
          <label id = "lble">User Name</label><br/>
          <input placeholder="User name" /><br/>
          <label id = "lble">User Contact</label><br/>
          <input placeholder="Contact Number" />
          <br/><br/>
          <button disabled={loading} onClick={handlesignup}  >signup</button>
        </div>


      </div>   
    </div>
  );
}