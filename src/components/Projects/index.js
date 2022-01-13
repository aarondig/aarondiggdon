import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";
import "./style.css";

import { items } from "./data";

function Projects({ list }) {
  const projects = useRef();

  const [isActive, setIsActive] = useState();
  const [isCurrent, setIsCurrent] = useState(3);

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
    card: {
      active: {
        width: "120%",
        minHeight: "40vh"
      },
      inactive: {},
    }
  };

const handleScroll = (e) => {
  if (isCurrent === items.length) {
    setIsCurrent(0)
  }else {
    setIsCurrent(isCurrent+1)
  }
}

console.log(isCurrent)
const List = () => {

 return <div className="list" onClick={(e)=>handleScroll(e)}>
 {items.map((e, index)=> {
         return (<div className="card" style={isCurrent === index ? styles.card.active : styles.card.inactive} key={index}>
            
          </div>)
    
  })}
  </div>
}






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
        <List/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
