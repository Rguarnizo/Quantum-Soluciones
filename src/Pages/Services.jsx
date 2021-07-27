import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const TitleClasses = `text-5xl xl:text-7xl font-bold tracking-tighter dark:text-blue-100`;
const Title = styled.span`
  font-family: "Montserrat", sans-serif;
`;

const ServiceCard = (props) => {
  const Text = styled.span`
    font-family: "Montserrat", sans-serif;
  `;

  return (
    <div
      id={`${props.id}`}
      className={`w-full md:w-3/5 lg:w-full xl:w-4/5 h-full  shadow-xl flex flex-col justify-around rounded-lg mx-4 xl:mx-8 my-2 ${props.className} self-center justify-center dark:bg-gray-900`}
    >
      <div className="w-full h-5/6 flex flex-col justify-around p-3">
        <Text className="px-6 font-semibold text-2xl lg:text-4xl dark:text-blue-100">
          {props.title}
        </Text>
        <Text className="px-6 font-roboto text-base lg:text-lg font-normal dark:text-blue-100">
          {props.content}
        </Text>
      </div>
      <a
        href={`${props.url}`}
        className="border-gray-200 border-t-2 w-full h-1/6 justify-center flex flex-col p-8 group "
      >
        <Text className="text-base lg:text-xl font-roboto font-bold text-gray-300 ">
          {props.link}
        </Text>
      </a>
    </div>
  );
};

const AnimationCard = (props) => {
  const Rocket = styled.img`
    height: 13vh;
    width: auto;
    transform: rotate(45deg);
  `;

  const Sally = styled.img`
    height: 18vh;
  `;

  const Text = styled.span`
    font-family: "DM Sans", sans-serif;
  `;

  const launchRocket = () => {
    console.log(ref);

    gsap.to("#rocket", {
      x: ref.current.offsetWidth - 100,
      y: -ref.current.offsetHeight + 100,
      duration: 4,
      rotate: "65",
      ease: "power2.out",
    });
    gsap.to("#rocket", {
      opacity: "0",
      duration: 4,
    });
  };

  const animateStats = () => {
    gsap.registerEffect({
      name: "counter",
      extendTimeline: true,
      defaults: {
        end: 0,
        duration: 0.5,
        ease: "power1",
        increment: 1,
      },
      effect: (targets, config) => {
        let tl = gsap.timeline();
        let num = targets[0].innerText.replace(/\,/g, "");
        targets[0].innerText = num;

        tl.to(
          targets,
          {
            duration: config.duration,
            innerText: config.end,
            //snap:{innerText:config.increment},
            modifiers: {
              innerText: function (innerText) {
                return gsap.utils
                  .snap(config.increment, innerText)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              },
            },
            ease: config.ease,
          },
          0
        );

        return tl;
      },
    });

    let tl = gsap.timeline();
    tl.from("#stat1", { opacity: 0, delay: 4 });
    tl.counter("#count1", { end: 30, ease: "linear" }, "-=0.5");
    tl.from("#stat2", { opacity: 0 }, "+=0.5");
    tl.counter("#count2", { end: 40, increment: 2, duration: 1.6 }, "-=0.5");
  };

  const animateSally = () => {
    gsap.from("#sally", {
      x: -100,
      opacity: 0,
      ease: "power2.out",
      delay: 6.5,
      duration: 1.5,
    });
  };

  React.useEffect(() => {
    launchRocket();
    animateStats();
    animateSally();
  }, []);

  const ref = React.useRef(null);

  return (
    <div
      ref={ref}
      className={` w-full md:w-3/5  xl:w-4/5  lg:w-full animation-card relative h-full p-8 xl:p-0 shadow-xl flex flex-col justify-around rounded-lg mx-4 lg:mx-8 my-2 ${props.className} self-center justify-center dark:bg-gray-900 text-left`}
    >
      <div className="absolute bottom-0 left-0">
        <Rocket id="rocket" src="assets/perspaleta2_0043.png"></Rocket>
      </div>
      <div className="absolute -bottom-20 right-5">
        <Sally id="sally" src="assets/Saly-1.png"></Sally>
      </div>
      <div className="flex flex-col gap-10 lg:p-10">
        <div className="flex justify-center items-center gap-5" id="stat1">
          <Text className="font-black text-4xl dark:text-blue-200">
            <span id="count1"> 0 </span>K+
          </Text>
          <Text className="font-normal text-lg max-w-xs dark:text-blue-100">
            {" "}
            productos vendidos a clientes de todo el lindo pais
          </Text>
        </div>
        <div className="flex justify-center items-center gap-5 " id="stat2">
          <Text className="font-black text-4xl dark:text-blue-200">
            <span id="count2"> 10 </span>K+
          </Text>
          <Text className="font-normal text-lg max-w-xs dark:text-blue-100">
            {" "}
            equipos y accesorios reparados dejando clientes satisfechos
          </Text>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className=" flex align-middle items-center dark:bg-gray-800">
      <div className="wrapper my-20 ">
        <div className="title md:px-16 px-5 ">
          {" "}
          <Title className={TitleClasses}>Nuestros servicios</Title>
        </div>
        <div className="cards-wrapper h-1/2 xl:px-10 px-5 flex justify-end mt-24">
          <div className="grid lg:grid-cols-3 xl:gap-0 gap-10 items-center justify-items-center text-center">
            <ServiceCard
              id={1}
              title="Reparación de equipos"
              content="Disponemos del mejor equipo para llevar a cabo la reparación de equipos como cámaras, lentes, drones, flashes, radios y otros dispositivos electrónicos"
              url="#"
              link="Saber más"
            />
            <ServiceCard
              id={2}
              title="Venta de equipos y accesorios"
              content="Te ofrecemos un amplio catálogo de equipos y accesorios a los mejores precios del mercado"
              url="#"
              link="Ir a la tienda"
            />
            <AnimationCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
