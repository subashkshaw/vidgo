import React, { useState } from "react";
import {Modal, Button, Form, FloatingLabel} from "react-bootstrap";

const LoginModal = (props) => {  
  const {showModal, setShowModal} = props;
  const handleClose = () => setShowModal(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleEmail = (e) =>{
    setEmail(e.target.value);
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value);
  }
  const handleSignin = () =>{
    let authEmail = "subash.k.shaw";
    let authPassword = "12345";
    if((email === authEmail) && (password === authPassword)){
      localStorage.setItem("SignedIn", true);
    }
  }
    return (
      <>
        <Modal centered size="md" show={showModal} onHide={handleClose} animation={false}>
          <Modal.Header>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" onChange={handleEmail} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" onChange={handlePassword}>
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={handleSignin}>
              Sign In
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
  
 export default LoginModal;