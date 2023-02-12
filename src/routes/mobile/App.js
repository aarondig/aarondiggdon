import { useState, useEffect, useRef, createRef, Suspense } from "react";
import "./App.css";
import Wrapper from "../../components/Wrapper/index";
import Landing from "./pages/landing/landing";
import Projects from "./pages/projects/index";


import About from "./pages/About";

import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./g-components/navigation";
import Project from "./pages/project/index";
import {data} from "../../data"
import Error from "./pages/error";

function App() {
  const [isPopup, setIsPopup] = useState(false);

  const [navvisible, setnavVisible] = useState(true);

  //ROUTER
  const basename = "aarondiggdon";

  const location = useLocation();

  const navProps = {
    basename: basename,
    location: location,

    setIsPopup: setIsPopup,
    navvisible: navvisible,
  };

  const projectsProps = {
    basename: basename,
    isPopup: isPopup,
    setIsPopup: setIsPopup,

    setnavVisible: setnavVisible,
   
  };
  const projectprops = {
    basename: basename,

  };
  const landingProps = {
    basename: basename,
  };
  const aboutProps = {
    setnavVisible: setnavVisible,
  };

  return (
    <Wrapper>
      <Navigation {...navProps} />

      <Routes>
        <Route path={`/`} element={<About />} />
        <Route path={`/${basename}/`} element={<About {...aboutProps} />} />
        <Route path={`/${basename}/home`} element={<About {...aboutProps} />} />
        <Route path={`/${basename}/about`} element={<About {...aboutProps} />} />
        {/* <Route path={`/`} element={<Landing {...landingProps}/>}/>
            <Route path={`/${basename}/`} element={<Landing {...landingProps}/>}/> */}
        <Route
          path={`${basename}/projects`}
          element={<Projects {...projectsProps} />}
        >
        </Route>
        {data.map((el, i)=>{
            return (<Route path={`${basename}/projects/${el.id}`} element={<Project el={el} current={i} {...projectprops}/>} key={i}/>)
        })}
          <Route path="*" element={<Error />} />
      </Routes>

    </Wrapper>
  );
}

export default App;
