import { useEffect, useLayoutEffect, useState } from "react";

export default function useScrollLock() {

function status() {
  
  function unlocked() {
    document.body.style.overflow = "scroll";

  }
  function locked() {
    document.body.style.overflow = "hidden";

  }
  return {
    lock: () => locked(),
    unlock: () => unlocked(),
  }
}

const [scrollLock, setScrollLock] = useState(status())

useEffect(()=> {
  setScrollLock(status())
},[])

return scrollLock;
}