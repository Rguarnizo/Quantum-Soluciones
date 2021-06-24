import React, { useEffect, useRef } from "react";
import gsap from "gsap";

let Marcas = (props) => {

  let onMouseOver = (el) => {

    gsap.to(el.target, { duration: 0.5, scale: 1.3, ease: "power4" });
  };

  let onMouseOut = (el) => {
    gsap.to(el.target, { duration: 0.5, scale: 1, ease: "power4" });
  };
  

  return (
    <>
      <div className={`brands flex flex-row w-screen h-38 px-24 ${props.className}`}>
        <a
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className="brand m-6 p-0 w-48 flex-grow"
          href=""
        >
          <img className="object-scale-down " src="Logos/Canon.png"></img>
        </a>
        <a
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className="brand m-6 p-0 w-48 flex-grow"
          href=""
        >
          <img className="object-scale-down" src="Logos/Nikon.jpeg"></img>
        </a>
        <a
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className="brand m-6 p-0 w-48 flex-grow"
          href=""
        >
          <img className="object-scale-down" src="Logos/Sony.png"></img>
        </a>
        <a
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          id="GoPro"
          className="brand m-6 p-0 w-48 flex-grow"
          href=""
        >
          <img className="object-scale-down" src="Logos/GoPro.png"></img>
        </a>
        <a
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          id="GoPro"
          className="brand m-6 p-0 w-48 flex-grow"
          href=""
        >
          <img className="object-scale-down" src="Logos/Dji.png"></img>
        </a>
      </div>
    </>
  );
};

export default Marcas;
