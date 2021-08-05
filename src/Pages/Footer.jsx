import React from "react";
import styled from "styled-components";
import * as Icon from "react-feather";

const titleClasses = `text-2xl xl:text-4xl font-bold tracking-tighter dark:text-blue-100 `;
const menuClasses = ` text-lg xl:text-xl tracking-tighter dark:text-blue-200 hover:text-blue-500 cursor-pointer`;
//const descriptionClasses = ` text-lg xl:text-xl tracking-tighter dark:text-blue-500 `;


// Styled components
const MenuText = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
`;

const Title = styled.span`
  font-family: "Sarina", cursive;
`;

const Text = styled.span`
  font-family: "Montserrat", sans-serif;
`;

const Footer = () => {
  return (
    <section id="Footer" className="dark:bg-gray-800">
      <div className="grid grid-cols-12 md:px-12 px-5 py-20 gap-10 md:gap-0">
        <div className="flex flex-col col-span-5 md:col-span-3">
          <MenuText className="dark:text-white text-xl">Páginas</MenuText>
          <div className="flex flex-col gap-2 mt-16">
            <MenuText className={menuClasses}>Inicio</MenuText>
            <MenuText className={menuClasses}>Servicios</MenuText>
            <MenuText className={menuClasses}>Tienda</MenuText>
            <MenuText className={menuClasses}>Contacto</MenuText>
          </div>
        </div>
        <div className="flex flex-col col-span-5 md:col-span-3">
          <MenuText className="dark:text-white text-lg xl:text-xl">
            Quantum App
          </MenuText>
          <div className="flex flex-col gap-2 mt-16">
            <MenuText className={menuClasses}>Acceso</MenuText>
            <MenuText className={menuClasses}>Rastrea tu orden</MenuText>
          </div>
        </div>
        <div className="flex flex-col col-span-10 md:col-span-6 xl:col-span-4  md:place-items-start">
          <Title className={titleClasses}> Soluciones Quantum</Title>
          <div className="flex flex-col mt-10 gap-1">
            <Text className="font-extrabold text-xl dark:text-blue-200">
              ¡Síguenos en nuestras redes sociales!
              <br />
              <br />
            </Text>
            <Text className="font-semibold dark:text-blue-200">
              Contacto telefónico
            </Text>
            <div className="flex items-center gap-4">
              <Icon.Phone color="#93C5FD" size={17}></Icon.Phone>
              <Text className="font-semibold  dark:text-blue-200 text-sm md:text-lg">
                +57 300 522 56 53
              </Text>
              <Icon.Phone color="#93C5FD" size={17}></Icon.Phone>
              <Text className="font-semibold  dark:text-blue-200 text-sm  md:text-lg">
                +57 300 522 56 53
              </Text>
            </div>
            <div className="flex mt-7 gap-8">
              <a
                href="https://www.facebook.com/SolucionesQuantum01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Facebook
                  color="#93C5FD"
                  className="cursor-pointer"
                  size={20}
                />
              </a>
              <a
                href="https://www.instagram.com/quantum_serviciotecnicocamaras/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Instagram
                  color="#93C5FD"
                  className="cursor-pointer"
                  size={20}
                />
              </a>
              <Icon.Twitter
                color="#93C5FD"
                className="cursor-pointer"
                size={20}
              />
              <a
                href="https://www.youtube.com/channel/UCSk3_g71oDvJKY2c1d6wN4w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Youtube
                  color="#93C5FD"
                  className="cursor-pointer"
                  size={20}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden 2xl:col-span-2 2xl:flex items-center justify-center">
          <img
            src="assets/footer-animation.svg"
            alt="animation"
            className="h-full w-5/6"
          />
        </div>
      </div>
      <div className="flex w-full justify-between md:px-12 px-5 py-16 border-t-2 border-gray-300 dark:border-white items-center">
        <Text className="text-md md:text-lg font-extrabold dark:text-blue-200">
          © 2021
        </Text>

        <Text className="text-xs md:text-lg font-extrabold dark:text-blue-200 ">
          Made with 💙 by the ANG Software team
        </Text>
      </div>
    </section>
  );
};

export default Footer;
