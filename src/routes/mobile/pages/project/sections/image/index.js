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

function Image({ e }) {
  const [isVisible, setIsVisible] = useState();
 

  return (
 
    <InView className="page-section image" threshold={.6} onChange={setIsVisible}>
        <div className="img-c">
          <img className="img" src={e.src} alt="image"/>
        </div>
    </InView>
   
  );
}
  
  export default Image;