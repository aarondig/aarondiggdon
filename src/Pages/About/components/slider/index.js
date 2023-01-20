import React, {
    Suspense,
    useEffect,
    useState,
    useLayoutEffect,
    useRef,
  } from "react";
import { a, useSprings } from "react-spring";
import { InView } from "react-intersection-observer";

import "./style.css";

function Slider({startpage}) {
    const [isVisible, setIsVisible] = useState();

    let lines = ["UX Design", "Web + App Development", "Graphic Design", "Branding"]
    

    const linesprings = useSprings(
        lines.length,
        lines.map((el, i) =>
          isVisible
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


    return <InView id="slider" threshold={.6} onChange={setIsVisible}>
        <div className="slider-c">
    
            <section className="page-section">
            <a.h6 className="main-subtitle">/ slider</a.h6>
            <a.div className="section-title">
              {lines.map((el, i) => {
                return (
               <div className="line-wrap">
                  <a.h3 className="line" style={linesprings[i]} key={i}>
                    {el}
                  </a.h3>
                  <a.h3 className="line line-break">/</a.h3>
                  </div>
               
                );
              })}
              {/* <a.h3 >
              UX Design / Graphic Design / Web + App Development / Branding /
                  </a.h3> */}
            </a.div>

            <a.p className="main-text">
              Currently based in London, Aaron is a visual designer and
              developer focusesd on creating immersive product expereinces.
            </a.p>
          </section>
        
        </div>

    </InView>
  }
  
  export default Slider;