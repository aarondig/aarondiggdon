import React, { useState } from "react";
import { a, useSpring, useSprings } from "react-spring";
import "./style.css";

function Slideshow({ el, isCurrent }) {

const [hovered, setHovered] = useState()

  const techBox = useSprings(
    el.list.length, 
    el.list.map((el, i) => ({
      background: i === hovered ? "#212121" : "#f4f4f4",
      // transform: i === hovered ? "scale(1.2)" : "scale(1)",
  })))





  return (
    <div id="tech">
       {el.list.map((el, i) => {
            
          })}
        


    </div>
  );
}

export default Slideshow;
