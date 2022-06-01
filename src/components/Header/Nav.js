import React, {useState} from "react";
import {Container, Navbar, Offcanvas, Button, ListGroup, Form, FormControl, Image} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Avtar from '../../assets/avtar.png';
import { Link} from "react-router-dom";
import LoginModal from "../Header/LoginModal";

let  Nav = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleLogOut = () =>{
      localStorage.clear();
    }
    return(
        <>
        <Navbar bg="dark" sticky="top" variant="dark">
            <Container>
            <Button variant="warning" className="me-2" onClick={handleShow}><FontAwesomeIcon icon={faBars} /></Button>
            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                  <Image src={Avtar} fluid alt=""/>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item><Link to="/">Home</Link></ListGroup.Item>
                    <ListGroup.Item>Explore</ListGroup.Item>
                    <ListGroup.Item>Shorts</ListGroup.Item>
                    <ListGroup.Item>Subscriptions</ListGroup.Item>
                </ListGroup>
                <hr/>
                </Offcanvas.Body>
            </Offcanvas>  
            <Navbar.Brand><Link to="/">VidGo</Link></Navbar.Brand>
            <Form className="d-flex ms-auto">
              <FormControl
                type="search"
                placeholder="Search"
                className="w-100"
                aria-label="Search"
              />
              <Button variant="outline-warning">Search</Button>
            </Form>
            {localStorage.getItem("SignedIn")   && <Link to="/Upload" className="ms-auto me-3"><FontAwesomeIcon icon={faArrowUpFromBracket}/></Link>}
            {!localStorage.getItem("SignedIn")   &&<Button variant="outline-warning" className="ms-auto me-2" onClick={handleShowModal}><FontAwesomeIcon icon={faCircleUser} /> LOG IN</Button>}
            {localStorage.getItem("SignedIn")   && <Button variant="outline-warning" className="me-2" onClick={handleLogOut}><FontAwesomeIcon icon={faCircleUser} /> LOG OUT</Button>}
            </Container>
        </Navbar>
        <LoginModal showModal={showModal} setShowModal={setShowModal}/>
        </>
    )
}
export default Nav;