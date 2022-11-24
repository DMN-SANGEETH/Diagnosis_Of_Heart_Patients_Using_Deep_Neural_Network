import { useRef, useState } from "react";
import { async } from "@firebase/util";
import { signup } from "./firebase/firebase";

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
    <div id="main">

      <div id="fields">
        <input  placeholder="First Name"/><br/>
        <input ref={ emailRef } placeholder="Email"/><br/>
        <input ref={ passwordRef } type="password" placeholder="Passworad"/>
      </div>

      <button disabled={loading} onClick={handlesignup}>signup</button>

    </div>
  );
} 