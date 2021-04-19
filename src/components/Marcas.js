import React, { useEffect, useRef } from "react";
import gsap from "gsap";

let Marcas = ({ setTween }) => {
  let tween = useRef();
  let brandsRef = useRef([]);
  brandsRef.current = [];

  let onMouseOver = (el) => {
    gsap.to(el.target, { duration: 1, scale: 1.3, ease: "power4" });
  };

  let onMouseOut = (el) => {
    gsap.to(el.target, { duration: 1, scale: 1, ease: "power4" });
  };

  useEffect(() => {
    tween.current = gsap.fromTo(
      ".brand",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        ease: "power4",
        scrollTrigger: { trigger: ".Marcas", scrub: 1, start: "top top"},
      }
    );
    setTween(tween.current);
  }, []);

  return (
    <>
      <div className="brands">
        <a
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className="brand m-6 p-0 block w-28"
          href=""
        >
          <img className="m-0 p-0" src="Logos/Canon.png"></img>
        </a>
        <a
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className="brand m-6 p-0 block w-28"
          href=""
        >
          <img className="m-0 p-0" src="Logos/Nikon.jpeg"></img>
        </a>
        <a
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className="brand m-6 p-0 block w-28"
          href=""
        >
          <img className="m-0 p-0" src="Logos/Sony.png"></img>
        </a>
        <a
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          id="GoPro"
          className="brand m-6 p-0 block w-28"
          href=""
        >
          <img className="m-0 p-0" src="Logos/GoPro.png"></img>
        </a>
      </div>
    </>
  );
};

export default Marcas;
