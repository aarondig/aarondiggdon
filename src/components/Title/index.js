import React, { useState, useEffect, useRef } from "react";
import { a, useSpring } from "react-spring";
import { data } from "../../data/data";
import useWindowSize from "../../hooks/windowSize";
import "./style.css";

function Header({ isCurrent, isPopup, el, i, size }) {
  const disappearBox = useRef();
  const [moveDown, setMoveDown] = useState();
  useEffect(() => {
    setMoveDown(disappearBox.current.getBoundingClientRect().height);
  }, [size.height]);

  //ANIMATIONS
  const header = useSpring({
    to: async (next, cancel) => {
      await next({
        transform: isPopup
          ? `translate3d(${moveDown * 2}px, ${moveDown}px, 0)`
          : `translate3d(0px, 0px, 0px)`,
      });
    },
    from: { transform: `translateY(0)` },
  });

  const disappear = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: isPopup ? 0 : 1 });
    },
    from: { opacity: 1 },
  });

  const {opacity} = useSpring({
    opacity: isCurrent === i ? 1 : 0,
    delay: 500,
    duration: 1200,
  });
  const cStyles = {
    
    opacity: opacity,
    
  };



  return (
    <a.div className="title-c" style={header, {...cStyles}}>
      <a.h1 className="title" >{el.title}</a.h1>
      <a.div className="disappearBox">
        <a.h4 className="subtitle" ref={disappearBox} style={disappear}>
          {el && el.description}
        </a.h4>
      </a.div>
    </a.div>
  );
}

function Title({ isCurrent, isPopup }) {
  const size = useWindowSize();

  return (
    <div id="title">
      {data.map((el, i) => {
        const headerProps = {
          isCurrent: isCurrent,
          isPopup: isPopup,
          el: el,
          i: i,
          size: size,
        };
        return (<Header key={i} {...headerProps} />);
      })}
    </div>
  );
}

export default Title;
