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

function Svg({ svg }) {
  return (
    <div className="spinning-c" >

      <svg
      className="spinning-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="198"
        height="201"
        viewBox="0 0 198 201"
        fill="none"
        ref={svg}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M98.9555 0.895508V42.1212H98.3555V0.895508H98.9555Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M64.7357 6.81689L78.8332 45.5535L78.2693 45.7587L64.1719 7.02209L64.7357 6.81689Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34.6081 24.1074L61.0879 55.6698L60.6282 56.0555L34.1484 24.4931L34.6081 24.1074Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.1907 50.6255L47.8946 71.2488L47.5944 71.7683L11.8906 51.145L12.1907 50.6255Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.21349 83.2402L40.8117 90.3936L40.7076 90.9844L0.109375 83.8311L0.21349 83.2402Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.109375 117.96L40.7076 110.807L40.8117 111.398L0.21349 118.551L0.109375 117.96Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.8906 150.625L47.5944 130.023L47.8943 130.543L12.1905 151.145L11.8906 150.625Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34.1484 177.298L60.6282 145.735L61.0879 146.121L34.6081 177.683L34.1484 177.298Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M64.1719 194.769L78.2693 156.032L78.8332 156.237L64.7357 194.974L64.1719 194.769Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M98.3555 200.896V159.67H98.9555V200.896H98.3555Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M132.574 194.974L118.477 156.237L119.04 156.032L133.138 194.769L132.574 194.974Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M162.704 177.684L136.203 146.121L136.663 145.735L163.163 177.298L162.704 177.684Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M185.098 151.166L149.395 130.543L149.695 130.023L185.398 150.647L185.098 151.166Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M197.079 118.551L156.48 111.398L156.585 110.807L197.183 117.96L197.079 118.551Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M197.183 83.8311L156.585 90.9844L156.48 90.3936L197.079 83.2402L197.183 83.8311Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M185.398 51.1662L149.694 71.7685L149.395 71.2489L185.098 50.6465L185.398 51.1662Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M163.163 24.4932L136.663 56.0557L136.203 55.6698L162.704 24.1074L163.163 24.4932Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M133.138 7.02209L119.04 45.7587L118.477 45.5535L132.574 6.81689L133.138 7.02209Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M88.7472 42.9688L92.9513 66.834L92.3604 66.9381L88.1562 43.0728L88.7472 42.9688Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M69.5315 49.8359L81.6419 70.8357L81.1221 71.1355L69.0117 50.1357L69.5315 49.8359Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M53.8228 62.8906L72.3963 78.4522L72.011 78.9121L53.4375 63.3505L53.8228 62.8906Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.5175 80.5127L66.2952 88.7955L66.0902 89.3594L43.3125 81.0766L43.5175 80.5127Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.8828 100.596H64.1037V101.196H39.8828V100.596Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.3125 120.714L66.0902 112.431L66.2952 112.995L43.5175 121.278L43.3125 120.714Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M53.4375 138.44L72.011 122.878L72.3963 123.338L53.8228 138.899L53.4375 138.44Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M69.0117 151.656L81.1221 130.656L81.6419 130.956L69.5315 151.955L69.0117 151.656Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M88.1562 158.718L92.3604 134.853L92.9513 134.957L88.7472 158.822L88.1562 158.718Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M108.573 158.822L104.348 134.957L104.938 134.853L109.164 158.718L108.573 158.822Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M127.784 151.955L115.652 130.955L116.172 130.655L128.303 151.655L127.784 151.955Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M143.474 138.899L124.922 123.338L125.307 122.878L143.86 138.44L143.474 138.899Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M153.776 121.278L131.02 112.995L131.225 112.431L153.981 120.714L153.776 121.278Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M157.429 101.196H133.188V100.596H157.429V101.196Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M153.981 81.0765L131.225 89.3593L131.02 88.7955L153.776 80.5127L153.981 81.0765Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M143.86 63.3503L125.307 78.9119L124.922 78.4522L143.474 62.8906L143.86 63.3503Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M128.303 50.1356L116.172 71.1354L115.652 70.8352L127.784 49.8354L128.303 50.1356Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M109.164 43.0729L104.938 66.9381L104.348 66.8336L108.573 42.9683L109.164 43.0729Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M98.9555 66.3413V80.5852H98.3555V66.3413H98.9555Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M87.1185 68.3311L91.9919 81.7174L91.4281 81.9226L86.5547 68.5363L87.1185 68.3311Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M76.6702 74.2437L85.8315 85.1409L85.3722 85.527L76.2109 74.6298L76.6702 74.2437Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M68.8745 83.3589L81.215 90.4913L80.9147 91.0108L68.5742 83.8784L68.8745 83.3589Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M64.6781 94.5977L78.7129 97.0658L78.6089 97.6567L64.5742 95.1886L64.6781 94.5977Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M64.5742 106.603L78.6089 104.135L78.7129 104.726L64.6781 107.194L64.5742 106.603Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M68.5742 117.913L80.9147 110.78L81.215 111.3L68.8745 118.432L68.5742 117.913Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M76.2109 127.162L85.3722 116.265L85.8315 116.651L76.6702 127.548L76.2109 127.162Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M86.5547 133.254L91.4281 119.868L91.9919 120.073L87.1185 133.46L86.5547 133.254Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M98.3555 135.448V121.205H98.9555V135.448H98.3555Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M110.19 133.46L105.316 120.073L105.88 119.868L110.754 133.254L110.19 133.46Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M120.621 127.548L111.48 116.65L111.94 116.265L121.081 127.162L120.621 127.548Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M128.415 118.432L116.074 111.3L116.374 110.78L128.715 117.913L128.415 118.432Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M132.611 107.194L118.598 104.726L118.702 104.135L132.716 106.603L132.611 107.194Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M132.716 95.1886L118.702 97.6567L118.598 97.0658L132.611 94.5977L132.716 95.1886Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M128.715 83.8784L116.374 91.0108L116.074 90.4913L128.415 83.3589L128.715 83.8784Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M121.081 74.6292L111.94 85.5265L111.48 85.1409L120.621 74.2437L121.081 74.6292Z"
          fill="#DDCDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M110.754 68.5363L105.88 81.9226L105.316 81.7174L110.19 68.3311L110.754 68.5363Z"
          fill="#DDCDBD"
        />
      </svg>
     
    </div>
  );
}

