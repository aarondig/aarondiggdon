import React, { useState, useEffect, useRef } from "react";
import {a, useSpring} from "react-spring";
import { data } from "../../../../../../data/data";
import "./style.css";
import Slider from "react-slick";
import useWindowSize from "../../../../../../hooks/windowSize";

function Carousel({ isCurrent, setIsCurrent, handleClick, isPopup }) {
  const handleChange = (oldIndex, newIndex) => {
    setIsCurrent(newIndex);
  };

  const [titles, setTitles] = useState([]);
  
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      setTitles((current) => [...current, data[i].title.split(" ")]);
    }
  }, []);

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
 const [toggle, setToggle]= useState(false)
  const opacity = useSpring({
    opacity: toggle ? 0 : 1,

  });
  const scale = useSpring({
    transform: isPopup ? "scale(2)" : "scale(1)",
  });

  // useEffect(()=>{
  //   if (isPopup) {
      
  //   }
  // })
console.log(toggle)
  return (
    <div className="slider-container"  onClick={()=>setToggle(!toggle)}>
      <Slider {...settings}>
        {titles[data.length - 1] &&
          data.map((el, i) => {
            return (
              <div
                className="slider-card"
                key={i}
                onClick={() => handleClick()}
              >
                <div className="slider-img" style={scale}>
                  <img src={el.banner}></img>
                </div>
                <div className="body-container" style={opacity}>
                  <div className="slider-title-container">
                    <h1 className="slider-title">{titles[i][0]} </h1>
                    <h1
                      className="slider-title"
                      style={{ color: el.background }}
                    >
                      {titles[i][1]}
                    </h1>
                  </div>
                  <p className="slider-description">{el.description}</p>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default Carousel;
