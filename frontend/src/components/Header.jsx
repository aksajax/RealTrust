import React, { useState } from 'react'
//import { Link, useNavigate } from 'react-router-dom'

import NavbarLogin from '../pages/NavbarLogin'

function Header() {
     
    // const navigate = useNavigate()
    // const handleLogout = () => {
    //     localStorage.removeItem('token')
    //     navigate('/')
    // }

    return (
        <div>
            <NavbarLogin />
    
        
        </div>
        // <div className='border border-b border-gray-400 bg-gray-100 h-12 flex items-center space-x-5'>
        //     <Link to="/" >Home</Link>
        //     <Link to="/login" >Login</Link>
        //     <Link to="/profile" >Profile</Link>
        //     <Link to="/register" >Register</Link>
        //     <button onClick={handleLogout} >Log Out</button>

        // </div>
    )
}

export default Header