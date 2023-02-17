import React, {
    Suspense,
    useEffect,
    useState,
    useLayoutEffect,
    useRef,
  } from "react";
import { a, useSpring, useSprings } from "react-spring";
import { InView } from "react-intersection-observer";

import "./style.css";

function Intro({startintro, setStartintro, startpage, setStartpage}) {


  const intro = useSpring({ 
    opacity: startpage ? 0 : 1,
    display: startpage ? "none" : "visible"
   });
  const introletters = ["H", "e", "l", "l", "o", "."];
  const introsprings = useSprings(
    introletters.length,
    introletters.map((el, i) =>
      startintro
        ? {
            from: {
              opacity: 0,
              transform: "translateY(120%)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0%)",
            },

            delay: (i + 2) * 100 + 600,
            config: {

            },
            onRest: () => setStartintro(false),
          }
        : {
            from: {
              // opacity: 1,

              transform: "translateY(0%)",
            },
            to: {
              // opacity: 0,
              transform: "translateY(-120%)",
            },

            delay: 800 / (i + 2) + 200,
            config: {
  
            },
            onResolve: () => setStartpage(true),
          }
    )
  );


    return (<a.div className="intro-c" style={intro}>
    <div className="intro-text">
      {introsprings.map((el, i) => {
        return (
          <a.h1 className="intro-letter" style={introsprings[i]} key={i}>
            {introletters[i]}
          </a.h1>
        );
      })}
    </div>
  </a.div>)
  }
  
  export default Intro;