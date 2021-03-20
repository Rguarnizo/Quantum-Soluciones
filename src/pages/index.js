import React,{useState,useRef,useEffect} from "react";
import "./style.css";
import { Canvas, useFrame,extend,useThree} from "react-three-fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useSpring,a} from 'react-spring/three';

extend({OrbitControls});

const CameraLens =  () => {
  const [model, setModel] = useState();
  useEffect(() => {
      new GLTFLoader().load('/cameraModel/scene.gltf',setModel); 
    });

  return model? <primitive object={model.scene} /> : null
}

const Controls = () => {

  const {camera,gl} = useThree();
  const orbitControlsRef = useRef();

  useFrame(()=>{
    orbitControlsRef.current.update()
  });

  return(
    <orbitControls
    //autoRotate
    // maxPolarAngle = {Math.PI / 3}  //* max  Rotate angle y axis
    // //?  If max and min is the same, maintain static in the angle
    // minPolarAngle = {Math.PI / 3}  //* min  Rotate angle y axis
    args={[camera,gl.domElement]}
    ref={orbitControlsRef}
    />
  )
}


const Box = () => {


  //* References
  const meshRef = useRef();

  //* Init a variable, and fuction to change state
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  //* Animate with react Spring the parameters scale and color.
  const props = useSpring({
    scale: active? [1,1,1]:[1.5,1.5,1.5],
    color: hovered? "hotpink" : "blue",
  });


  //* Each frame execute this code.
  useFrame(()=>{
     meshRef.current.rotation.y+=0.01;
     meshRef.current.rotation.x+=0.01;

  });

  return (
    <a.mesh
      ref={meshRef} 
      position={[0,0,2]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
    >
      
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <a.meshPhysicalMaterial //* Material need light to work
        color={props.color}
        attach="material"
      />
    </a.mesh>
  )
}

const Plane = () => (
  <mesh receiveShadow>
     <planeBufferGeometry args={[100, 100]} attach="geometry" />
      <meshPhysicalMaterial //* Material need light to work
        color="white"
        attach="material"
      />
  </mesh>
);

export default function Home() {
  return (
    <Canvas>
      <Controls/>
      <ambientLight intensity={0.5}/>
      <spotLight penumbra={1}/>
      <fog attach="fog" args={['white',5,1]} />
      <Box />
      <Plane/>
      <CameraLens/>
    </Canvas>
  )
}


