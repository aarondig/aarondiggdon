import React, { useState } from "react";
import { a, useSpring, useSprings } from "react-spring";
import "./style.css";

function Tech({ el, isCurrent }) {

const [hovered, setHovered] = useState()

  const techBox = useSprings(
    el.list.length, 
    el.list.map((el, i) => ({
      background: i === hovered ? "#212121" : "#f4f4f4",
      // transform: i === hovered ? "scale(1.2)" : "scale(1)",
  })))

  const techTitle = useSprings(
    el.list.length, 
    el.list.map((el, i) => ({
    
      color: hovered === i ? "#ffffff" : "#BABABA"
    
  })))



  return (
    <div id="tech">
        <h1 className="title">{el.header}</h1>

          <div className="tech-c">
              {el.list.map((el, i) => {
            switch (el) {
              default: {
                return (
                <a.div className="tech-box" style={techBox[i]} onMouseOver={() => setHovered(i)} key={i}>
                  <a.p className="tech-title" style={techTitle[i]}>{el}</a.p>
                  
                </a.div>
                )
               }
            }
          })}
            </div>
        


    </div>
  );
}

export default Tech;
