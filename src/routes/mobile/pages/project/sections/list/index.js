import React, {
    Suspense,
    useEffect,
    useState,
    useLayoutEffect,
    useRef,
  } from "react";
import { a, useSpring, useSprings, easings } from "react-spring";
import { InView } from "react-intersection-observer";

import "./style.css";

function List(e) {

  const [isVisible, setIsVisible]= useState(false);
  
  const listsprings = useSprings(
    e.e.items.length,
    e.e.items.map((el, i) =>
    isVisible
        ? {
            from: {
              opacity: 0,
              transform: `translateY(+20px)`,
            },
            to: {
              opacity: 1,
              transform: `translateY(0px)`,
            },
  
            delay: 220 * i,
           
          }
        : {
            from: {
              transform: `translateY(0px)`,
              opacity: 1,
            },
            to: {
              transform: `translateY(-20px)`,
              opacity: 0,
            },
  
            delay: 220 * i,
            
          
          }
    )
  );
  return (
    
    <section id="list" className="page-section"  style={e.e.darkmode ? {background: "#050505"} : {background: "#fff"}}>
      <div className="text-c">
        <div className="col-left">
     
        <div className="title" style={e.e.darkmode ? {color: "#fff"} : {color: "#050505"}}>{e.e.title}</div>
        <div className="subtitle">{e.e.subtitle}</div>
        </div>
        <div className="col-right">
        <InView className="list" onChange={setIsVisible}>
        {e.e.items.map((element, i)=>{
          return (<a.div className="list-item" key={i} style={listsprings[i]}>
            <div className="circle-num"  style={e.e.darkmode ? {borderColor: "#252525", color: "white"} : {borderColor: "#e1e1e1", color: "#050505"}}>{i+1}</div>
            <p className="text"  style={e.e.darkmode ? {color: "#fff"} : {color: "#050505"}}>{element}</p>
            </a.div>)
        })}
        </InView>
        {/* <div className="details">
        {e.e.details.map((element, i)=>{
          return (<div className="detail">
         <p className="detail-title">{element.title}</p>
         <p className="detail-content">{element.content}</p></div>)
        })}
        </div> */}
        </div>
            
            
          
        </div>
    </section>
  );
}
  
  export default List;