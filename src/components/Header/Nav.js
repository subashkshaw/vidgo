import React, {useState} from "react";
import {Container, Navbar, Offcanvas, Button, ListGroup, Form, FormControl, Image} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import Avtar from '../../assets/avtar.png';
import { Link} from "react-router-dom";

let  Nav = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return(
        <>
        <Navbar bg="dark" sticky="top" variant="dark">
            <Container>
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
            <Link to="/Upload" className="ms-auto me-3"><FontAwesomeIcon icon={faArrowUpFromBracket}/></Link>
            <Button variant="warning" onClick={handleShow}><FontAwesomeIcon icon={faBars} /></Button>
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
            </Container>
        </Navbar>
        </>
    )
}
export default Nav;