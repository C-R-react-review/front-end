// import React, { useState, useEffect } from "react";
// import { Button, Form } from "semantic-ui-react";
// import Modal from "react-modal";
// import axios from "axios";

// function ProfileForm() {
//   const [userProfile, setUserProfile] = useState();
//   var subtitle;

//   const [modalIsOpen, setIsOpen] = React.useState(false);
//   function openModal() {
//     setIsOpen(true);
//   }
//   const [formValues, setFormValues] = useState({
//     email: "",
//     first_name: "",
//     last_name: "",
//     about: "",
//     age: "",
//     location: "",
//   });

//   const handleChange = (event) => {
//     setFormValues({ ...formValues, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     console.log(formValues);
//     axios
//       .post("", formValues)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={openModal}>Open Modal</button>
//         <Modal
//           isOpen={modalIsOpen}
//           onAfterOpen={afterOpenModal}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
//           <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//           <button onClick={closeModal}>close</button>
//           <div>I am a modal</div>
//           <Form onSubmit={(event) => handleSubmit(event)}>
//             <Form.Field>
//               <label>Email</label>
//               <input
//                 type="text"
//                 placeholder="email"
//                 value={formValues.email}
//                 onChange={(event) => handleChange(event)}
//                 name="email"
//               />
//             </Form.Field>
//             <Form.Field>
//               <label>First Name</label>
//               <input
//                 type="text"
//                 placeholder="first name"
//                 value={formValues.first_name}
//                 onChange={(event) => handleChange(event)}
//                 name="first name"
//               />
//             </Form.Field>
//             <Form.Field>
//               <label>Last Name</label>
//               <input
//                 type="text"
//                 placeholder="last name"
//                 value={formValues.last_name}
//                 onChange={(event) => handleChange(event)}
//                 name="last name"
//               />
//             </Form.Field>
//             <Form.Field>
//               <label>About</label>
//               <input
//                 type="text"
//                 placeholder="about"
//                 value={formValues.about}
//                 onChange={(event) => handleChange(event)}
//                 name="about"
//               />
//             </Form.Field>
//             <Form.Field>
//               <label>Age</label>
//               <input
//                 type="number"
//                 placeholder="age"
//                 value={formValues.age}
//                 onChange={(event) => handleChange(event)}
//                 name="age"
//               />
//             </Form.Field>
//             <Form.Field>
//               <label>Location</label>
//               <input
//                 type="text"
//                 placeholder="location"
//                 value={formValues.location}
//                 onChange={(event) => handleChange(event)}
//                 name="location"
//               />
//             </Form.Field>
//             <Button type="update">Update</Button>
//           </Form>
//         </Modal>
//       </div>
//     </div>
//   );
// }

// export default ProfileForm;
