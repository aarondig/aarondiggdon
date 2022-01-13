import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";
import "./style.css";

import Carousel from "../../components/Carousel";

function Projects({ list }) {
  const projects = useRef();

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
    <div ref={projects} id="projects">
      <div className="overlay">
        <div className="projectPanel">
          <div className="title-c">
            <h1 className="title">Select a project.</h1>
            <h4 className="subtitle">
              My name’s Aaron. I’m a visual designer and developer working at
              home like the rest of you.
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
        <Carousel/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
