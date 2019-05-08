import React from "react";
import ControlledCarousel from "./Carousel";
import "./MainContent.css";
import { Carousel, Container } from "react-bootstrap";
import config from "../../../config";
import Axios from "axios";
import "./MainContent.css";

class MainContent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div style={{backgroundImage: `url(${config.baseUrl}/background.jpg)`, backgroundRepeat: "no-repeat"}}>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <Container className='item'>
              <img
                className="d-block rounded-circle center"
                src={`${config.baseUrl}/cosmetic1.jpg`}
                alt="First slide"
                height="500"
                width="500"
              />
              <Carousel.Caption>
                <h1>Skincare</h1>
                <h2>Night Cream</h2>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <style>
              @import
              url('https://fonts.googleapis.com/css?family=Alfa+Slab+One');
            </style>
            <Container className='item'>
              <img
                className="d-block rounded-circle center"
                src={`${config.baseUrl}/cosmetic2.png`}
                alt="Third slide"
                height="500"
                width="500"
              />

              <Carousel.Caption>
                <h1>Eyeshadow</h1>
                <h2>Mascara</h2>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className='item'>
              <img
                className="d-block rounded-circle center"
                src={`${config.baseUrl}/cosmetic3.png`}
                alt="Third slide"
                height="500"
                width="500"
              />

              <Carousel.Caption>
                <h1>Nail</h1>
                <h2>Beauty</h2>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default MainContent;
