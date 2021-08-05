import React, { Suspense } from "react";
import styled from "styled-components";
import Camera from "../Components/Camera";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
// import Loader from "../utils/Loader";

// Styled components
const Text = styled.span`
  font-family: "Montserrat", sans-serif;
`;

const BrandImage = styled.img`
  width: 70%;
  height: auto;

  padding: 7%;
`;

const Catalog = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Fcanon_white.png?alt=media&token=d0125797-5944-49d0-8750-b14579f76735",
    "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Fsony-logo-png-transparent-13_c.png?alt=media&token=5e8bab26-5452-4a0f-aefd-cfdd3da3f71e",
    "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FPikPng.com_panasonic-logo-png_1400111.png?alt=media&token=6bdcb1f4-298f-4aea-8f9f-9b1c581f7cc5",
    "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDaco_77293.png?alt=media&token=cc928a8c-579f-417f-8532-185b0a3a50fe",
    "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDaco_5061982.png?alt=media&token=a7855dad-9c47-4655-ad9b-d16a801bb40c",
    "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Fgopro_logo_PNG12.png?alt=media&token=8e381300-40c0-485b-918a-e6aaac18d6d0",
    "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDaco_5295857.png?alt=media&token=c8170945-dc21-4a56-8bdc-dd7ae39c1d23",
  ];

  React.useEffect(() => {
    gsap.fromTo(
      ".anim",
      {
        alpha: 0,
      },
      {
        alpha: 1,
        stagger: 0.4,
        scrollTrigger: {
          trigger: "#Catalog",
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <section id="Catalog" className="h-screen px-5 md:px-16 dark:bg-gray-800">
      <div className="grid xl:grid-cols-2 h-full">
        <div className="img-wrapper">
          <Canvas
            id="canvas"
            className="EscenaProductos w-full h-full"
            color={0x000000}
            camera={{ position: [0, 0, 3] }}
          >
            <spotLight position={[5, 5, 0]} intensity={1} castShadow />
            <spotLight position={[-5, 5, 0]} intensity={1} castShadow />
            <spotLight position={[-5, -5, 0]} intensity={1} castShadow />
            <spotLight position={[5, -5, 0]} intensity={1} castShadow />
            <hemisphereLight
              args={[0xffeeb1, 0x080820, 4]}
              position={[5, 5, 0]}
            />
            <Suspense fallback={null}>
              <Camera />
            </Suspense>
          </Canvas>
        </div>
        <div className="flex flex-col justify-center">
          <Text className="anim text-5xl font-bold tracking-tighter dark:text-blue-100">
            ¡Explora nuestro catálogo!
          </Text>
          <Text className="anim text-xl font-normal mt-5 max-w-md dark:text-blue-100">
            Tenemos a tu disposición equipos y accesorios de las mejores marcas{" "}
            <br />
            ¡Haz click en una para explorar!
          </Text>
          <div className="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-7 gap-3 mt-10 justify-items-center shadow-xl p-5 rounded bg-gray-300 dark:bg-gray-800">
            {images.map((el) => {
              return (
                // TODO: Add link to each brand
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  key={el}
                  href="#"
                  className="anim flex items-center justify-center hover:bg-gray-400 rounded-xl dark:hover:bg-gray-900 dark:bg-gray-800"
                >
                  <BrandImage src={el}></BrandImage>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
