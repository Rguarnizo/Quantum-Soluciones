import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
const App = () => {
  const [setDark, setsetDark] = React.useState("");

  return (
    <>
      <NavBar />
      <Home />
    </>
  );
};

export default App;
