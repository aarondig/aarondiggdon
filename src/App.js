import { useState, useRef, useEffect } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/index";
import Landing from "./Pages/Landing";
import Background from "./components/Background/index";
import Projects from "./Pages/Projects/index";
import useWindowSize from "./hooks/windowSize";

function App() {
  const scroller = useRef();
  const [scroll, setScroll] = useState();
  const [page, setPage] = useState();

//   const size = useWindowSize()
// useEffect(()=>{

// })
// console.log(size.width)
 
  return (
    <Wrapper>
      <div id="scroller" ref={scroller}>
      {/* <Landing scroll={scroll}></Landing> */}
      <Projects></Projects>
      </div>
      {/* <Background></Background> */}
    </Wrapper>
  );
}

export default App;
