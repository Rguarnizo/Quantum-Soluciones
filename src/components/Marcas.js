import React, { useEffect, useRef } from "react";
import gsap from "gsap";

let Marcas = () => {
  let brandsRef = useRef();
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".Productos",
      scrub: 1,
      start: "top top",
      markers: true,
      end: "+=100%",
    },
  });

  let onMouseOver = (el) => {
    gsap.to(el.target, { duration: 0.5, scale: 1.3, ease: "power4" });
  };

  let onMouseOut = (el) => {
    gsap.to(el.target, { duration: 0.5, scale: 1, ease: "power4" });
  };

  useEffect(() => {
    brandsRef.current = gsap.utils.toArray(".brand");
    gsap.set(brandsRef.current, { autoAlpha: 0, scale: 0 });

    setTimeout(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Productos",
          scrub: 1,
          start: "top top",
          markers: true,
          end: "+=100%",
        },
      });
      tl.to(
        brandsRef.current,
        {
          autoAlpha: 1,
          scale: 1,
        },
        0
      ).fromTo(".brands", { x: -1000 }, { x: 1000}, 0);
    });
  }, []);

  return (
    <>
      <div className="brands flex flex-row w-screen">
        <a
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className="brand m-6 p-0 block flex-grow w-40"
          href=""
        >
          <img className="m-0 p-0" src="Logos/Canon.png"></img>
        </a>
        <a
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className="brand m-6 p-0 block flex-grow w-40"
          href=""
        >
          <img className="m-0 p-0" src="Logos/Nikon.jpeg"></img>
        </a>
        <a
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className="brand m-6 p-0 block flex-grow w-40"
          href=""
        >
          <img className="m-0 p-0" src="Logos/Sony.png"></img>
        </a>
        <a
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          id="GoPro"
          className="brand m-6 p-0 block flex-grow w-40"
          href=""
        >
          <img className="m-0 p-0" src="Logos/GoPro.png"></img>
        </a>
      </div>
    </>
  );
};

export default Marcas;
