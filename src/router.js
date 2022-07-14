import { useState, useEffect, useRef, createRef, Suspense } from "react";
import Web from "./routes/web/App";
import Mobile from "./routes/mobile/App";
import {BrowserRouter as Routes} from "react-router-dom"

function Router() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  
  const isMobile = width <= 768;

  return (
    <Routes>
      {!isMobile ? 
      <Mobile/> :
      <Mobile/>
      }
    </Routes>
  );
}

export default Router;
