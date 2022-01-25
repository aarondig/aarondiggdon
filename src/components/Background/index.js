import React, { useEffect, useRef } from "react";
import { a, useSprings } from "react-spring";
import { data } from "../../data/data";
import "./style.css";

function Backgrounnd({ isCurrent }) {
  
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
    </div>
  );
}

export default Backgrounnd;
