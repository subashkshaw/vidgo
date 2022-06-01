import React from "react";
import {Carousel, Container, Row, Col} from "react-bootstrap";
import ImageBanner from "../../assets/universe.webp";
import ImageBanner2 from "../../assets/WonderWoman.jpeg";
let Banner = () => {
    return(
        <>
        <Container>
          <Row>
            <Col>
            <Carousel className="my-1" variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImageBanner}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImageBanner2}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
</Container>
        </>
    )
}

export default Banner;