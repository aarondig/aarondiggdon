import React, { useState, useEffect, useRef } from "react";
import { a, useSpring, useSprings } from "react-spring";
import { data } from "../../data/data";
import useWindowSize from "../../hooks/windowSize";
import "./style.css";

function Header({ isCurrent, isPopup, handleClick, el, i, springs, btnHover, setBtnHover, size }) {

 const disappearBox = useRef();
  const [moveDown, setMoveDown] = useState();
  useEffect(() => {
    setMoveDown(disappearBox.current.getBoundingClientRect().height);
  }, [size.height]);


// const slide = (size.height/2) + moveDown / 10;
const slide = moveDown / 2;


  const disappear = useSpring({
    from: {
      transform: "translateY(0px)",
      opacity: 1,
    },
    to: {
      transform: isPopup ? `translateY(${moveDown}px)` : `translateY(-0px)`,
      opacity: isPopup ? 0 : 1,
    
    },
  })
  const slideDown = useSpring({
    from: {
      transform: "translateY(0px)",
  
    },
    to: {
      transform: isPopup ? `translateY(${slide}px)` : `translateY(-0px)`,
    
    },
  })




  const btnStyle = useSpring({
 
    borderColor: !btnHover ? el.background : "transparent",
      background: btnHover ? el.background : "transparent",
      config:{duration: 200}
    
  })
  const btnText = useSpring({
    color: !btnHover ? el.background : "white",
 config:{duration: 200}
    })


  return (
    <a.div className="title-c" style={springs[i]} key={i}>
            <a.h1 className="title" style={slideDown}>{el.title}</a.h1>
            <a.div className="disappearBox" ref={disappearBox} style={disappear}>
              <a.h4 className="subtitle">{el.description}</a.h4>
            
            
            <a.div className="btn" style={btnStyle} onMouseOver={()=> setBtnHover(true)} onMouseLeave={()=> setBtnHover(false)} onClick={() => handleClick()}>
              <a.h4 className="btn-text" style={btnText}>Learn More</a.h4>
            </a.div>
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
        
        opacity: i === isCurrent ? 1 : 0,
        // transform: i === isCurrent ? "translateY(0)" : `translateY(${-30}px)`,
      },
      config: {
        duration: 400,
        
       }
    }))
  );



const [btnHover, setBtnHover] = useState(false)

const headerProps = {
  isCurrent: isCurrent,
  isPopup: isPopup,
  handleClick: handleClick,
  springs: springs,
  btnHover: btnHover,
  setBtnHover: setBtnHover,
  size: size,

}

  return (
    <div id="title">
      {data.map((el, i) => {
        return (
          <Header el={el} i={i} key={i} {...headerProps}/>
        );
      })}

      {/* {data.map((el, i) => {
        const headerProps = {
          isCurrent: isCurrent,
          isPopup: isPopup,
          el: el,
          i: i,
          size: size,
        };
        return (<Header key={i} {...headerProps} />);
      })} */}

      {/* <a.div className="title-c" style={styles}>
        <a.h1 className="title">{data[isCurrent].title}</a.h1>
        <a.div className="disappearBox">
          <a.h4 className="subtitle">{data[isCurrent].description}</a.h4>
        </a.div>
      </a.div> */}
    </div>
  );
}

export default Title;
