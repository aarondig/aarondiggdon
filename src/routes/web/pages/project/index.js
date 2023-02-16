import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Error from "../error";

import { data } from "../../../../data";
import "./style.css";
import Portal from "./sections/portal";
import Text from "./sections/text";
import useWindowSize from "../../../../hooks/windowSize";
import List from "./sections/list";
import Image from "./sections/image";

function Project({ el, current, basename }) {
  const navigate = useNavigate();
  const location = useLocation();

  //ADDING INERTIA

  const size = useWindowSize();
  const [bodyHeight, setbodyHeight] = useState();
  const [startscroll, setStartscroll] = useState(false);
  const requestref = useRef();
  const scroller = useRef();

  //  Items
  // Portal
  const b4img = useRef();
  const [b4imgHeight, setb4imgHeight] = useState();
  const portal = useRef();
  const portalclip = useRef();

  //Setting height of page for body
  useEffect(() => {
    if (scroller.current !== undefined) {
      document.body.style.height = `${
        scroller.current.getBoundingClientRect().height
      }px`;
      setbodyHeight(scroller.current.getBoundingClientRect().height);
      setb4imgHeight(b4img.current.getBoundingClientRect().height);
      // Asnyc that starts Scrolling
      setStartscroll(true);
    }
  }, []);

  let speed = 0;
  let position = 0;
  let rounded = 0;

  const Wheel = (e) => {
    // speed += e.deltaY * 0.08;
    speed += e.deltaY * 0.2;
    //Add if touch event
  };

  window.addEventListener("wheel", Wheel);

  // Functions
  const lerp = (x, y, a) => x * (1 - a) + y * a;
  const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
  const invlerp = (x, y, a) => clamp((a - x) / (y - x));
  const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));

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

        // Window
        if (portalclip.current !== undefined) {
          // Clip Path
          let inset = range(
            b4imgHeight,
            b4imgHeight + (size.height / 1.8) * 0.9,
            0,
            0,
            rounded
          );

          portalclip.current.style.clipPath = `inset(0px ${inset}vw)`;
          portal.current.style.transform = `translate3d(0, ${rounded / 2}px, 0) `;
        }
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

  const portalprops = {
    el: el,
    portal: portal,
    portalclip: portalclip,
  };

  let linestroke = "#050505"
let circlestroke = "#e1e1e1"
  return (
    <div id="project">
      <div className="scroller" ref={scroller}>
        <div className="b4img" ref={b4img}>
          
          <section className="title-section">
          <div className="spacer" />
            <div className="main-title">
            
              <h6 className="main-subtitle">{el.subtitle}</h6>
            
              <h2 className="line">{el.title}</h2>
              <div className="downbtn">
        
              {/* <p className="main-text">Lorem ipsum dolor sit amet consectetur. Sit sed ultricies nisl vitae ac dui mi aliquam condimentum.</p> */}
            </div>  
</div>
<svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">


<path d="M34 21V45" stroke={linestroke} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43 36L34 45L25 36" stroke={linestroke} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="0.6" y="0.6" width="64.8" height="64.8" rx="32.4" transform="matrix(0 1 1 0 0.5 0)" stroke={circlestroke} stroke-width="1.2"/>
</svg>
          </section>
        </div>
        <Portal {...portalprops} />
        {el.sections.map((e, i) => {
          switch (e.type) {
            default: {
              return (
                <div className="section" key={i}>
                  <h1 className="title">{e.header}</h1>
                  {/* <div className="row"> */}
                  <p className="description">{e.body}</p>
                </div>
              );
            }
            case "text": {
              return <Text e={e} key={i} />;
            }
            case "list": {
              return <List e={e} key={i} />;
            }
            case "image": {
              return <Image e={e} key={i} />;
            }
          }
        })}
      </div>
    </div>
  );
}

export default Project;
