import React, { Suspense } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import MaintenanceServices from "./Pages/MaintenanceServices";
import Shop from "./Pages/Shop";
import Catalog from "./Pages/Catalog";
import AboutUs from "./Pages/AboutUs";
import CompanyLocations from "./Pages/CompanyLocations";
import Footer from "./Pages/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // notice "resize" isn't in the list
});

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
      <AboutUs />
      <CompanyLocations />
      <Footer />
    </>
  );
};

export default App;
