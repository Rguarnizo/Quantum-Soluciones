import "./App.css";
import "./carrousel.scss";
import React, { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
          start: "top +=98",
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
  })

  return (
    <>
      <nav
        className="flex flex-row  w-full h-12 justify-between py-6 px-4 shadow items-center bg-white"
        style={{ zIndex: "99999", display: "flex", position: "fixed" }}
      >
        <img
          className="object-contain h-12 w-52"
          src={
            "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FQuantum_Logo.png?alt=media&token=6c9587a8-04f0-4b2d-813b-2dd8d99d4a5a"
          }
        />
        <div className="flex flex-row justify-between items-center space-x-8 ">
          <a
            className=" font-roboto font-bold text-gray-500 hover:text-blue-500  text-2xl"
            href=""
          >
            Home
          </a>
          <a
            className=" font-roboto font-bold text-gray-500 hover:text-blue-500  text-2xl"
            href=""
          >
            Servicios
          </a>
          <a
            className=" font-roboto font-bold text-gray-500 hover:text-blue-500  text-2xl"
            href=""
          >
            Tienda
          </a>
          <a
            className=" font-roboto font-bold text-gray-500 hover:text-blue-500  text-2xl"
            href=""
          >
            Promos
          </a>
          <button className="font-roboto text-lg text-blue-500  font-bold hover:text-white my-12 py-1 px-4 rounded-md border-2 border-blue-500 hover:border-blue-200 hover:bg-blue-500 focus:border-transparent">
            Rastrear
          </button>
        </div>
      </nav>
      <div className="Home h-screen flex flex-col items-center sm:flex-row">
        <div className="w-4/6 h-full py-32 px-16 flex flex-col ">
          <h1 className="anim-text text-3xl font-roboto font-semibold text-gray-500">Quantum Soluciones</h1> 
          <h1 className="anim-text text-8xl font-roboto font-bold text-black my-5">Servicio técnico especializado</h1> 
          <h4 className="anim-text text-2xl font-roboto font text-black my-5">en reparación de </h4> 
        </div>
        <div className="w-2/6 h-full py-24 items-center">
          <ImagesCarousel/>
        </div>
      </div>
      <section className="Promociones h-screen ">
        <div className="box h-32 w-32"></div>
      </section>
      {/* <section className="Productos flex flex-col w-screen h-screen ">
        <Scene/>
        <div className="Marcas w-screen">
          <Marcas/>
        </div>
      </section> */}
      <section className="Ubicacion h-screen w-500  ">
        <div className="box  h-32 w-32"></div>
      </section>
      <section className="Footer h-1/6 ">
        <div className="box  h-32 w-32"></div>
      </section>
    </>
  );
}

export default App;
