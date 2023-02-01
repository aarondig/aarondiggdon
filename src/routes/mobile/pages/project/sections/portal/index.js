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

function Portal(el) {
  const [isVisible, setIsVisible] = useState();


  // const clip = useSpring({clipPath: isVisible ? `inset(0 0vw)` : `inset(0 7vw)`})

  return (
 
    <InView className="page-section banner" threshold={.6} onChange={setIsVisible}>
      <a.div className="banner-img-clip"  data-isvisible={isVisible} >
      {/* style={clip} */}
        <div className="banner-img-c">
          <img className="banner-img" src={el.el.banner} />
        </div>
      </a.div>
    </InView>
   
  );
}
  
  export default Portal;