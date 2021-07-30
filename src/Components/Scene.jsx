import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {MeshoptDecoder} from "three/examples/jsm/libs/meshopt_decoder.module.js"
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader"
import Loader from "../utils/Loader";



import gsap from "gsap";

function Model() {

  const dracoLoader = new DRACOLoader();

  // const loader = new GLTFLoader();
  // loader.setMeshoptDecoder(MeshoptDecoder);
  // loader.setKTX2Loader(KTX2Loader);  
  // loader.setDRACOLoader(dracoLoader);
  
  let gltf = useLoader(GLTFLoader, "Models/Dji/DJIDrone.gltf",(loader)=>{
    console.log(loader);
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.setDRACOLoader(dracoLoader);
  });
  
  const mixer = new THREE.AnimationMixer();
  const clock = new THREE.Clock();
  const animation = useRef();
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#maintenance",
      scrub: 3,
      start: "top top",
      pin: "#maintenance",
      end: "+=400%",
      markers:true
    },
  });

  useEffect(() => {
    animation.current = mixer.clipAction(gltf.animations[0], gltf.scene);
    // animation.current.setLoop(THREE.LoopOnce);
    animation.current.play();
    
    tl.to(
      animation.current,
      { time: 21, onUpdate: function() {mixer.update(0.1)}},
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
  
    
    <Canvas id="canvas" className="EscenaProductos w-full h-full" color={0x000000} camera={{position:[0,0,3]}}>
      <spotLight position={[5, 5, 0]} intensity={5} castShadow />
      <spotLight position={[-5, 5, 0]} intensity={5} castShadow />
      <spotLight position={[-5, -5, 0]} intensity={5} castShadow />
      <spotLight position={[5, -5, 0]} intensity={5} castShadow />
      <hemisphereLight args={[0xffeeb1, 0x080820, 4]} position={[5, 5, 0]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
    </>
  );
}
