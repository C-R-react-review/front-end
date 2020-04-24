import React, { useState } from 'react';
// const bcrypt = require('bcrypt')
// const saltRounds = 8

function Register() {
  const [formValues, setFormValues] = useState({
    'username': '',
    'email': '',
    'password': '',
    'confirm-password': ''
  })

  const handleChangeUE = (event) => {
    setFormValues({...formValues, [event.target.name]: event.target.value})
    console.log(formValues)
  }

  // const handleChangeP = (event) => {
  //   setFormValues({...formValues, [event.target.name]: bcrypt.hash(event.target.value, saltRounds)})
  //   console.log(formValues)
  // }

  const handleSubmit = (event) => {
    console.log('nunget')
  }

  return (
    <div className="Register">
      <form onSubmit={event => handleSubmit(event)}>
        <input type='text' placeholder='Username' value={formValues.username} onChange={event => handleChangeUE(event)} name='username'/>
        <input type='email' placeholder='Email' value={formValues.email} onChange={event => handleChangeUE(event)} name='email'/>
        <input type='password' placeholder='Password' value={formValues.password} onChange={event => handleChangeUE(event)} name='password'/>
        <input type='password' placeholder='Confirm Password' value={formValues["confirm-password"]} onChange={event => handleChangeUE(event)} name='confirm-password'/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;