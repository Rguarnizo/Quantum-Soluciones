import gsap from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";
import { Canvas, useThree, useFrame } from "react-three-fiber";

let EscenaProductos = () => {

  let cube = useRef();
  

  useEffect(() => {
  gsap.to(cube.current.rotation, {
      x: 5,
      y: 5,
      scrollTrigger: {
        trigger: '.Productos',
        scrub: 1, 
        start: 'top top',
        end: '200%'
      },
    });
  },[]);


  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={cube}>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </>
  );
};

export default EscenaProductos;
