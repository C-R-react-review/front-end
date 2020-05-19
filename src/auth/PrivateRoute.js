// import React, {useEffect} from "react";
// import { Route, Redirect } from "react-router-dom";
// import Feed from '../components/Feed'
// import { isAuthd } from '../helpers/isAuthd'

// const PrivateRoute = ({ Component, setLoggedIn, loggedIn, location, ...rest}) => {
//   let result;    
//   isAuthd()
//       .then(res => {
//         console.log(res)
//         setLoggedIn(res)
//         if(res === true){
      
//           return result =  <Route {...rest} render={props => (<Feed {...props}/>)} /> 
//         }
//         else {
          
//           return result = <Redirect to="/login" /> 
          
//         }
//       })
//       .catch(err => {
//         console.log(err)
//         setLoggedIn(err)
//       })
//       return(
//         <>
//        {result}
//        </>
//      )
// };

// export default PrivateRoute;

import React, {useEffect, useState} from "react";
import { Route, Redirect } from "react-router-dom";
import Feed from '../components/Feed'
import { isAuthd } from '../helpers/isAuthd'

const PrivateRoute = ({ component: Component, setLoggedIn, loggedIn, location, isTokenValidated, setIsTokenValidated, ...rest }) => {

  useEffect(() => {
    setIsTokenValidated(false)
    // send jwt to API to see if it's valid
    let token = localStorage.getItem("token");
    if (token) {
      isAuthd()
      .then(async (res) => {
        if (res === true) {
          await setLoggedIn(true); //not sure if this await is actually needed??
          setIsTokenValidated(true)
        }
        else {
          await setLoggedIn(false) //this one too
          setIsTokenValidated(true)
          localStorage.removeItem("token");
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        localStorage.removeItem("token");
      })
    } else {
       setIsTokenValidated(true); // in case there is no token
    }
  }, [setIsTokenValidated])

 if (!isTokenValidated) return <div />; // or some kind of loading animation

  return (<Route {...rest}
    render={(props) => { //currently hard coded in component Feed
      return loggedIn ? <Feed {...props} /> : <Redirect to="/login" />
    }} />)
};

export default PrivateRoute;



















