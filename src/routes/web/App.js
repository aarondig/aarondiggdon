import { useState, useEffect, useRef, createRef } from "react";
import "./App.css";
import Wrapper from "../../components/Wrapper/index";

// import Module from "../../components/Module/index";
// import Projects from "../../Pages/Projects/index";
// import ProjectLoader from "../../Pages/Project/index";
import useWindowSize from "../../hooks/windowSize";
import { data } from "../../data";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
// import Navigation from "../../components/Navigation";
import Navigation from "./g-components/navigation/index";
import { AnimatePresence } from "framer-motion";
import About from "../../Pages/About";
import Loader from "../../Pages/Loader";
import Error from "./pages/error";
import Projects from "../web/pages/projects/index";
import Project from "../web/pages/project/index";

function App() {

  //ROUTER
  const basename = "a";

  const size = useWindowSize();

  const location = useLocation();
  const navigate = useNavigate();
  

  //Basic 

  const [isCurrent, setIsCurrent] = useState(0);

  const [loading, setLoading] = useState(true);
  const [refs, setRefs] = useState([]);

  //Kill Scale Refs to Improve performance.
  const [scaleRef, setScale] = useState([]);

  const [isPopup, setIsPopup] = useState(false);

  //THREEJS REFS
  const [meshes, setMeshes] = useState([]);
  const group = useRef();

  //PAGE TRANSITION

  const handleClick = (e) => {
    setIsPopup(true);
  };

  //STARTUP

  useEffect(() => {
    //Setting Grouped Refs

    // setRefs((refs) =>
    //   Array(data.length)
    //     .fill()
    //     .map((el, i) => refs[i] || createRef())
    // );
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

  }, []);

  //REFRESH HANDLING
  useEffect(() => {
    
    let url = location.pathname;

    //Change when loader Is built
    if (url === "/") {
      navigate(`${basename}/`, { replace: true });
    }
    // data.map((el, i) => {
    //   if (url === `/${basename}/projects/${el.id}`) {
    //     setIsPopup(true);
    //   }
    // });

    if (url === `/${basename}/projects/`) {
      setIsPopup(false);
    }
    if (url === `/${basename}/projects`) {
      setIsPopup(false);
    }
  
},[location]);

  //Props Passed to Pages
  // const projectsProps = {
  //   size: size,

  //   isCurrent: isCurrent,
  //   setIsCurrent: setIsCurrent,

  //   handleClick: handleClick,

  //   basename: basename,

  //   isPopup: isPopup,
  //   setIsPopup: setIsPopup,

  //   loading: loading,
  //   setLoading: setLoading,

  //   refs: refs,
  //   setRefs: setRefs,
  //   meshes: meshes,
  //   setMeshes: setMeshes,
  //   scaleRef: scaleRef,
  //   setScale: setScale,
  //   group: group,
  // };

  // const projectProps = {
  //   id: data[isCurrent].id,
  //   isCurrent: isCurrent,
  //   isPopup: isPopup,

  //   basename: basename,

  //   loading: loading,
  //   setLoading: setLoading,
  // };

  const moduleProps = {
    
    isCurrent: isCurrent,
    isPopup: isPopup,

    loading: loading,
    setLoading: setLoading,

    meshes: meshes,
    group: group,

    scaleRef: scaleRef,

    handleClick: handleClick,
  };

  const projectprops = {
    basename: basename,

  };


  const navProps = {
    basename: basename,
    location: location,

    setIsPopup: setIsPopup,
  };

  console.log(location)
  return (
    <Wrapper>
      <Navigation {...navProps} />

      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes>
          {/* Maybe Loader route shouldn't be a nester? */}

            <Route path={`/`} element={<About />}/>
            
            <Route path={`${basename}/`} element={<About />} />
            <Route path={`${basename}/home`} element={<About />} />
            <Route path={`${basename}/about`} element={<About />} />
            <Route path={`${basename}/projects`} element={<Projects />} />
            
            {data.map((el, i)=>{
            return (<Route path={`${basename}/projects/${el.id}`} element={<Project el={el} current={i} {...projectprops}/>} key={i}/>)
        })}
        
          <Route path="*" element={<Error />} />
          {/* <Route path={`${basename}`} element={<Loader basename={basename} />} /> */}
            {/* <Route
              path={`${basename}/projects`}
              element={<Projects {...projectsProps} />}
            >
              <Route
                path={`:id`}
                element={<ProjectLoader {...projectProps} />}
              />
            </Route> */}
          
        </Routes>
      </AnimatePresence>
      {/* <Module {...moduleProps} /> */}
    </Wrapper>
  );
}

export default App;
