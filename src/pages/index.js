import React,{useState,useRef} from "react";
import "./style.css";
import { Canvas, useFrame} from "react-three-fiber";
import {useSpring,a} from 'react-spring/three';


const Box = () => {


  //* References
  const meshRef = useRef();

  //* Init a variable, and fuction to change state
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  //* Animate with react Spring the parameters scale and color.
  const props = useSpring({
    scale: active? [1,1,1]:[1.5,1.5,1.5],
    color: hovered? "hotpink" : "red",
  });


  //* Each frame execute this code.
  useFrame(()=>{
    meshRef.current.rotation.y+=0.01;
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
      <a.meshBasicMaterial
        color={props.color}
        attach="material"
      />
    </a.mesh>
  )
}

export default function Home() {
  return (
    <Canvas>
      <Box />
    </Canvas>
  )
}


