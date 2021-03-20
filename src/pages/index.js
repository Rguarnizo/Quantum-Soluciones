import React,{useState,useRef} from "react";
import "./style.css";
import { Canvas, useFrame,extend,useThree} from "react-three-fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {useSpring,a} from 'react-spring/three';

extend({OrbitControls});

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
    // meshRef.current.rotation.y+=0.01;
     meshRef.current.rotation.x+=0.01;

  });

  return (
    <a.mesh
      ref={meshRef} 
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

export default function Home() {
  return (
    <Canvas>
      <ambientLight/>
      <spotLight position={[0,5,10]}/>
      <Controls/>
      <Box />
    </Canvas>
  )
}


