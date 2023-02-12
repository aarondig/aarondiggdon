import React, {
  Suspense,
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import { a, useSpring, useSprings } from "@react-spring/web";
import { InView } from "react-intersection-observer";
import Ornament from "../ornament";
import berkeley from "../../../../../../Assets/svgs/about/BerkeleyLogo.svg";
import "./style.css";
// import berkeley from "../../../../../../Assets/svgs/about/comments-t.svg";

function Landing({ startpage, b4img, svgprops }) {
  const lines = [
    "Creating Elevated",
    // "unforgettable",
    "Visual — ",
    "Experiences",
  ];

  const reveal = useSpring({ opacity: startpage ? 1 : 0, delay: 770 });
  const linesprings = useSprings(
    lines.length,
    lines.map((el, i) =>
      startpage
        ? {
            from: {
              opacity: 0,
              transform: `translateY(+20px)`,
            },
            to: {
              opacity: 1,
              transform: `translateY(0)`,
            },

            delay: 220 * i,
            // config: { mass: 1, tension: 120, friction: 40 },
          }
        : {
            from: {
              transform: `translateY(0)`,
              opacity: 1,
            },
            to: {
              transform: `translateY(0)`,
              opacity: 0,
            },

            delay: 220 * i,
            // config: { mass: 3, tension: 280, friction: 60 },
          }
    )
  );

  return (
    <section className="landing page-section" ref={b4img}>
      <div className="main-c">
        {/* <a.h6 className="main-subtitle" id="logo" style={reveal}>
          aaro
        </a.h6> */}
        <a.div className="main-title">
          {lines.map((el, i) => {
            return (
              <a.h2 className="line reveal" style={linesprings[i]} key={i}>
                {el}
              </a.h2>
              // <a.h2 className="line" key={i}>
              //    {el}
              //  </a.h2>
            );
          })}
        </a.div>
        <a.div className="row reveal" style={reveal}>
          {/* <a.p className="main-text" >
      Currently based in London, Aaron is a visual designer and
      developer focused on creating immersive digital products.
    </a.p> */}

          {/* <div className="badge-wrap">
      
      <svg  className="badge" height="30.1" x="0px" y="0px" viewBox="0 0 62 30.1" fill="#ffffff">
            <path d="M18.6,27.4h-5.2v-2.8h-0.1C11.9,26.9,9.6,28,7.2,28C1.5,28,0,24.7,0,19.8V7.6h5.5v11.2c0,3.3,1,4.9,3.5,4.9c3,0,4.2-1.6,4.2-5.7V7.6h5.5V27.4L18.6,27.4z"></path>
            <path d="M22.3,13.7C22.6,8.6,27.1,7,31.6,7c4,0,8.7,0.9,8.7,5.7v10.4c0,1.8,0.2,3.6,0.7,4.4h-5.5c-0.2-0.6-0.4-1.3-0.4-1.9c-1.7,1.8-4.3,2.4-6.7,2.4c-3.8,0-6.8-1.9-6.8-6c0-4.5,3.4-5.6,6.8-6c3.3-0.5,6.5-0.4,6.5-2.6c0-2.3-1.6-2.7-3.5-2.7c-2.1,0-3.4,0.8-3.6,3H22.3z M34.8,17.7c-0.9,0.8-2.9,0.8-4.5,1.2c-1.7,0.4-3.2,0.9-3.2,2.9c0,2,1.6,2.5,3.3,2.5c4.3,0,4.4-3.4,4.4-4.6L34.8,17.7L34.8,17.7z"></path>
            <path d="M44.5,0h5.5v27.4h-5.5V0z"></path>
            <path d="M62,13.8h-6V7.9h6V13.8z M56,21.5h6v5.9h-6V21.5z" ></path>
        </svg>
        <img className="badge" src={berkeley}/>
    </div> */}
          <div className="btn-wrap">
            <div className="contact-btn">
              {/* <a onClick={() => window.scrollY(0, 0)}> */}
              <p className="contact-btn-text">Get in touch</p>
              {/* </a> */}
            </div>
            <div className="arrow">
              <svg
                width="67"
                height="66"
                viewBox="0 0 67 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34 21V45"
                  stroke="white"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M43 36L34 45L25 36"
                  stroke="white"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* <div className="details">
    <div className="detail">
    <div className="detail-c">
    <p className="detail-subtitle">
      Employer
      </p>
      <p className="detail-text">
      Railsr
      </p>
      </div>
    </div>
    <div className="detail">
    <div className="detail-c">
    <p className="detail-subtitle">
      City
      </p>
      <p className="detail-text">
     London
      </p>
      </div>
    </div>
    </div> */}
        </a.div>
      </div>
    </section>
  );
}

export default Landing;
