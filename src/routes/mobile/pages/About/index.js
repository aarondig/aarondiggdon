import React, {
  Suspense,
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import { a, useSpring, useSprings } from "react-spring";
import { motion } from "framer-motion";
import "./style.css";
import useWindowSize from "../../../../hooks/windowSize";
import { InView } from "react-intersection-observer";
import image from "../../../../Assets/Images/About/blue-background.jpg"
import Expertise from "./components/expertise";
import Landing from "./components/landing";
import Portal from "./components/portal";
import Banner from "./components/banner";
import Process from "./components/process";
import Slider from "./components/slider";
import Intro from "./components/intro";
import Contact from "./components/contact";


function About({setnavVisible}) {

  const [startintro, setStartintro] = useState(false);
  const [startpage, setStartpage] = useState(true);

  const [startscroll, setStartscroll] = useState(false);

 

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


  useEffect(()=>{
setStartpage(true)
  },[])

  



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
      {/* <Intro {...introprops}/> */}

      <InView id="navvisible" threshold={0} onChange={setnavVisible}/>
        <a.div className="page-c" style={page}>
          <Landing {...landingprops}/>

          <Portal {...portalprops} />
<Expertise startpage={startpage}/>
{/* <Slider {...sliderprops}/> */}
{/* <Banner {...bannerprops}/> */}
<Process {...processprops}/>
<Contact/>
         
        </a.div>
     
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
