import React, {
    Suspense,
    useEffect,
    useState,
    useLayoutEffect,
    useRef,
  } from "react";
import { a, useSpring, useSprings } from "react-spring";
import { InView } from "react-intersection-observer";
import Ornament from "../ornament";
import "./style.css";

function Landing({startpage, b4img, svgprops}) {
  const lines = [
    "Creating Elevated ",
    // "unforgettable",
    // "—winning Websites",
    "Visual — Experiences",



  ];

  const reveal = useSpring({ opacity: startpage ? 1 : 0 ,
  delay: 770});
  const linesprings = useSprings(
    lines.length,
    lines.map((el, i) =>
      startpage
        ? {
            from: {
              opacity: 0,
              transform: `translateY(+20px)`,
            },
            to: {
              opacity: 1,
              transform: `translateY(0)`,
            },

            delay: 220 * i,
            // config: { mass: 1, tension: 120, friction: 40 },
          }
        : {
            from: {
              transform: `translateY(0)`,
              opacity: 1,
            },
            to: {
              transform: `translateY(0)`,
              opacity: 0,
            },

            delay: 220 * i,
            // config: { mass: 3, tension: 280, friction: 60 },
          }
    )
  );


  return (<section className="landing page-section" ref={b4img}>
  <div className="main-c">
  <a.h6 className="landing" id="logo" style={reveal}>aaro</a.h6>
  {/* <a.h6 className="main-subtitle" style={reveal}>/ About</a.h6> */}
  <a.div className="main-title">
    {lines.map((el, i) => {
      return (
        <a.h2 className="line" style={linesprings[i]} key={i}>
          {el}
        </a.h2>
      );
    })}
  </a.div>
  <a.div className="row" style={reveal}>
  {/* <Ornament {...svgprops} /> */}
    {/* <a.p className="main-text" >
      Currently based in London, Aaron is a visual designer and
      developer focused on creating immersive digital products.
    </a.p>
    <div className="detail">
    <div className="detail-c">
    <p className="detail-subtitle">
      Employer
      </p>
      <p className="detail-text">
      Railsr
      </p>
      </div>
    </div>
    <div className="detail">
    <div className="detail-c">
    <p className="detail-subtitle">
      City
      </p>
      <p className="detail-text">
     London
      </p>
      </div>
    </div> */}
    <div className="btn-wrap">
            <div className="contact-btn">
              {/* <a onClick={() => window.scrollY(0, 0)}> */}
              <p className="contact-btn-text">Get in touch</p>
              {/* </a> */}
            </div>
            <div className="arrow">
              <svg
                width="67"
                height="66"
                viewBox="0 0 67 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34 21V45"
                  stroke="white"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M43 36L34 45L25 36"
                  stroke="white"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
  </a.div>
  </div>
</section>
    
  );
}
  
  export default Landing;