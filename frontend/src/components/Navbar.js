import React from 'react'
import { Nav } from 'react-bootstrap'
import '../styles/Navbar.css'
import { BrowserRouter as Router,
        Routes,
        Route
         } from 'react-router-dom'
import Login from './Login'
import Patientsreg from './Patientsreg'


export default function Navbar() {
    
  return (
    <div>
        <Router>
        <Nav className="nav">
            <label className='logo'>Heart-Care</label>
            <ul>
                <li><a className='active' href= "/LogIn">Log-In</a></li>
                <li><a className='active' href= "/PatientsReg">Sign-up</a></li>
            </ul>
            
        </Nav>
        <div>
            <Routes>
                <Route path='/LogIn' element={<Login/>}/>
                <Route path='/PatientsReg' element={<Patientsreg/>}/>
            </Routes>
        </div>
        </Router>
    </div>
  )
}
