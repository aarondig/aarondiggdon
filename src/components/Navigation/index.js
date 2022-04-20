import React from "react";
import "./style.css";
import {a, useSpring} from 'react-spring'
import { Link, useNavigate, matchRoutes } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';
import { useEffect } from "react/cjs/react.production.min";

function Navigation({location, basename, setIsPopup}) {

  const navigate = useNavigate();

//   const routes = [{ path: "/projects/:id" }]

//  const useCurrentPath = () => {
//    const [{ route }] = matchRoutes(routes, location);
//    return route.path;
//  }

//   const current = useCurrentPath();


  const logo = useSpring({
    // opacity: location.pathname !== `/${basename}/` ? 0 : 1,
    opacity: location.pathname === `/${basename}/projects/:id` ? 0 : 1,
  })

  const backBtn = useSpring({
    opacity: location.pathname !==`/${basename}/` ? 1 : 0,
    color: location.pathname === `/${basename}/about` ? "#252525" : "white"
  })


  const Back = () => {
    setIsPopup(false);
    navigate(-1, {replace: true})
    // navigate(`${basename}/`, {replace: true})
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
  
