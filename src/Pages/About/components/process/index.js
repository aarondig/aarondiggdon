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
import Ornament from "../ornament";
import analyze from "../../../../Assets/Images/About/process/Analyze.jpg";
import consult from "../../../../Assets/Images/About/process/Consult.jpg";
import propose from "../../../../Assets/Images/About/process/Propose.jpg";
import repeat from "../../../../Assets/Images/About/process/Repeat.jpg";

function Process({
  process_svg,
  process_col_0,
  process_col_1,
  process_img_0,
  process_img_1,
  process_img_2,
  process_img_3,
}) {
  const [isVisible, setIsVisible] = useState(false);
  let lines = ["An Iterative", "Design Process"];
  let assets = [analyze, consult, propose, repeat];

  const linesprings = useSprings(
    lines.length,
    lines.map((el, i) =>
      isVisible
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
    <div id="process">
      <section className="page-section">
        {/* <a.h6 className="main-subtitle">/ Expertise</a.h6> */}
        {/* <div className="section-head row"> */}
        
            <div className="text-row">
            <a.div className="section-title">
              {lines.map((el, i) => {
                return (
                  <div className="line-wrap">
                    <a.h3 className="line" style={linesprings[i]} key={i}>
                      {el}
                    </a.h3>
                    {/* <a.h3 className="line line-break">/</a.h3> */}
                  </div>
                );
              })}
              {/* <a.h3 >
              UX Design / Graphic Design / Web + App Development / Branding /
                  </a.h3> */}
            </a.div>

            <a.p className="main-text">
              Passionate about human — centered experiences, the user is always
              at the center of the design process.
            </a.p>
            {/* </div> */}
    

          {/* <img className="banner-img" src={src} ref={banner} data-isVisible={isVisible}/> */}
          {/* <Ornament ornament={process_svg} /> */}
        </div>
        <InView className="parallax-columns" onChange={setIsVisible}>
          <div
            className="parallax-column"
            ref={process_col_0}
            data-isVisible={isVisible}
          >
            <div className="parallax-column-card">
              <div className="card-img-c">
                <img className="card-img" src={assets[0]} ref={process_img_0} />
              </div>
              <div className="card-caption">
                <p className="caption-text">01</p>
                <div className="caption-line" />
              </div>
              <a.h4 className="card-title">Analyze the problem.</a.h4>
              <a.p className="card-text">
              Through journey — mapping and preliminary research, we can understand the narrative.
              </a.p>
            </div>
            <div className="parallax-column-card">
              <div className="card-img-c">
                <img className="card-img" src={assets[1]} ref={process_img_1} />
              </div>
              <div className="card-caption">
                <p className="caption-text">03</p>
                <div className="caption-line" />
              </div>
              <a.h4 className="card-title">Propose Solutions.</a.h4>
              <a.p className="card-text">
              Use user feedback to innovate and prototype solutions to their pain — points. This is where the creativity is maximized.
              </a.p>
            </div>
          </div>
          <div
            className="parallax-column"
            ref={process_col_1}
            data-isVisible={isVisible}
          >
            <div className="parallax-column-card">
              <div className="card-img-c">
                <img className="card-img" src={assets[2]} ref={process_img_2} />
              </div>
              <div className="card-caption">
                <p className="caption-text">02</p>
                <div className="caption-line" />
              </div>
              <a.h4 className="card-title">Consult the User.</a.h4>
              <a.p className="card-text">
              User — testing and consultation help us understand pain — points  in the journey, and keeps the scope of the project in focus.
              </a.p>
            </div>
            <div className="parallax-column-card">
              <div className="card-img-c">
                <img className="card-img" src={assets[3]} ref={process_img_3} />
              </div>
              <div className="card-caption">
                <p className="caption-text">04</p>
                {/* <p className="caption-text">Repeat</p> */}
                <div className="caption-line" />
              </div>
              <a.h4 className="card-title">Repeat.</a.h4>
              <a.p className="card-text">
              Design is an iterative process. This cycle ensures the user is the focus, and while creating a seamless experience.
              </a.p>
            </div>
          </div>
        </InView>
      </section>
    </div>
  );
}

export default Process;
