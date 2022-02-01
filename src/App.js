import { useState, useEffect, useRef, createRef, Suspense } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/index";
import Landing from "./Pages/Landing";
import Background from "./components/Background/index";
import Module from "./components/Module/index";
import Projects from "./Pages/Projects/index";
import Project from "./Pages/Project/index";
import useWindowSize from "./hooks/windowSize";
import { data } from "../src/data/data";
import { Routes, Route, useLocation, useNavigate, useHref } from "react-router-dom";
import Navigation from "./components/Navigation";
import { a, useTransition } from "react-spring";


function App() {
  let navigate = useNavigate();
  // useNavigate is EXTRMELEY problematic and will not unmount components when called. Needs to be changed to <Link/> somehow. Thanks RR V6.
  let location = useLocation();


  const [isCurrent, setIsCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refs, setRefs] = useState([]);
  const project = useRef();

  const [isPopup, setIsPopup] = useState(false)



  //THREEJS REFS
  const [meshes, setMeshes] = useState([]);
  const group = useRef();
  
  //ANIMATIONS 
  const transitions = useTransition(location.pathname, {
    from: {opacity: 0, transform: "translate(0%,0)"},
    to: {opacity: 1, transform: "translate(100%,0)"},
    leave: {opacity: 0, transform: "translate(50%,0)"},
    initial: false,
  });



  

  const handleClick = (e) => {
      
    // navigate(`/diff`, {replace: true})
      setIsPopup(true)
      // let index = e.eventObject.value
      let index = (data.length - 1) - isCurrent

  }



  //Setting Grouped Refs
 
  useEffect(() => {
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
},[])


  //Page Refresh Based on Navigation




  //Props Passed to Pages
  const projectsProps = {
    isCurrent: isCurrent,
    setIsCurrent: setIsCurrent,
    isPopup: isPopup,

    loading: loading,
    setLoading: setLoading,

    refs: refs,
    setRefs: setRefs,
    meshes: meshes,
    setMeshes: setMeshes,
    group: group,
  };

  const projectProps = {
    isCurrent: isCurrent,

    project: project,
    meshes: meshes,
    group: group,
  };

  const moduleProps = {
    isCurrent: isCurrent,
    isPopup: isPopup,

    loading: loading,
    setLoading: setLoading,

    meshes: meshes,
    group: group,

    handleClick: handleClick,
  };

  const navProps = {
    location: location,
    setIsPopup: setIsPopup,
  }

  return (
    <Wrapper>
      <Navigation {...navProps}/>

      {/* {transitions((styles, item)=>{

return (
  <a.div style={{position: "absolute", width: "100%", height: "100%", ...styles}}>

</a.div>

)
      })} */}
      
      <Routes >
        
        {/* <Route path="/" element={<Landing/>}/> */}
        {/* <Route index element={<Projects {...projectsProps}/>}/> */}
        <Route path="/" element={
         <Projects {...projectsProps}/>
        }>
          
        </Route>
        <Route path={`/diff`} element={<Project {...projectProps}/>} />
        
  
      </Routes>

      <Module {...moduleProps}/>
      <Background isCurrent={isCurrent} isPopup={isPopup}/>
    </Wrapper>
  );
}

export default App;
