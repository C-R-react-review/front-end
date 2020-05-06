import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthd } from '../helpers/isAuthd'


const PrivateRoute = ({component: Component, setLoggedIn, ...rest}) => {
  useEffect(() => {
    setLoggedIn(isAuthd())
  }, [setLoggedIn])
  return <Route {...rest} render={(props) => (isAuthd() ?  <Component {...props} /> : <Redirect to="/login" />)} /> 
};

export default PrivateRoute



















