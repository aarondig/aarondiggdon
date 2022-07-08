import React, { useState, useEffect, useRef, createRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Carousel from "./components/carousel/index";
import Title from "./components/title/index";
import "./style.css";


function Projects() {


 //Page Transition
  const navigate = useNavigate();
  const location = useLocation();

  //Checking Location Match for Page Refresh
  const [isMatch, setIsMatch] = useState(false);

  // useEffect(() => {
  //   let url = location.pathname;
  //   data.map((el, i) => {
  //     if (url === `/${basename}/projects/${el.id}`) {
  //       setIsCurrent(i);
  //       setIsPopup(true);
  //       setIsMatch(true);
  //       return true;
  //     } else return false;
  //   });
  //   return () => setIsMatch(false);
  // }, []);

  // useEffect(() => {
  //   if (!isMatch) {
  //     if (isPopup) {
  //       navigate(`${data[isCurrent].id}`);
  //     }
  //   } else {
  //     setIsMatch(false);
  //   }
  // }, [isPopup]);

  return (
    <div id="projects">
      <Carousel/>
    </div>
  );
}

export default Projects;
