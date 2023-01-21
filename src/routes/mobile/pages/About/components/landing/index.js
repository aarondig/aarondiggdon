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
    // "I create",
    // "unforgettable",
    // "—winning Websites",
    "Elevated",
    "Visual Experiences",


  ];
  console.log(startpage)
  

  const reveal = useSpring({ opacity: startpage ? 1 : 0 ,
  delay: 770});
  // const linesprings = useSprings(
  //   lines.length,
  //   lines.map((el, i) =>
  //     startpage
  //       ? {
  //           from: {
  //             opacity: 0,
  //             transform: `translateY(+20px)`,
  //           },
  //           to: {
  //             opacity: 1,
  //             transform: `translateY(0)`,
  //           },

  //           delay: 220 * i,
  //           // config: { mass: 1, tension: 120, friction: 40 },
  //         }
  //       : {
  //           from: {
  //             transform: `translateY(0)`,
  //             opacity: 1,
  //           },
  //           to: {
  //             transform: `translateY(0)`,
  //             opacity: 0,
  //           },

  //           delay: 220 * i,
  //           // config: { mass: 3, tension: 280, friction: 60 },
  //         }
  //   )
  // );


  return (<section className="landing page-section" ref={b4img}>
  <div className="main-c">
  <a.h6 className="main-subtitle" style={reveal}>/ About</a.h6>
  <a.div className="main-title">
    {lines.map((el, i) => {
      return (
        // <a.h2 className="line" style={linesprings[i]} key={i}>
        //   {el}
        // </a.h2>
        <a.h2 className="line" key={i}>
           {el}
         </a.h2>
      );
    })}
  </a.div>
  <a.div className="row" style={reveal}>
  {/* <Ornament {...svgprops} /> */}
    <a.p className="main-text" >
      Currently based in London, Aaron is a visual designer and
      developer focused on creating immersive digital products.
    </a.p>
    {/* <div className="details">
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
    </div>
    </div> */}
  </a.div>
  </div>
</section>
    
  );
}
  
  export default Landing;