import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css';


import banner1 from '../../img/banner1.jpg';
import banner2 from '../../img/banner2.jpg';
import banner3 from '../../img/banner3.jpg';
import banner4 from '../../img/banner4.jpg';


function Banner() {
    return (
            <Carousel>
                <Carousel.Item >
                    <img className="d-block w-20" src={banner1}  alt="Primer slide"/>
                </Carousel.Item>

                <Carousel.Item >
                    <img className="d-block w-20" src={banner2}  alt="Primer slide"/>
                </Carousel.Item>
                
                <Carousel.Item >
                    <img className="d-block w-20" src={banner3}  alt="Primer slide"/>
                </Carousel.Item>

                <Carousel.Item >
                    <img className="d-block w-20" src={banner4}  alt="Primer slide"/>
                </Carousel.Item>
            </Carousel>
    )
}

export default Banner

