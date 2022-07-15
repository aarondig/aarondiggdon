import React, {
  useState,
  useEffect,
} from "react";
import { data } from "../../data/data";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import ProjectSelector from "../../components/ProjectSelector";

import "./style.css";
import Title from "../../components/Title";
import Background from "../../components/Background";

function Projects({
  isCurrent,
  setIsCurrent,
  isPopup,
  setIsPopup,
  meshes,
  setMeshes,
  group,
  setScale,
  scaleRef,
  handleClick,
  size,
  basename,
}) {
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

  const selectorProps = {
    isCurrent: isCurrent,
    setIsCurrent: setIsCurrent,

    isPopup: isPopup,
    setIsPopup: setIsPopup,

    meshes: meshes,
    setMeshes: setMeshes,
    scaleRef: scaleRef,
    setScale: setScale,
    group: group,
  };
  const titleProps = {
    isCurrent: isCurrent,
    isPopup: isPopup,
    handleClick: handleClick,
    size: size,
  };
  const bgProps = {
    isCurrent: isCurrent,
    isPopup: isPopup,
  };

  return (
    <div id="projects">
      <Background {...bgProps} />
      <Title {...titleProps} />
      {!isPopup ? <ProjectSelector {...selectorProps} /> : <Outlet />}
    </div>
  );
}

export default Projects;
