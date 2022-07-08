import React, { useState, useEffect, useRef } from "react";
import { a, useSpring, useSprings, useTransition } from "react-spring";
import { data } from "../../../../../../data/data";
import "./style.css";
import Slider from "react-slick";


function Carousel() {

  const Cards = () => {
    return (
      // <div className="slider-card-container">
      //   { 
        data.map((item, index) => {
          return (<div className="slider-card" key={index}></div>)
        })
      //   }
      // </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    // variableWidth: true
  };

  return <div className="slider-container">
  <Slider {...settings}>
    {
    data.map((item, index) => {
          return (<div className="slider-card" key={index}>
            <div className="slider-img">
              <img src={item.banner}></img>
            </div>
          </div>)
        })}
  </Slider>
  <div className="body-container">

  </div>
  </div>
  
}

export default Carousel;
