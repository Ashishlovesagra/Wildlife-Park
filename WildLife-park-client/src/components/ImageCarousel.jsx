/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { SliderImage } from '../assets/Slider/SliderImage';
import './Navbar.css'


function ImageCarousel() {
  return (
    <Carousel className='position-absolute'>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={SliderImage.One}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Some representative placeholder content for the first slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderImage.Two}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderImage.Three}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Some representative placeholder content for the third slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
