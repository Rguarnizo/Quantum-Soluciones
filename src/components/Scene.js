import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Marcas from "./Marcas";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {MeshoptDecoder} from "three/examples/jsm/libs/meshopt_decoder.module.js"
import {KTX2Loader} from "three/examples/jsm/loaders/KTX2Loader"
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader"
import {BasisTextureLoader} from "three/examples/jsm/loaders/BasisTextureLoader"


import gsap from "gsap";

function Model() {

  const dracoLoader = new DRACOLoader();

  // const loader = new GLTFLoader();
  // loader.setMeshoptDecoder(MeshoptDecoder);
  // loader.setKTX2Loader(KTX2Loader);  
  // loader.setDRACOLoader(dracoLoader);
  
  let gltf = useLoader(GLTFLoader, "Models/DronDji/DJIDrone.gltf",(loader)=>{
    console.log(loader);
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.setDRACOLoader(dracoLoader);
  });
  
  const mixer = new THREE.AnimationMixer();
  const clock = new THREE.Clock();
  const animation = useRef();
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#Productos",
      scrub: 6,
      start: "top center",
      end: "+=400%",
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
          y: Math.PI / 4,
          scrollTrigger: {
            end: "+=100%"
          }
        },
        0
      );
      
        tl.fromTo(".brands",{
          xPercent: 100           
        },{
          xPercent: 0
        },0)
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
  
    
    <Canvas className="EscenaProductos h-2/3 lg:h-screen w-3/5" color={0x000000} camera={{position:[0,0,3]}}>
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
    <Marcas className="hidden w-2/5 lg:absolute lg:bottom-0"/>
    
    </>
  );
}
