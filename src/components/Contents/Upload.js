import React from "react";
import { Container,Row, Col, Form } from "react-bootstrap";
import Navbar from "../Header/Nav";

let Upload = () =>{
    return(
        <>
        <Navbar/>
       <Container>
           <Row>
               <Col sm={6}>
                   <Form>
                       <Form.Control type="file" name="vfile"/>
                   </Form>
               </Col>
           </Row>
       </Container>
        </>
    )
}

export default Upload;