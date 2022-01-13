import {useState, useEffect, useRef, createRef} from "react";
import "./style.css";
import { data } from "../../Pages/Projects/data";
import { contains } from "cheerio/lib/static";

function Carousel(props) {
  const courasel = useRef();
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
  let diff = 0;

  window.addEventListener("wheel", (e) => {
    //Add if touch event

    speed += e.deltaY * 0.0003;
  });

  let itemDist = Array(data.length).fill({dist:0})

  const onScroll = () => {
    position += speed;
    speed *= 0.8;
    rounded = Math.round(position);

    if (rounded > data.length) {
      rounded = data.length;
    }

    diff = rounded - position;
    position += Math.sign(diff) * Math.pow(Math.abs(diff), .7) * 0.015;

    // setScroll(position);


    setIsCurrent(rounded);

  
   itemDist.map((el, i) => {
      el.dist = (position - 1)
      el.dist = 1 - el.dist
      refs[i].current.style.transform = `scale(${el.dist})`
    })
   


  //  courasel.current.style.transform = `translate(0, -${position*100}px)`

 
    requestAnimationFrame(() => onScroll());
 
  };

  useEffect(() => {
    requestAnimationFrame(() => onScroll());
  }, []);



// const Items = () => {
//   data.map((e, i) => {
//    items[i] = (
//       <div
//         className="card"
//         style={
//           isCurrent === i ? styles.card.active : styles.card.inactive
//         }
//         key={i}
//       ></div>
//     );
//   })
// }
// useEffect(() => {
//   Items()
// }, []);

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
    <div id="carousel" ref={courasel}>
     {data.map((el, i) => {
      return (
        <div
          className="card"
          ref={refs[i]}
          style={
            isCurrent === i ? styles.card.active : styles.card.inactive, {top: (i*40)+"%"}
          }
          key={i}
        ></div>
      );
    })}
    {/* {list.map((e,i)=>{
      return e
    })} */}
      </div>
  );
}

export default Carousel;
