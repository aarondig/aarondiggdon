import { data } from "cheerio/lib/api/attributes";
import React, { useState, useEffect, useRef } from "react";
import { a, useSprings } from "react-spring";
import { useLayoutEffect, useMemo } from "react/cjs/react.production.min";
import useIsInViewport from "../../../hooks/intersectionObserver";
import "./style.css";

function Gallery({ el, isCurrent, size }) {

  const requestRef = useRef();
  const railTop = useRef();
  const railBottom = useRef();

  const inView = useIsInViewport(railTop)


 // SCROLLING
  const [executed, setExecuted]= useState(false)

  let ease = 0.1;
  let current = 0;
  let previous = 0;
  let rounded = 0;
  let deduction = window.scrollY

  
  const scroll = () => {

    current = window.scrollY;
    current = current - deduction;
    console.log(current)



    // Set Previous to the scroll previous position
    previous += (current - previous) * ease;
    // Set rounded to
    rounded = Math.round(previous * 100) / 100;

    //VARIABLES
    const difference = current - rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    // //ARTICLE-GALLERY MOVEMENT
  
     if (railTop.current) {
      railTop.current.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${rounded}, 0, 0, 1)`;
     }
     if (railBottom.current) {
      railTop.current.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${-rounded}, 0, 0, 1)`;
     }

    requestRef.current = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  };

  
 




useEffect(()=>{
  if (inView) {
  if (!executed) {
    //Trigger goes here
    requestRef.current = requestAnimationFrame(scroll);
  
    setExecuted(true)
  }
}
},[inView])

  return (
    <div id="gallery" >
      <div ref={railTop} className="rail">
          {el.meta.map((element, index)=> {
            return (

              
            <div className="img-c" key={index}>
              <div className="paralax-c">
              <img className="img" src={element.src}/>
              </div>
              
             
            </div>
            )
          })}

      </div>
       

    
    </div>
  );
}

export default Gallery;
