import React from 'react'
import { Nav } from 'react-bootstrap'
import '../styles/Navbar.css'



export default function Navbar() {
    
  return (
    <div>
        
        <Nav className="navf">
            <label className='logo'>Our Family</label>
            <div className='f01'>
                <div className='f02'>
                    <label>Tharindu</label>
                    {/* <img src='../image/fb.jpg'>kkk</img> */}
                </div>
                <div className='f02'>
                    <label>Tharindu Ranaweera</label>
                </div>
                <div className='f02'>
                    <label>Tharindu</label>
                </div>
                <div className='f02'>
                    <label>Tharindu</label>
                </div>
                <div className='f02'>
                    <label>Tharindu</label>
                </div>
            </div>
            
            
        </Nav>
        
    </div>
  )
}
