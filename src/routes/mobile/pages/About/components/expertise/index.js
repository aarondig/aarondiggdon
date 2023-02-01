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

function Expertise({ startpage }) {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  let lines = [
    "UX Design",
    "Digital Marketing",
    "Web Development",
    "Graphic Design",
    "Branding",
    "Advertisement",
    "Product Design",
  ];
  const linesprings = useSprings(
    lines.length,
    lines.map((el, i) =>
      isVisible
        ? {
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },

            delay: 220 * i,
          }
        : {
            from: {
              opacity: 1,
            },
            to: {
              opacity: 0,
            },

            delay: 220 * i,
          }
    )
  );
  const linebreaksprings = useSprings(
    lines.length,
    lines.map((el, i) =>
      isVisible
        ? {
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },

            delay: 320 * i,
            // config: { mass: 1, tension: 120, friction: 40 },
          }
        : {
            from: {
              opacity: 1,
            },
            to: {
              opacity: 0,
            },

            delay: 120 * i,
            // config: { mass: 3, tension: 280, friction: 60 },
          }
    )
  );

  const button = useSpring({ opacity: buttonHover ? 1 : 0.6 });
  return (
    <div id="expertise">
      <section className="page-section">
        <div className="text-row">
          <a.h6 className="main-subtitle">/ Expertise</a.h6>
          <a.p className="main-text">
            Working at a global Fintech, I became proficient in Figma, and
            developed my skills across a variety of subjects.
          </a.p>
        </div>
        <InView
          className="section-title"
          threshold={0}
          onChange={setIsVisible}
          triggerOnce={false}
        >
          {lines.map((el, i) => {
            return (
              <a.div className="line-wrap" style={linesprings[i]} key={i}>
                <h3 className="line">{el}</h3>
                <p className="line-number"> 0{i + 1}</p>
              </a.div>
            );
          })}
        </InView>

        <div className="text-row full">
          {/* <a.p className="main-text">
                I used my background in photojournalism to capture and
                display visual — narratives through different mediums.
              </a.p> */}

          <a.div className="button">
            <a href="https://aarondiggdon.com" target="_blank" rel="noreferrer">
              <p className="button-text">Explore More</p>
              <svg
                width="72"
                height="30"
                viewBox="0 0 72 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button-svg"
              >
                <path
                  d="M69.1161 15.0001L59.4226 24.6936L58.5333 23.8042L66.7085 15.629H3V14.3713L66.7086 14.3713L58.5333 6.19599L59.4226 5.30664L69.1161 15.0001Z"
                  fill="white"
                />
              </svg>
            </a>
          </a.div>
        </div>
      </section>
    </div>
  );
}

export default Expertise;
