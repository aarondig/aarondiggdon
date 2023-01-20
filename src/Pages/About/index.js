import React, {
  Suspense,
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import { a, useSpring, useSprings } from "react-spring";
import { motion } from "framer-motion";
import Contact from "../../components/Contact";
import "./style.css";
import useWindowSize from "../../hooks/windowSize";
import { InView } from "react-intersection-observer";
import image from "../../Assets/Images/About/blue-background.jpg"
import Expertise from "./components/expertise";
import Landing from "./components/landing";
import Portal from "./components/portal";
import Banner from "./components/banner";
import Process from "./components/process";
import Slider from "./components/slider";
import Intro from "./components/intro";


function About() {
  //BUTTON ANIMATIONS
  const [btnHover, setBtnHover] = useState(false);
  const btnStyle = useSpring({
    borderColor: !btnHover ? "#252525" : "transparent",
    background: btnHover ? "#252525" : "transparent",

    config: { duration: 200 },
  });
  const btnText = useSpring({
    color: !btnHover ? "#252525" : "white",

    config: { duration: 200 },
  });

  //CONTACT PAGE ANIMATIONS
  const [contact, setContact] = useState(false);
  const imgStyles = useSpring({
    opacity: !contact ? 1 : 0.4,
    filter: !contact ? "blur(0px)" : "blur(20px)",

    config: { duration: 200 },
  });

  // DIVIDING LINE - EVERYTHING ABOVE IS INACTIVE or OLD

  // const scrollLock = useScrollLock();
  const [startintro, setStartintro] = useState(true);
  const [startpage, setStartpage] = useState(false);
  const [startscroll, setStartscroll] = useState(false);

  // useEffect(() => {
  //   scrollLock.unlock();
  // }, []);

  const size = useWindowSize();

  //INERTIA SCROLL
  const requestref = useRef();
  const scroller = useRef();
  const b4img = useRef();
  // Sections
  const main = useRef();
  // Portal
  const portal = useRef();
  const portalclip = useRef();
  // Ornament
  const ornament = useRef();
  // Banner
  const banner = useRef();
  const bannerclip = useRef();
  // Process
  const process_col_0 = useRef();
  const process_col_1 = useRef();

  const process_img_0 = useRef();
  const process_img_1 = useRef();
  const process_img_2 = useRef();
  const process_img_3 = useRef();

  const process_svg = useRef();

  const [bodyHeight, setbodyHeight] = useState();
  const [b4imgHeight, setb4imgHeight] = useState();

  //Setting height of page for body
  useEffect(() => {
    if (startpage) {
      document.body.style.height = `${
        scroller.current.getBoundingClientRect().height
      }px`;
      setbodyHeight(scroller.current.getBoundingClientRect().height);
      setb4imgHeight(b4img.current.getBoundingClientRect().height);
      // Asnyc that starts Scrolling
      setStartscroll(true);
    }
  }, [startpage]);
// force location reload NOT DONE
  useEffect(() => {
    if (startpage) {
      setStartpage(false);
      setTimeout(() => {
        window.location.reload(true);
      }, 200)
      
    }
   
  }, [size.height]);

  
  

  // Functions
  const lerp = (x, y, a) => x * (1 - a) + y * a;
  const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
  const invlerp = (x, y, a) => clamp((a - x) / (y - x));
  const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));

  // let ease = .8;
  // let current = 0;
  // let previous = 0;
  let rounded = 0;
  //ADDING INERTIA
  let speed = 0;
  let position = 0;


  let prev = 0;
  let current = 0;
  let runcount = 0;

  const Wheel = (e) => {
    // speed += e.deltaY * 0.08;
    speed += e.deltaY * 0.2;
    //Add if touch event
  };

  window.addEventListener("wheel", Wheel);

  useLayoutEffect(() => {
    const skewScrolling = () => {
      if (scroller.current !== undefined) {
        // //Set Current to the scroll position amount
        // current = window.scrollY;
        // // Set Previous to the scroll previous position
        // previous += (current - previous) * ease;
        // // Set rounded to
        // rounded = Math.round(previous * 100) / 100;

        // position = rounded <= 0 ? 0 : rounded
        // position = position >= bodyHeight ? bodyHeight : position;
        position += speed;
        speed *= 0.8;

        if (position < 0) {
          position = 0;
          rounded = Math.round(position);
          speed = 0;
        }
        if ((position) >= (bodyHeight - size.height)) {
          position = (bodyHeight - size.height);
          rounded = Math.round(position);
          speed = 0;
        }
        if ((position) >= (document.body.style.height - size.height)) {
            position = (document.body.style.height - size.height);
            rounded = Math.round(position);
            speed = 0;

          }
    

        rounded = position;

        //  MOVING PARTS
        //  Page Scroller
        scroller.current.style.transform = `translate3d(0, -${rounded}px, 0)`;
        // Window
        if (portalclip.current !== undefined) {
          // Clip Path
          let inset = range(
            b4imgHeight,
            b4imgHeight + (size.height / 1.8) * 0.9,
            12,
            0,
            rounded
          );

          
          portalclip.current.style.clipPath = `inset(0px ${inset}vw)`;

          // Parallax
         
          // img.current.style.transform = `translate3d(0, -${rounded / 4}px, 0)`
          portal.current.style.transform = `translate3d(0, ${rounded / 2}px, 0) `;
          

          
        }

        // Banner 
        if (banner.current !== undefined) {
          if (banner.current.dataset.isvisible === "true") {
            
            if (runcount === 0) {
                prev = rounded;
                
            }
            current = (rounded - prev)
            if (current <= 0) {
              current = 0;
            }
            
            banner.current.style.transform = `translate3d(0, ${current / 2}px, 0) `;

            runcount += 1;
          }
          
        }
        // Main 
        if (main.current !== undefined) {
          main.current.style.transform = `translate3d(0, ${rounded / 2}px, 0) `;
        }
        // Ornament
        if (ornament.current !== undefined) {
          ornament.current.style.transform = `rotate(${rounded / 10}deg)`;
        }

        // Process

        if (process_svg.current !== undefined) {
          process_svg.current.style.transform = `rotate(${rounded / 10}deg)`;
        }
        // Columns

      //   if (process_col_0.current !== undefined) {
      //     if (process_col_0.current.dataset.isvisible === "true") {

          
      //     if (runcount === 0) {
      //       prev = rounded;
            
      //   }
      //   current = (rounded - prev)
      //   if (current <= 0) {
      //     current = 0;
      //   }
      //     process_col_0.current.style.transform = `translate3d(0, ${current / 22}px, 0)`
      //     runcount += 1;
      //   }
      // }
      if (process_col_1.current !== undefined) {
        if (process_col_1.current.dataset.isvisible === "true") {

        
        if (runcount === 0) {
          prev = rounded;
          
      }
      current = (rounded - prev)
      if (current <= 0) {
        current = 0;
      }
        process_col_1.current.style.transform = `translate3d(0, ${current / 8}px, 0)`
        runcount += 1;
      }
    }

    // Process - Images
    // Image 1
    if (process_img_0.current !== undefined) {
      if (process_col_1.current.dataset.isvisible === "true") {

      
      if (runcount === 0) {
        prev = rounded;
        
    }
    current = (rounded - prev)
    if (current <= 0) {
      current = 0;
    }
      process_img_0.current.style.transform = `translate3d(0, ${current / 22}px, 0)`
      runcount += 1;
    }
  }
  // Image 3
  if (process_img_1.current !== undefined) {
    if (process_col_1.current.dataset.isvisible === "true") {

    
    if (runcount === 0) {
      prev = rounded;
      
  }
  current = (rounded - prev)
  if (current <= 0) {
    current = 0;
  }
    process_img_1.current.style.transform = `translate3d(0, ${current /22}px, 0)`
    runcount += 1;
  }
}
// Image 2
if (process_img_2.current !== undefined) {
  if (process_col_1.current.dataset.isvisible === "true") {

  
  if (runcount === 0) {
    prev = rounded;
    
}
current = (rounded - prev)
if (current <= 0) {
  current = 0;
}
  process_img_2.current.style.transform = `translate3d(0, ${current /  22}px, 0)`
  runcount += 1;
}
}
// Image 4
if (process_img_3.current !== undefined) {
  if (process_col_1.current.dataset.isvisible === "true") {

  
  if (runcount === 0) {
    prev = rounded;
    
}
current = (rounded - prev)
if (current <= 0) {
  current = 0;
}
  process_img_3.current.style.transform = `translate3d(0, ${current / 22}px, 0)`
  runcount += 1;
}
}

      }
      requestref.current = requestAnimationFrame(skewScrolling);
    };
    window.scrollTo(0, 0);
    
    cancelAnimationFrame(requestref.current);
    requestref.current = requestAnimationFrame(skewScrolling);
    return () => {
      cancelAnimationFrame(requestref.current);
    };
  }, [startscroll]);

  // ANIMATIONS

  const page = useSpring({ opacity: startpage ? 1 : 0});


  const introprops = {
    startpage: startpage,
    setStartpage: setStartpage,
    startintro: startintro,
    setStartintro: setStartintro,
  };
  const svgprops = {
    ornament: ornament,
  };
  const landingprops = {
    startpage: startpage,
b4img: b4img,

    svgprops: svgprops,
  };
  const portalprops = {
    portal: portal,
    portalclip: portalclip,
  };
  
 
  const bannerprops = {
    banner: banner,
    bannerclip: bannerclip,
  };
  const processprops = {
    process_svg: process_svg,

    process_col_0: process_col_0,
    process_col_1: process_col_1,

    process_img_0: process_img_0,
    process_img_1: process_img_1,
    process_img_2: process_img_2,
    process_img_3: process_img_3,
  };
  const sliderprops = {
    
  };

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Intro {...introprops}/>
        <a.div className="page-c" ref={scroller} style={page}>
          <Landing {...landingprops}/>

          <Portal {...portalprops} />
