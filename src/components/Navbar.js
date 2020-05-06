import React, { useEffect } from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import '../App.css'
import { isAuthd } from '../helpers/isAuthd';


function Navbar({ loggedIn, setLoggedIn }) {
  useEffect(() => {
    setLoggedIn(isAuthd())
  }, [setLoggedIn])

  const logout = () => {
    console.log(loggedIn)
    localStorage.removeItem('token')
    setLoggedIn(false)
  }

  return (
    <div className="Navbar">
      <Link to='/' className="logo-img"><img src={Logo} alt='logo' className="logo-img"/></Link>

      { loggedIn ? <Link to='/login' className="login-navbar" onClick={logout}>Logout</Link> : <Link to='/login' className="login-navbar" >Login</Link>}

    </div>
  );
}

export default Navbar;