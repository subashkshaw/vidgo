import React from "react";
import { Container } from "react-bootstrap";

let Footer = (props) =>{
    return(
        <>
        <Container fluid fixed="bottom">
            <p>{props.title}</p>
        </Container>
        </>
    )
}

export default Footer;