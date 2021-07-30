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
    
    let gltf = useLoader(GLTFLoader, "Models/Minidron/minidron.gltf",(loader)=>{
      loader.setMeshoptDecoder(MeshoptDecoder);
      loader.setDRACOLoader(dracoLoader);
    });
    const mixer = new THREE.AnimationMixer();
    const clock = new THREE.Clock();
    const animation = useRef();

    useEffect(() => {
        gltf.scene.scale.set(0.3,0.3,0.3);
        gltf.scene.rotation.y = Math.PI/6
        gltf.scene.rotation.x = Math.PI/8
        console.log(gltf);
        animation.current = mixer.clipAction(gltf.animations[0], gltf.scene).startAt(2).play();
    },[]);

    useFrame(()=> {
        let time = clock.getDelta();
        mixer.update(time)
    })

    return (
        <>
          <primitive object={gltf.scene} />
        </>
      );
}