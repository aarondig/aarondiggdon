import React, { useState, useEffect, useRef, createRef } from "react";
import "./style.css";
import { data } from "../../Pages/Projects/data";
import Module from "../../components/Module";

function Projects() {
  const projects = useRef();
  const [hover, setHover] = useState(false);

  //Image Distance (Was 1.2)
  const spaceBetween = 0.95;

  //Intertia Scroll

  const carousel = useRef();
  const block = useRef();
  const [loading, setLoading] = useState(true);
  const [refs, setRefs] = useState([]);
  const [meshes, setMeshes] = useState([]);

  useEffect(() => {
    setRefs((refs) =>
      Array(data.length)
        .fill()
        .map((el, i) => refs[i] || createRef())
    );
    setMeshes((meshes) =>
      Array(data.length)
        .fill()
        .map((el, i) => meshes[i] || createRef())
    );
  }, []);

  let speed = 0;
  let position = 0;
  let rounded = 0;

  window.addEventListener("wheel", (e) => {
    //Add if touch event

    speed += e.deltaY * 0.0003;
  });

  let objs = Array(data.length).fill({ dist: 0 });

  const onScroll = () => {
    position += speed;
    speed *= 0.8;

    objs.map((el, i) => {
      el.dist = Math.min(Math.abs(position - i + 1), 1);
      el.dist = Math.abs(el.dist);
      refs[i].current.style.transform = `scale(${1 - 0.4 * el.dist})`;

      let scale = 1 - 0.4 * el.dist;

      if (meshes[i].current) {
        meshes[i].current.position.y =
          i * spaceBetween - position * spaceBetween - 0.85;
        meshes[i].current.scale.set(scale, scale, scale);

        meshes[i].current.material.uniforms.distanceFromCenter.value = scale;
      }
    });

    rounded = Math.round(position);

    let diff = rounded - position;

    position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.035;

    // setScroll(position);

    // setIsCurrent(rounded);

    carousel.current.style.transform = `translate(0, -${
      position * 100 - 50
    }px)`;

    requestAnimationFrame(() => onScroll());
  };

  useEffect(() => {
    if (meshes[data.length - 1] !== undefined) {
      requestAnimationFrame(onScroll);
    }
  }, [meshes]);

  //Navigation Hover
  const handleHover = () => {
    setHover(true);
  };

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
          <div id="carousel" ref={carousel}>
            {data.map((el, i) => {
              return (
                <div
                  className="card"
                  ref={refs[i]}
                  // style={
                  //   isCurrent === i ? styles.card.active : styles.card.inactive, {top: (i*40)+"%"}
                  // }
                  style={{ top: i * 100 + "px" }}
                  key={i}
                >
                  <img
                    href={`https://github.com/shakegioh/threejs-webgl-scrolling-images/blob/main/img/${i}.jpg`}
                  ></img>
                </div>
              );
            })}
          </div>
          <div
            ref={block}
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              background: "red",
            }}
          />
          <div id="hoverNav" onMouseEnter={handleHover} onMouseLeave={() => setHover(false)}>
            <ul className="hNavList">
              {data.map((el, i) => {
                return (
                  <li className="hNavItem" onClick={null} key={i}>
                    {!hover ? (
                      <div className="hNavDot"/>
                    ) : (
                      <div className="hoveredContainer">
                        <div className="hNavDot" />
                        <h4 className="hNavTitle">{data[i].title}</h4>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Module refs={meshes} setLoading={setLoading} />
      </div>
    </div>
  );
}

export default Projects;
