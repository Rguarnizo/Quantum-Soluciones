import "./App.css";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  let tl; 

  useEffect(() => {
    
    let sections = gsap.utils.toArray("section");
    tl = gsap.timeline();
    sections.forEach((section) => {
      tl.to(section, { scrollTrigger: { pin: section, end: "100%" } });
    });
  });

  return (
    <>
      <section className="Home        h-screen bg-green-500   ">
        <div className="box bg-white h-32 w-32"></div>
      </section>
      <section className="Promociones h-screen bg-blue-500    ">
        <div className="box bg-white h-32 w-32"></div>
      </section>
      <section className="Productos   h-screen bg-red-500     ">
        <div className="box bg-white h-32 w-32"></div>
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
