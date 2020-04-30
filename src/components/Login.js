import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Login() {
  const [formValues, setFormValue] = useState({
    'username': '',
    'password': ''
  })

  const handleChange = (event) => {
    setFormValue({...formValues,[event.target.username]: event.target.value})
  }

  async function handleSubmit(event) {
    console.log(formValues)
  }



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
      <Link to='/register' class="ui button">Not a user? Sign Up</Link>
    </Form>
  )
}

export default Login