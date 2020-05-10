import React, { useEffect } from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import '../App.css'
import { isAuthd } from '../helpers/isAuthd';


function Navbar({ loggedIn, setLoggedIn }) {
  // useEffect(() => {
  //   setLoggedIn(isAuthd())
  // }, [setLoggedIn])

  async function logout() {
    localStorage.removeItem('token')
  }

  return (
    <div className="Navbar">
      <Link to='/' className="logo-img"><img src={Logo} alt='logo' className="logo-img"/></Link>

      { loggedIn ? <Link onClick={logout} to='/login' className="login-navbar" >Logout</Link> : <Link to='/login' className="login-navbar" >Login</Link>}
    </div>
  );
}

export default Navbar;