import React from "react";
import "../../Styles/Desktop/firstPageQuantum.scss";
import ImagesCarousel from "../../Components/ImagesCarousel";
import FirstPageQuantumMobile from "../Mobile/FirstPageQuantumMobile";
import AOS from "aos";
import "aos/dist/aos.css";

const ComponentsHero = (props) => {
  const { text5, text6, text7 } = props;

  const [showLetters, setshowLetters] = React.useState("");

  const wait = async (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const fillWord = async (word) => {
    for (let letter of word) {
      setshowLetters((state) => {
        return state + letter;
      });
      await wait(200);
    }
  };

  const deleteWord = async (word) => {
    // eslint-disable-next-line no-unused-vars
    for (let _ of word) {
      setshowLetters((state) => {
        return state.substring(0, state.length - 1);
      });
      await wait(200);
    }
  };

  const renderWords = async () => {
    const words = ["cámaras.", "drones.", "lentes.", "flashes."];
    while (true) {
      for (let word of words) {
        await fillWord(word);
        await deleteWord(word);
      }
    }
  };

  React.useEffect(() => {
    // console.log(actualIndex);
    AOS.init();
    renderWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="components-hero">
      <div className="overlap-group">
        <div className="frame-686">
          <div className="text-1 valign-text-middle montserrat-medium-geyser-26px">
            {text5}
          </div>
          <h1 className="text-2 valign-text-middle montserrat-bold-shark-80px dark:text-white">
            {text6}
          </h1>
          <div className="text-3 valign-text-middle ">
            <p className="dark:text-white">
              {text7}
              <span className="fpage-writing ">
                {showLetters} <span className="dark:border-white">&#160;</span>
              </span>
            </p>
          </div>
        </div>
        <div className="peter-olexa-p-l-agy-unsplash-10">
          <ImagesCarousel />
        </div>
      </div>
    </div>
  );
};

const FirstPageQuantum = (props) => {
  return (
    <div className={`${props.setDark}`}>
      <div className="hidden xl:block bg-white dark:bg-gray-900">
        <ComponentsHero
          text5="SOLUCIONES QUANTUM"
          text6="Servicio técnico especializado"
          text7="en reparación de "
          peterOlexaPl7Irex9AgyUnsplash10="peter-olexa-pl7irex9agy-unsplash-10.png"
        />
      </div>
      <div className="block xl:hidden w-100">
        <FirstPageQuantumMobile />
      </div>
    </div>
  );
};

export default FirstPageQuantum;
