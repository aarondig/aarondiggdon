import {
  useState,
  useEffect,
  useRef,
  createRef,
  Suspense,
  useMemo,
} from "react";
import "./style.css";
import { data } from "../../Pages/Projects/data";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import images from "../../Images/0.png";
import { shaderMaterial, useTexture } from "@react-three/drei";
import glsl from "glslify";

// const newShader = shaderMaterial(
//   //Uniform
//   {
//     time: { type: "f", value: 0 },
//     texture1: { type: "t", value: null },
//     resolution: { type: "v4", value: new THREE.Vector4() },
//     uvRate1: { value: new THREE.Vector2(1, 1) },
//   },
//   //Vertex Shader

//   glsl`
//   uniform float time;
//   varying vec2 vUv;
//   varying vec3 vPosition;
//   uniform vec2 pixels;
//   float PI = 3.141592653589793238;
//   void main() {
//     vUv = uv;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//   }
// `,
// //Fragment Shader
// glsl`
//   uniform float time;
//   uniform float progress;
//   uniform sampler2D texture1;
//   uniform vec4 resolution;
//   varying vec2 vUv;
//   varying vec3 vPosition;
//   float PI = 3.141592653589793238;
//   void main() {
//     vec4 t = texture2D(texture1, vUv);
//     gl_FragColor = vec4(t);
//   }`

//   );

const Image = ({ i }) => {
  const mesh = useRef();

  const [normalMap] = useLoader(THREE.TextureLoader, [
    `https://raw.githubusercontent.com/shakegioh/threejs-webgl-scrolling-images/main/img/${i}.jpg`,
  ]);

  // const uniforms = {
  //   time: { type: "f", value: 0 },
  //   texture1: { type: "t", value: normalMap },
  //   resolution: { type: "v4", value: new THREE.Vector4() },
  //   uvRate1: { value: new THREE.Vector2(1, 1) },
  // }
  const fragmentShader = `
  uniform float time;
  uniform float progress;
  uniform sampler2D texture1;
  uniform vec4 resolution;
  varying vec2 vUv;
  varying vec3 vPosition;
  float PI = 3.141592653589793238;
  void main() {
    vec4 t = texture2D(texture1, vUv);

    gl_FragColor = t;
  }`;

  const vertexShader = `
  uniform float time;
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform vec2 pixels;
  float PI = 3.141592653589793238;
  void main() {
    
    vUv = (uv - vec2(.5))*.9 + vec2(.5);

    vec3 pos = position;
    
    pos.y += sin(time*.3)*.02;
    vUv.y += sin(time*.3)*.02;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
  `;

  const shader = useMemo(
    () => ({
      uniforms: {
        time: { type: "f", value: 0 },
        texture1: { type: "t", value: normalMap },
        resolution: { type: "v4", value: new THREE.Vector4() },
        uvRate1: { value: new THREE.Vector2(1, 1) },
      },
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: THREE.DoubleSide,
      transparent: true,
      fragmentShader,
      vertexShader,
    }),
    []
  );
  let time = 0;
  useFrame(() => {
 
    time += 0.05;
    shader.uniforms.time.value = time;
    
    mesh.current.position.y = i * 1.2 - 3;
    mesh.current.rotation.y = -.5





  });

  // uniforms={uniforms} fragmentShader={fragmentShader} vertexShader={vertexShader}

  return (
    <mesh ref={mesh} key={i}>
      <planeBufferGeometry args={[1.5, 1, 20, 20]} />
      <shaderMaterial attach="material" uniformsNeedUpdate={true} {...shader} />
    </mesh>
  );
};

function HandleImages() {
  // const [objs, setObjs] = useState([])

  //    const [shaders, setShaders] = useState([])

  // useEffect(()=>{
  //   setShaders((shaders)=>
  //     Array(data.length).fill().map((el, i)=> shaders[i] || createRef())
  //   )
  // },[])

  return (
    <group>
      {data.map((e, i) => {
        // const texture = useLoader(THREE.TextureLoader, img)
        return <Image i={i} key={i} />;
      })}
    </group>
  );
}

function Module(props) {
  return (
    <div id="canvas">
      <Canvas>
        <Suspense fallback={null}>
          <HandleImages />
          {/* <mesh>
      <boxGeometry/>
      <shaderMaterial uniforms={uniforms} fragmentShader={fragment} vertexShader={vertex}/>
      </mesh> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Module;
