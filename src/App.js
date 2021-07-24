import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";

const App = () => {
  const [setDark, setsetDark] = React.useState("");

  return (
    <>
      <NavBar />
      <Home />
      <Services />
    </>
  );
};

export default App;
