import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import auth from './firebase/firebase';
import "../styles/login.css";

const SignUp_Docter = () => {
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [inputImage, setInputImage] = useState('');

    const userSignin = ()=>{
        signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
                   console.log(user);
      console.log('User sign ind');
        })
         .catch((error) => {
         const errorCode = error.code;
        const errorMessage = error.message;
         console.log(errorMessage);
         });
 }
    console.log(username);
    console.log(password);
    return (
    <div>
        <div>       
        {/* <BlogImage>
            <img src='./img/images02.jpeg' alt='blogimage' />
        </BlogImage> */}
            <div class="container">
                <div class="screen">
                    <div className="screen__content">
                    
                        <div className="login">
                        {/* <img src='./img/download.png' alt= "logimag"/> */}
                        <input type="text" 
                value={firstName} 
                onChange={e=>{
                e.preventDefault();
                setFirstName(e.target.value);
                }} 
                placeholder="FirstName..." /><br /> 
                <br/>
                <label>LastName :</label> 
                <input type="text" 
                value={lastName} 
                onChange={e=>{
                e.preventDefault();
                setLastName(e.target.value);
                }} 
                placeholder="LastName..." /><br />

                <label>Password :</label> 
                <input type="password" 
                value={password} 
                onChange={e=>{
                e.preventDefault();
                setPassword(e.target.value);
                }} 
                placeholder="Password..." /><br />

                <label>InputImage :</label> 
                <input type="file" 
                value={inputImage} 
                onChange={e=>{
                e.preventDefault();
                setInputImage(e.target.value);
                }} placeholder="Password..." /><br />


                <button onClick={userSignin} class="button login__submit"
                ><div style={{align:'center',margin:'auto'}}>Log in</div></button>
                <br/>
                < a href='/' class="button__text" style={{textDecoration:'none',color:'ButtonHighlight'}}>forget password</a>

                        </div>
                    
                
               
                
                

                    </div>
                   
           </div>

        </div>
        </div>       
    </div>
);
}
export default SignUp_Docter;

