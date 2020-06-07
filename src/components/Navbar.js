import React, { useEffect } from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { isAuthd } from '../helpers/isAuthd';


function Navbar({ loggedIn }) {

  function logout() {
    localStorage.removeItem('token')
  }

  if (loggedIn) {
    return (
      <div className="Navbar">
        <Link to='/' className="logo-img"><img src={Logo} alt='logo' className="logo-img"/></Link>
        <Link onClick={logout} to='/login' className="login-navbar" >Logout</Link>
      </div>
    );
  } else {
    return (
      <div className="Navbar">
        <Link to='/' className="logo-img"><img src={Logo} alt='logo' className="logo-img"/></Link>
        <Link to='/login' className="login-navbar" >Login</Link>
      </div>
    );
  }
}

export default Navbar;