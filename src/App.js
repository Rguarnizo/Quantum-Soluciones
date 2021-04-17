import "./App.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {Canvas,useThree,useFrame} from 'react-three-fiber';


let EscenaProductos = () => {

  let cube = useRef();


  useFrame(() => {
    cube.current.rotation.x += 0.01
    cube.current.rotation.y += 0.01
  });

  return <>
  <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh ref={cube}>
            <boxGeometry/>
            <meshBasicMaterial/>
          </mesh>
  </>
}

function App() {
  gsap.registerPlugin(ScrollTrigger);

  

  useEffect(() => {
    
    let sections = gsap.utils.toArray("section");


    sections.forEach((section) => {
      let boxes =  section.querySelectorAll('.box');

      
      let tl = gsap.timeline(
        {
          scrollTrigger:{
            trigger:section,
            pin:section,
            scrub:0.5,
            start:'top top',
            end: '+=100%'
          }
        }
      ).to(boxes,{y:section.offsetHeight/2,stagger:0.6})
     
      

      
    });
  },[]);



  return (
    <>
      <section className="Home        h-screen bg-green-500   ">
        <div className="box bg-white h-32 w-32"></div>
      </section>
      <section className="Promociones h-screen bg-blue-500    ">
        <div className="box bg-red-500 h-32 w-32"></div>
      </section>
      <section className="Productos h-screen w-3/6 bg-red-500     ">
        <Canvas className="EscenaProductos h-screen">
          <EscenaProductos/>
        </Canvas>
      </section>
      <section className="Ubicacion   h-screen bg-yellow-500  ">
        <div className="box bg-white h-32 w-32"></div>
      </section>
      <section className="Footer h-1/6 bg-white">
      <div className="box bg-white h-32 w-32"></div>
      </section>
    </>
  );
}

export default App;
