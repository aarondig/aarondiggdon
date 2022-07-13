import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import {a, useSpring, useSprings, useSpringRef} from "react-spring";
import "./style.css";

function Loader({ children, basename }) {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);


  const navigate = useNavigate();
  // useEffect(() => {
  //   if (loading) {
  //     setTimeout(() => setCounter(counter + 1), 10);
  //   }
  //   if (counter >= 99) {
  //     setLoading(false);
  //   }
  // }, [counter]);

  //ANIMATIONS


  // const [nextSpring, setNextSpring] = useState(false);



  let letters = ["W","e","l","c","o","m","e"]

  const lettersRef = useSpringRef();

  const lettersSprings = useSprings(
    letters.length,
    letters.map((el, i) => ({
      from: {
        opacity: 0,
        transform: "translateY(+20px)",
      },
      to: {
        opacity:  1,
        transform:  "translateY(0)",
      },
      
      delay: 180 * i,
      config: {
        // mass: 1,
        // tension: 280,
        // friction: 18
      },
      lettersRef
    }))
  );


  const imgRef = useSpringRef();
  const imgSpring = useSpring({
    from: {scale: 0, opacity: 0},
    to: {scale: 1, opacity: 1},
    config: {
      mass: 1,
      tension: 280,
      friction: 100,
      
    },
    onRest: () => navigate(`projects`),
    imgRef
  })
  



  // const growSpring = useSpring({
  //   scale: nextSpring ? 3 : 1,
  //   delay: 1600
  //   ,
  //   config: {
  //     mass: 1,
  //     tension: 280,
  //     friction: 100,
  //     // duration: 800,
  //   },
  // })


  return (
    <div id="loader">
      
      <a.div className="main-c" >
      {/* style={growSpring} */}
          
        <a.div className="img-c" style={imgSpring}>
            <svg
              width="353"
              height="353"
              viewBox="0 0 353 353"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_316_611)">
                <rect width="353" height="353" fill="black" />
                <g filter="url(#filter0_f_316_611)">
                  <ellipse
                    rx="110.797"
                    ry="191.011"
                    transform="matrix(-0.506573 0.862197 0.862197 0.506573 196.921 208.565)"
                    fill="#0041BE"
                  />
                </g>
                <g filter="url(#filter1_f_316_611)">
                  <ellipse
                    cx="88.3531"
                    cy="331.695"
                    rx="280.337"
                    ry="177.476"
                    transform="rotate(13.7659 88.3531 331.695)"
                    fill="#00E5E0"
                  />
                </g>
                <g filter="url(#filter2_f_316_611)">
                  <ellipse
                    cx="45.9611"
                    cy="272.822"
                    rx="182.809"
                    ry="57.3474"
                    transform="rotate(38.4098 45.9611 272.822)"
                    fill="#0041BE"
                  />
                </g>
                <g filter="url(#filter3_f_316_611)">
                  <ellipse
                    cx="242.243"
                    cy="339.574"
                    rx="110.21"
                    ry="36.507"
                    transform="rotate(-24.8314 242.243 339.574)"
                    fill="#0041BE"
                  />
                </g>
                <g filter="url(#filter4_f_316_611)">
                  <ellipse
                    cx="-18.8828"
                    cy="447.572"
                    rx="349.694"
                    ry="155.195"
                    transform="rotate(8.76757 -18.8828 447.572)"
                    fill="#00E5E0"
                  />
                </g>
                <g filter="url(#filter5_f_316_611)">
                  <ellipse
                    cx="249.22"
                    cy="418.808"
                    rx="96.8232"
                    ry="55.0779"
                    transform="rotate(-15.7049 249.22 418.808)"
                    fill="#00BCC2"
                  />
                </g>
                <g filter="url(#filter6_f_316_611)">
                  <ellipse
                    cx="153.596"
                    cy="460.088"
                    rx="113.947"
                    ry="34.9979"
                    transform="rotate(-43.6017 153.596 460.088)"
                    fill="#00FF66"
                  />
                </g>
                <g filter="url(#filter7_f_316_611)">
                  <ellipse
                    cx="199.431"
                    cy="463.046"
                    rx="113.947"
                    ry="34.9979"
                    transform="rotate(-43.6017 199.431 463.046)"
                    fill="#D6FFEE"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_316_611"
                  x="-77.1973"
                  y="-27.4883"
                  width="548.237"
                  height="472.106"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="50.0402"
                    result="effect1_foregroundBlur_316_611"
                  />
                </filter>
                <filter
                  id="filter1_f_316_611"
                  x="-253.947"
                  y="80.0898"
                  width="684.599"
                  height="503.211"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="33.3601"
                    result="effect1_foregroundBlur_316_611"
                  />
                </filter>
                <filter
                  id="filter2_f_316_611"
                  x="-208.279"
                  y="44.0516"
                  width="508.481"
                  height="457.54"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="53.2972"
                    result="effect1_foregroundBlur_316_611"
                  />
                </filter>
                <filter
                  id="filter3_f_316_611"
                  x="34.4449"
                  y="176.055"
                  width="415.596"
                  height="327.036"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="53.2972"
                    result="effect1_foregroundBlur_316_611"
                  />
                </filter>
                <filter
                  id="filter4_f_316_611"
                  x="-436.375"
                  y="214.085"
                  width="834.985"
                  height="466.974"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="35.5315"
                    result="effect1_foregroundBlur_316_611"
                  />
                </filter>
                <filter
                  id="filter5_f_316_611"
                  x="83.75"
                  y="288.587"
                  width="330.941"
                  height="260.443"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="35.5315"
                    result="effect1_foregroundBlur_316_611"
                  />
                </filter>
                <filter
                  id="filter6_f_316_611"
                  x="-3.46211"
                  y="306.435"
                  width="314.115"
                  height="307.307"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="35.5315"
                    result="effect1_foregroundBlur_316_611"
                  />
                </filter>
                <filter
                  id="filter7_f_316_611"
                  x="42.3733"
                  y="309.393"
                  width="314.115"
                  height="307.307"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="35.5315"
                    result="effect1_foregroundBlur_316_611"
                  />
                </filter>
                <clipPath id="clip0_316_611">
                  <rect width="353" height="353" fill="white" />
                </clipPath>
              </defs>
            </svg>
     
        </a.div>
        <div className="text-c">
          {lettersSprings.map((el, i)=> {
      
            return (
            // <a.div className="letter-c" style={}>
              <a.h1 className="letter" key={i} style={lettersSprings[i]}>{letters[i]}</a.h1>
              // </a.div>
            )
          })}
        </div>
        </a.div>
     
    </div>
  );
}

export default Loader;
