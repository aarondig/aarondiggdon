import React, { useState, useEffect, useLayoutEffect, createRef, useMemo, useRef } from "react";
import "./style.css";
import { data } from "../../data/data";
import { Link, useNavigate } from "react-router-dom";
import useScrollLock from "../../hooks/scrollLock";

function ProjectsMobile({ isCurrent, setIsCurrent,  isPopup, setIsPopup, refs, setRefs, meshes, setMeshes, group, setScale, scaleRef }) {

const requestRef = useRef();
const navigate = useNavigate();
const scrollLock = useScrollLock()

  useEffect(()=>{
    if (isPopup) {
      navigate(`/${data[isCurrent].id}`)
    }
  })

//ON MOUNT FUNCTION
  useEffect(()=>{
    scrollLock.lock()
  
    navigate(`/`)
    setIsPopup(false);
    
    return ()=> scrollLock.unlock()
    },[])

  let objs = Array(data.length).fill({ dist: 0 });

  //Image Distance for MODULE (Was 1.2)
  //Image Distance for MODULE (Was .95)
  const spaceBetween = 1.15;

  //INERTIA SCROLL
  let speed = 0;
  let position = isCurrent;
  let rounded = 0;

  const Wheel = (e) => {
    speed += e.deltaY * 0.0003;
    
    //Add if touch event
  }

  window.addEventListener("wheel", Wheel)

  useLayoutEffect(() => {

  const onScroll = () => {
    position += speed;
    speed *= 0.8;

    objs.map((el, i) => {
      el.dist = Math.min(Math.abs(position - [data.length - i] + 1), 1);
      el.dist = Math.abs(el.dist);

      let scale = Math.abs(1 - 0.2 * el.dist);

      let saturation = 1 - 0.8 * el.dist;
      // let opacity = 1 - 0.5 * el.dist;
      
      let opacity = - .2 *(Math.abs(position - [data.length - i] + 1) * 1.8) + 1

      if (meshes[i].current) {
        meshes[i].current.position.y =
         i + (spaceBetween-1) * spaceBetween  + position - (data.length - 1) * (spaceBetween - (spaceBetween-1)) - (spaceBetween-1);
        

         // meshes[i].current.position.y = i * spaceBetween  + position - (data.length - 1) * spaceBetween;

         meshes[i].current.position.z = scale *.3
        

          meshes[i].current.scale.set(scale, scale, scale);
          
        meshes[i].current.material.uniforms.distanceFromCenter.value = scale;
        meshes[i].current.material.uniforms.saturation.value = saturation;
        meshes[i].current.material.uniforms.opacity.value = opacity;

        scaleRef[i].current = scale;
    
      }
    });

    rounded = Math.abs(Math.round(position));

    //Safety Nets to Keep In Bounds
    rounded = position > data.length - 1 ? data.length - 1 : rounded;
    rounded = position < 0 ? 0 : rounded;

    let diff = rounded - position;

    position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.6) * 0.04;

    setIsCurrent(rounded);

    requestRef.current = requestAnimationFrame(onScroll)
  };

  if (meshes[data.length - 1] !== undefined) {
    requestRef.current = requestAnimationFrame(onScroll);
  }
 
    return () => {
      cancelAnimationFrame(requestRef.current)
      window.removeEventListener("wheel", Wheel)
    }
  }, [meshes]);

  return (
    <div id="projects">
      
    </div>
  );
}

export default ProjectsMobile;
