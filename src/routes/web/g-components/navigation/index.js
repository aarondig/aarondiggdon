import { useEffect, useState } from "react";
import "./style.css";
import { a, useSpring, easings, useSprings } from "react-spring";
import { Link, useNavigate, useMatch } from "react-router-dom";
import { Squeeze as Hamburger } from "hamburger-react";
import {data} from "../../../../data"

function Navigation({ location, basename, setIsPopup, navvisible }) {
  
  const navigate = useNavigate();

  const [active, toggleActive] = useState(false);
 
  const hamburger = {
    size: 18,
    color: active ? "#050505" : (location.pathname === `/${basename}/about` ? "white" : "#050505"),
    distance: "sm",
    duration: 0.4,
    // height: "1px",
  };

  //Checking Location Match
  const [isMatch, setIsMatch] = useState(false);
  const match = useMatch(`/${basename}/projects/:id`, {
    path: location.pathname,
    exact: true,
    strict: true,
  });

  useEffect(() => {
    if (match !== null) {
      setIsMatch(true);
    } else if (match === null) {
      setIsMatch(false);
    }
  }, [location]);




  const backBtn = useSpring({
    // opacity: location.pathname !== `/${basename}/` ? 1 : 0,
    opacity: location.pathname === `/${basename}/about` ? 1 : (isMatch ? 1 : 0),
    color: location.pathname === `/${basename}/about` ? "#252525" : "white",
  });

  const Back = () => {
    setIsPopup(false);
    navigate(-1, {replace: true})
    // navigate(`${basename}/projects/`, { replace: true });
  };



  // NEW

const [footer,setFooter] = useState()
const url = location.pathname.split("/");

  const handleNavigate = (e)=> {
  //  if (e.target.dataset.id !== "about"){
  //   navigate(`${basename}/projects/${e.target.dataset.id}`, { replace: true })
  //  }
   navigate(`${basename}/${e.target.dataset.id}`, { replace: true })
    toggleActive(false)
  }

  const logoscroll = useSpring({
    // opacity: navvisible ? 1 : (active ? 1 : 0),
    opacity: active ? 1 : 1,
    color: active ? "#050505" : (location.pathname === `/${basename}/about` ? "white" : "#050505"),
//     config: 
    
// { tension: 100,  
//       easing: easings.easeInOutCubic(),
//     },
  });
  const wrapper = useSpring({
    transform: active ? "translateY(0vh)" : "translateY(-100vh)",
    background: active ? "#fff" : "#050505",
    config: 
    
{ tension: 100, 
  
      easing: easings.easeOutCubic(),
    
    },
  });

let pages = [
  {name: "Home",
      id: "home"},
      {name: "Projects",
      id: "projects"},
      {name: "About",
      id: "about"},
]


const navsprings = useSprings(pages.length,
  pages.map((el, i) =>
    active
      ? {
          from: {
            opacity: 0,
            transform: `translateY(+20px)`,
          },
          to: {
            opacity: 1,
            transform: `translateY(0px)`,
          },

          delay: (180 * ((pages.length - 1) - i)) + 200,
          config: { tension: 100, 
            easing: easings.easeOutCubic(),
          },
          onRest: ()=>setFooter(true),
        }
      : {
          from: {
            transform: `translateY(0px)`,
            opacity: 1,
          },
          to: {
            transform: `translateY(-60px)`,
            opacity: 0,
          },

          // delay: (180 * i),
          // delay: (80 * ((pages.length - 1) - i)),
          // config: { tension: 100, 
          //   easing: easings.easeOutCubic(),
          // },
        }
  ))

  useEffect(()=>{
if(!active) {
  setFooter(false)
}
  },[active])
const parallaxclose = useSpring({transform: active ?  `translateY(0px)`  : `translateY(180px)`})
const footerspring = useSpring({opacity: active ?  1  : 0, delay: (pages.length * 180) + 600})
  return (
    <div id="navigation">
        


<div className="nav-wrap">
<a.div id="logo" style={logoscroll}>
      aaro
    </a.div>
          <Hamburger
                toggled={active}
                toggle={toggleActive}
                {...hamburger}
              />
</div>
<a.div className="nav-active" style={wrapper}>
        <a.div className="nav-inner-wrap" style={parallaxclose}>
        {/* <div className="nav-section">
        <p className="nav-subtitle">
          Home
          </p>
          <div className="nav-link" onClick={(e)=> handleNavigate(e)}>
            <h6 className="nav-link-title md" data-id={"about"}>About</h6>
          </div>
        </div> */}
        <div className="nav-section">
        {/* <p className="nav-subtitle">
          Projects
          </p> */}
          {pages.map((el, i)=>{
            return (<a.div className="nav-link" key={i} onClick={(e)=> handleNavigate(e)} style={navsprings[i]}>
            <h6 data-id={el.id} data-key={i} className="nav-link-title lg" >{el.id}</h6>
          </a.div>)
          })}

          {/* {data.map((el, i)=>{
            return (<div className="nav-link" key={i} onClick={(e)=> handleNavigate(e)}>
            <h6 data-id={el.id} data-key={i} className="nav-link-title lg" >{el.id}</h6>
          </div>)
          })} */}
          
          
        </div>
        <a.div className="nav-footer" style={footerspring}>
          <h6 className="nav-link-title sm" >aarondiggdon@gmail.com</h6>
          </a.div>
        </a.div>
       
      </a.div>
    </div>
  );
}

export default Navigation;
