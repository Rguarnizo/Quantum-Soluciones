import NavBar from "./Components/NavBar";
import WhatsAppButton from "./Components/WhatsAppButton";
import FirstPageQuantum from "./Pages/Desktop/FirstPageQuantum";
import SecondPageQuantum from "./Pages/Desktop/SecondPageQuantum";
import ThirdPageQuantum from "./Pages/Desktop/ThirdPageQuantum";
import FourthPageQuantum from "./Pages/Desktop/FourthPageQuantum";
import FifthPageQuantum from "./Pages/Desktop/FifthPageQuantum";
import SixthPageQuantum from "./Pages/Desktop/SixthPageQuantum";
import SeventhPageQuantum from "./Pages/Desktop/SeventhPageQuantum";
import Footer from "./Pages/Desktop/Footer";
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
      <FifthPageQuantum />
      <SixthPageQuantum />
      <SeventhPageQuantum />
      <Footer />
      {/* <FirstPageQuantum />
      <SecondPageQuantum />
      <ThirdPageQuantum />
      <FourthPageQuantum />
      <FifthPageQuantum />
      <SixthPageQuantum />
      <SeventhPageQuantum />
      <Footer /> */}
      <WhatsAppButton />
    </>
  );
};

export default App;
