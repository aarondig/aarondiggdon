import React, { useEffect, useRef } from "react";
import { a, useSpring, useSprings } from "react-spring";
import { data } from "../../data/data";
import "./style.css";

function Background({ isCurrent, isPopup }) {
  //ANIMATIONS
  const springs = useSprings(
    data.length,
    data.map((el, i) => ({
      opacity: isPopup ? 0 : i === isCurrent ? 1 : 0,
      transform: isPopup ? "translateX(20%)" : "translateX(0%)",
      // transform: isPopup ? "scale(.3)" : "scale(1)",
    }))
  );
  const bgTop = useSpring({
    // transform: isPopup ? "scale(.8)" : "scale(0)",
    opacity: isPopup ? 1 : 0,
    transform: isPopup ? "translate3d(0%, 0%, 0%)" : "translate3d(30%, 5%, 0)",
  });

  // const overlayStyle = useSpring({
  //   opacity: isPopup ? 0 : 1,
  // });


  return (
    <div className="background">
      {data.map((el, i) => {
        return (
          <a.div className="bg-c" key={i} style={springs[i]}>
            {/* <div className="bg-top" style={{background: `radial-gradient(50% 50% at 50% 50%, ${el.background} 0%, rgba(0, 0, 0, 0) 100%)` }}></div> */}

            {/* <a.div className="bg-right" style={{background: `radial-gradient(50% 50% at 50% 50%, #ffffff 0%, rgba(5, 128, 238, 0) 100%)` }}></a.div> */}

            <a.div
              className="bg-top-right"
              style={{
                background: `radial-gradient(50% 50% at 50% 50%, ${el.background} 0%, rgba(5, 128, 238, 0) 100%)`,
              }}
            ></a.div>
            <a.div
              className="bg-back-right"
              style={{
                background: `radial-gradient(50% 50% at 50% 50%, ${el.background} 0%, rgba(5, 128, 238, 0) 100%)`,
              }}
            ></a.div>
            <a.div
              className="bg-back-bottom"
              style={{
                background: `radial-gradient(50% 50% at 50% 50%, ${el.background} 0%, rgba(5, 128, 238, 0) 100%)`,
              }}
            ></a.div>

            {/* <div className="bg-back" style={{background: el.background}}></div> */}
          </a.div>
        );
      })}
      <a.div className="bg-top-c" style={bgTop}>
        {/* {isPopup ? <div className="bg-top" style={{background: `radial-gradient(50% 50% at 50% 50%, ${data[isCurrent].background} 0%, rgba(0, 0, 0, 0) 100%)` }}></div> : <></>} */}
        <a.div
          className="bg-top"
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, ${data[isCurrent].background} 0%, rgba(0, 0, 0, 0) 100%)`,
          }}
        ></a.div>
      </a.div>

      {/* <a.div className="overlay" style={overlayStyle} /> */}
    </div>
  );
}

export default Background;
