import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Carousel from "./components/carousel/index";
import { InView } from "react-intersection-observer";
import { data } from "../../../../data";
import "./style.css";

function Projects({ basename, isPopup, setIsPopup, setnavVisible }) {
  const navigate = useNavigate();

  let linestroke = "#fff"
  let circlestroke = "#505050"
  return (
    <div id="projects">
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
        {/* <div className="arrow" style={{ borderColor: circlestroke }}>
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
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M43 36L34 45L25 36"
              stroke={linestroke}
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
                <img className="project-img" src={el.banner} />
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
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M43 36L34 45L25 36"
                        stroke={linestroke}
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
