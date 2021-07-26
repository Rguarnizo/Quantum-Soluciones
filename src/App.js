import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import MaintenanceServices from "./Pages/MaintenanceServices";
import Shop from "./Pages/Shop";
import Catalog from "./Pages/Catalog";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  const [setDark, setsetDark] = React.useState("");
  

  return (
    <>
      <NavBar />
      <Home />
      <Services />
      <MaintenanceServices />
      <Shop />
      <Catalog />
    </>
  );
};

export default App;
