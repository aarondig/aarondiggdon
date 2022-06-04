import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  Suspense,
  useMemo,
  useLayoutEffect,
} from "react";
import "./style.css";
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "react-three-fiber";
import { useSpring } from "react-spring";
import { a } from "@react-spring/three";
import { data } from "../../data/data";

const Image = ({ i, mesh, isCurrent, handleClick, isPopup, scaleRef }) => {
  // const [normalMap] = useLoader(THREE.TextureLoader, [
  //   `https://raw.githubusercontent.com/aarondig/designPortfolio/main/src/Images/${i}.png`,
  // ]);

  const [normalMap] = useLoader(THREE.TextureLoader, [
    `${data[data.length - i - 1].banner}`,
  ]);
 
  //ANISTROPY IS SHARPNESS - Hard on GPU
  const {gl} = useThree();

useEffect(()=>{
  const ani = gl.capabilities.getMaxAnisotropy();
  normalMap.anisotropy = (ani/3) + (ani/2);
},[])
 



  const fragmentShader = `
  uniform float time;
  uniform float progress;
  uniform float distanceFromCenter;
  uniform float opacity;
  uniform float saturation;
  uniform sampler2D texture1;
  uniform vec4 resolution;

  uniform float u_saturation;

  varying vec2 vUv;
  varying vec3 vPosition;
  float PI = 3.141592653589793238;
  
  vec3 adjustSaturation(vec3 color, float saturation) {
    // https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
    const vec3 luminosityFactor = vec3(0.2126, 0.7152, 0.0722);
    vec3 grayscale = vec3(dot(color, luminosityFactor));
    
    return mix(grayscale, color, 1.0 + saturation);
  }
  
  
  void main() {
    vec4 t = texture2D(texture1, vUv) * opacity;
    vec3 color = t.rgb;
    color = adjustSaturation(color, saturation - 1.2);
    
    // gl_FragColor = t;
    gl_FragColor = vec4(color, t.a);
  }`;

  //sin(PI*uv.x) = Arc of Image

  const vertexShader = `
  uniform float time;
  varying vec2 vUv;
  varying vec3 vPosition;

  uniform float flatVal;

  uniform vec2 pixels;
  float PI = 3.141592653589793238;
  uniform float distanceFromCenter;
  void main() {
    
    vUv = (uv - vec2(.5))*(.85 * distanceFromCenter + .07) + vec2(.5);

    // NOT BEING USED: vUv = (uv - vec2(.5))*(0.8 - 0.2 * distanceFromCenter * (1. - distanceFromCenter)) + vec2(.5);


    vec3 pos = position;

    // WAS:pos.y += sin(PI*uv.x)*.01;


    pos.x += sin(PI*uv.x)* flatVal;
    pos.y += sin(PI*uv.x)* flatVal;
    pos.z += sin(PI*uv.x)* flatVal;
    
    
    pos.y += sin(time*.8)*.04;
    vUv.y += sin(time*.8)*.04;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
  `;

  const shader = useMemo(
    () => ({
      uniforms: {
        time: { type: "f", value: 0 },
        distanceFromCenter: { type: "f", value: 0 },
        saturation: { type: "f", value: 0 },
        opacity: { type: "f", value: 0 },

        flatVal: { type: "f", value: 0.02 },

        texture1: { type: "t", value: normalMap },
        resolution: { type: "v4", value: new THREE.Vector4() },
        uvRate1: { value: new THREE.Vector2(1, 1) },
      },

      side: THREE.DoubleSide,
      transparent: true,
      fragmentShader,
      vertexShader,
    }),
    []
  );

  useEffect(() => {
    if (!isPopup) {
      shader.uniforms.flatVal.value = 0.02;
    }
  }, [isPopup]);

  useFrame(
    ({ clock }) => (shader.uniforms.time.value = clock.getElapsedTime())
  );

  useFrame(() => {
    if (isPopup) {
      if (shader.uniforms.flatVal.value < 0) {
        shader.uniforms.flatVal.value = 0;
      } else {
        shader.uniforms.flatVal.value = shader.uniforms.flatVal.value - 0.001;
      }
    }
    //   if (!isPopup) {
    //     if (shader.uniforms.flatVal.value > .02){
    //       shader.uniforms.flatVal.value = .02
    //     } else {
    //       shader.uniforms.flatVal.value = shader.uniforms.flatVal.value + .0008;
    //   }
    // }

    //Ref is now "Mesh"
  });

  // useEffect(()=>{
  //   mesh.current.rotation.y = -.5;
  //   mesh.current.rotation.x = -.3;
  //   mesh.current.rotation.z = -.1;
  // },[])

  //Basically if Index === isCurrent
  const target = data.length - isCurrent - 1;

  const { rotation, positionX, scale } = useSpring({
    rotation: isPopup ? [0, 0, 0] : [0.0, 0.0, 0],
    positionX: isPopup ? (i === target ? 0 : 6) : 0,

    // scale: i === target ? (isPopup ? [1.5, 1.5, 1.5] : [scaleRef, scaleRef, scaleRef]) : [scaleRef, scaleRef, scaleRef],

    // duration: 1000,
    // delay: i === target ? 0 : ((data.length - i)) * 80,
  });

  const props = {
    ref: mesh,

    rotation: rotation,

    onClick: (e) => handleClick(e),

    key: i,
    value: i,
  };

  return (
    <a.mesh native position-x={positionX} color={data[i].color} {...props}>
      <planeBufferGeometry args={[1.5, 1, 20, 20]} />
      <shaderMaterial attach="material" uniformsNeedUpdate={true} {...shader} />
    </a.mesh>
  );
};

