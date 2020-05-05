import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthd } from '../helpers/isAuthd'


const PrivateRoute = ({component: Component, setLoggedIn, ...rest}) => {
  console.log(isAuthd())
  isAuthd() ? setLoggedIn(false) : setLoggedIn(false)
  return <Route {...rest} render={(props) => (isAuthd() ?  <Component {...props} /> : <Redirect to="/login" />)} /> 
};

export default PrivateRoute



















