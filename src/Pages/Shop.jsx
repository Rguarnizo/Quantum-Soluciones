import React from "react";
import styled from "styled-components";

const Shop = () => {
  const Text = styled.span`
    font-family: "Montserrat", sans-serif;
  `;

  return (
    <section className="h-screen px-5 md:px-16  dark:bg-gray-800">
      <div className="grid xl:grid-cols-2 h-full">
        <div className="flex flex-col justify-center">
          <Text className="text-5xl font-bold tracking-tighter dark:text-blue-200">¡Conoce nuestra tienda!</Text>
          <Text className="text-xl font-normal mt-5 max-w-md dark:text-blue-200">
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
        </div>
      </div>
    </section>
  );
};

export default Shop;
