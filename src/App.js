import { useState, useEffect, useRef, createRef, Suspense } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/index";
import Landing from "./Pages/Landing";
import Background from "./components/Background/index";
import Module from "./components/Module/index";
import Projects from "./Pages/Projects/index";
import ProjectLoader from "./Pages/Project/index";
import useWindowSize from "./hooks/windowSize";
import { data } from "../src/data/data";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useHistory,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import { a, useTransition } from "react-spring";
import { AnimatePresence, motion } from "framer-motion";
import Title from "./components/Title";
import About from "./Pages/About";
import Loader from "./Pages/Loader";

import ModuleMobile from "./components/Module/mobile";

function App() {
  const [isMobile, setIsMobile] = useState();

  //ROUTER
  const basename = "aarondiggdon";

  const size = useWindowSize();

  let location = useLocation();
  const navigate = useNavigate();

  const [isCurrent, setIsCurrent] = useState(0);

  const [loading, setLoading] = useState(true);
  const [refs, setRefs] = useState([]);

  //Kill Scale Refs to Improve performance.
  const [scaleRef, setScale] = useState([]);
 


  const project = useRef();

  const [isPopup, setIsPopup] = useState(false);

  //THREEJS REFS
  const [meshes, setMeshes] = useState([]);
  const group = useRef();


//PAGE TRANSITION

  const handleClick = (e) => {
    setIsPopup(true);
  };

  //STARTUP
  // CHECK IF MOBILE
  useEffect(() => {
    if (size.width < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    // navigate()
  }, []);

  


  useEffect(()=>{
    console.log("APP SAYS: "+ isCurrent)
  },[isCurrent])

  useEffect(() => {
    //Setting Grouped Refs
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


    setScale((scaleRef) =>
      Array(data.length)
        .fill()
        .map((el, i) => scaleRef[i] || createRef())
    );

    //Refresh Handling
    let url = location.pathname;
    data.map((el, i) => {
      if (url === `/${basename}/projects/${el.id}`) {
        setIsPopup(true);
     
      }
    });

    //Change when loader Is built
    if (url === "/") {
      navigate(`${basename}/`, {replace: true})
    }
    
  }, []);


  //Props Passed to Pages
  const projectsProps = {
    isCurrent: isCurrent,
    setIsCurrent: setIsCurrent,

    basename: basename,

    isPopup: isPopup,
    setIsPopup: setIsPopup,

    loading: loading,
    setLoading: setLoading,

    refs: refs,
    setRefs: setRefs,
    meshes: meshes,
    setMeshes: setMeshes,
    scaleRef: scaleRef,
    setScale: setScale,
    group: group,
  };

  const projectProps = {
    id: data[isCurrent].id,
    isCurrent: isCurrent,

    basename: basename,

    loading: loading,
    setLoading: setLoading,
  };

  const moduleProps = {
    isMobile: isMobile,
    isCurrent: isCurrent,
    isPopup: isPopup,

    loading: loading,
    setLoading: setLoading,

    meshes: meshes,
    group: group,

    scaleRef: scaleRef,

    handleClick: handleClick,
  };

  const navProps = {
    basename: basename,
    location: location,
    
    setIsPopup: setIsPopup,
  };

  const bgProps = {

    isCurrent: isCurrent,
    isPopup: isPopup,


  };


  return (
    <Wrapper>
      <Navigation {...navProps} />

      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Loader basename={basename}/>}>
            <Route
              path={`${basename}`}
              element={<Projects {...projectsProps} />}
            />
            <Route
              path={`${basename}/projects/:id`}
              element={<ProjectLoader {...projectProps} />}
            />

            <Route path={`${basename}/about`} element={<About />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Title
        isCurrent={isCurrent}
        isPopup={isPopup}
        handleClick={handleClick}
        size={size}
      />
      <Module {...moduleProps} />

      <Background {...bgProps} />
    </Wrapper>
  );
}

export default App;
