import React from "react";
import styled from "styled-components";
import Scene from "../Components/Scene";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const MaintenanceServices = () => {
  const Text = styled.span`
    font-family: "DM Sans", sans-serif;
  `;

  const QuantumSubtitleClasses = `text-xl xl:text-2xl font-semibold uppercase dark:text-blue-100 tracking-wider antialiased mb-6 xl:mb-12 mt-16 xl:mt-0 subtitle`;
  const QuantumTitleClasses = `font-bold text-5xl xl:text-6xl tracking-tighter mb-6 dark:text-blue-100 max-w-full title`;
  const QuantumDescriptionClasses = `font-normal  tracking-tighter dark:text-blue-100 description`;

  React.useEffect(() => {
    
    ScrollTrigger.matchMedia(
      {
        "(min-width: 800px)":()=>{
          gsap.to(".part", {
            xPercent: -100 * (gsap.utils.toArray(".part").length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: "#maintenance",
              start: "top top",
              scrub: 1,
              markers: true,
              end: () => "+=" + document.querySelector(".part").offsetWidth,
            }
          });

          gsap.to("#maintenance",{
            scrollTrigger: {
              trigger: "#maintenance",
              start: "top top",
              pin: true,
              end: () => "+=" + document.querySelector(".part").offsetWidth,
            }
          })
        },
        "(max-width: 799px)": ()=>{

        }
      }
    )
      
  });

  return (
    <div id="maintenance" className="">
    <section  className="flex flex-col h-auto space-y-12 md:space-y-0 md:flex-row md:flex-nowrap px-5 pt-16 md:px-16 dark:bg-gray-800 scroll-horizontal">
          <div className="flex flex-col md:px-24 md:w-screen mt-10 xl:mt-0 xl:pl-16 part">
            <Text className={QuantumSubtitleClasses}>SOLUCIONES QUANTUM</Text>
            <Text className={QuantumTitleClasses}>
              {" "}
              Tu mejor opción en reparación de equipos profesionales
            </Text>
            <Text className={QuantumDescriptionClasses + "text-xl md:text-4xl"}>
              {" "}
              Contamos con un experimentado equipo de trabajo quien atenderá tus
              solicitudes de reparación. <br /> Somos líderes en reparación de
              equipos y accesorios profesionales
            </Text>
          </div>
            <div className="flex flex-col md:flex-row md:w-screen mt-10 xl:mt-0 xl:pl-16 part">
              <Text
                className={
                  QuantumDescriptionClasses + "flex-col font-bold max-w-xl sm:text-xl lg:text-2xl"
                }
              >
                Camaras <br />
                <Text className={QuantumDescriptionClasses + ""}>
                  Reparación de camaras de las principales marcas, servicio
                  tecnico especializado, mantenimiento preventivo. Reparación de
                  cuerpos, diales, pantallas, actualizaciones de firmware,
                  obturador, baterias, entre muchas otras.
                </Text>
                <div className="flex space-x-4 md:space-x-16">
                  <img className="object-scale-down w-24 h-24" src={"Images/Camera2.png"} />
                  <img className="object-scale-down w-24 h-24" src={"Images/Camera1.png"} />
                  <img className="object-scale-down w-24 h-24" src={"Images/Camera3.png"} />
                </div>
              </Text>
              
              <Text
                className={
                  QuantumDescriptionClasses + "font-bold max-w-xl sm:text-xl lg:text-2xl"
                }
              >
                Drones <br />
                <Text className={QuantumDescriptionClasses + ""}>
                  Reparación y mantenimiento de drones profesionales, remplazos
                  de baterias, reparación de motores, sensores, cabezales de
                  camara, actulizaciones de software, DJI Mavic, Phantom, Mini. Parrot, Yuneec.
              </Text>
              <div className="flex space-x-4 md:space-x-16">
                  <img className="object-scale-down w-24 h-24" src={"Images/Dron1.png"} />
                  <img className="object-scale-down w-24 h-24" src={"Images/Dron2.png"} />
                  <img className="object-scale-down w-24 h-24" src={"Images/Dron3.png"} />
                </div>
              </Text>
                
            </div>
            <div className="flex flex-col md:flex-row md:w-screen mt-10 xl:mt-0 xl:pl-16 part">
              <Text
                className={
                  QuantumDescriptionClasses + "flex flex-col font-bold max-w-xl sm:text-xl lg:text-2xl"
                }
              >
                Flashes <br />
                <Text className={QuantumDescriptionClasses + ""}>
                  Reparación y mantenimiento de flashes de camara, de todo tipo:
                  Flash integrado, angular, externo, automaticos, manuales, TTL
                  y de muchos otros tipos de Flashes. Reparación de sensores,
                  generadores, antorchas, reflectores, zapata, etc.
                </Text>
                <div className="flex space-x-4 md:space-x-16">
                  <img className="object-scale-down w-24 h-24" src={"Images/Flash1.png"} />
                  <img className="object-scale-down w-24 h-24" src={"Images/Flash2.png"} />
                  <img className="object-scale-down w-24 h-24" src={"Images/Flash3.png"} />
                </div>
              </Text>

              <Text
                className={
                  QuantumDescriptionClasses + "flex flex-col font-bold max-w-xl sm:text-xl lg:text-2xl"
                }
              >
                Lentes <br />
                <Text className={QuantumDescriptionClasses + ""}>
                  Reparación y mantenimiento de lentes fotograficos de todo
                  tipo: Lente Ojo de pez, Gran angular, Fijos, Zoom, Telefoto o
                  teleobjetivo, Macro, Tilt-shift.
                </Text>
                <div className="flex space-x-4 md:space-x-16">
                  <img className="object-scale-down w-24 h-24" src={"Images/Lens1.png"} />
                  <img className="object-scale-down w-24 h-24" src={"Images/Lens2.png"} />
                  <img className="object-scale-down w-24 h-24" src={"Images/Lens3.png"} />
                </div>
              </Text>
            </div> 
    </section>
    <div className="flex-none scene img-wrapper h-screen hidden md:block dark:bg-gray-800">
              <Scene/>
    </div>                       
    </div>
  );
};

export default MaintenanceServices;
