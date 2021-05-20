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
import DarkButton from "./Components/DarkButton";
import "./Styles/app.scss";
import * as Scroll from "react-scroll";
import React from "react";
import "./Styles/styleguide.scss";

const App = () => {
  React.useEffect(() => {
    let scroll = Scroll.animateScroll;
    scroll.scrollTo(0);
  }, []);

  const [setDark, setsetDark] = React.useState("");

  return (
    <>
      <NavBar setDark={setDark} />
      <FirstPageQuantum setDark={setDark} />
      <SecondPageQuantum setDark={setDark} />
      <ThirdPageQuantum setDark={setDark} />
      <FourthPageQuantum setDark={setDark} />
      <FifthPageQuantum setDark={setDark} />
      <SixthPageQuantum setDark={setDark} />
      <SeventhPageQuantum setDark={setDark} />
      <Footer setDark={setDark} />
      <WhatsAppButton />
      <DarkButton setDark={setDark} setsetDark={setsetDark} />
    </>
  );
};

export default App;
