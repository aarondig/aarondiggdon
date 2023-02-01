import React, {
    Suspense,
    useEffect,
    useState,
    useLayoutEffect,
    useRef,
  } from "react";
import { a, useSprings } from "@react-spring/web";
import { InView } from "react-intersection-observer";

import "./style.css";

function Portal({ el, portal, portalclip }) {
  const [isVisible, setIsVisible] = useState();
 

  return (
 
    <InView className="page-section banner" threshold={.6} onChange={setIsVisible}>
      <div className="banner-img-clip" ref={portalclip} data-isvisible={isVisible}>
        <div className="banner-img-c">
          <img className="banner-img" src={el.banner} ref={portal} />
        </div>
      </div>
    </InView>
   
  );
}
  
  export default Portal;