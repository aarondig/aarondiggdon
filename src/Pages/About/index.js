import React, { useState } from "react";
import { a, useSpring } from "react-spring";
import "./style.css";

function About() {
  const [btnHover, setBtnHover] = useState(false)

  const btnStyle = useSpring({
 
    borderColor: !btnHover ? "#252525" : "transparent",
      background: btnHover ? "#252525" : "transparent",
      config:{duration: 200}
    
  })
  const btnText = useSpring({
    color: !btnHover ? "#252525" : "white",
 config:{duration: 200}
    })

    return <div id="about">
    
      <div className="panel">
      <h1 className="name">Aaron Diggdon</h1>
      <h4 className="subtitle">San Francisco, CA</h4>
      <p className="text">Depending on the user interface, you might not need an index route, but if there is any sort of persistent navigation in the parent route you'll most likely want index.</p>
      <a.div className="btn" style={btnStyle} onMouseOver={()=> setBtnHover(true)} onMouseLeave={()=> setBtnHover(false)} onClick={null}>
              <a.h4 className="btn-text" style={btnText}>Learn More</a.h4>
            </a.div>
        
      </div>
      <div className="profile-pic">
      <img className="img" src="https://raw.githubusercontent.com/aarondig/designPortfolio/main/src/Assets/Images/profile.jpeg"/>
      </div>
    </div>
  }
  
  export default About;
  
  