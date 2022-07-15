import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Carousel from "./components/carousel/index";

// import ProjectSelector from "../../../../Pages/Project/index";
import { data } from "./../../../../data/data";
import "./style.css";


function Projects({basename, isPopup, setIsPopup}) {

  const [isCurrent, setIsCurrent] = useState(0)
  // const [isPopup, setIsPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setIsPopup(true);
   
  };



 
  //Page Transition
  const navigate = useNavigate();
  const location = useLocation();

  //Checking Location Match for Page Refresh
  const [isMatch, setIsMatch] = useState(false);


  useEffect(() => {
    let url = location.pathname;
    data.map((el, i) => {
      if (url === `/${basename}/projects/${el.id}`) {
        setIsCurrent(i);
        setIsPopup(true);
        setIsMatch(true);
        return true;
      } else return false;
    });
    return () => setIsMatch(false);
  }, []);

  useEffect(() => {
    if (!isMatch) {
      if (isPopup) {
        navigate(`${data[isCurrent].id}`);
      }
    } else {
      setIsMatch(false);
    }
  }, [isPopup]);




  const carouselProps = {
    isCurrent: isCurrent,
    setIsCurrent: setIsCurrent,
    handleClick: handleClick,
    isPopup: isPopup,
  }
  


  return (
    <div id="projects-mobile">
      <Carousel {...carouselProps}/>
      {isPopup && <Outlet context={{isCurrent, isPopup, loading, setLoading}}/>}
    </div>
  );
}

export default Projects;
