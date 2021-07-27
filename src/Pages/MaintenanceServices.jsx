import React from "react";
import styled from "styled-components";
const MaintenanceServices = () => {
  const Text = styled.span`
    font-family: "DM Sans", sans-serif;
  `;

  const QuantumSubtitleClasses = `text-xl xl:text-2xl font-semibold uppercase dark:text-blue-100 tracking-wider antialiased mb-6 xl:mb-12 mt-16 xl:mt-0`;
  const QuantumTitleClasses = `font-bold text-5xl xl:text-6xl tracking-tighter mb-6 dark:text-blue-100 max-w-full`;
  const QuantumDescriptionClasses = `font-normal  tracking-tighter dark:text-blue-100 `;

  return (
    <section className=" px-5 py-20 md:px-16 dark:bg-gray-800">
      <div className="grid xl:grid-rows-2 pt-20">
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col col-span-2 xl:col-span-1">
            <Text className={QuantumSubtitleClasses}>SOLUCIONES QUANTUM</Text>
            <Text className={QuantumTitleClasses}>
              {" "}
              Tu mejor opción en reparación de equipos profesionales
            </Text>
            <Text className={QuantumDescriptionClasses + "text-xl md:text-2xl"}>
              {" "}
              Contamos con un experimentado equipo de trabajo quien atenderá tus
              solicitudes de reparación. <br /> Somos líderes en reparación de
              equipos y accesorios profesionales
            </Text>
          </div>
          <div className="img-wrapper">
            <Scene/>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 mt-10 xl:pl-16">
          <div className="flex flex-col gap-10">
            <Text
              className={
                QuantumDescriptionClasses + "font-bold max-w-xl text-md md:text-xl"
              }
            >
              Cámaras <br />
              <Text className={QuantumDescriptionClasses + ""}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis ratione earum, enim perferendis accusantium quia animi
                tempore, accusamus voluptatum provident similique, odit laborum
                nulla eveniet. Vel quisquam sit obcaecati distinctio?
              </Text>
            </Text>
            <Text
              className={
                QuantumDescriptionClasses + "font-bold max-w-xl xl:text-xl"
              }
            >
              Lentes <br />
              <Text className={QuantumDescriptionClasses + ""}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis ratione earum, enim perferendis accusantium quia animi
                tempore, accusamus voluptatum provident similique, odit laborum
                nulla eveniet. Vel quisquam sit obcaecati distinctio?
              </Text>
            </Text>
          </div>
          <div className="flex flex-col gap-10 mt-10 xl:mt-0">
            <Text
              className={
                QuantumDescriptionClasses + "font-bold max-w-xl xl:text-xl"
              }
            >
              Flashes <br />
              <Text className={QuantumDescriptionClasses + ""}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis ratione earum, enim perferendis accusantium quia animi
                tempore, accusamus voluptatum provident similique, odit laborum
                nulla eveniet. Vel quisquam sit obcaecati distinctio?
              </Text>
            </Text>
            <Text
              className={
                QuantumDescriptionClasses + "font-bold max-w-xl xl:text-xl"
              }
            >
              Drones <br />
              <Text className={QuantumDescriptionClasses + ""}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis ratione earum, enim perferendis accusantium quia animi
                tempore, accusamus voluptatum provident similique, odit laborum
                nulla eveniet. Vel quisquam sit obcaecati distinctio?
              </Text>
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceServices;
