import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Carousel from "./components/carousel/index";

import { data } from "../../../../data";
import "./style.css";
import useScrollLock from "../../../../hooks/scrollLock";
import useWindowSize from "../../../../hooks/windowSize";

function Projects({ basename, isPopup, setIsPopup }) {
  const navigate = useNavigate();

  //ADDING INERTIA

  const size = useWindowSize();
  const [bodyHeight, setbodyHeight] = useState();
  const [startscroll, setStartscroll] = useState(false);
  const requestref = useRef();
  const scroller = useRef();

  //Setting height of page for body
  useEffect(() => {
    if (scroller.current !== undefined) {
      document.body.style.height = `${
        scroller.current.getBoundingClientRect().height
      }px`;
      setbodyHeight(scroller.current.getBoundingClientRect().height);
      // Asnyc that starts Scrolling
      setStartscroll(true);
    }
  },[]);

  let speed = 0;
  let position = 0;
  let rounded = 0;

  const Wheel = (e) => {
    // speed += e.deltaY * 0.08;
    speed += e.deltaY * 0.2;
    //Add if touch event
   
  };

  window.addEventListener("wheel", Wheel);

  useLayoutEffect(() => {
    const skewScrolling = () => {
      if (scroller.current !== undefined) {
        position += speed;
        speed *= 0.8;

        if (position < 0) {
          position = 0;
          rounded = Math.round(position);
          speed = 0;
        }
        if (position >= bodyHeight - size.height) {
          position = bodyHeight - size.height;
          rounded = Math.round(position);
          speed = 0;
        }
        if (position >= document.body.style.height - size.height) {
          position = document.body.style.height - size.height;
          rounded = Math.round(position);
          speed = 0;
        }

        rounded = position;
   
        //  Page Scroller
        scroller.current.style.transform = `translate3d(0, -${rounded}px, 0)`;
      }
      requestref.current = requestAnimationFrame(skewScrolling);
    };
    window.scrollTo(0, 0);

    cancelAnimationFrame(requestref.current);
    requestref.current = requestAnimationFrame(skewScrolling);
    return () => {
      cancelAnimationFrame(requestref.current);
    };
  }, [startscroll]);
  
  let linestroke = "#fff"
  let circlestroke = "#505050"
  return (
    <div id="projects" >
      <div className="scroller" ref={scroller}>
        <div className="spacer" />
        <section className="page-section">
          <div className="main-title">
            <h2 className="line">Projects</h2>
            {/* <h6 className="main-subtitle">UX | UI Design</h6>
            <p className="main-text">
              Lorem ipsum dolor sit amet consectetur. Sit sed ultricies nisl
              vitae ac dui mi aliquam condimentum.
            </p> */}
          </div>
        </section>
        <section className="project-list">
          {data.map((el, i) => {
            return (
              <div
                id={el.id}
                key={i}
                className="project"
                onClick={() => navigate(`${el.id}`)}
              >
                {/* <div className="project-c"> */}
                
                <div className="project-img-c">
                
                  <img className="project-img" src={el.banner} />
                </div>
                <div className="project-text-c">
                  <div className="col">
                <h6 className="project-subtitle">{el.subtitle}</h6>
                  <h6 className="project-title">{el.title}</h6>
                  </div>
                  <div className="arrow" style={{borderColor: circlestroke}}>
              <svg
                width="67"
                height="66"
                viewBox="0 0 67 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34 21V45"
                  stroke={linestroke}
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M43 36L34 45L25 36"
                  stroke={linestroke}
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
                </div>
                
              </div>
            );
          })}
        </section>
        <div className="spacer" />
        <div className="spacer" />
      </div>
      
    </div>
  );
}

export default Projects;
