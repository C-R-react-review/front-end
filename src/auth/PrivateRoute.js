import React, {useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthd } from '../helpers/isAuthd'

const PrivateRoute = ({ component: Component, setLoggedIn, loggedIn, location, ...rest}) => {
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
 
  // const isAuthed = await isAuthd()
  // console.log(isAuthed)
  return (
    loggedIn ? <Route {...rest} render={props => (<Component {...props} />)} /> : <Redirect to="/login" /> 
  );
};

export default PrivateRoute;



















