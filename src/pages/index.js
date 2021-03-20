import React,{useState} from "react";
import "./style.css";
import { Canvas } from "react-three-fiber";


const Box = () => {
  //* Init a variable, and fuction to change state
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={active? [1,1,1]:[1.5,1.5,1.5]}
    >
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshBasicMaterial
        color={hovered? "hotpink" : "red"}
        attach="material"
      />
    </mesh>
  )
}

export default function Home() {
  return (
    <Canvas>
      <Box />
    </Canvas>
  )
}


