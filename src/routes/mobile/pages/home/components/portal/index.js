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

function Portal({startpage}) {
  const [isVisible, setIsVisible] = useState();
  let src = "https://images.squarespace-cdn.com/content/v1/5af1c54f36099b9870f769e8/1574202934951-879FKG7B16X1MJHRVU0X/IMG_4588-1.jpg?format=2500w";

  // const clip = useSpring({clipPath: isVisible ? `inset(0 0vw)` : `inset(0 7vw)`})
console.log(startpage)
  const reveal = useSpring({ opacity: startpage ? 1 : 0, delay: 1080 });
  return (
 
    <InView className="page-section banner" threshold={.6} onChange={setIsVisible}>
      <a.div className="banner-img-clip"  data-isvisible={isVisible} style={reveal} >
      {/* style={clip} */}
        <div className="banner-img-c">
          <img className="banner-img" src={src} alt="image"/>
        </div>
      </a.div>
    </InView>
   
  );
}
  
  export default Portal;