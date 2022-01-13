import {useState, useEffect, useRef, createRef} from "react";
import "./style.css";
import { data } from "../../Pages/Projects/data";
import { contains } from "cheerio/lib/static";

function Carousel(props) {
  const carousel = useRef();
  const block = useRef();
  // const [scroll, setScroll] = useState();
  // const [page, setPage] = useState();

  const [isCurrent, setIsCurrent] = useState(1);
  const [refs, setRefs] = useState([]);


useEffect(()=>{
  setRefs((refs)=>
    Array(data.length).fill().map((el, i)=> refs[i] || createRef())
  )
},[])


  //Intertia Scroll

  let speed = 0;
  let position = 0;
  let rounded = 0;

  window.addEventListener("wheel", (e) => {
    //Add if touch event

    speed += e.deltaY * 0.0003;
  });

  let objs = Array(data.length).fill({dist:0})

  const onScroll = () => {

    position += speed;
    speed *= 0.8;

      objs.map((el, i) => {
      el.dist = Math.min(Math.abs(position - i + 1),1)
      el.dist = Math.abs(el.dist)
      refs[i].current.style.transform = `scale(${1 - .4* el.dist})`
    })
  

    rounded = Math.round(position);

    // if (rounded > data.length) {
    //   rounded = data.length;
    // }

    let diff = rounded - position;

    position += Math.sign(diff) * Math.pow(Math.abs(diff), .7) * 0.015;

    // setScroll(position);


    setIsCurrent(rounded);

  
    carousel.current.style.transform = `translate(0, -${position*100-50}px)` 


  //  courasel.current.style.transform = `translate(0, -${position*100}px)`

 
    requestAnimationFrame(() => onScroll());
 
  };

useEffect(() => {
    requestAnimationFrame(() => onScroll());
  },[refs])

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
  

  return (
    <>
    <div id="carousel" ref={carousel}>
     {data.map((el, i) => {
      return (
        <div
          className="card"
          ref={refs[i]}
          // style={
          //   isCurrent === i ? styles.card.active : styles.card.inactive, {top: (i*40)+"%"}
          // }
          // style={
          //   {top: (i*100)+"px"}
          //   }
          key={i}
        ></div>
      );
    })}
    {/* {list.map((e,i)=>{
      return e
    })} */}
      </div>
      <div ref={block} style={{position: "absolute", width: "100px",height: "100px",background: "red"}}/>
      </>
  );
}

export default Carousel;
