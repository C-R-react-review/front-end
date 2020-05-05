import React from 'react';
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
  return (
    <div className="App">
      <Navbar />
      <PrivateRoute exact path='/' component={Feed} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/profile' component={Profile} />
      {/* <Route path='/dashboard' component={Feed} />  */}
      <Footer />
    </div>
  );
}

export default App;
