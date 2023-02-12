import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Carousel from "./components/carousel/index";
import { InView } from "react-intersection-observer";
import { data } from "../../../../data";
import "./style.css";

function Projects({ basename, isPopup, setIsPopup, setnavVisible }) {
  const navigate = useNavigate();

  return (
    <div id="projects">
      
      <div className="spacer" />
      
      <section className="title-section">
        <div className="main-title">
          <h2 className="line">Projects</h2>
          {/* <h6 className="main-subtitle">UX | UI Design</h6>
          <p className="main-text">
            Lorem ipsum dolor sit amet consectetur. Sit sed ultricies nisl vitae
            ac dui mi aliquam condimentum.
          </p> */}
        </div>
       
      </section>
      <InView id="navvisible" threshold={0} onChange={setnavVisible}/>
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
                
                <img className="project-img" src={el.banner} />
                <div className="project-text-c">
                  
                  <h6 className="project-subtitle">{el.subtitle}</h6>
                  <h6 className="project-title">{el.title}</h6>
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
