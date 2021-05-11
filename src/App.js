import "./App.css";
import React, { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {Canvas,useThree,useFrame} from 'react-three-fiber';
import {OrbitControls} from '@react-three/drei';
import EscenaProductos from "./components/EscenaProductos";
import Marcas from "./components/Marcas";
import Tokyo from "./components/Tokyo";
import Drone from "./components/Drone";




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
      <section className="Promociones h-screen bg-blue-500">
        <div className="box bg-red-500 h-32 w-32"></div>
      </section>
      <section className="Productos flex flex-row h-screen bg-white">
        <Canvas className="EscenaProductos w-2/6" camera={{position: [0,0,5]}}>
          {/* <EscenaProductos/>
          <Suspense fallback={null}>
            <Tokyo/>
          </Suspense> */}
          

          
        </Canvas>
        <div className="Marcas w-4/6 bg-red-500">
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
