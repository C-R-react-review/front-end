import React from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {
  return (
    <div className="Navbar">
      <Link to='/' className="logo-img"><img src={Logo} alt='logo' className="logo-img"/></Link>
      <Link to='/login' className="login-navbar">Login</Link>
    </div>
  );
}

export default Navbar;