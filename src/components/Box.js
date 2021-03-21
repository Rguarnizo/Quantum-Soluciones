import React, { useState,useRef} from "react";
import {useFrame} from "react-three-fiber";
import { a, useSpring } from "react-spring/three";

const Box = ({position}) => {

  const meshRef = useRef();

  const [hovered, setHovered] = useState(false);

  const props = useSpring({
    scale: hovered ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "hotpink" : "blue",
  });

  useFrame(()=> {
    meshRef.current.rotation.x+= 0.01;
    meshRef.current.rotation.y+= 0.01;
  });

  return (
    <a.mesh
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={props.scale}
      ref={meshRef}
    >
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry"/>
      <a.meshPhysicalMaterial color={props.color} attach="material" />
    </a.mesh>
  );
};

export default Box;
