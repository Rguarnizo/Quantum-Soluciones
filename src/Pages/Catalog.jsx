import React from "react";
import styled from "styled-components";

const Catalog = () => {
  const Text = styled.span`
    font-family: "Montserrat", sans-serif;
  `;

  return (
    <section className="h-screen p-5 xl:px-16 dark:bg-gray-800">
      <div className="grid xl:grid-cols-2 h-full">
        <div className="img-wrapper">
          {
            //TODO: Here more resources, add an animation and a model for all the page :)
          }
        </div>
        <div className="flex flex-col justify-center">
          <Text className="text-5xl font-bold tracking-tighter dark:text-blue-200">
            ¡Explora nuestro catálogo!
          </Text>
          <Text className="text-xl font-normal mt-5 max-w-md dark:text-blue-200">
            Tenemos a tu disposición equipos y accesorios de las mejores marcas <br /> 
            ¡Haz click en una para explorar!
          </Text>
          <div className="grid grid-cols-4 gap-5">
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
