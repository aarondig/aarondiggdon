import React, { useState, useEffect, useRef } from "react";
import { a, useSpring, useSprings, useTransition } from "react-spring";
import { data } from "../../../../../../data/data";
import "./style.css";

function Header({
  isCurrent,
  isPopup,
  handleClick,
  el,
  i,
  springs,
  btnHover,
  setBtnHover,
  size,
}) {

  const disappear = useSpring({
    transform: isPopup ? `translateY(${50}px)` : `translateY(0px)`,
    opacity: isPopup ? 0 : 1,

    config: { duration: 200 },
  });
  // const slideDown = useSpring({
  //   from: {
  //     transform: "translateY(0px)",

  //   },
  //   to: {
  //     // transform: isPopup ? `translateY(${slide}px)` : `translateY(-0px)`,

  //   },
  // })

  //   const btnStyle = useSpring({

  //     borderColor: !btnHover ? el.background : "transparent",
  //       background: btnHover ? el.background : "transparent",

  //       config:{duration: 200}

  //   })
  //   const btnText = useSpring({
  //     color: !btnHover ? el.background : "white",
  //  config:{duration: 200}
  //     })

  return (
    <a.div className="title-c" style={springs[i]} key={i}>
      {/* <a.h1 className="title" style={slideDown}>{el.title}</a.h1> */}
      <a.h1 className="title" style={disappear}>
        {el.title}
      </a.h1>
      {/* <a.div className="disappearBox" ref={disappearBox} style={disappear}> */}
      <a.div className="disappearBox" style={disappear}>
        <a.h3 className="subtitle">{el.description}</a.h3>

        {/* <a.div className="btn" style={btnStyle} onMouseOver={()=> setBtnHover(true)} onMouseLeave={()=> setBtnHover(false)} onClick={() => handleClick()}>
              <a.h4 className="btn-text" style={btnText}>Learn More</a.h4>
            </a.div> */}
      </a.div>
    </a.div>
  );
}

function Title({ isCurrent, isPopup, handleClick, size }) {
  //ANIMATIONS

  const springs = useSprings(
    data.length,
    data.map((el, i) => ({
      from: {
        opacity: 0,
        // background: el.background,
      },
      to: {
        transform: isPopup ? `translateY(${50}px)` : `translateY(-0px)`,
        opacity: isPopup ? 0 : i === isCurrent ? 1 : 0,

        // transform: i === isCurrent ? "translateY(0)" : `translateY(${-30}px)`,
      },

      config: {
        duration: 300,
      },
    }))
  );

  const appear = useSpring({
    transform: !isPopup ? `translateY(${50}px)` : `translateY(-0px)`,
    opacity: !isPopup ? 0 : 1,
    delay: 400,
    config: { duration: 200 },
  });

  const { opacity } = useSpring({
    opacity: isPopup ? 0 : 1,
  });

  const [btnHover, setBtnHover] = useState(false);

  const headerProps = {
    isCurrent: isCurrent,
    isPopup: isPopup,
    handleClick: handleClick,
    springs: springs,
    btnHover: btnHover,
    setBtnHover: setBtnHover,
    size: size,
  };

  return (
    <div id="title">
      <div className="left-panel">
        {data.map((el, i) => {
          return <Header el={el} i={i} key={i} {...headerProps} />;
        })}
      </div>
      <a.div className="right-panel" style={{ opacity }}></a.div>

      {isPopup ? (
        <a.h1 className="big-title" style={appear}>
          {data[isCurrent].title}
        </a.h1>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Title;
