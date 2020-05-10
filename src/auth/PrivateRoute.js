import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthd } from '../helpers/isAuthd'


const PrivateRoute = ({ component: Component, setLoggedIn, loggedIn, ...rest }) => {
  
  return <Route {...rest} render={(props) => (isAuthd() ?  <Component {...props} setLoggedIn={setLoggedIn}/> : <Redirect to="/login" />)} /> 
};

export default PrivateRoute



















