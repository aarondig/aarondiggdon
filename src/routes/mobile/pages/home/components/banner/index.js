import React, {
    Suspense,
    useEffect,
    useState,
    useLayoutEffect,
    useRef,
  } from "react";

import { InView } from "react-intersection-observer";
import asset from "../../../../../../Assets/Images/About/blue-background.jpg"
import "./style.css";

function Banner({ banner, bannerclip }) {
  const [isVisible, setIsVisible] = useState();
  let src = asset;

  return (
    <InView id="banner" className="page-section banner" threshold={0} onChange={setIsVisible}>
      {/* <div className="banner-img-clip" ref={bannerclip}> */}
        <div className="banner-img-c">
        {/* <a.h3 className="line" >
                    Certified
                  </a.h3>
                  <a.h3 className="line line-break">/</a.h3> */}
          <img className="banner-img" src={src} ref={banner} data-isVisible={isVisible} alt="image"/>
        </div>
      {/* </div> */}
    </InView>
  );
}
  
  export default Banner;