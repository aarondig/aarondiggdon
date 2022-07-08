import { useState, useEffect, useRef, createRef, Suspense } from "react";
import "./App.css";
import Wrapper from "../../components/Wrapper/index";
import Landing from "./pages/landing/landing";
import Projects from "./pages/projects/projects";

import Carousel from "./pages/projects/components/carousel/index"

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

  const [isPopup, setIsPopup] = useState(false);

  //ROUTER
  const basename = "aarondiggdon";

  const size = useWindowSize();

  let location = useLocation();
  const navigate = useNavigate();
  


  const navProps = {
    basename: basename,
    location: location,

    setIsPopup: setIsPopup,
  };

  return (
    <Wrapper>
      <Navigation {...navProps} />

      
        <Routes>
        

            <Route path={`/`} element={<Carousel />}/>
            <Route path={`${basename}`} element={<Projects />} />
            {/* <Route
              path={`${basename}/projects`}
              element={<Projects {...projectsProps} />}
            >
              <Route
                path={`:id`}
                element={<ProjectLoader {...projectProps} />}
              />
            </Route>
            <Route path={`${basename}/about`} element={<About />} /> */}
          
        </Routes>
 

    </Wrapper>
  );
}

export default App;
