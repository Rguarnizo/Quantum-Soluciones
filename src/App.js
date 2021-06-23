import "./carrousel.scss";
import React, {useEffect} from "react";
import "./App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LateralNav from "./components/LateralNav";


import Scene from "./components/Scene";
import Map from "./components/Map";
import Home from "./components/Home";

let Card = (props) => {
  return (
    <div
      id="card"
      className={`w-5/6 lg:w-2/6 h-3/6 shadow-2xl flex flex-col justify-around rounded-lg mx-2 my-10 lg:my-2 ${props.className}`}
    >
      <div className="w-full h-5/6 flex flex-col justify-around">
        <h1 className="px-6 font-roboto font-bold text-2xl">{props.title}</h1>
        <h4 className="px-6 font-roboto text-lg font-normal">
          {props.content}
        </h4>
      </div>
      <a href={`${props.url}`} className="border-gray-300 border-t-2 w-full h-1/6 justify-center flex flex-col items-center group hover:bg-gray-400">
        <h3 className="text-lg font-roboto font-semibold text-gray-500 group-hover:text-white">
          {props.link}
        </h3>
      </a>
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
      <LateralNav />
      <Home />
      <section
        id="Promociones"
        className="h-screen w-screen flex flex-col lg:flex-row px-24 py-10 lg:py-0 items-center justify-between"
      >
        <h2 className="absolute top-0 font-bold font-roboto text-5xl">
          Nuestros servicios
        </h2>

        <Card
          title={"Reparación de equipos"}
          content={
            "Disponemos del mejor equipo para llevar a cabo la reparación de equipos como cámaras, lentes, drones, flashes, radios y otros dispositivos eléctronicos"
          }
          link={"Saber más"}
          url="google.com"
        />
        <Card
          title={"Venta de equipos y accesorios"}
          content={
            "Ofrecemos un amplio catálogo de equipos y accesorios a los mejores precios del mercado"
          }
          link={"Ir a la tienda"}
          url="google.com"
        />
        <Card
          // className={"flex-shrink-0"}
          title={"Automatización y sistemas"}
          content={
            "Proveemos servicios de automatización, desarrollo de sistemas de facturación, desarrollo de páginas web y otros servicios"
          }
          link={"Saber más"}
          url="google.com"
        />
        <div className="absolute top-0 right-0" id="drone">
          <img className="hidden lg:block object-scale-down" src="Images/Drone.png" />
        </div>
      </section>
      <section id="Productos" className="flex flex-col w-screen h-screen ">
      <Scene />
        <div className=" h-screen w-screen flex flex-row justify-between">
          <Card title="Reparación de Drones" content="Arreglamos los drones más especializados como el DJI Phantom,Nano,etc..." link="Rastrea tu orden"/>
          <Card title="Reparación de Camaras" content="Arreglamos camaras profesionales y semiprofesionales, reflex, lentes y flashes" link="Rastrea tu orden"/>
        </div>
      </section>
      <section
        id="Ubicacion"
        className="flex h-screen w-screen items-center justify-center  "
      >
        <Map
          center={location.center}
          zoom={location.zoom}
          className="h-4/6 w-4/6"
        />
      </section>
      <section id="Footer" className="h-1/6 ">
        <div className="box  h-32 w-32"></div>
      </section>
    </>
  );
}

export default App;
