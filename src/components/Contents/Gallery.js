import React, {useState} from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Videos from "./Videos";
import Filter from "../Filter";
const Gallery = (props) =>{
    const [items,setItems] = useState(Videos);
    return(
        <>
        <Filter setItems={setItems}/>
        <Container>
            <Row items={items}>
                {items.map((elem,id)=>{
                    const{url } = elem;
                    return(
                
                <Col sm={3} className="my-2">
                    <Card>
                    <Card.Img variant="top" />
                    <iframe src={url} title={id} allowFullScreen></iframe>
                    </Card>
                </Col>
                )})}
            </Row>
        </Container>
        </>
    )
}

export default Gallery;