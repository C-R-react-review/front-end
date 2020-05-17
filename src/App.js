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
import ProfileForm from './components/ProfileForm';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  
  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <PrivateRoute exact path='/' Component={Feed} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Route path='/feed' component={Feed}/>
      <Route path='/login' render={(props) => <Login {...props} setLoggedIn={setLoggedIn}/>} />
      <Route path='/register' render={(props) => <Register {...props} setLoggedIn={setLoggedIn}/>}/>
      <Route path='/profile' component={Profile} />
      <Route path='/profileform' component={ProfileForm} />
      {/* <Route path='/dashboard' component={Dashboard} />  */}
      <Footer />
    </div>
  );
}

export default App;
