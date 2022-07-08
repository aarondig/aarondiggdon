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

const [titles, setTitles] = useState([]);
useEffect(()=>{
for (let i = 0; i < data.length; i++){
  setTitles(current => [...current, data[i].title.split(" ")])
}

},[])


  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    // centerPadding: "32px",
    centerPadding: "6%",
    easing: "ease-in-out",
    beforeChange: (oldIndex, newIndex) => handleChange(oldIndex, newIndex),
  };

  return <div className="slider-container">
  <Slider {...settings}>
    {
    titles[data.length-1] && data.map((el, i) => {
      

          return (
          <div className="slider-card" key={i} >
            <div className="slider-img" >
              <img src={el.banner}></img>
            </div>
            <div className="body-container">

            <div className="slider-title-container">
              <h1 className="slider-title">{titles[i][0]} </h1>
              <h1 className="slider-title" style={{color: el.background}}>{titles[i][1]}</h1>
              </div>
              <p className="slider-description">{el.description}</p>
            
            </div>
          </div>)
        })}
  </Slider>
  
  </div>
  
}

export default Carousel;
