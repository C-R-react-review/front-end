import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import { isAuthd } from '../helpers/isAuthd';
import './Login.css'


function Login({ setLoggedIn, history, ...rest }) {

  useEffect(() => {
    isAuthd()
    .then(res => {
      setLoggedIn(res)
    })
  }, [])

  const [isFailed, setIsFailed] = useState(false)
  const [errMessage, setErrMessage] = useState()

  const [formValues, setFormValue] = useState({
    'username': '',
    'password': ''
  })

  const handleChange = (event) => {
    setFormValue({...formValues,[event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    axios.post('https://sample-backend-c-r.herokuapp.com/api/auth/login', formValues)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      setLoggedIn(true)
      history.push("/")
    })
    .catch(err => {
      setIsFailed(true)
      setErrMessage(err.response.data.message)
      console.log(err.response.data.message)
    })
  };



  return (
    <Form className="login-container" onSubmit={event => handleSubmit(event)}>
      <h2>Welcome!</h2>
      <Form.Field>
        <label>Username</label>
        <input type='text' placeholder='Username' value={formValues.username} onChange={event => handleChange(event)} name='username'/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input  type='password' placeholder='Password' value={formValues.password} onChange={event => handleChange(event)} name='password'/>
      </Form.Field>
      {isFailed ? <div className="error-message">{errMessage}</div>: null}
      <Button className="login-button" type='submit'>Login</Button>
      <Link className="login-button" to='/register' className="ui button">Not a user? Sign Up</Link>
    </Form>
  )
}

export default Login