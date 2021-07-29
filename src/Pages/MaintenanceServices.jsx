import React from "react";
import styled from "styled-components";
import Scene from "../Components/Scene";
import gsap from "gsap";

const MaintenanceServices = () => {
  const Text = styled.span`
    font-family: "DM Sans", sans-serif;
  `;

  const QuantumSubtitleClasses = `text-xl xl:text-2xl font-semibold uppercase dark:text-blue-100 tracking-wider antialiased mb-6 xl:mb-12 mt-16 xl:mt-0 subtitle`;
  const QuantumTitleClasses = `font-bold text-5xl xl:text-6xl tracking-tighter mb-6 dark:text-blue-100 max-w-full title`;
  const QuantumDescriptionClasses = `font-normal  tracking-tighter dark:text-blue-100 description`;

  React.useEffect(()=>{
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#maintenance",
        scrub: 1,
        start: "top 30%",
        end: "+=400%",
        markers:true,
      },
    }
    );

    tl.fromTo(".part-1",{alpha:0},{alpha:1})
    .fromTo(".part-2",{alpha:0},{alpha:1})
    .to(".part-1",{alpha:0},"<")
    .fromTo(".part-3",{alpha:0},{alpha:1},"+=0.5")
    .to(".part-2",{alpha:0},"<");

  })

  return (
    <div id="maintenance" className=" py-4 px-5 md:px-16 dark:bg-gray-800 ">
      <div className="grid pt-4 ">
        <div className="flex flex-col lg:flex-row w-screen h-screen">
          <div className="flex flex-col col-span-2 mt-10 xl:mt-0 xl:pl-16 xl:col-span-1 part-1">
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
          <div className="img-wrapper w-full h-full">
            <Scene/>
          </div>
          

          <div className="grid xl:grid-cols-2 absolute">
          <div className="flex flex-col gap-10 mt-10 h-screen xl:mt-0 xl:pl-16 part-2">
            <Text
              className={
                QuantumDescriptionClasses + "font-bold max-w-xl xl:text-xl"
              }
            >
              Camaras <br />
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
          <div className="flex flex-col gap-10 mt-10 xl:mt-0 xl:pl-16 h-screen absolute part-3">
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
      </div>
    </div>
  );
};

export default MaintenanceServices;
