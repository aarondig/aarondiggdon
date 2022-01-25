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
import { Canvas, useFrame, useLoader } from "react-three-fiber";


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

const Image = ({ i, mesh, createList }) => {
  // const mesh = useRef();

// useEffect(()=>{
//   createList(mesh)
// },[i])

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
  uniform float distanceFromCenter;
  uniform sampler2D texture1;
  uniform vec4 resolution;
  varying vec2 vUv;
  varying vec3 vPosition;
  float PI = 3.141592653589793238;
  void main() {
    vec4 t = texture2D(texture1, vUv) * distanceFromCenter;

    gl_FragColor = t;
  }`;

  // Black and white Fragment Main Function
  //      vec4 t = texture2D(texture1, vUv);

  //      float bw = (t.r + t.b + t.g)/3.;

  //      vec4 another = vec4(bw,bw,bw, 1.);
  
  //      gl_FragColor = mix(another, t, distanceFromCenter);
  //      gl_FragColor.a = clamp(distanceFromCenter, 0.2, 1.0);


  //sin(PI*uv.x) = Arc of Image
  
  const vertexShader = `
  uniform float time;
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform vec2 pixels;
  float PI = 3.141592653589793238;
  uniform float distanceFromCenter;
  void main() {
    
    vUv = (uv - vec2(.5))*(0.9 * distanceFromCenter + .095) + vec2(.5);

    // NOT BEING USED: vUv = (uv - vec2(.5))*(0.8 - 0.2 * distanceFromCenter * (1. - distanceFromCenter)) + vec2(.5);


    vec3 pos = position;

    
    pos.y += sin(PI*uv.x)*.01;
    pos.x += sin(PI*uv.x)*.02;
    
    
    pos.y += sin(time*.3)*.02;
    vUv.y += sin(time*.3)*.02;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
  `;

  const shader = useMemo(
    () => ({
      uniforms: {
        time: { type: "f", value: 0 },
        distanceFromCenter: { type: "f", value: 0 },
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
    

    //Ref is now "Mesh"
  
  });

  // useEffect(()=>{
  //   mesh.current.rotation.y = -.5;
  //   mesh.current.rotation.x = -.3;
  //   mesh.current.rotation.z = -.1;
  // },[])

  

  return (
    <mesh ref={mesh} key={i}>
      <planeBufferGeometry args={[1.5, 1, 20, 20]} />
      <shaderMaterial attach="material" uniformsNeedUpdate={true} {...shader} />
    </mesh>
  );
};

function HandleImages({refs, group, setLoading}) {

useEffect(()=>{
  group.current.rotation.y = -.5;
  group.current.rotation.x = -.3;
  group.current.rotation.z = -.1;
},[])



  return (
    <group ref={group}>
      {refs.map((e, i) => {
        // const texture = useLoader(THREE.TextureLoader, img)
        return <Image i={i} key={i} mesh={refs[i]} setLoading={setLoading}/>;
      })}
    </group>
  );
}


//DESIGN NOTE: Setloading does nothing at the moment but it's all plugged in so why not leave it until u want to do something w it


function Module({refs, group, setLoading}) {
  return (
    <div id="canvas">
      <Canvas camera={{ position: [0, 0, 2] }} gl={{ antialias: true }}>
        <Suspense fallback={null}>
        
          <HandleImages refs={refs} group={group} setLoading={setLoading}/>
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
