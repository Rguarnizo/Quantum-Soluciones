import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let BrandName = () => {
  gsap.registerPlugin(ScrollTrigger);
  let brandsRef = useRef([]);
  brandsRef.current = [];

  let onMouseOver = (el) => {
    gsap.to(el.target, { duration: 1, scale: 1.3, ease: "power4" });
  };

  let onMouseOut = (el) => {
    gsap.to(el.target, { duration: 1, scale: 1, ease: "power4" });
  };

  useEffect(() => {
    brandsRef.current = gsap.utils.toArray(".brand");

    gsap.fromTo(".brand",{opacity:0,scale:0} ,{
      opacity: 1,
      scale:1,
      delay: 3,
      stagger: 0.05,
      ease: "power4",
      duration: 3,
      scrollTrigger: { trigger: ".brand",scrub: true},
      
    });
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

export default BrandName;
