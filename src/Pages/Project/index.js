import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { data } from "../../data/data";
import useWindowSize from "../../hooks/windowSize";
import Image from "../../components/Sections/Image/index";
import "./style.css";
import Article from "../../components/Sections/Article";
import useScrollLock from "../../hooks/scrollLock";
import {matchPath} from "react-router-dom"

function Project({ isCurrent, project }) {

  const size = useWindowSize();
  const scrollLock = useScrollLock();
  const scroller = useRef();

  const requestRef = useRef();

  let ease = 0.1;
  let current = 0;
  let previous = 0;
  let rounded = 0;

  useEffect(() => {
    document.body.style.height = `${
      scroller.current.getBoundingClientRect().height + size.height - 5
    }px`;
  }, [size.height]);


  useEffect(()=>{
    scrollLock.unlock()
    return ()=> scrollLock.lock()
    },[])


  // let speed = 0;
  // const Wheel = (e) => {
  //   speed += e.deltaY * 0.3;
  //   //Add if touch event
  // }

  // window.addEventListener("wheel", Wheel)
  // current += speed;
  // speed *= 0.8;



  // SCROLLING
  useLayoutEffect(() => {
    const skewScrolling = () => {

     
      //Set Current to the scroll position amount
      current = window.scrollY;
      // Set Previous to the scroll previous position
      previous += (current - previous) * ease;
      // Set rounded to
      rounded = Math.round(previous * 100) / 100;

      //VARIABLES
      const difference = current - rounded;
      const acceleration = difference / size.width;
      const velocity = +acceleration;
      const skew = velocity * 7.5;

      //Assign skew and smooth scrolling to the scroll container
      // scroller.current.style.transform = `translate3d(0, -${rounded}px, 0) skewY(${skew}deg)`;

      //No Skew with React Three Fiber Canvas... It extends page.
      scroller.current.style.transform = `translate3d(0, -${rounded}px, 0) skewY(${skew}deg)`;

      requestRef.current = requestAnimationFrame(skewScrolling);
    };

    window.scrollTo(0, 0);

    requestRef.current = requestAnimationFrame(skewScrolling);
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <Suspense>
    <div id="project" ref={project}> 
      <div className="scroller" ref={scroller}>
        <div className="textWrap">
          <div className="section">
            <h4 className="subtitle">About This Project</h4>
            <h1 className="title">{data[isCurrent].tagline}</h1>
            {/* <div className="row"> */}
            <p className="description">{data[isCurrent].about}</p>

            <div className="details">
              <div className="detail">
                <p className="label">Role</p>
                <p className="text">{data[isCurrent].role}</p>
              </div>
              <div className="detail">
                <p className="label">Client</p>
                <p className="text">{data[isCurrent].client}</p>
              </div>
              <div className="detail">
                <p className="label">Date</p>
                <p className="text">{data[isCurrent].date}</p>
              </div>
            </div>
            {/* </div> */}

            {/* <div className="title-c">
      </div> */}
          </div>

          {data[isCurrent].sections.map((el, i) => {
            switch (el.type) {
              default: {
                return (
                  <div className="section" key={i}>
                    <h1 className="title">{el.header}</h1>
                    {/* <div className="row"> */}
                    <p className="description">{el.body}</p>
                  </div>
                );
              }
              case "article": {
                return (
                  <div className="section" key={i}>
                    <Article el={el} isCurrent={isCurrent}/>
                  </div>
                );
              }
              case "image": {
                return (
                  <div className="section" key={i}>
                    <Image el={el} isCurrent={isCurrent}/>
                  </div>
                );
              }
              case "tech": {
                return (
                  <div className="section" key={i}>
                    {/* <Tech el={el} isCurrent={isCurrent}/> */}
                  </div>
                );
              }
            }
          })}
          
        </div>
      </div>
    </div>
    </Suspense>
  );
}

export default Project;
