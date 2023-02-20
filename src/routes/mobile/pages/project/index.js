import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Error from "../error";

import { data } from "../../../../data";
import "./style.css";
import Portal from "./sections/portal";
import Text from "./sections/text";
import { InView } from "react-intersection-observer";
import downbtn from "../../../../Assets/svgs/projects/downbtn.svg";
import List from "./sections/list";
import Image from "./sections/image";
import { a, useSpring } from "react-spring";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

function Project({ el, current, basename, setnavVisible }) {
  const navigate = useNavigate();
  const location = useLocation();

  //Selecting Page
  const handleNext = () => {
    if (current >= data.length - 1) {
      navigate(`/${basename}/projects/${data[0].id}`);
    }
    if (current < data.length - 1) {
      navigate(`/${basename}/projects/${data[current + 1].id}`);
    }
  };
  const handlePrev = () => {
    if (current <= 0) {
      navigate(`/${basename}/projects/${data[data.length - 1].id}`);
    }
    if (current > 0) {
      navigate(`/${basename}/projects/${data[current - 1].id}`);
    }
  };

  // Swipeable
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  // const indexSprings = useSprings(
  //   data.length,
  //   data.map((el, i) =>
  //     i === current
  //       ? {
  //           from: { opacity: 0.1 },
  //           to: { opacity: 1 },
  //         }
  //       : {
  //           from: { opacity: 1 },
  //           to: { opacity: 0.1 },
  //         }
  //   )
  // );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 60,
  };
  let linestroke = "#050505";
  let circlestroke = "#e1e1e1";

  return (
    <motion.div
      id="project"
      // transition={spring}
      // key={data[current].id}

      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      <InView id="navvisible" threshold={0} onChange={setnavVisible} />
      <div className="spacer" />

      <section className="title-section" {...handlers}>
        <div className="main-title">
          <h6 className="main-subtitle">{el.subtitle}</h6>
          <h2 className="line">{el.title}</h2>
          {/* <p className="main-text">Lorem ipsum dolor sit amet consectetur. Sit sed ultricies nisl vitae ac dui mi aliquam condimentum.</p> */}
        </div>
        <div className="project-row">
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
          <ul className="index-c">
            {data.map((el, i) => {
              return (
                <a.div
                  className="index"
                  key={i}
                  // style={{background: i === current ? "#050505" : "#fff"}}
                  // style={indexSprings[i]}
                  onClick={() =>
                    navigate(`/${basename}/projects/${data[i].id}`)
                  }
                >
                  <div
                    className="index-line"
                    style={{
                      background: i === current ? "#050505" : "#e1e1e1",
                    }}
                  />
                </a.div>
              );
            })}
          </ul>
        </div>
      </section>

      <Portal el={el} />
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
          case "text": {
            return <Text e={e} key={i} />;
          }
          case "list": {
            return <List e={e} key={i} />;
          }
          case "image": {
            return <Image e={e} key={i} />;
          }
        }
      })}
    </motion.div>
  );
}

export default Project;
