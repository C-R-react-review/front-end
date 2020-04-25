import React from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <Link to='/'><img src={Logo} alt='logo' /></Link>
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default Navbar;