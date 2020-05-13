import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import ReactModal from "react-modal";

function ProfileForm() {
  const [userProfile, setUserProfile] = useState();
  var subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  const [formValues, setFormValue] = useState({
    openModal: "",
    closeModal: "",
  });

  const handleOpenModal = (event) => {
    setFormValue({ ...formValues, [event.target.Modal]: event.target.value });
    return true;
  };

  const handleCloseModal = (event) => {
    setFormValue({ ...formValues, [event.target.Modal]: event.target.value });
    return false;
  };

  const handleSubmit = (event) => {
    axios
      .post()
      .then((res) => {
        setUserProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={(event) => handleOpenModal(event)}>Trigger Modal</button>
      {/* <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={event => handleCloseModal(event)}>Close Modal</button>
        </ReactModal>
     */}
      <div>
        <button onClick={openModal}>Open Modal</button>
        {/* <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal> */}
      </div>
    </div>
  );
}

export default ProfileForm;
