import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import Modal from "react-modal";
import axios from "axios";




function ProfileForm({ setUser,user, id }) {
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState({});
  
  useEffect(() => {
    if (user.first_name == null || user.last_name == null) {
      openModal()
    }
  },[])
  
  function openModal() {
    setFormValues({})
    setIsOpen(true);
  }
  
  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
  
  function closeModal(){
    setIsOpen(false);
  }
  
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(formValues);
    axios
      .put(`https://sample-backend-c-r.herokuapp.com/api/users/${id}`, formValues)
      .then(res => {
        console.log(res.data)
        setUser({...user, ...formValues})
        closeModal()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  return (
    <div>
      <div>
        <button onClick={openModal}>Update</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        > 
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Update</h2>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Field>
              <label>Email</label>
              <input
                type="text"
                placeholder={user.email}
                value={formValues.email}
                onChange={(event) => handleChange(event)}
                name="email"
              />
            </Form.Field>
            <Form.Field>
              <label>First Name</label>
              <input
                type="text"
                placeholder={user.first_name}
                value={formValues.first_name}
                onChange={(event) => handleChange(event)}
                name="first_name"
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input
                type="text"
                placeholder={user.last_name}
                value={formValues.last_name}
                onChange={(event) => handleChange(event)}
                name="last_name"
              />
            </Form.Field>
            <Form.Field>
              <label>About</label>
              <input
                type="text"
                placeholder={user.about}
                value={formValues.about}
                onChange={(event) => handleChange(event)}
                name="about"
              />
            </Form.Field>
            <Form.Field>
              <label>Age</label>
              <input
                type="number"
                placeholder={user.age}
                value={formValues.age}
                onChange={(event) => handleChange(event)}
                name="age"
              />
            </Form.Field>
            <Form.Field>
              <label>Location</label>
              <input
                type="text"
                placeholder={user.location}
                value={formValues.location}
                onChange={(event) => handleChange(event)}
                name="location"
              />
            </Form.Field>
            <Button type="update">Update</Button>
            <Button onClick={closeModal}>Close</Button>
            {/* {prop1 != null? <Button onClick={closeModal}>Close</Button>: null} */}
          </Form>
         </Modal> 
      </div>
    </div>
  );
}

export default ProfileForm;
