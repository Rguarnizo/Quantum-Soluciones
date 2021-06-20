import "./carrousel.scss";
import React, { Suspense, useEffect, useRef, useState } from "react";
import "./App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LateralNav from "./components/LateralNav";

import Marcas from "./components/Marcas";
import Scene from "./components/Scene";

const ImagesCarousel = (props) => {
  // console.log(props);
  return (
    <div className="container">
      {/* {props.mobile ? (
        <>
          <input
            type="radio"
            name="slider"
            id="item-1"
            disabled
            defaultChecked
          />
          <input type="radio" name="slider" id="item-2" disabled />
          <input type="radio" name="slider" id="item-3" disabled />
        </>
      ) : (
        <>
          <input type="radio" name="slider" id="item-1" defaultChecked />
          <input type="radio" name="slider" id="item-2" />
          <input type="radio" name="slider" id="item-3" />
        </>
      )} */}
      <input type="radio" name="slider" id="item-1" defaultChecked />
      <input type="radio" name="slider" id="item-2" />
      <input type="radio" name="slider" id="item-3" />

      <div className="cards">
        <label className="card" htmlFor="item-1" id="song-1">
          <img
            src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
            alt="song"
          />
        </label>
        <label className="card" htmlFor="item-2" id="song-2">
          <img
            src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
            alt="song"
          />
        </label>
        <label className="card" htmlFor="item-3" id="song-3">
          <img
            src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            alt="song"
          />
        </label>
      </div>
    </div>
  );
};


function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let sections = gsap.utils.toArray("section");
    sections.forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 0.5,
          start: "top top",
          end: "+=100%",
          markers: true,
        },
      });
    });
  }, []);

  useEffect(()=>{
    gsap.fromTo(".anim-text",
      {
        alpha: 0,
      },
      {
        alpha: 1
      }
    );
  });



  return (
    <>
      <LateralNav/>
      <div id="Home" className=" h-screen flex flex-col items-center sm:flex-row">
        <div className="w-4/6 h-full py-32 px-16 flex flex-col ">
          <h1 className="anim-text text-3xl font-roboto font-semibold text-gray-500">Quantum Soluciones</h1> 
          <h1 className="anim-text text-8xl font-roboto font-bold text-black my-5">Servicio técnico especializado</h1> 
          <h4 className="anim-text text-2xl font-roboto font text-black my-5">en reparación de </h4> 
        </div>
        <div className="w-2/6 h-full py-24 items-center">
          <ImagesCarousel/>
        </div>
      </div>
      <section id="Promociones" className=" h-screen ">
        <div className="box h-32 w-32"></div>
      </section>
      <section id="Productos" className="flex flex-col w-screen h-screen ">
        <Scene/>        
      </section>
      <section id="Ubicacion" className=" h-screen w-500  ">
        <div className="box  h-32 w-32"></div>
      </section>
      <section id="Footer" className="h-1/6 ">
        <div className="box  h-32 w-32"></div>
      </section>
    </>
  );
}

export default App;
