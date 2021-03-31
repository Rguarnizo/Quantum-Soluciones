import logo from "./logo.svg";
import "./App.css";
import { useRef, UseEffect, useEffect } from "react";

function App() {
  let circleRed = useRef(null);
  let circleYellow = useRef(null);
  let circleBlue = useRef(null);

  useEffect(() =>{
    console.log(circleRed,circleYellow,circleBlue);
  },[])

  return (
    <>
      <div className="circles">
        <div
          ref={(el) => (circleRed = el)}
          className="font-bold text-gray-800 w-24 h-24 m-4 flex items-center justify-center rounded-full bg-red-500  "
        >
          Green
        </div>
        <div
          ref={(el) => (circleYellow = el)}
          className="font-bold text-gray-800 w-24 h-24 m-4 flex items-center justify-center rounded-full bg-yellow-300 "
        >
          Yellow
        </div>
        <div
          ref={(el) => (circleBlue = el)}
          className="font-bold text-gray-800 w-24 h-24 m-4 flex items-center justify-center rounded-full bg-blue-500 "
        >
          Blue
        </div>
      </div>
    </>
  );
}

export default App;
