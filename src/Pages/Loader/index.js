import React, { useEffect, useRef } from "react";
import {Link, Outlet, useNavigate} from "react-router-dom"
import "./style.css";

function Loader({children, basename}) {

    return <div id="loader">
      <Outlet/>
    </div>
  }
  
  export default Loader;
  
  