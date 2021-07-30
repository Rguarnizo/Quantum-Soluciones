import React,{Suspense} from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Drone from "../Components/Drone";
import Loader from "../utils/Loader";

const Shop = () => {
  const Text = styled.span`
    font-family: "Montserrat", sans-serif;
  `;

  return (
    <section className="h-screen px-5 md:px-16  dark:bg-gray-800">
      <div className="grid xl:grid-cols-2 h-full">
        <div className="flex flex-col justify-center">
          <Text className="text-5xl font-bold tracking-tighter dark:text-blue-100">¡Conoce nuestra tienda!</Text>
          <Text className="text-xl font-normal mt-5 max-w-md dark:text-blue-100">
            Tenemos a tu disposición cientos de equipos y accesorios de la mejor
            calidad y al mejor precio
          </Text>
          <a href="#" className="text-lg text-blue-500 mt-5 font-semibold dark:text-white">
            Visita nuestra tienda
          </a>
        </div>
        <div className="img-wrapper">
           { //TODO: Here more resources, add an animation and a model for all the page :)
           }
           <Canvas
            id="canvas"
            className="EscenaProductos w-full h-full"
            color={0x000000}
            camera={{ position: [0, 0, 3] }}
          >
            <spotLight position={[5, 5, 0]} intensity={1} castShadow />
            {/*<spotLight position={[-5, 5, 0]} intensity={1} castShadow />
            <spotLight position={[-5, -5, 0]} intensity={1} castShadow />
            <spotLight position={[5, -5, 0]} intensity={1} castShadow /> */}
            <hemisphereLight
              args={[0xffeeb1, 0x080820, 1]}
              position={[5, 5, 0]}
            />
            <Suspense fallback={null}>
              <Drone/>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Shop;
