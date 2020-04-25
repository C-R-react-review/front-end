import React, { useState } from 'react';

function Login() {
  const [formValues, setFormValue] = useState({
    'username': '',
    'password': ''
  })

const handleChange = (event) => {
  setFormValue({...formValues,[event.target.username]: event.target.value})
}

const handleSubmit = (event) => {
  console.log('saltyAF')
}



  return (
    <div className="Login">
     <form onSubmit={event => handleSubmit(event)}>
       <input type='text' placeholder='Username' value={formValues.username} onChange={event => handleChange(event)} name='username'/>
       <input type='password' placeholder='Password' value={formValues.password} onChange={event => handleChange(event)} name='password'/>
       <button>Login</button>
     </form>
    </div>
  );
}

export default Login;
