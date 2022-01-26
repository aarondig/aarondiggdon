import React, { useEffect, useRef } from "react";
import { data } from "../../data/data";
import useWindowSize from "../../hooks/windowSize";
import "./style.css";

function Project({ isCurrent, project, onScroll }) {
  const size = useWindowSize();
const scroller = useRef()

   let ease = 0.1
   let current = 0
   let previous = 0
   let rounded = 0
 
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  useEffect(() => {
    document.body.style.height = `${
      scroller.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);
  
// SCROLLING
const skewScrolling = () => {
  //Set Current to the scroll position amount
 current = window.scrollY;
  // Set Previous to the scroll previous position
previous += (current - previous) * ease;
    // Set rounded to
 rounded = Math.round(previous * 100) / 100;

  //VARIABLES
  const difference = current - rounded;
  const acceleration = difference / size.width;
  const velocity = +acceleration;
  const skew = velocity * 7.5;

  //Assign skew and smooth scrolling to the scroll container
  scroller.current.style.transform = `translate3d(0, -${rounded}px, 0) skewY(${skew}deg)`;
console.log(window.scrollY)
  requestAnimationFrame(() => skewScrolling());
};

  useEffect(()=>{
    // window.removeEventListener('wheel', ()=> cancelAnimationFrame(() => onScroll()))
    requestAnimationFrame(() => skewScrolling());
    return () => cancelAnimationFrame(() => skewScrolling());
  },[])

  return (
    <div id="project">
      <div className="scroller" ref={scroller}>
      <div className="textWrap">
        <div className="intro">
          <h1 className="title">{data[isCurrent].title}</h1>
          {/* <div className="row"> */}
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="details">
            <div className="detail">
              <p className="label">Lorem ipsum</p>
              <p className="text">Ipsum dolor sit amet</p>
            </div>
            <div className="detail">
              <p className="label">Lorem ipsum</p>
              <p className="text">Ipsum dolor sit amet</p>
            </div>
          </div>
          {/* </div> */}

          {/* <div className="title-c">
      </div> */}
        </div>
        <div className="intro">
          <h1 className="title">{data[isCurrent].title}</h1>
          {/* <div className="row"> */}
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="details">
            <div className="detail">
              <p className="label">Lorem ipsum</p>
              <p className="text">Ipsum dolor sit amet</p>
            </div>
            <div className="detail">
              <p className="label">Lorem ipsum</p>
              <p className="text">Ipsum dolor sit amet</p>
            </div>
          </div>
          {/* </div> */}

          {/* <div className="title-c">
      </div> */}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Project;
