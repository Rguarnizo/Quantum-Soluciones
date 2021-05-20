import React from "react";
import "../../Styles/Mobile/firstPageQuantumMobile.scss";
import ImagesCarousel from "../../Components/ImagesCarousel";
const FirstPageQuantumMobile = () => {
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
    renderWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fpage-mobile">
      <div className="container-center-horizontal">
        <div className="principal-phone screen">
          <div className="group-683">
            <div className="overlap-group">
              <div className="soluciones-quantum valign-text-middle">
                SOLUCIONES QUANTUM
              </div>
              <h1 className="text-1 valign-text-middle">
                Servicio técnico especializado
              </h1>
              <div className="text-2 valign-text-middle montserrat-normal-shark-19px">
                <p>
                  en reparación de{" "}
                  <span className="fpage-writing">
                    {showLetters} <span>&#160;</span>
                  </span>
                </p>
              </div>

              <div className="peter-olexa-p-l-agy-unsplash-11">
                <ImagesCarousel mobile={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPageQuantumMobile;
