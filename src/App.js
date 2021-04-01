import logo from "./logo.svg";
import "./App.css";
import { useRef, UseEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandName from "./Components/BrandsNames";

function App() {
  let circleRed = useRef(null);
  let circleYellow = useRef(null);
  let circleBlue = useRef(null);

  useEffect(() => {}, []);

  return (
    <>
      <BrandName/>
    </>
  );
}

export default App;
