import React, { useEffect, useRef } from "react";
import "./style.css";

function Landing({scroll}) {
  const panel = useRef()

  useEffect(()=> {
panel.current.style.transform = `translate(-${scroll*1000}px, 0)`
  },[scroll])
    return <div id="landing">
    <div ref={panel} className="panel">
      <div className="title-c">
        <h1 className="title">Welcome</h1>
        <h4 className="subtitle">My name’s Aaron. I’m a visual designer and developer working at home like the rest of you.</h4>
      </div>
    </div>
    </div>
  }
  
  export default Landing;
  
  