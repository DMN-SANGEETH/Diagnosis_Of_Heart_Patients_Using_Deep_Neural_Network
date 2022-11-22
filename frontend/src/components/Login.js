import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import auth from './firebase/firebase';
import "../styles/login.css";

const Login = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');

    const userSignin = ()=>{
        signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        // // ...
        // console.log(user);
        console.log('User sign ind');
        })
        .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        });
}
    // console.log(username);
    // console.log(password);
    return (
    <div>
        <div>       
        {/* <BlogImage>
            <img src='./img/images02.jpeg' alt='blogimage' />
        </BlogImage> */}
        <div className='back'>
        <div className="container">
                <div className="screen">
                    <div className="screen__content">
                    
                        <div className="login">
                        <img src='./img/download1.png' alt= "logimag"/>
                        <input className="login__input" type='text' placeholder='username' value={username} 
                onChange={e=>{
                    e.preventDefault();
                    setUsername(e.target.value);
                }}/> 
                <br/>
                <input className="login__input" type='password' placeholder="password" value={password}
                onChange={e=>{
                    e.preventDefault();
                    setPassword(e.target.value);
                }}/>
                <br/>
                <button onClick={userSignin} className="button login__submit"
                ><div style={{align:'center',margin:'auto'}}>Log in</div></button>
                <br/>
                < a href='/' className="button__text" style={{textDecoration:'none',color:'ButtonHighlight'}}>forget password</a>

                        </div>

                    </div>
                   
                </div>

            </div>

        </div>
            
        </div>       
    </div>
);
}
export default Login;

