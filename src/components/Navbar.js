import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

import { isAuthd } from '../helpers/isAuthd';
import Logo from '../images/logo.png';
import './Navbar.css'

function Navbar({ loggedIn }) {

  function logout() {
    localStorage.removeItem('token')
  }

  if (loggedIn) {
    return (
      <div className="Navbar">
        <Link to='/' className="logo-img"><img src={Logo} alt='logo' className="logo-img"/></Link>
        <Dropdown text='Account'>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to='/dashboard' className="login-navbar">Dashboard</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Link onClick={logout} to='/login' className="login-navbar" >Logout</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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