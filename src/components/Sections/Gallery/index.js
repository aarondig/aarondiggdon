import React, { useState, useEffect, useRef } from "react";
import useIsInViewport from "../../../hooks/intersectionObserver";
import "./style.css";

function Gallery({ el, size }) {
  const requestRef = useRef();
  
  const section = useRef();
  const rail = useRef();
 

  const inView = useIsInViewport(rail);
//SUBJECT TO CHANGE
  let split = (el.meta.length / 2);

  let imageWidth = 30;

  //DIVIDING IMAGES Top/Bottom

  const [imagesTop, setImagesTop] = useState([]);
  const [imagesBottom, setImagesBottom] = useState([]);

  useEffect(() => {
    el.meta.map((element, index) => {
      if (index < split) {

        setImagesTop(images => [...images, element])

      } else if (index > split || index === split) {

        setImagesBottom(images => [...images, element])

      }
    });
  }, []);

  // SCROLLING
  const [executed, setExecuted] = useState(false);

  let ease = 0.1;
  let current = 0;
  let previous = 0;
  let rounded = 0;
  let deduction = window.scrollY * .4;

  const scroll = () => {
    current = window.scrollY;
    current = current - deduction;

    // Set Previous to the scroll previous position
    previous += (current - previous) * ease;
    // Set rounded to
    rounded = Math.round(previous * 100) / 100;
    // Slow down
    rounded = rounded / 4;
    
    //VARIABLES
    const difference = current - rounded;
    const acceleration = difference / size.width;
    const velocity = + acceleration;
    const skew = velocity * 7.5;

    // //ARTICLE-GALLERY MOVEMENT

    if (section.current) {
      section.current.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${-(
        rounded -
        size.width +
        // (size.width / (2.8 - ((split / 4) / 10) - ((imageWidth * split / 100))) )
        (size.width / 2 - (imageWidth / 100))
      )}, 0, 0, 1)`;
    }
    if (rail.current) {
      rail.current.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${
        (rounded * 2) - size.width
      }, 0, 0, 1)`;
    }
    

    requestRef.current = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  };

  useEffect(() => {
    if (inView) {
      if (!executed) {
        //Trigger goes here
        requestRef.current = requestAnimationFrame(scroll);

        setExecuted(true);
      }
    }
  }, [inView]);

  //Cleanup
  useEffect(() => {
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);


  return (
    <div id="gallery" ref={section}>
      <div ref={rail} className="rail top">
        {imagesTop.map((element, index) => {
        
          return (
            <div className="img-c" style={{maxWidth: `${imageWidth}%`, flex: `0 0 ${imageWidth}%`}} key={index}>
              <div className="paralax-c">
                <img className="img" src={element.src} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="rail bottom">
        {imagesBottom.map((element, index) => {
          return (
            <div className="img-c" style={{maxWidth: `${imageWidth}%`, flex: `0 0 ${imageWidth}%`}} key={index}>
              <div className="paralax-c">
              
                  <img className="img" src={element.src} />
                  
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
