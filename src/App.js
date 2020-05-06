import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Feed from './components/Feed';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './auth/PrivateRoute';
import Profile from './components/Profile';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <PrivateRoute exact path='/' component={Feed} setLoggedIn={setLoggedIn}/>
      <Route path='/login' component={Login} setLoggedIn={setLoggedIn}/>
      <Route path='/register' component={Register} setLoggedIn={setLoggedIn}/>
      <Route path='/profile' component={Profile} />
      {/* <Route path='/dashboard' component={Feed} />  */}
      <Footer />
    </div>
  );
}

export default App;
