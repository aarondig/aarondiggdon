import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Carousel from "./components/carousel/index";
import { InView } from "react-intersection-observer";
import { data } from "../../../../data";
import "./style.css";
import {motion} from "framer-motion"

function Projects({ basename, isPopup, setIsPopup, setnavVisible }) {
  const navigate = useNavigate();

  let linestroke = "#fff"
  let circlestroke = "#505050"

  const spring = {
    type: "spring",
    damping: 60,
  stiffness: 200
  }
  return (
    
    <div id="projects">
       <motion.div
      id="screen"
      key="screen"
      transition={spring}
      initial={{ y: "0vh", background: "#050505" }}
      animate={{ y: "-100vh", background: "#ffffff" }}
      exit={{ y: "0vh", background: "#050505" }}
    /> 
      <div className="spacer" />

      <section className="title-section">
        <div className="main-title">
          <h2 className="line">Projects</h2>
          <div className="underline"></div>
          {/* <h6 className="main-subtitle">UX | UI Design</h6>
          <p className="main-text">
            Lorem ipsum dolor sit amet consectetur. Sit sed ultricies nisl vitae
            ac dui mi aliquam condimentum.
          </p> */}
        </div>
        {/* <div className="arrow">
              <svg
                width="67"
                height="66"
                viewBox="0 0 67 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34 21V45"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43 36L34 45L25 36"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div> */}
      </section>
      <InView id="navvisible" threshold={0} onChange={setnavVisible} />
      {/* <div className="spacer" /> */}
      <section className="project-list">
        {data.map((el, i) => {
          return (
            <div
              id={el.id}
              key={i}
              className="project"
              onClick={() => navigate(`${el.id}`)}
            >
              <div className="project-img-c">
                <img className="project-img" src={el.banner} alt="image"/>
              </div>
              <div className="project-text-c">
                <div className="col">
                  <h6 className="project-subtitle">{el.subtitle}</h6>
                  <h6 className="project-title">{el.title}</h6>
                  
                  <div className="arrow" style={{ borderColor: circlestroke }}>
              <svg
                width="67"
                height="66"
                viewBox="0 0 67 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34 21V45"
                  stroke={linestroke}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43 36L34 45L25 36"
                  stroke={linestroke}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Projects;
