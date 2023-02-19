import React, {
  Suspense,
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import { a, useSprings } from "react-spring";
import { InView } from "react-intersection-observer";

import "./style.css";

import resume from "../../../../Assets/other/contact/aarondiggdon.pdf";
import code from "../../../../Assets/svgs/about/code-t.svg";
import email from "../../../../Assets/svgs/about/email-t.svg";
import file from "../../../../Assets/svgs/about/file-t.svg";

function Contact({ startpage }) {
  const [isVisible, setIsVisible] = useState();

  const items = [
    {
      title: "LinkedIn",
      text: "Reach out and get in touch. Let's connect!",
      icon: email,
      link: "https://www.linkedin.com/in/aarondiggdon/",
    },
    {
      title: "Github",
      text: "Jump into the deep end with my web development workflow.",
      icon: code,
      link: "https://github.com/aarondig",
    },
    {
      title: "Resume",
      text: "Take a look at my professional expertise and experience.",
      icon: file,
      link: resume,
    },
  ];

  return (
    <InView id="contact" threshold={0.6} onChange={setIsVisible}>
      <div className="contact-c">
        <section className="page-section">
          <div className="main-title">
            <a.h2 className="line">Let's</a.h2>
            <a.h2 className="line">Get In Touch</a.h2>

            {/* <a.h3 >
              UX Design / Graphic Design / Web + App Development / Branding /
                  </a.h3> */}
          </div>
          <div className="contact-cards">
            {items.map((el, i) => {
              return (
                
                  <div className="contact-card"    key={i}>
                    <a
                  href={el.link}
               
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <img className="card-icon" src={el.icon} alt="image"/>
                    <h4 className="card-title">{el.title}</h4>
                    <p className="card-text">{el.text}</p>
                    </a>
                  </div>
             
              );
            })}
          </div>

          {/* <a.p className="main-text">
              Currently based in London, Aaron is a visual designer and
              developer focusesd on creating immersive product expereinces.
            </a.p> */}
        </section>
      </div>
    </InView>
  );
}

export default Contact;