function HandleImages({
  refs,
  group,
  isPopup,
  isCurrent,
  scaleRef,
  setLoading,
  handleClick,
}) {
  // useEffect(()=>{
  //   group.current.rotation.x = -.3;
  //   group.current.rotation.y = -.5;
  //   group.current.rotation.z = -.1;

  // },[])

  const { position, rotation } = useSpring({
    position: isPopup ? [0, 0, 0] : [1, 0, 0],
    rotation: isPopup ? [0, 0, 0] : [-0.6, -0.8, -0.4],
  });
  // [-.5, -.9, -.4],

  const groupProps = {
    position: position,
    rotation: rotation,
  };

  const props = {
    isCurrent: isCurrent,

    handleClick: handleClick,
    isPopup: isPopup,

    setLoading: setLoading,
  };

  return (
    <a.group ref={group} {...groupProps}>
      {refs.map((e, i) => {
        // const texture = useLoader(THREE.TextureLoader, img)
        return (
          <Image
            i={i}
            key={i}
            mesh={refs[i]}
            scaleRef={scaleRef[i].current}
            {...props}
          />
        );
      })}
    </a.group>
  );
}

//DESIGN NOTE: Setloading does nothing at the moment but it's all plugged in so why not leave it until u want to do something w it

function Module({
  meshes,
  group,
  isCurrent,
  isMobile,
  isPopup,
  scaleRef,
  handleClick,
  setLoading,
}) {
  const props = {
    refs: meshes,
    group: group,

    isCurrent: isCurrent,
    isMobile: isMobile,
    scaleRef: scaleRef,

    handleClick: handleClick,
    isPopup: isPopup,

    setLoading: setLoading,
  };

  return (
    <div id="canvas">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 25 }}
        gl={{ antialias: true, pixelRatio: window.devicePixelRatio }}
      >
        <Suspense fallback={null}>
          <HandleImages {...props} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Module;

// const fragmentShader = `
// uniform float time;
// uniform float progress;
// uniform float distanceFromCenter;
// uniform sampler2D texture1;
// uniform vec4 resolution;
// varying vec2 vUv;
// varying vec3 vPosition;
// float PI = 3.141592653589793238;
// void main() {
//   vec4 t = texture2D(texture1, vUv) * distanceFromCenter;

//   gl_FragColor = t;
// }`;
