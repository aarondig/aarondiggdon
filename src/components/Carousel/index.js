import {useState, useEffect, useRef} from "react";
import "./style.css";
import { data } from "../../Pages/Projects/data";
import { contains } from "cheerio/lib/static";

function Carousel(props) {
  const courasel = useRef();
  const [scroll, setScroll] = useState();
  const [page, setPage] = useState();

  const [isCurrent, setIsCurrent] = useState(3);

  let speed = 0;
  let position = 0;
  let rounded = 0;
  let diff = 0;

  window.addEventListener("wheel", (e) => {
    //Add if touch event

    speed += e.deltaY * 0.0003;
  });

let items = Array(data.length).fill({dist:0})


  const onScroll = () => {
    position += speed;
    speed *= 0.8;
    rounded = Math.round(position);

    if (rounded > data.length) {
      rounded = data.length;
    }

    diff = rounded - position;
    position += Math.sign(diff) * Math.pow(Math.abs(diff), .7) * 0.015;

    setScroll(position);


    setIsCurrent(rounded);

    // items.map((e, index) => {
    //   e.dist = (position - 1)
    //   e.dist = 1 - e.dist
    //   // e[index].style.tranform = `scale(${e.dist})`
    //   console.log(e.dist)
    // })



   courasel.current.style.transform = `translate(0, -${position*100}px)`

 
    requestAnimationFrame(() => onScroll());
 
  };

  useEffect(() => {
    requestAnimationFrame(() => onScroll());
  }, []);





  const styles = {
    button: {
      active: {
        background: "#fff",
      },
      inactive: {},
    },
    text: {
      active: {
        color: "#000",
      },
      inactive: {},
    },
    card: {
      active: {
        transform: "scale(1.3)",
        marginTop: "12%",
        marginBottom: "8%",
        // transition: "1s",
      },
      inactive: {},
    }
  };

useEffect(()=>{

})


  return (
    <div id="carousel" ref={courasel}>
     {data.map((e, index) => {
      return (
        <div
          className="card"
          style={
            isCurrent === index ? styles.card.active : styles.card.inactive
          }
          key={index}
        ></div>
      );
    })}
      </div>
  );
}

export default Carousel;
