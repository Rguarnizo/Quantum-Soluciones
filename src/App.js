import NavBar from "./Components/NavBar";
import WhatsAppButton from "./Components/WhatsAppButton";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import "./Styles/app.scss";
import * as Scroll from "react-scroll";
import React from "react";

const App = () => {
  React.useEffect(() => {
    let scroll = Scroll.animateScroll;
    scroll.scrollTo(0)
  }, []);

  return (
    <div className="fpage-container">
      <NavBar></NavBar>
      <FirstPage />
      <SecondPage />
      <WhatsAppButton />
    </div>
  );
};

export default App;
