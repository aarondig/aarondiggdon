import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Error from "../error";

import { data } from "../../../../data";
import "./style.css";
import Portal from "./sections/portal";
import Text from "./sections/text";


function Project({el, current, basename}) {
const navigate = useNavigate();
const location = useLocation();

useEffect(()=>{
  window.scrollTo(0,0);
},[])

  return (
    <div id="project">
        
        <div className="spacer"/>
      <section className="page-section">
        <div className="main-title">
            <h2 className="line">{el.title}</h2>
            <h6 className="main-subtitle">{el.subtitle}</h6>
            {/* <p className="main-text">Lorem ipsum dolor sit amet consectetur. Sit sed ultricies nisl vitae ac dui mi aliquam condimentum.</p> */}
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
            }
        }
      )}
      
        
    </div>
  );
}

export default Project;