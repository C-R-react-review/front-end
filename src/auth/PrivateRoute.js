import React from "react";
import { Route } from 'react-router-dom';
import Login from '../components/Login';
import axios from 'axios'

function isAuthd () {
    const token = window.localStorage.getItem('token');
    axios.post('https://sample-backend-c-r.herokuapp.com/api/auth/authenticate', {token})
    .then(res => {
        console.log(res.message)
       return true  
    })
    .catch(err => {
        console.log(err)
        return false
    })       
}


const PrivateRoute = (component) => {
    console.log(component.component)
    console.log(Login)
   return <Route component = { isAuthd() ? component.component : Login } />
}

export default PrivateRoute;