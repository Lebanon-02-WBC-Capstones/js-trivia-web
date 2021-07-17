import React from "react";
import { Carousel } from "react-bootstrap";

import img3 from "../../assests/images/fun.jpg";
import img2 from "../../assests/images/together.jpg";
import img1 from "../../assests/images/world.jpg";

function CarouselMain() {
  return (
    <Carousel
      className="d-block w-100 carousel"
      controls={false}
      fade={true}
      pause={false}
    >
      <Carousel.Item interval={2000}>
        <img  className="d-block w-100 carouselImg" src={img1} />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img  className="d-block w-100 carouselImg" src={img2} />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img  className="d-block w-100 carouselImg" src={img3} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMain;
