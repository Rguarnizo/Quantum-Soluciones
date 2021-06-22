import React, { useRef, useState, useEffect }from "react";
import Carousel from "./Carousel";

export default function Home(props) {
  const [showLetters, setshowLetters] = useState("");

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

  useEffect(() => {
    renderWords();
  }, []);

  return (
    <div id="Home" className=" h-screen flex flex-col items-center sm:flex-row">
      <div id="header" className="w-4/6 h-full py-40 px-24 flex flex-col ">
        <h1 className="anim-text text-3xl font-roboto font-semibold text-gray-500">
          Quantum Soluciones
        </h1>
        <h1 className="anim-text text-8xl font-roboto font-bold text-black my-5">
          Servicio técnico especializado
        </h1>
        <h4 className="anim-text text-2xl font-roboto font text-black my-5">
          en reparación de{" "}
          <span className="font-bold">
            {showLetters}
            <span className="border-r-4 animate-pulse border-gray-900 ">
              &#160;
            </span>
          </span>
        </h4>
      </div>
      <div className="w-2/6 h-full py-24 items-center">
        <Carousel/>
        <button className="font-roboto absolute top-10 right-10 text-lg text-blue-500 group font-bold hover:text-white  py-1 px-4 rounded-md border-2 border-blue-500 hover:border-blue-200 hover:bg-blue-500 focus:border-transparent">
          Rastrear
          <span class="absolute top-0 right-2">
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400  opacity-75"></span>
            <span class="absolute inline-flex rounded-full h-3 w-3 bg-blue-500 group-hover:bg-gray-100"></span>
          </span>
        </button>
      </div>
    </div>
  );
}
