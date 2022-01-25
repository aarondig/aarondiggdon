import React, { useState, useEffect, useRef, createRef } from "react";
import "./style.css";
import { data } from "../../Pages/Projects/data";
import Module from "../../components/Module";
import gsap from "gsap";
import { a, useSpring, useSprings } from "react-spring";
import { useFrame } from "react-three-fiber";

function Projects() {

  const [isCurrent, setIsCurrent] = useState(0);

  //Naviagtion
  const hoverNav = useRef();
  const hoverItem = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [navs, setNavs] = useState([]);

  //Animations
const springs = useSprings(data.length, data.map((el, i) => ({
  from: {
    opacity: 0,
    background: el.background
  },
  to: {
    opacity: i === isCurrent ? 1 : 0,
}
})))




  

  //Image Distance (Was 1.2)
  const spaceBetween = 0.95;

  //Intertia Scroll

  const carousel = useRef();
  const block = useRef();
  
  const [loading, setLoading] = useState(true);
  const [refs, setRefs] = useState([]);
  const [meshes, setMeshes] = useState([]);

  const group = useRef();

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
    setNavs((navs) =>
      Array(data.length)
        .fill()
        .map((el, i) => navs[i] || createRef())
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
      el.dist = Math.min(Math.abs(position - [data.length - i] + 1), 1);
      el.dist = Math.abs(el.dist);

      // refs[i].current.style.transform = `scale(${1 - 0.4 * el.dist})`;

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

    //NAVIGATION UPDATES (barely works)

    // let rots = group.current && group.current.rotation

    // if (hoverNav.current) {
    //   hoverNav.current.addEventListener("mouseenter", (e) => {
    //     gsap.to(rots, {
    //       duration: .3,
    //       x: 0,
    //       y: 0,
    //       z: 0,
    //     })

    //     objs.map((el, i) => {
    //       if (navs[i].current) {

    //         navs[i].current.addEventListener("mouseenter", scrollTo);

    //       }
    //     });
    //   });
    //   const scrollTo = (e) => {
    //     let value = e.target.attributes[1].value;

    //    return position += -(position - value) *.04;
    //   };

    //   hoverNav.current.addEventListener("mouseleave", (e) => {

    //     gsap.to(rots, {
    //       duration: .3,
    //       x: -0.3,
    //       y: -0.5,
    //       z: -0.1,
    //     })

    //   });
    // }

    position += Math.sign(diff) * Math.pow(Math.abs(diff), .7) * 0.035;

    // carousel.current.style.transform = `translate(0, -${
    //   position * 100 - 50
    // }px)`;

    // setScroll(position);

    if (isCurrent !== rounded) {
      setIsCurrent(rounded);
    }

    requestAnimationFrame(() => onScroll());
  };

  useEffect(() => {
    if (meshes[data.length - 1] !== undefined) {
      requestAnimationFrame(onScroll);
    }
  }, [meshes]);

  //NAVIGATION

  const openNav = () => {
    // cancelAnimationFrame(onScroll);
    setIsOpen(true);
    // attractMode = true;
  };
  const closeNav = () => {
    setIsOpen(false);
    // attractMode = false;
    // requestAnimationFrame(onScroll);
  };

  const handleHover = (e) => {
    // scrollTo = e.target.attributes[1].value;
    // requestAnimationFrame(onScroll);
  };

  //Design Note: maybe copy what you did for refs and add a Mapping function into the RAF function

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



  //TRANSITION

  // const handleClick = (e) => {
  //   console.log(e)
  //   useFrame(()=>{
  //     refs[isCurrent].current.rotation.x = 0
  //     refs[isCurrent].current.rotation.y = 0
  //     refs[isCurrent].current.rotation.z = 0
  //   })
  //   }


    const handleClick = (e) => {
      console.log(e.eventObject.value)
        // let index = e.eventObject.value
        let index = (data.length - 1) - isCurrent
      
        // meshes[isCurrent].current.rotation.x = .5
        // meshes[isCurrent].current.rotation.y = .3
        // meshes[isCurrent].current.rotation.z = .1

        group.current.rotation.x = 0
        group.current.rotation.y = 0
        group.current.rotation.z = 0

       

        meshes.map((el,i)=>{
          if (i !== index) {
            
            meshes[i].current.position.x = -10;
            meshes[i].current.position.y = -10;
            // meshes[i].current.material.fragmentShader = `
            // uniform float time;
            // uniform float progress;
            // uniform float distanceFromCenter;
            // uniform sampler2D texture1;
            // uniform vec4 resolution;
            // varying vec2 vUv;
            // varying vec3 vPosition;
            // float PI = 3.141592653589793238;
            // void main() {
            //   vec4 t = texture2D(texture1, vUv) * distanceFromCenter;
            //   t.a = 0.0;
            //   gl_FragColor = t;
            // }`
            console.log(meshes[i].current)
          } 
        })

       
      
    }


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
          <div id="carousel" ref={carousel}>
            {/* {data.map((el, i) => {
              return (
                <div
                  className="card"
                  ref={refs[i]}
                  style={{ top: i * 100 + "px" }}
                  key={i}
                >
                </div>
              );
            })} */}
          </div>
          {/* <div
            ref={block}
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              background: "red",
            }}
          /> */}
          {/* <div id="hoverNav" ref={hoverNav} onMouseEnter={openNav} onMouseLeave={closeNav}>
            <ul className="hNavList">
              {data.map((el, i) => {
                return (
                  <li
                    className="hNavItem"
                    ref={navs[i]}
                    datatype={i}
                    onClick={null}
                    key={i}
                    onMouseEnter={(e) => handleHover(e)}
                  >
                    {!isOpen ? (
                      <div className="hNavDot" />
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
          </div> */}
        </div>
        <Module refs={meshes} group={group} setLoading={setLoading} handleClick={handleClick} />
      </div>
      {data.map((el, i)=>{
        return (
        <a.div className="bg" style={springs[i]} key={i}></a.div>
        )
      })}
      
    </div>
  );
}

export default Projects;
