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
    <div className='container'>              
        {/* <BlogImage>
            <img src='./img/images02.jpeg' alt='blogimage' />
        </BlogImage> */}
            <div className="screen__content">
            
                <div className="content_1">
                    <img src='./img/70bm.gif' alt= "logimag"/>
                </div>

                <div className='content_2'>
                    <label>Enter username  :</label><br/>
                    <input className="login__input" type='text' placeholder='username' value={username} 
                    onChange={e=>{
                        e.preventDefault();
                        setUsername(e.target.value);
                    }}/> 
                    <br/><br/>
                    <label>Enter password :</label><br/>
                    <input className="login__input" type='password' placeholder="password" value={password}
                    onChange={e=>{
                        e.preventDefault();
                        setPassword(e.target.value);
                    }}/>
                    <br/><br/>

                    <button onClick={userSignin} className="button login__submit">
                        <div style={{align:'center',margin:'auto'}}>Log in</div>
                    </button>
                    <br/>
                    
                    <a a href='/' className='forgetpw' style={{textDecoration:'none',color:'ButtonHighlight'}}>forget password</a>
                    
                </div>
            
            </div>
                   
    </div>
);
}
export default Login;

