import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {MeshoptDecoder} from "three/examples/jsm/libs/meshopt_decoder.module.js"



export default function Camera() {
    
    let gltf = useLoader(GLTFLoader, "Models/Camera/camera.gltf",(loader)=>{
      loader.setMeshoptDecoder(MeshoptDecoder);
    });

    useEffect(()=>{
      gltf.scene.scale.set(0.5,0.5,0.5);
      gltf.scene.rotation.y = Math.PI/4
      gltf.scene.rotation.x = Math.PI/6
      
    })

    useFrame(()=>{

      gltf.scene.rotation.y += 0.01;
      
    })

    return (
        <>
          <primitive object={gltf.scene} />
        </>
      );
}