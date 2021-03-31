import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TweenMax, Power3 } from "gsap";

let root = document.getElementById("root");

let App = () => {
  let logos = useRef();

  return (
    <>
      <div className="brands">
        <a href="" className='brand b'>
          <img src="Logos/Canon.png" alt=""  class='w-32' />
        </a>
        <a href="" className='brand b'>
          <img src="Logos/Sony.png" alt=""  class='w-32' />
        </a>
        <a href="" className='brand b'>
          <img src="Logos/Nikon.jpeg" alt=""  class='w-32' />
        </a>
        <a href="" className='brand b'>
          <img src="Logos/GoPro.png" alt="" class='w-32'  />
        </a>
      </div>

    <div className="circles">
        <div className="w-24 h-24  content-center rounded-full bg-green-400  ">Green</div>
        <div className="w-24 h-24  content-center rounded-full bg-blue-800   ">Blue</div>
        <div className="w-24 h-24  content-center rounded-full bg-yellow-200 ">Blue</div>
    </div>

    </>
  );
};

ReactDOM.render(
  <>
    <App />
  </>,
  root
);
