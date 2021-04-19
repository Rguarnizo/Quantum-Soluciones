import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {Canvas,useThree,useFrame} from 'react-three-fiber';
import EscenaProductos from "./components/EscenaProductos";
import Marcas from "./components/Marcas";



function App() {
  gsap.registerPlugin(ScrollTrigger);
  const[tween,setTween] = useState();
  

  useEffect(() => {
    let sections = gsap.utils.toArray("section");
    sections.forEach((section) => {      
      gsap.to(section,
        {
          scrollTrigger:{
            trigger:section,
            pin:section,
            scrub:0.5,
            start:'top top',
            end: '+=100%',            
          }
        }
      );
    });
  },[]);



  return (
    <>
      <section className="Home h-screen bg-green-500   ">
        <div className="box bg-white h-32 w-32"></div>
      </section>
      <section className="Promociones h-screen bg-blue-500    ">
        <div className="box bg-red-500 h-32 w-32"></div>
      </section>
      <section className="Productos flex flex-row h-screen bg-red-500     ">
        <Canvas className="EscenaProductos h-screen w-3/6">
          <EscenaProductos />
        </Canvas>
        <div className="Marcas h-screen w-3/6 bg-white">
          <Marcas />
        </div>
      </section>
      <section className="Ubicacion h-screen bg-yellow-500  ">
        <div className="box bg-white h-32 w-32"></div>
      </section>
      <section className="Footer h-1/6 bg-white">
      <div className="box bg-white h-32 w-32"></div>
      </section>
    </>
  );
}

export default App;
