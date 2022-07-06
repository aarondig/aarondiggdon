import { useState, useEffect, useRef, createRef, Suspense } from "react";
import "./App.css";
import Wrapper from "../../components/Wrapper/index";
import Landing from "../../Pages/Landing";
import Projects from "./pages/projects/projects";
import ProjectLoader from "../../Pages/Project/index";
import useWindowSize from "../../hooks/windowSize";
import { data } from "../../data/data";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navigation from "../../components/Navigation";
import { a, useTransition } from "react-spring";
import { AnimatePresence, motion } from "framer-motion";
import About from "../../Pages/About";
import Loader from "../../Pages/Loader";

import ModuleMobile from "../../components/Module/mobile";

function App() {

  //ROUTER
  const basename = "aarondiggdon";

  const size = useWindowSize();

  let location = useLocation();
  const navigate = useNavigate();
  

  //Basic 

  const [isCurrent, setIsCurrent] = useState(0);

  const [loading, setLoading] = useState(true);
  const [refs, setRefs] = useState([]);

  //Kill Scale Refs to Improve performance.
  const [scaleRef, setScale] = useState([]);

  const project = useRef();

  const [isPopup, setIsPopup] = useState(false);


  //PAGE TRANSITION

  const handleClick = (e) => {
    setIsPopup(true);
  };

  //STARTUP

  useEffect(() => {
    //Setting Grouped Refs

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
  const projectsProps = {
    size: size,

    isCurrent: isCurrent,
    setIsCurrent: setIsCurrent,

    handleClick: handleClick,

    basename: basename,

    isPopup: isPopup,
    setIsPopup: setIsPopup,

    loading: loading,
    setLoading: setLoading,

    
  };

  const projectProps = {
    id: data[isCurrent].id,
    isCurrent: isCurrent,
    isPopup: isPopup,

    basename: basename,

    loading: loading,
    setLoading: setLoading,
  };


  const navProps = {
    basename: basename,
    location: location,

    setIsPopup: setIsPopup,
  };

  return (
    <Wrapper>
      <Navigation {...navProps} />

      
        <Routes>
        

            <Route path={`/`}/>
            <Route path={`${basename}`} element={<Loader basename={basename} />} />
            <Route
              path={`${basename}/projects`}
              element={<Projects {...projectsProps} />}
            >
              <Route
                path={`:id`}
                element={<ProjectLoader {...projectProps} />}
              />
            </Route>
            <Route path={`${basename}/about`} element={<About />} />
          
        </Routes>
 

    </Wrapper>
  );
}

export default App;
