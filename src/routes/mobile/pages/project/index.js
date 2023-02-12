import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Error from "../error";

import { data } from "../../../../data";
import "./style.css";
import Portal from "./sections/portal";
import Text from "./sections/text";
import { InView } from "react-intersection-observer";
import downbtn from "../../../../Assets/svgs/projects/downbtn.svg"
import List from "./sections/list";

function Project({el, current, basename, setnavVisible}) {
const navigate = useNavigate();
const location = useLocation();

useEffect(()=>{
  window.scrollTo(0,0);
},[])
let linestroke = "#050505"
let circlestroke = "#e1e1e1"
  return (
    <div id="project">
        
        <div className="spacer"/>
        <InView id="navvisible" threshold={0} onChange={setnavVisible}/>
      <section className="title-section">
        <div className="main-title">
            
            <h6 className="main-subtitle">{el.subtitle}</h6>
            <h2 className="line">{el.title}</h2>
            {/* <p className="main-text">Lorem ipsum dolor sit amet consectetur. Sit sed ultricies nisl vitae ac dui mi aliquam condimentum.</p> */}
        </div>
        <div className="arrow" style={{borderColor: circlestroke}}>
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
        </section>
       
        <Portal el={el}/>
        {el.sections.map((e, i) => {
            switch (e.type) {
              default: {
   
                return (
                  <div className="section" key={i}>
                    <h1 className="title">{e.header}</h1>
                    {/* <div className="row"> */}
                    <p className="description">{e.body}</p>
                  </div>
                );
              }
              case "description": {
                return (
                  <Text e={e} key={i}/>
                );
              }
              case "list": {
                return (
                  <List e={e} key={i}/>
                );
              }
            }
        }
      )}
      
        
    </div>
  );
}

export default Project;