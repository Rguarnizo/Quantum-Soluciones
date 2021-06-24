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
  <Marcas className="absolute bottom-0"/>
  <div class="tenor-gif-embed absolute bottom-10 right-0 " data-postid="13026640" data-share-method="host" data-width="100%" data-aspect-ratio="0.3940677966101695"><a href="https://tenor.com/view/mouse-scroll-arrow-down-gif-13026640">Mouse Scroll GIF</a> from <a href="https://tenor.com/search/mouse-gifs">Mouse GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    <Canvas className="EscenaProductos h-screen w-3/5" color={0x000000} camera={{position:[0,0,3]}}>
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
    
    </>
  );
}
