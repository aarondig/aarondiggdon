import React, { useState, useEffect, useRef } from "react";
import { a, useSpring } from "react-spring";
import { data } from "../../data/data";
import useWindowSize from "../../hooks/windowSize";
import "./style.css";

function Title({ isCurrent, isPopup }) {
  
  const size = useWindowSize();
const [moveDown, setMoveDown] = useState();
const disappearBox = useRef();

  useEffect(() => {
    setMoveDown(disappearBox.current.getBoundingClientRect().height)
  }, [size.height]);


  //ANIMATIONS
  const header = useSpring({
    to: async (next, cancel) => {
    await next({transform: isPopup ? `translateY(${moveDown}px)`: `translateY(0px)`})
   
  },
  from: {transform: `translateY(0)`}
  })

const disappear = useSpring({
  to: async (next, cancel) => {
  await next({opacity: isPopup ? 0 : 1})
},
from: {opacity: 1}
})

  return (
    <div id="title">
          <a.div className="title-c" style={header}>
            <a.h1 className="title">
              {data[isCurrent] && data[isCurrent].title}
            </a.h1>
            <a.div className="disappearBox"  >
            <a.h4 className="subtitle" ref={disappearBox} style={disappear}>
              {data[isCurrent] && data[isCurrent].description}
            </a.h4>
            </a.div>

       {/* Toggle */}
          </a.div>
        </div>
  );
}

export default Title;
