import React,{useState} from "react";
import "./style.css";
import { Canvas } from "react-three-fiber";
import {useSpring,a} from 'react-spring/three';


const Box = () => {
  //* Init a variable, and fuction to change state
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active? [1,1,1]:[1.5,1.5,1.5],
    color: hovered? "hotpink" : "red",
  });

  return (
    <a.mesh
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


