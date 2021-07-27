import React from "react";
import styled from "styled-components";
import * as Icon from "react-feather";
import Map from "../Components/Map";
const CompanyLocations = () => {
  const defaultProps = {
    center: {
      lat: 4.66430205309855,
      lng: -74.05867751000919,
    },
    zoom: 15,
  };

  const [location, setlocation] = React.useState(defaultProps);

  const titleClasses = `text-4xl xl:text-6xl font-bold tracking-tighter dark:text-blue-100`;
  const descriptionClasses = ` text-lg xl:text-2xl tracking-tighter dark:text-blue-100`;
  const Text = styled.span`
    font-family: "Montserrat", sans-serif;
  `;

  return (
    <section className="dark:bg-gray-800 ">
      <div className="grid grid-rows-2 md:px-12 px-5 py-16 md:py-0">
        <div className="grid grid-cols-3 info-wrapper gap-10  p-8 md:p-16 rounded-lg  md:m-16 bg-gradient-to-r  from-white to-blue-100 dark:from-gray-600 dark:to-gray-900 shadow-xl">
          <div className="col-span-3 xl:col-span-2 ">
            <Text className={titleClasses}>
              ¿Dónde nos puedes encontrar? <br /> <br />{" "}
            </Text>
            <Text className={descriptionClasses}>
              Estamos ubicados en el centro de alta tecnología <br />{" "}
            </Text>
            <div
              className="flex items-center gap-5 cursor-pointer"
              onClick={() => {
                setlocation((state) => {
                  return {
                    center: {
                      lat: 4.66430205309855,
                      lng: -74.05867751000919,
                    },
                    zoom: 15,
                  };
                });
              }}
            >
              <Icon.Navigation color="#93C5FD" size={17}></Icon.Navigation>
              <Text className={descriptionClasses}>
                <b>Carrera 15 # 77-05. Segundo Piso, Local 2-64</b>
              </Text>
            </div>
            <Text className={descriptionClasses}>
              También nos encuentras en el barrio Carvajal Osorio <br />{" "}
            </Text>
            <div
              className="flex items-center gap-5 cursor-pointer"
              onClick={() => {
                setlocation((state) => {
                  return {
                    center: {
                      lat: 4.607711126602565,
                      lng: -74.14074388887656,
                    },
                    zoom: 15,
                  };
                });
              }}
            >
              <Icon.Navigation color="#93C5FD" size={17}></Icon.Navigation>
              <Text className={descriptionClasses}>
                <b>Calle 39 Sur #68L-75</b>
              </Text>
            </div>
            <Text className={descriptionClasses}>
              No olvides seguirnos en nuestras redes sociales! <br />{" "}
            </Text>
          </div>
          <div className="hidden xl:flex w-full h-full justify-center ">
            <img src="assets/Saly-7.png" alt="img" />
          </div>
        </div>
        <div className="block">
          <Map center={location.center} zoom={location.zoom} className="py-5" />
        </div>
      </div>
    </section>
  );
};

export default CompanyLocations;
