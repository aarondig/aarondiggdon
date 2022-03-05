import React from "react";
import "./style.css";
import {a, useSpring} from 'react-spring'
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

function Navigation({location, basename, setIsPopup}) {

  const navigate = useNavigate();

  const logo = useSpring({
    opacity: location.pathname !== `/${basename}` ? 0 : 1,
  })
  const backBtn = useSpring({
    opacity: location.pathname !==`/${basename}` ? 1 : 0,
    color: location.pathname === `/${basename}/about` ? "#252525" : "white"
  })


  const Back = () => {
    setIsPopup(false);
    navigate(`${basename}`, {replace: true})
  }


    return <div id="navigation">
      <div className="navWrap">
        <div className="leftNav">
      <a.div id="logo" style={logo}>aarondiggdon</a.div>
      <a.div className="backBtn" style={backBtn} onClick={()=> Back()}>
        <FiArrowLeft size={26}></FiArrowLeft>
        <div className="backBtnText">Back</div>
        </a.div>
        </div>
        <div className="rightNav">
        <Link to={`/${basename}/about`}>
        <div className="navItem">About Me</div>
        </Link>
        </div>
      </div>
      </div>;
  }
  
  export default Navigation;
  
