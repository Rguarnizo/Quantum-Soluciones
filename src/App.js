import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import MaintenanceServices from "./Pages/MaintenanceServices";
import Shop from "./Pages/Shop";
import Catalog from "./Pages/Catalog";
import AboutUs from "./Pages/AboutUs";
import CompanyLocations from "./Pages/CompanyLocations";
import Footer from "./Pages/Footer";

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
