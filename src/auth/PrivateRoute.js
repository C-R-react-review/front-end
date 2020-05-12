import React, {useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthd } from '../helpers/isAuthd'


const PrivateRoute = ({ component: Component, setLoggedIn, loggedIn, ...rest }) => {
  useEffect(() => {
    isAuthd()
    .then(res => {
      console.log(res)
      setLoggedIn(res)
    })
    .catch(err => {
      console.log(err)
      setLoggedIn(err)
    })
  }, [setLoggedIn])
  console.log(loggedIn)
  return (
    <Route {...rest} render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;



















