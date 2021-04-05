import { Canvas } from "react-three-fiber";
import React, { useEffect } from "react";
import BrandName from "./Components/BrandsNames";
import Scene from "./Components/Scene";
import "./App.css";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".camaras", {
      scrollTrigger: { 
        trigger: ".camaras", 
        scrub: 0.5,
        pin:".camaras",
        start:"top top",
        end: "+=200%"
      },
    });
  });

  return (
    <>
      <div className="w-screen h-screen"></div>
      <section className="camaras flex flex-row h-screen">
        <Canvas className="threeCam">
          <Scene />
        </Canvas>
        <BrandName />
      </section>
      <div className="w-screen h-screen"></div>
      
    </>
  );
}

export default App;
