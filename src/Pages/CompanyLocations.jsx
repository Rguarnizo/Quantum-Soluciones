import React from "react";
import styled from "styled-components";
import * as Icon from "react-feather";
import Map from "../Components/Map";
import gsap from "gsap";

// Styled components
const Text = styled.span`
  font-family: "Montserrat", sans-serif;
`;

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

  React.useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#CompanyLocations",
        start: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(".info-location", { alpha: 0 }, { alpha: 1, stagger: 0.4 })
      .fromTo(".saly", { alpha: 0, x: 50 }, { alpha: 1, x: 0 }, "<")
      .fromTo(".icon-arrow", { alpha: 0, x: -50 }, { alpha: 1, x: 0 }, "<");
  });

  return (
    <section id="CompanyLocations" className="dark:bg-gray-800 ">
      <div className="grid grid-rows-2 md:px-12 px-5 py-16 md:py-0">
        <div className="grid grid-cols-3  info-wrapper gap-10  p-8 md:p-16 rounded-lg  md:m-16 bg-gradient-to-r  from-white to-blue-100 dark:from-gray-600 dark:to-gray-900 shadow-xl">
          <div className="col-span-3 xl:col-span-2 ">
            <Text className={titleClasses + " info-location"}>
              ¿Dónde nos puedes encontrar? <br /> <br />{" "}
            </Text>
            <Text className={descriptionClasses + " info-location"}>
              Estamos ubicados en el centro de alta tecnología <br />{" "}
            </Text>
            <div
              className="flex items-center gap-5 cursor-pointer my-4"
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
              <Icon.Navigation
                className="icon-arrow"
                color="#93C5FD"
                size={17}
              ></Icon.Navigation>
              <Text className={descriptionClasses + " info-location"}>
                <b>Carrera 15 # 77-05. Segundo Piso, Local 2-64</b>
              </Text>
            </div>
            <Text className={descriptionClasses + " info-location"}>
              También nos encuentras en el barrio Carvajal Osorio <br />{" "}
            </Text>
            <div
              className="flex items-center gap-5 cursor-pointer my-4"
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
              <Icon.Navigation
                className=" icon-arrow"
                color="#93C5FD"
                size={17}
              ></Icon.Navigation>
              <Text className={descriptionClasses + " info-location"}>
                <b>Calle 39 Sur #68L-75</b>
              </Text>
            </div>
            <Text className={descriptionClasses + " info-location"}>
              No olvides seguirnos en nuestras redes sociales! <br />{" "}
            </Text>
          </div>
          <div className="hidden xl:flex w-full h-full justify-center saly">
            <img src="assets/Saly-7.png" alt="img" />
          </div>
        </div>
        <div className="block map">
          <Map center={location.center} zoom={location.zoom} className="py-5" />
        </div>
      </div>
    </section>
  );
};

export default CompanyLocations;
