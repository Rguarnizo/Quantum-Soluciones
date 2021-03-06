import "./carrousel.scss";
import React, {useEffect} from "react";
import "./App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Nav from "./components/LateralNav";


import Scene from "./components/Scene";
import Map from "./components/Map";
import Home from "./components/Home";
import Services from "./components/Services";
import Card from "./components/Card"

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".anim-text",
      {
        alpha: 0,
      },
      {
        alpha: 1,
        duration: 2,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#carousel",
      {
        alpha: 0,
      },
      {
        alpha: 1,
        duration: 2,
      }
    );
  }, []);

  useEffect(() => {
      gsap.to("#Productos", {
        scrollTrigger: {
          trigger: "#Productos",
          pin: "#Productos",
          scrub: 2,
          start: "top top",
          end: "+=250%",
          markers: true,
        },
      });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#drone",
      { x: 100, y: -100, alpha: 0 },
      {
        x: 0,
        y: 0,
        alpha: 1,
        scrollTrigger: {
          trigger: "#Promociones",
          start: "center bottom",
          
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#card",
      { alpha: 0 },
      {
        alpha: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#Promociones",
          start: "center bottom",
          markers: true,
          
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#scene-card",
      { alpha: 0 },
      {
        alpha: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#Productos",
          start: "center bottom",
          markers: true,
          
        },
      }
    );
  }, []);



  let defaultProps = {
    center: {
      lat: 4.66430205309855,
      lng: -74.05867751000919,
    },
    zoom: 15,
  };

  const [location, setlocation] = React.useState(defaultProps);

  return (
    <>
      <Nav />
      <Home />
      <Services/>
      <div id="Productos" className="relative flex flex-col w-screen h-screen ">
      
      <Scene /> 
      <div className=" absolute top-0 left-0 h-screen w-screen flex flex-col lg:flex-row mt-10  justify-around">      
          <Card id="scene-card" title="Reparaci??n de Drones" content="Arreglamos los drones m??s especializados como el DJI Phantom,Nano,etc..." link="Rastrea tu orden"/>          
          <Card id="scene-card" title="Reparaci??n de Camaras" content="Arreglamos camaras profesionales y semiprofesionales, reflex, lentes y flashes" link="Rastrea tu orden"/>          
      </div>
      </div>
      <section
        id="Ubicacion"
        className="relative flex h-screen w-screen items-center justify-center  "
      >
      <h3 className="absolute top-0 font-bold text-4xl">??D??nde estamos ubicados? </h3>
        <Map
          center={location.center}
          zoom={location.zoom}
          className="w-screen h-4/6 lg:w-4/6"
        />
      </section>
      <section id="Footer" className="h-1/6 ">
        <div className="box h-32"></div>
      </section>
    </>
  );
}

export default App;
