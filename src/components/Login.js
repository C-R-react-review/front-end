import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { isAuthd } from '../helpers/isAuthd';



function Login({ history, setLoggedIn, ...rest }) {

  useEffect(() => {
    isAuthd()
    .then(res => {
      setLoggedIn(res)
    })
  }, [])

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
      console.log('hello')
      history.push("/")

    })
    .catch(err => {
      console.log(err)
    })
  };



  return (
    <Form onSubmit={event => handleSubmit(event)}>
      <Form.Field>
        <label>Username</label>
        <input type='text' placeholder='Username' value={formValues.username} onChange={event => handleChange(event)} name='username'/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input  type='password' placeholder='Password' value={formValues.password} onChange={event => handleChange(event)} name='password'/>
      </Form.Field>
      <Button type='submit'>Login</Button>
      <Link to='/register' className="ui button">Not a user? Sign Up</Link>
    </Form>
  )
}

export default Login