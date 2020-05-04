import React from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";


const PrivateRoute = ({component: Component, ...rest}) => {
  function isAuthd() {
    const token = window.localStorage.getItem("token");
    axios
      .post("https://sample-backend-c-r.herokuapp.com/api/auth/authenticate", { token })
      .then((res) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  }
  console.log(isAuthd())
  return <Route {...rest} render={(props) => (isAuthd() ?  <Component {...props} /> : <Redirect to="/login" />)} /> 
};

export default PrivateRoute



