function Image({ img, imgclip }) {
  // let src = "https://raw.githubusercontent.com/aarondig/aarondiggdon/main/src/Assets/Images/About/profile.jpg";
  let src =
    "https://images.squarespace-cdn.com/content/v1/5af1c54f36099b9870f769e8/1574202934951-879FKG7B16X1MJHRVU0X/IMG_4588-1.jpg?format=2500w";
  return (
    <section className="page-section banner">
      <div className="banner-img-clip" ref={imgclip}>
        <div className="banner-img-c">
          <img className="banner-img" src={src} ref={img} />
        </div>
      </div>
    </section>
  );
}

{
  /* <InView threshold={.8}  className="page-section image" ref={image}>
</InView> */
}

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
  const img = useRef();
  const imgclip = useRef();
  const svg = useRef();

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
      document.body.style.height = `${
        scroller.current.getBoundingClientRect().height
      }px`;
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

  const Wheel = (e) => {
    speed += e.deltaY * 0.08;
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

        rounded = position;

        // speed = speed <= 0 ? 0 : speed;
        // rounded = rounded <= 0 ? 0 : rounded;

        //  MOVING PARTS
        //  Page Scroller
        scroller.current.style.transform = `translate3d(0, -${rounded}px, 0)`;
        // Image
        if (imgclip.current !== undefined) {
          // Clip Path
          let inset = range(
            b4imgHeight,
            b4imgHeight + (size.height / 1.8) * 0.9,
            12,
            0,
            rounded
          );
          imgclip.current.style.clipPath = `inset(0px ${inset}vw)`;

          // Parallax
          // img.current.style.transform = `translate3d(0, -${rounded / 4}px, 0)`
          img.current.style.transform = `translate3d(0, ${rounded / 2}px, 0) `;
          // scale(${(inset/100) + 1})
        }
        // Main 
        if (main.current !== undefined) {
          main.current.style.transform = `translate3d(0, ${rounded / 2}px, 0) `;
        }
        // Svg
        if (svg.current !== undefined) {
          svg.current.style.transform = `rotate(${rounded / 10}deg)`;
        }
      }
      requestref.current = requestAnimationFrame(skewScrolling);
    };
    window.scrollTo(0, 0);
    requestref.current = requestAnimationFrame(skewScrolling);
    return () => {
      cancelAnimationFrame(requestref.current);
    };
  }, [startscroll]);

  // ANIMATIONS

  const introletters = ["H", "e", "l", "l", "o", "."];
  const introsprings = useSprings(
    introletters.length,
    introletters.map((el, i) =>
      startintro
        ? {
            from: {
              opacity: 0,
              transform: "translateY(120%)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0%)",
            },

            delay: (i + 2) * 100 + 600,
            config: {
              // duration: 400,
              // mass: 1,
              // tension: 280,
              // friction: 18
            },
            onRest: () => setStartintro(false),
          }
        : {
            from: {
              // opacity: 1,

              transform: "translateY(0%)",
            },
            to: {
              // opacity: 0,
              transform: "translateY(-120%)",
            },

            delay: 800 / (i + 2) + 200,
            config: {
              // duration: 400,
              // mass: 1,
              // tension: 280,
              // friction: 18
            },
            onResolve: () => setStartpage(true),
          }
    )
  );

  const lines = [
    "I create",
    "unforgettable",
    // "—winning Websites",
    "Visual Experiences",
  ];

  const reveal = useSpring({ opacity: startpage ? 1 : 0 ,
  delay: 770});
  const linesprings = useSprings(
    lines.length,
    lines.map((el, i) =>
      startpage
        ? {
            from: {
              opacity: 0,
              transform: `translateY(+20px)`,
            },
            to: {
              opacity: 1,
              transform: `translateY(0)`,
            },

            delay: 220 * i,
            // config: { mass: 1, tension: 120, friction: 40 },
          }
        : {
            from: {
              transform: `translateY(0)`,
              opacity: 1,
            },
            to: {
              transform: `translateY(0)`,
              opacity: 0,
            },

            delay: 220 * i,
            // config: { mass: 3, tension: 280, friction: 60 },
          }
    )
  );

  const imageprops = {
    img: img,
    imgclip: imgclip,
  };
  const svgprops = {
    svg: svg,
  };

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <div id="about-scroller" > */}
      {!startpage ? (
        <div className="intro-c">
          <div className="intro-text">
            {introsprings.map((el, i) => {
              return (
                <a.h1 className="intro-letter" style={introsprings[i]} key={i}>
                  {introletters[i]}
                </a.h1>
              );
            })}
          </div>
        </div>
      ) : (
        <a.div className="page-c" ref={scroller}>
          <section className="page-section" ref={b4img}>
            <div className="main-c">
            {/* <a.h6 className="main-subtitle" style={reveal}>/ About Aaron</a.h6> */}
            <a.div className="main-title">
              {lines.map((el, i) => {
                return (
                  <a.h2 className="line" style={linesprings[i]} key={i}>
                    {el}
                  </a.h2>
                );
              })}
            </a.div>
            <a.div className="row" style={reveal}>
            <Svg {...svgprops} />
              <a.p className="main-text" >
                Currently based in London, Aaron is a visual designer and
                developer focused on creating immersive digital products.
              </a.p>
              
            </a.div>
            </div>
          </section>

          <Image {...imageprops} />

          <section className="page-section" ref={b4img}>
            <a.h6 className="main-subtitle">/ About Aaron</a.h6>
            <a.div className="section-title">
              {/* {lines.map((el, i) => {
                return (
                  <a.h3 className="line" style={linesprings[i]} key={i}>
                    {el}
                  </a.h3>
                );
              })} */}
              <a.h3 >
              Currently based in London, Aaron is a visual designer and developer.
                  </a.h3>
            </a.div>

            <a.p className="main-text">
              Currently based in London, Aaron is a visual designer and
              developer focusesd on creating immersive product expereinces.
            </a.p>
          </section>
        </a.div>
      )}

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
