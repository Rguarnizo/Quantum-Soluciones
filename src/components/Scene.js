import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Marcas from "./Marcas";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

function Model() {
  const gltf = useLoader(GLTFLoader, "Models/Dji/DjiDrone.gltf");
  const mixer = new THREE.AnimationMixer();
  const clock = new THREE.Clock();
  const animation = useRef();
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#Productos",
      scrub: 1,
      start: "top +=100",
      end: "+=1000%",
    },
  });

  useEffect(() => {
    animation.current = mixer.clipAction(gltf.animations[0], gltf.scene);
    // animation.current.setLoop(THREE.LoopOnce);
    animation.current.play();
    
    tl.to(
      animation.current,
      { time: 23, onUpdate: function() {mixer.update(0.1)}},
      0
    );
  }, []);

  useEffect(() => {
    setTimeout(() => {
      tl.to(
        gltf.scene.rotation,
        {
          y: Math.PI / 2,
        },
        0
      );
      
      let brands = gsap.utils.toArray(".brand");

      tl.fromTo(
        brands,
        { autoAlpha: 0, scale: 0 },
        {
          autoAlpha: 1,
          scale: 1,          
        },
        
        0        
      ).fromTo(".brands",{x:'${screen.width}'},{x:0},0);
    });
  }, []);

  useFrame(()=> {
    mixer.time += 0.01;
  });


  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
}

export default function Scene() {
  return (<>
    <Canvas className="EscenaProductos h-4/6" color={0x000000} camera={{position:[0,0,3]}}>
      <spotLight position={[5, 5, 0]} intensity={10} castShadow />
      <spotLight position={[-5, 5, 0]} intensity={10} castShadow />
      <spotLight position={[-5, -5, 0]} intensity={10} castShadow />
      <spotLight position={[5, -5, 0]} intensity={10} castShadow />
      <hemisphereLight args={[0xffeeb1, 0x080820, 4]} position={[5, 5, 0]} />
      {/* <EscenaProductos /> */}

      <Suspense fallback={null}>
        {/* <Drone/> */}
        <Model />
      </Suspense>

      {/* <Suspense fallback={null}>
          <Tokyo/>
        </Suspense> */}
    </Canvas>
    <Marcas/>
    </>
  );
}
