import { useEffect, useState } from "react";
import "./style.css";
import { a, useSpring } from "react-spring";
import { Link, useNavigate, useMatch } from "react-router-dom";
import { FiArrowLeft, FiMenu } from "react-icons/fi";

function Navigation({ location, basename, setIsPopup }) {
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

  const logo = useSpring({
    // opacity: location.pathname !== `/${basename}/` ? 0 : 1,
    opacity: isMatch ? 0 : 1,
  });

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
      <div className="navWrap">
        <div className="leftNav">
          <a.div id="logo" style={logo}>
            aarondiggdon
          </a.div>
          <a.div className="back-btn" style={backBtn} onClick={() => Back()}>
            <FiArrowLeft size={26}></FiArrowLeft>
            <div className="backBtnText">Back</div>
          </a.div>
        </div>
        <div className="rightNav">

          <a.div className="menu-btn">
            <FiMenu size={26}></FiMenu>
          </a.div>
         
        </div>
      </div>
    </div>
  );
}

export default Navigation;
