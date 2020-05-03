import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "../components/Login";
import axios from "axios";


const PrivateRoute = (component) => {
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

  const authd = isAuthd()

  console.log(authd)
  return true ? <Route component={component.component} /> : <Redirect to="/login" />
};

export default PrivateRoute
