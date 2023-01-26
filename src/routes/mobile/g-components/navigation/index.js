import { useEffect, useState } from "react";
import "./style.css";
import { a, useSpring } from "react-spring";
import { Link, useNavigate, useMatch } from "react-router-dom";
import { FiArrowLeft, FiMenu } from "react-icons/fi";

function Navigation({ location, basename, setIsPopup, navvisible }) {
  
  const navigate = useNavigate();

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


  // const logo = useSpring({
  //   // opacity: location.pathname !== `/${basename}/` ? 0 : 1,
  //   opacity: isMatch ? 0 : (navvisible ? 1 : 0),
  // });

  const logoscroll = useSpring({opacity: navvisible ? 1 : 0,
    from: { opacity: 0 },
  });
console.log(navvisible)

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

  return (
    <div id="navigation">
        <div id="navigation">


<div className="nav-wrap">
<a.div id="logo" style={logoscroll}>
      aarondig
    </a.div>
    <a.div className="menu-btn">
          <svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 9H34" stroke="white" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M8 17H34" stroke="white" strokeLinecap="square" strokeLinejoin="round"/>
</svg>
          </a.div>

</div>

</div>
      {/* <div className="navWrap">
        <div className="leftNav">
          <a.div id="logo" style={logo}>
            aarondig
          </a.div>
          <a.div className="back-btn" style={backBtn} onClick={() => Back()}>
            <FiArrowLeft size={26}></FiArrowLeft>
            <div className="backBtnText">Back</div>
          </a.div>
        </div>
        <div className="rightNav">

          <a.div className="menu-btn">
          <svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 9H34" stroke="white" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M8 17H34" stroke="white" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
          </a.div>
         
        </div>
      </div> */}
    </div>
  );
}

export default Navigation;
