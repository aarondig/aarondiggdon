import React, { useState, useEffect, useRef, createRef } from "react";
import "./style.css";


function Projects() {


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

  return (
    <div id="projects">
      
    </div>
  );
}

export default Projects;
