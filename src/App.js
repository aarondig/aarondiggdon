import { useState, useEffect, useRef, createRef } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/index";
import Landing from "./Pages/Landing";
import Background from "./components/Background/index";
import Module from "./components/Module/index";
import Projects from "./Pages/Projects/index";
import Project from "./Pages/Project/index";
import useWindowSize from "./hooks/windowSize";
import { data } from "../src/data/data";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  let location = useLocation();

  const [isCurrent, setIsCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refs, setRefs] = useState([]);
  const project = useRef();

  //THREEJS REFS
  const [meshes, setMeshes] = useState([]);
  const group = useRef();

  //Setting Grouped Refs
  let objs = Array(data.length).fill({ dist: 0 });
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

  //Image Distance for MODULE (Was 1.2)
  const spaceBetween = 0.95;

  //INERTIA SCROLL
  let speed = 0;
  let position = 0;
  let rounded = 0;

  window.addEventListener("wheel", (e) => {
    //Add if touch event

    speed += e.deltaY * 0.0003;
  });

  const onScroll = (stop) => {
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

    if (isCurrent !== rounded) {
      setIsCurrent(rounded);
    }

//LEARN HOW TO STOP THIS TRAIN
   
        requestAnimationFrame(() => onScroll())
    
  };

 
  const handleClick = (e) => {

   navigate("../project", {replace: true})

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
          
        } 
      })
  }


  //Props Passed to Pages
  const projectsProps = {
    onScroll: onScroll,
    isCurrent: isCurrent,
    
    loading: loading,
    setLoading: setLoading,

    refs: refs,
    meshes: meshes,
    group: group,
  };

  const projectProps = {
    onScroll: onScroll,
    isCurrent: isCurrent,

    project: project,
    meshes: meshes,
    group: group,
  };

  return (
    <Wrapper>
      {/* <Landing scroll={scroll}></Landing> */}
      <Routes>
        <Route path="/" element={<Projects {...projectsProps}/>} />
        <Route path="/project" element={<Project {...projectProps}/>} />
      </Routes>
      <Module refs={meshes} group={group} setLoading={setLoading} handleClick={handleClick} />
      {/* <Background isCurrent={isCurrent}/> */}
    </Wrapper>
  );
}

export default App;
