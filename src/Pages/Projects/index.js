import React, { useState, useEffect, useLayoutEffect, createRef, useMemo, useRef } from "react";
import "./style.css";
import { data } from "../../data/data";
import { Link, useNavigate } from "react-router-dom";

function Projects({ isCurrent, setIsCurrent,  isPopup, loading, setLoading, refs, setRefs, meshes, setMeshes, group }) {

const requestRef = useRef();
const navigate = useNavigate();


  useEffect(()=>{
    if (isPopup) {
      navigate(`/diff`, {replace: true})
    }
  })

  let objs = Array(data.length).fill({ dist: 0 });

  //Image Distance for MODULE (Was 1.2)
  const spaceBetween = 0.95;

  //INERTIA SCROLL
  let speed = 0;
  let position = isCurrent;
  let rounded = 0;

  window.addEventListener("wheel", (e) => {
    //Add if touch event
    speed += e.deltaY * 0.0003;
  });

  useLayoutEffect(() => {

  const onScroll = () => {
    position += speed;
    speed *= 0.8;

    objs.map((el, i) => {
      el.dist = Math.min(Math.abs(position - [data.length - i] + 1), 1);
      el.dist = Math.abs(el.dist);

      let scale = 1 - 0.4 * el.dist;

      if (meshes[i].current) {
        meshes[i].current.position.y =
          i * spaceBetween + position - (data.length - 1) * spaceBetween;

        meshes[i].current.scale.set(scale, scale, scale);

        meshes[i].current.material.uniforms.distanceFromCenter.value = scale;
      }
    });

    rounded = Math.abs(Math.round(position));

    //Safety Nets to Keep In Bounds
    rounded = position > data.length - 1 ? data.length - 1 : rounded;

    let diff = rounded - position;

    position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.035;

    setIsCurrent(rounded);

    requestRef.current = requestAnimationFrame(onScroll)
  };

  if (meshes[data.length - 1] !== undefined) {
    requestRef.current = requestAnimationFrame(onScroll);
  }
 
    return () => cancelAnimationFrame(requestRef.current)
  }, [meshes]);

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




 

// useEffect(() => {
  
// }, [meshes]);




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
        <div className="targContainer">
                <div className="targ">
                  <Link to="diff"></Link>
                </div>
          {/* {refs.map(()=>{
            return (<div className="target"/>)
          })} */}


        </div>
      </div>
    </div>
  );
}

export default Projects;
