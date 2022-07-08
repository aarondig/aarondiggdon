import React, { useState, useEffect, useRef } from "react";
import { a, useSpring, useSprings } from "react-spring";
import { data } from "../../../../../../data/data";
import "./style.css";
import Slider from "react-slick";
import useWindowSize from "../../../../../../hooks/windowSize";
import Title from "../title";


function Carousel() {

  const [isCurrent, setIsCurrent] = useState()
  const handleChange = (oldIndex, newIndex) => {
    setIsCurrent(newIndex)
  };

  const cards = useSprings(
    data.length,
    data.map((el, i) => ({
      from: {
        opacity: .2,
        // transform: "scale(1)",
      },
      to: {
        opacity: i === isCurrent ? 1 : .2,
      
      }
      
    }))
  );
 
// const {height, width} = useWindowSize();
// const padding = width * .06;

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "10%",
    easing: "ease-in-out",
    beforeChange: (oldIndex, newIndex) => handleChange(oldIndex, newIndex),
  };

  return <div className="slider-container">
  <Slider {...settings}>
    {
    data.map((el, i) => {
      console.log(i === isCurrent ? `Current: ${i}` : i)
          return (
          <div className="slider-card" key={i} >
            <div className="slider-img" >
              <img src={el.banner}></img>
            </div>
            <div className="body-container">

            <div className="slider-title-container">
              <h1 className="slider-title">{el.title}</h1>
              <p className="slider-description">{el.description}</p>
            </div>
            </div>
          </div>)
        })}
  </Slider>
  
  </div>
  
}

export default Carousel;
