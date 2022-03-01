import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { a, useSpring, useSprings, config } from "react-spring";
import { data } from "../../data/data";
import "./style.css";
import Resume from "../../Assets/Resume.pdf"

function Contact({ contact }) {

  const [hovered, setHovered] = useState(false)

  const items = [
      {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/aarondiggdon/",
      },
      {
        title: "Github",
        link: "https://github.com/aarondig",
      },
      {
        title: "Resume",
        link: Resume,
      },
  ];

  //ANIMATIONS
  const springs = useSprings(
    items.length,
    items.map((el, i) => ({
      from: {
        opacity: 0,
        transform: "scale(1)",
      },
      to: {
        opacity: contact ? 1 : 0,
        transform: contact ? "translateY(0)" : `translateY(${-50}px)`,
        
      },
      
      delay: 150 * i,
      config: {
        mass: 1,
        tension: 280,
        friction: 18
      },
    }))
  );
  const hover = useSprings(
    items.length,
    items.map((el, i) => ({
      from: {
        opacity: 1,
        transform: "scale(1)",
      },
      to: {
        opacity: hovered ? (i+1 === hovered ? 1 : .6) : 1,
        transform: i+1 === hovered ? "scale(1.2)" : "scale(1)",
      },
      
      
      config: {mass: 1, tension: 280, friction: 18},
    }))
  );
 

  return (
    // <div id="contact">
      <a.ul className="contact-list" >
      {items.map((el, i) => {
        console.log(el)
        return (
          <a.a className="contact-link" style={springs[i]} onMouseOver={()=>setHovered(i+1)} onMouseLeave={()=>setHovered(false)} href={el.link} target='_blank' rel='noopener noreferrer'>     
              <a.h4 className="contact-text" style={hover[i]}>{el.title}</a.h4>
            </a.a>
        );
      })}
      </a.ul>
    // </div>
  );
}

export default Contact;
