import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import Videos from "./Contents/Videos.js";
import Banner from "./Header/Banner.js";

const Filter = (props) =>{
    const {setItems} = props;
    const filterItem = (itemsType) => {
        const updatedItems = Videos.filter((curItem) =>{
            return curItem.type === itemsType;
        })
        setItems(updatedItems);
    }
    return(
        <>
        <Banner/>
        <Container className="my-2">
            <Row>
                <Col>
                <Button onClick={() => setItems(Videos)} variant="outline-secondary" className="active">All</Button>{' '}
                <Button onClick={() => filterItem('Musics')} variant="outline-secondary">Musics</Button>{' '}
                <Button onClick={() => filterItem('Movie')} variant="outline-secondary">Movies</Button>{' '}
                <Button onClick={() => filterItem('Comedy Clip')} variant="outline-secondary">Comedy Clip</Button>{' '}
                <Button onClick={() => filterItem('Trailers')} variant="outline-secondary">Trailers</Button>{' '}
                <Button onClick={() => filterItem('Scene')} variant="outline-secondary">Scene</Button>{' '}
                <Button onClick={() => filterItem('Gaming')} variant="outline-secondary">Gaming</Button>{' '}
                <Button onClick={() => filterItem('Web Series')} variant="outline-secondary">Web Series</Button>{' '}
                <Button onClick={() => filterItem('Comedy Shows')} variant="outline-secondary">Comedy Shows</Button>{' '}
                <Button onClick={() => filterItem('Dance')} variant="outline-secondary">Dance</Button>{' '}
                <Button onClick={() => filterItem('Game Shows')} variant="outline-secondary">Game Shows</Button>{' '}
                <Button onClick={() => filterItem('Live')} variant="outline-secondary">Live</Button>{' '}
                <Button onClick={() => filterItem('Mysterious')} variant="outline-secondary">Mysterious</Button>{' '}
                <Button onClick={() => filterItem('Horror')} variant="outline-secondary">Horror</Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Filter;