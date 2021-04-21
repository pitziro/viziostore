import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css';

function Banner() {
    return (
            <Carousel>
                <Carousel.Item >
                    <img className="d-block w-20" src="img/banner1.jpg"  alt="Primer slide"/>
                </Carousel.Item>

                <Carousel.Item >
                    <img className="d-block w-20" src="img/banner2.jpg"  alt="Primer slide"/>
                </Carousel.Item>
                
                <Carousel.Item >
                    <img className="d-block w-20" src="img/banner3.jpg"  alt="Primer slide"/>
                </Carousel.Item>

                <Carousel.Item >
                    <img className="d-block w-20" src="img/banner4.jpg"  alt="Primer slide"/>
                </Carousel.Item>
            </Carousel>
    )
}

export default Banner

