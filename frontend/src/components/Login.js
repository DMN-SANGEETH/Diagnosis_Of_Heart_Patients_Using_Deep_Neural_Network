import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import auth from './firebase/firebase';
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
    <LoginConteiner>
        <BackImage>       
        {/* <BlogImage>
            <img src='./img/images02.jpeg' alt='blogimage' />
        </BlogImage> */}
            <LogiDitails>
                <img src='./img/download.png' alt= "logimag"/>
                <Body>
                <input type='text' placeholder='username' value={username} 
                onChange={e=>{
                    e.preventDefault();
                    setUsername(e.target.value);
                }}/>
                <input type='password' placeholder="password" value={password}
                onChange={e=>{
                    e.preventDefault();
                    setPassword(e.target.value);
                }}/>
                < a href='/'>forget password</a>
                <LoginButton onClick={userSignin}
                >Log in</LoginButton>
                </Body>      
        </LogiDitails>
        </BackImage>       
    </LoginConteiner>
);
}
export default Login;

const LoginConteiner = styled.div`
overflow:hidden;
`;

const BackImage = styled.div`
background-image:url('./img/image01.png');
width:100%;
height:100vh;
position:absolute;
padding:0.5%;
display:flex;
align-items:center;
justify-content:center;
background-size: cover;
background-repeat: no-repeat;
z-index:-1;
`;

// const BlogImage = styled.div``;

const LogiDitails = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background:gray;
border-radius: 10px;
`;

const LoginButton = styled.button`
`;
const Body = styled.div`
text-align:center;
padding:0 0 20px 0;

`;