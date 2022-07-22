import React, { useState, useEffect, useRef } from "react";
import "./style.css";

function Gallery({ el, size, scrollTop}) {
  const requestRef = useRef();
  
  const section = useRef();
  const rail = useRef();
 


//SUBJECT TO CHANGE
  let split = (el.meta.length / 2);

  let imageWidth = 40;

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
  let deduction = scrollTop * .8;


  useEffect(() => {
    const scroll = () => {
    current = scrollTop * 4;
    // current = current - deduction;
    
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
    
  }
  requestRef.current = requestAnimationFrame(scroll);
  return () => {
    cancelAnimationFrame(requestRef.current);
  };
  },[scrollTop]);


  return (
    <div id="gallery-mobile" ref={section}>
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
