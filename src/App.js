import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Feed from './components/Feed'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Feed} />
      <Route path='/login' component={Login} />
      {/* <Route path='/register' component={Feed} />
      <Route path='/profile' component={Feed} />
      <Route path='/dashboard' component={Feed} /> */}
      <Footer />
    </div>
  );
}

export default App;
