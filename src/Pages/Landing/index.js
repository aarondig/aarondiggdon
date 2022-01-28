import React, { useEffect, useRef } from "react";
import {Link} from "react-router-dom"
import "./style.css";

function Landing({scroll}) {
  const panel = useRef()

  useEffect(()=> {
return ()=>console.log("Landing unmount")
  },[])
    return <div id="landing">
    <div ref={panel} className="panel">
      <div className="title-c">
        <Link to="projects">
        <h1 className="title">Welcome</h1>
        </Link>
        <h4 className="subtitle">My name’s Aaron. I’m a visual designer and developer working at home like the rest of you.</h4>
      </div>
    </div>
    </div>
  }
  
  export default Landing;
  
  