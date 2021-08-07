import React from "react";
import { Carousel } from "react-bootstrap";
import "./home.css";

import img3 from "../../Assets/kids.png";
// import img2 from "../../Assets/remote.png";
// import img1 from "../../Assets/team.png";

function CarouselMain() {
  return (
    <Carousel
      className="carousel"
      controls={false}
      fade={true}
      pause={false}
      
    >
      <Carousel.Item interval={2000} >
        <img  className="carouselImg" src="https://cdn.nohat.cc/thumb/f/720/fd185374d03b4664bcbb.jpg" />
      </Carousel.Item>
      <Carousel.Item interval={2000} >
        <img  className="carouselImg" src="https://cdn.dribbble.com/users/623359/screenshots/13984999/media/cca4371fa48bf2df483d879b572870cd.png" />
      </Carousel.Item>
      <Carousel.Item interval={2000} >
        <img  className="carouselImg" src="https://cdn.dribbble.com/users/623359/screenshots/13988957/media/619eed2ffa166f24096742e07d97f63a.png" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMain;