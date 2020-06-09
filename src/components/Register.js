import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from 'axios'
import { useHistory } from 'react-router-dom';

import './Register.css'

function Register({ setLoggedIn }) {

  // useEffect(() => {
  //   async function getStatus() {
  //     const status = await isAuthd()
  //     console.log(status)
  //     setLoggedIn(status)
  //   }
  //   getStatus()
  // }, [])

  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState()
  const [isOnlyConfirm, setIsOnlyConfirm] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState({
    "password": ""
  })
  const [isError, setIsError] = useState(false)
  const [formValues, setFormValues] = useState({
    "username": "",
    "email": "",
    "password": "",
  });

  const handleChangeUE = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleChangeCP = (event) => {
    setConfirmPassword({ ...formValues, [event.target.name]: event.target.value });
  };

  const errorString = (e) => {
    if (e == errorMessage[errorMessage.length - 1]) {
      console.log(e, errorMessage[-1])
      return e
    } else {
      console.log(e, errorMessage[-1])
      return `${e} and `
    }
  }


  const handleSubmit = (event) => {
    
    let errorArray = []
    for (const input in formValues) {
      if (formValues[input].length == 0) {
        errorArray = [...errorArray, input]
      }
    }

    if(errorArray.length == 0 && confirmPassword.password.length == 0) {
      errorArray = ['confirm password']
      setIsOnlyConfirm(true)
      setErrorMessage(errorArray)
      setIsError(true)
      return null
    }

    if(errorArray.length != 0) {
      if (confirmPassword.password.length == 0) {
        errorArray = [...errorArray, 'confirm password']
      }
      setErrorMessage(errorArray)
      setIsError(true)
      return null
    }

    if(formValues.password != confirmPassword.password) {
      setIsError(true)
      setErrorMessage('Passwords do not match')
      return null
    }
    axios.post('https://sample-backend-c-r.herokuapp.com/api/auth/register', formValues)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      setLoggedIn(true)
      history.push('/dashboard')
    })
    .catch(err => {
      console.log(err)
    })
  };

  return (
    <div className="Register" className="register-container">
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Form.Field>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={formValues.username}
            onChange={(event) => handleChangeUE(event)}
            name="username"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={formValues.email}
            onChange={(event) => handleChangeUE(event)}
            name="email"
          />
        </Form.Field>
        <Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={formValues.password}
              onChange={(event) => handleChangeUE(event)}
              name="password"
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={formValues["confirm-password"]}
              onChange={(event) => handleChangeCP(event)}
              name="password"
            />
          </Form.Field>
        </Form.Field>
        { isError ? <div className="error-message" >{isOnlyConfirm ? 'Please' : 'Please enter'} {errorMessage.map(errorString)}</div> : console.log(';')} 
        {/*  */}
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
}
export default Register;

