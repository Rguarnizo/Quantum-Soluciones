import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {MeshoptDecoder} from "three/examples/jsm/libs/meshopt_decoder.module.js"
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader"


export default function Camera() {

    const dracoLoader = new DRACOLoader();
  
    // const loader = new GLTFLoader();
    // loader.setMeshoptDecoder(MeshoptDecoder);
    // loader.setKTX2Loader(KTX2Loader);  
    // loader.setDRACOLoader(dracoLoader);
    
    let gltf = useLoader(GLTFLoader, "Models/Camera/camera.gltf",(loader)=>{
      console.log(loader);
      loader.setMeshoptDecoder(MeshoptDecoder);
      loader.setDRACOLoader(dracoLoader);
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