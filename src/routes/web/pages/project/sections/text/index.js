import React, {
    Suspense,
    useEffect,
    useState,
    useLayoutEffect,
    useRef,
  } from "react";
import { a, useSpring, useSprings } from "react-spring";
import { InView } from "react-intersection-observer";

import "./style.css";

function Text(e) {


  return (
    <section className="page-section">
      <div className="text-c">
        <div className="col-left">
     
        <div className="title">{e.e.title}</div>
        <div className="subtitle">{e.e.subtitle}</div>
        </div>
        <div className="col-right">
        <div className="paragraphs">
        {e.e.text.map((element, i)=>{
          return (<><p className="text">{element}</p><br/></>)
        })}
        </div>
        <div className="details">
        {e.e.details.map((element, i)=>{
          return (<div className="detail">
         <p className="detail-title">{element.title}</p>
         <p className="detail-content">{element.content}</p></div>)
        })}
        </div>
        </div>
            
            
          
        </div>
    </section>
  );
}
  
  export default Text;