<Expertise startpage={startpage}/>
{/* <Slider {...sliderprops}/> */}
{/* <Banner {...bannerprops}/> */}
<Process {...processprops}/>

          {/* <section className="page-section">
            <a.h6 className="main-subtitle">/ Expertise</a.h6>
            <a.div className="section-title">
              <a.h3 >
              UX Design / Graphic Design / Web + App Development / Branding /
                  </a.h3>
            </a.div>

            <a.p className="main-text">
              Currently based in London, Aaron is a visual designer and
              developer focusesd on creating immersive product expereinces.
            </a.p>
          </section> */}
        </a.div>
      {/* )} */}

      {/* </div> */}
    </motion.div>
  );
}

export default About;

{
  /* <div
        className="right-panel"
        // onMouseOver={() => setContact(true)}
        // onMouseLeave={() => setContact(false)}
      >
        <Suspense fallback={null}>
          <div className="img-c">
          <a.img
            className="img"
            style={imgStyles}
            src="https://raw.githubusercontent.com/aarondig/aarondiggdon/main/src/Assets/Images/About/profile.jpg"
          />
          </div>
          <Contact contact={contact}/>
        </Suspense>
      </div>
      <div className="left-panel">
        <h1 className="name">Aaron Diggdon</h1>
        <h4 className="subtitle">San Francisco, CA</h4>
        <p className="text">
        Hi! I’m Aaron. I’m a a product designer specializing in user experience design and web development. Swipe to learn more.
        </p>
        <a.div
          className="btn"
          style={btnStyle}
          onMouseOver={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          onClick={() => setContact(!contact)}
        >
          <a.h4 className="btn-text" style={btnText}>
            Contact Me
          </a.h4>
        </a.div>
      </div> */
}
