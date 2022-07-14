import React, { useState, useEffect, useRef, createRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Landing({basename}) {
  const navigate = useNavigate();

  return (
    <div id="landing-mobile">
      <div className="content-block">
        <div className="col">
          <div className="intro-header-c">
            <h1 className="intro-header">My name is</h1>

            <h1 className="intro-header">Aaron</h1>
          </div>
          <p className="intro-text">
            I’m a visual designer and developer focused on creating experiences
            that immerse with the user.
          </p>
        </div>
      </div>
      <div className="content-block">
        <div className="buttons-c">
          <div className="button black" onClick={() => navigate(`${basename}/projects`)}>
            View Projects
          </div>
          <div className="button white" onClick={() => navigate(`${basename}/projects`)}>
            Contact Me
          </div>
        </div>
      </div>
      <div className="content-block">
        <ul className="detail-list">
          <li className="detail">
            <h2 className="detail-text">26</h2>
            <p className="detail-title">Awards</p>
          </li>
          <li className="detail">
            <h2 className="detail-text">32</h2>
            <p className="detail-title">Projects</p>
          </li>
          <li className="detail">
            <h2 className="detail-text">Railsr</h2>
            <p className="detail-title">Current Employer</p>
          </li>
        </ul>
      </div>
      <div className="dark-block">
        <div className="content-block">
          <div className="col">
            <div className="title-c">
              <h2 className="title">Full-Stack Web Development</h2>
              <h4 className="subtitle">Certified</h4>
            </div>
            <div className="slider">
              <div className="slider-rail">
              
                  <div className="button">React.js</div>
                  <div className="button">Javascript</div>
                  <div className="button">API Integration</div>
                  <div className="button">CSS</div>
                  <div className="button">User Experience</div>
                  <div className="button">HTML5</div>
              
              </div>
            </div>
            <div className="text-c-row">
            <p className="text">Through &nbsp;</p>
            {/* href="https://extension.berkeley.edu/public/category/courseCategoryCertificateProfile.do?method=load&certificateId=32408422#:~:text=The%20Berkeley%20Coding%20Boot%20Camp,like%20forms%2C%20quizzes%20and%20games." */}
            <a >
              <p className="text">UC Berkeley Extension</p>
            </a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
