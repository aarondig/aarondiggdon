import { useState, useRef, useEffect } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Landing from "./Pages/Landing";
import Background from "./components/Background";
import Projects from "./Pages/Projects";
import useWindowSize from "./hooks/windowSize";

function App() {
  const scroller = useRef();
  const [scroll, setScroll] = useState();
  const [page, setPage] = useState();

//   const size = useWindowSize()
// useEffect(()=>{

// })
// console.log(size.width)

  // let speed = 0;
  // let position = 0;
  // let rounded = 0;
  // let diff = 0;

  // window.addEventListener("wheel", (e) => {
  //   //Add if touch event

  //   speed += e.deltaY * 0.0003;
  // });

  // const onScroll = () => {
  //   position += speed;
  //   speed *= 0.8;
  //   rounded = Math.round(position);

  //   if (rounded < 0) {
  //     rounded = 0
  //   }

  //   diff = rounded - position;
  //   position += diff * 0.02;

  

  //   setScroll(position)


  //   if (Math.round(scroll * 10) / 10 === rounded) {
  //     return
  //   } else {
  //     requestAnimationFrame(() => onScroll());
  //   }
    
  // };

  // useEffect(() => {
  //   requestAnimationFrame(() => onScroll());
  // }, []);

  // useEffect(() => {
  //   console.log(Math.round(scroll))
  // }, [Math.round(scroll)]);
 


  return (
    <Wrapper>
      <div id="scroller" ref={scroller}>
      {/* <Landing scroll={scroll}></Landing> */}
      <Projects></Projects>
      </div>
      <Background></Background>
    </Wrapper>
  );
}

export default App;
