import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import EscenaProductos from "./EscenaProductos";
import Drone from "./Drone";
import DroneR from "./DroneR";
import DJI from "./DJI";
import DjiDrone from "./DJIDrone";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import gsap from "gsap";

function Model(){

  const gltf = useLoader(GLTFLoader,"Models/Dji/DjiDrone.gltf");
  const mixer = new THREE.AnimationMixer();
  const clock = new THREE.Clock();
  const animation = useRef();
  
  useEffect(()=>{
    mixer.clipAction(gltf.animations[0],gltf.scene);
    
  });

  useEffect(()=>{
    console.log(animation.current);
    let tl = gsap.timeline({scrollTrigger: {
      trigger:".Productos",
      scrub: 1, 
      start: 'top top',
      end: '100%'
    }});
    setTimeout(() => {
      tl.to(gltf.scene.rotation,{
        
        y:Math.PI/2,
          
      },0).to(mixer,{time:23},0);
    });
  },[]);

  useFrame(()=>{
  
    const delta = clock.getDelta();
    mixer.update(delta);
  });

  return<>
    <primitive object={gltf.scene}/>
  </>
}


export default function Scene() {

  return (
    <Canvas className="EscenaProductos w-2/6" color={0x000000}>
        <OrbitControls/>
        <spotLight position={[5,5,0]}  intensity={10} castShadow/>
        <spotLight position={[-5,5,0]} intensity={10} castShadow/>
        <spotLight position={[-5,-5,0]} intensity={10} castShadow/>
        <spotLight position={[5,-5,0]} intensity={10} castShadow/>
        <hemisphereLight args={[0xffeeb1,0x080820,4]} position={[5,5,0]}/>
            {/* <EscenaProductos /> */}
      
    <Suspense fallback={null}>
        {/* <Drone/> */}
        <Model/>
    </Suspense>
      
    {/* <Suspense fallback={null}>
          <Tokyo/>
        </Suspense> */}
    </Canvas>
  );
}
