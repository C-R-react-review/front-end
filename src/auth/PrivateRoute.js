import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthd } from '../helpers/isAuthd'


const PrivateRoute = ({ component: Component, setLoggedIn, loggedIn }) => {
  useEffect(() => {
    async function getStatus() {
      console.log(await isAuthd())
      // const status = await isAuthd()
      // console.log(status)
      // setLoggedIn(status)
    }
    getStatus()
  },[]);
  return <Route render={(props) => (isAuthd() ?  <Component {...props} setLoggedIn={setLoggedIn}/> : <Redirect to="/login" />)} /> 
};

export default PrivateRoute



















