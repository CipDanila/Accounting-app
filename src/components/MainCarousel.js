import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainCarousel.css";


export default function MainCarousel() {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="./images/slide1.jpg" alt=""/>
      </div>
      <div>
      <img src="./images/slide2.jpg" alt=""/>
      </div>
      <div>
      <img src="./images/slide3.jpg" alt=""/>
      </div>
    </Slider>
  );
}
