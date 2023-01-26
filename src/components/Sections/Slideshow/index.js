import React, { useState, useEffect, useRef } from "react";
import { a, useSprings } from "@react-spring/web";
import "./style.css";

function Slideshow({ el, isCurrent }) {
  const timeoutRef = useRef()
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(3500);

  let length = el.meta.length - 1;

  useEffect(()=>{
  timeoutRef.current = setTimeout(() => {

    setIndex((prev) => prev === length ? 0 : prev + 1)
    
  }, [delay]);
},[index])


  //NEXT SLIDE
  const handleClick = () => {
    clearTimeout(timeoutRef.current);
    setIndex((prev) => prev === length ? 0 : prev + 1)
  }

  //ANIMATIONS

  const springs = useSprings(
    el.meta.length,
    el.meta.map((el, i) => ({
      to: {
        opacity: index === i ? 1 : 0,
        // display: index === i ? "block" : "none",
        
      },
  
      config: {
      duration: 800

      },
    }))
  );
  

  return (
    <div id="slideshow"  onClick={() => handleClick()}>
      
        {el.meta.map((el, i) => {
          return (
            <div className="img-c" key={i}>
              <a.img
                className="image"
                src={el.src}
                key={i}
                style={springs[i]}
              ></a.img>
            </div>
          )

        })}

    
        {/* {el.src.map((el, i) => {
          return (
              <img
                className="image"
                src={el}
                key={i}
                style={index === i ? {opacity: 1} : {opacity: 0}}
              ></img>
          );
        })} */}
     
          {/* <div className="dot-c">
            {el.src.map((el, i) => {
          
          return (
              <a.div className="dot" style={styles}></a.div>
          )
        })}
        </div> */}
    </div>
  );
}

export default Slideshow;
