import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from 'axios'
import { useHistory } from 'react-router-dom';

// const bcrypt = require('bcrypt')
// const saltRounds = 8

function Register() {
  const history = useHistory();

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    // "confirm-password": "",
  });

  const handleChangeUE = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    console.log(formValues);
  };

  // const handleChangeP = (event) => {
  //   setFormValues({...formValues, [event.target.name]: bcrypt.hash(event.target.value, saltRounds)})
  //   console.log(formValues)
  // }

  const handleSubmit = (event) => {
    console.log(formValues)
    axios.post('https://sample-backend-c-r.herokuapp.com/api/auth/register', formValues)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      history.push('/')
    })
    .catch(err => {
      console.log(err)
    })
  };

  return (
    <div className="Register">
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
              onChange={(event) => handleChangeUE(event)}
              name="confirm-password"
            />
          </Form.Field>
        </Form.Field>
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
}
export default Register;

