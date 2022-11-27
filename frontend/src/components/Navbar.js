import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import '../styles/Navbar.css'
import { jwtVerify } from 'jose';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export default function Navbar() {
    const [auth,setAuth] = useState(false)
    const [email,setemail] = useState(null)
    const verify = async(tkn)=>{
        try {
         const {payload} = await jwtVerify(tkn,new TextEncoder().encode('Hello-World'))
         console.log(payload);
         setAuth(true)
        setemail(payload.email)

        } catch (error) {
         console.log({error:error.message});
        }
     }
    
     useEffect(()=>{
         const jwt = Cookies.get('jwt')
         verify(jwt)
     },[])
    
  return (
    <div>
        <Nav className="nav">
            <label className='logo'>Heart-Care</label>
            <ul>
                {auth && <li><a className='active' href= "#">{email}</a></li>}
                {!auth && <li><a className='active' href= "/LogIn">Log-In</a></li>}
                {auth && <li><a className='active' href= "/Logout">Log-Out</a></li>}
                
                <li><a className='active' href= "/signup">Sign-up</a></li>
            </ul>
            
        </Nav>
    </div>
  )
}
