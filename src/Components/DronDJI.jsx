/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { useFrame } from "@react-three/fiber";

import gsap from "gsap";

export default function DronDJI({ url }) {
  //console.log(url);
  let gltf = useLoader(GLTFLoader, url, (loader) => {
    loader.setMeshoptDecoder(MeshoptDecoder);
  });

  const mixer = new THREE.AnimationMixer();
  // const clock = new THREE.Clock();
  const animation = useRef();
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#maintenance",
      scrub: 1,
      start: "top top",
      end: () => "+=" + 2 * document.querySelector(".part").offsetWidth,
    },
  });

  useEffect(() => {
    animation.current = mixer.clipAction(gltf.animations[0], gltf.scene);
    // animation.current.setLoop(THREE.LoopOnce);
    animation.current.play();

    tl.to(
      animation.current,
      {
        time: 21,
        onUpdate: function () {
          mixer.update(0.1);
        },
      },
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
            end: "+=100%",
          },
        },
        0
      );

      tl.fromTo(
        ".brands",
        {
          xPercent: 100,
        },
        {
          xPercent: 0,
        },
        0
      );
    });
  }, []);

  useFrame(() => {
    mixer.time += 0.01;
  });

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
}
