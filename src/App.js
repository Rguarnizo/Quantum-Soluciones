import "./App.css";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let sections = gsap.utils.toArray("section");

    sections.forEach((section) => {
      gsap.to(section, { scrollTrigger: { pin: section, end: "100%" } });
    });
  });

  return (
    <>
      <section className="Home        h-screen bg-green-500   "></section>
      <section className="Promociones h-screen bg-blue-500    "></section>
      <section className="Productos   h-screen bg-red-500     "></section>
      <section className="Ubicacion   h-screen bg-yellow-500  "></section>
      <section className="Footer h-1/6 bg-white"></section>
    </>
  );
}

export default App;
