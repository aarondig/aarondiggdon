import React, { useState, useEffect, useRef, createRef } from "react";
import "./style.css";
import { data } from "../../data/data";

function Projects({ isCurrent }) {
  //Intertia Scroll

  const carousel = useRef();
  const block = useRef();

  //SMALL BUTTONS ON LEFT
  const [isActive, setIsActive] = useState();
  const togglePortfolio = (e) => {
    let targ = e.target.id;
    setIsActive(targ);
  };
  const styles = {
    button: {
      active: {
        background: "#fff",
      },
      inactive: {},
    },
    text: {
      active: {
        color: "#000",
      },
      inactive: {},
    },
  };

  return (
    <div id="projects">
      <div className="overlay">
        <div className="projectPanel">
          <div className="title-c">
            <h1 className="title">
              {data[isCurrent] && data[isCurrent].title}
            </h1>
            <h4 className="subtitle">
              {data[isCurrent] && data[isCurrent].description}
            </h4>
            <div
              id="web"
              className="button"
              style={
                isActive === "web"
                  ? styles.button.active
                  : styles.button.inactive
              }
              onClick={(e) => togglePortfolio(e)}
            >
              <h4
                className="buttontitle"
                style={
                  isActive === "web" ? styles.text.active : styles.text.inactive
                }
              >
                Web Development
              </h4>
            </div>
            <div
              id="design"
              className="button"
              style={
                isActive === "design"
                  ? styles.button.active
                  : styles.button.inactive
              }
              onClick={(e) => togglePortfolio(e)}
            >
              <h4
                className="buttontitle"
                style={
                  isActive === "design"
                    ? styles.text.active
                    : styles.text.inactive
                }
              >
                Design
              </h4>
            </div>
          </div>
        </div>
        <div className="listPanel">
          <div id="carousel" ref={carousel}></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
