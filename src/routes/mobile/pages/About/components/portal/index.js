import React, {
    Suspense,
    useEffect,
    useState,
    useLayoutEffect,
    useRef,
  } from "react";
import { a, useSprings } from "react-spring";
import { InView } from "react-intersection-observer";

import "./style.css";

function Portal({ portal, portalclip }) {
  const [isVisible, setIsVisible] = useState();
  let src = "https://images.squarespace-cdn.com/content/v1/5af1c54f36099b9870f769e8/1574202934951-879FKG7B16X1MJHRVU0X/IMG_4588-1.jpg?format=2500w";

  return (
    <InView id="portal" threshold={.6} onChange={setIsVisible}>
    <section className="page-section banner">
      <div className="banner-img-clip" ref={portalclip} data-isVisible={isVisible}>
        <div className="banner-img-c">
          <img className="banner-img" src={src} ref={portal} />
        </div>
      </div>
    </section>
    </InView>
  );
}
  
  export default Portal;