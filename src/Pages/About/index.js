import React, { Suspense, useState } from "react";
import {a, useSpring} from "@react-spring/core";
import {motion} from "framer-motion"
import Contact from "../../components/Contact";
import "./style.css";

function About() {
  
  


  //BUTTON ANIMATIONS
  const [btnHover, setBtnHover] = useState(false);
  const btnStyle = useSpring({
    borderColor: !btnHover ? "#252525" : "transparent",
    background: btnHover ? "#252525" : "transparent",

    config: { duration: 200 },
  });
  const btnText = useSpring({
    color: !btnHover ? "#252525" : "white",

    config: { duration: 200 },
  });

  //CONTACT PAGE ANIMATIONS
  const [contact, setContact] = useState(false);
  const imgStyles = useSpring({
    opacity: !contact ? 1 : 0.4,
    filter: !contact ? "blur(0px)" : "blur(20px)",

    config: { duration: 200 },
  });




  return (
    <motion.div id="about" initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <div
        className="right-panel"
        // onMouseOver={() => setContact(true)}
        // onMouseLeave={() => setContact(false)}
      >
        <Suspense fallback={null}>
          <div className="img-c">
          <a.img
            className="img"
            style={imgStyles}
            src="https://raw.githubusercontent.com/aarondig/aarondiggdon/main/src/Assets/Images/About/profile.jpg"
          />
          </div>
          <Contact contact={contact}/>
        </Suspense>
      </div>
      <div className="left-panel">
        <h1 className="name">Aaron Diggdon</h1>
        <h4 className="subtitle">San Francisco, CA</h4>
        <p className="text">
        Hi! I’m Aaron. I’m a a product designer specializing in user experience design and web development. Swipe to learn more.
        </p>
        <a.div
          className="btn"
          style={btnStyle}
          onMouseOver={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          onClick={() => setContact(!contact)}
        >
          <a.h4 className="btn-text" style={btnText}>
            Contact Me
          </a.h4>
        </a.div>
      </div>

      
    </motion.div>
  );
}

export default About;
