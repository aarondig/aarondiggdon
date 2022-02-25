import React, { useEffect, useRef } from "react";
import { a, useSpring, useSprings } from "react-spring";
import { data } from "../../data/data";
import "./style.css";

function Background({ isCurrent, isPopup }) {
  
  //ANIMATIONS
  const springs = useSprings(
    data.length,
    data.map((el, i) => ({
      from: {
        opacity: 0,
        background: el.background,
      },
      to: {
        opacity: i === isCurrent ? 1 : 0,
      },
    }))
  );


  const overlayStyle = useSpring({
    opacity: isPopup ? 0: 1,
  })

  return (
    <div className="background">
  
      {data.map((el, i) => {
        return <a.div className="bg" style={springs[i]} key={i}></a.div>;
      })}

      {/* <div className="blob1"/>
    <div className="blob2"/>
    <div className="blob3"/>
    <div className="blob4"/>
    <div className="blob5"/>
    <div className="blob6"/>
    <div className="blob7"/>
    <div className="blob8"/> */}
        <a.div className="overlay" style={overlayStyle} />
    </div>
  );
}

export default Background;
