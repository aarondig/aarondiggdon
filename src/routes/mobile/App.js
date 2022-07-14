import { useState, useEffect, useRef, createRef, Suspense } from "react";
import "./App.css";
import Wrapper from "../../components/Wrapper/index";
import Landing from "./pages/landing/landing";
import Projects from "./pages/projects/projects";
import Carousel from "./pages/projects/components/carousel/index"

import ProjectLoader from "./pages/project/project";


import useWindowSize from "../../hooks/windowSize";
import { data } from "../../data/data";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navigation from "./g-components/navigation";
import About from "../../Pages/About";
import Loader from "../../Pages/Loader";


import ModuleMobile from "../../components/Module/mobile";

function App() {

  
  const [isPopup, setIsPopup] = useState(false);
  let mobile = true;

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

  const projectsProps = {
    basename: basename,
    isPopup: isPopup,
    setIsPopup: setIsPopup,

    mobile: mobile,


  };
  const landingProps = {
    basename: basename,
  };

  

  return (
    <Wrapper>
      <Navigation {...navProps} />

      
        <Routes>
        

            {/* <Route path={`/`} element={<Landing {...landingProps}/>}/>
            <Route path={`/${basename}/`} element={<Landing {...landingProps}/>}/> */}
            <Route path={`${basename}/projects`} element={<Projects {...projectsProps}/>} >
            <Route
                path={`:id`}
                element={<ProjectLoader />}
              />
            </Route>
            
          
        </Routes>
      {/* <Carousel /> */}

    </Wrapper>
  );
}

export default App;
