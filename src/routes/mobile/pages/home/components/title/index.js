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

function Title({ startpage }) {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  let lines = [
    "I use the power of",
    "visual—storytelling",
    "to empower brands",
    "& create innovative",
    "experiences.",
 
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
  return (
    <div id="title">
      <section className="page-section">
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
              </a.div>
            );
          })}
        </InView>

        <div className="text-row full">
          <a.p className="main-text">
                I used my background in photojournalism to capture and
                display visual — narratives through different mediums.
              </a.p>

          <a.div className="thin-button">
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

export default Title;
