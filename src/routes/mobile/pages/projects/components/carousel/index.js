import React, { useState, useEffect, useRef } from "react";
import { a, useSpring, useSprings } from "react-spring";
import { data } from "../../../../../../data/data";
import "./style.css";
import Slider from "react-slick";
import useWindowSize from "../../../../../../hooks/windowSize";


function Carousel({setIsCurrent, handleClick}) {


  const handleChange = (oldIndex, newIndex) => {
    setIsCurrent(newIndex)
  };
 


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
          <div className="slider-card" key={i} onClick={()=> handleClick()}>
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
