import NavBar from "./Components/NavBar";
import WhatsAppButton from "./Components/WhatsAppButton";
import FirstPageQuantum from "./Pages/FirstPageQuantum";
import SecondPageQuantum from "./Pages/SecondPageQuantum";
import ThirdPageQuantum from "./Pages/ThirdPageQuantum";
import FourthPageQuantum from "./Pages/FourthPageQuantum";
import "./Styles/app.scss";
import * as Scroll from "react-scroll";
import React from "react";
import "./Styles/styleguide.scss";

const App = () => {
  React.useEffect(() => {
    let scroll = Scroll.animateScroll;
    scroll.scrollTo(0);
  }, []);

  return (
    <>
      <NavBar />
      <FirstPageQuantum />
      <SecondPageQuantum />
      <ThirdPageQuantum />
      <FourthPageQuantum />
      <WhatsAppButton />
    </>
  );
};

export default App;
