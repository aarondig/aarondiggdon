import React, { useState, useEffect, useRef } from "react";
import { a, useSpring, useSprings, useTransition } from "react-spring";
import { data } from "../../../../../../data/data";
import "./style.css";

function Header({
  isCurrent,
  isPopup,
  handleClick,
  el,
  i,
  springs,
  btnHover,
  setBtnHover,
  size,
}) {

  // const disappear = useSpring({
  //   transform: isPopup ? `translateY(${50}px)` : `translateY(0px)`,
  //   opacity: isPopup ? 0 : 1,

  //   config: { duration: 200 },
  // });
  

  return (
    <a.div className="title-c" style={springs[i]} key={i}>
 
    </a.div>
  );
}

function Title({ isCurrent, isPopup, handleClick, size }) {




  return (
    <div id="title">
     
    </div>
  );
}

export default Title;
