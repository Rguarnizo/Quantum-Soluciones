import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  const Image = styled.img`
    border-radius: 10px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    object-fit: cover;
  `;

  const titleClasses = `text-5xl xl:text-7xl font-bold tracking-tighter dark:text-blue-100`;
  const Text = styled.span`
    font-family: "Montserrat", sans-serif;
  `;

  const descriptionClasses = `font-normal text-lg xl:text-2xl tracking-tighter dark:text-blue-100 mt-5`;

  return (
    <section className=" md:px-16 px-5 dark:bg-gray-800">
      <div className="grid grid-cols-3 grid-rows-2 max-h-screen py-10 ">
        <div className="flex py-8 md:py-16  justify-center h-2/3 md:h-full ">
          <Image
            width={"80%"}
            height={"100%"}
            src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
            alt="img"
          ></Image>
        </div>
        <div className="flex justify-items-center text-center justify-center col-span-2 md:col-span-1  h-2/3 md:h-full">
          <Image
            width={"65%"}
            height={"100%"}
            src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
            alt="img"
          ></Image>
        </div>
        <div className="md:flex justify-items-center text-center justify-center py-20 row-span-2 hidden">
          <Image
            width={"65%"}
            height={"100%"}
            src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
            alt="img"
          ></Image>
        </div>
        <div className="flex col-span-3 md:col-span-2 justify-items-center justify- items-center">
          <div className="wrapper self-center">
            <Text className={titleClasses}>
              Acerca de nosotros <br /> <br />
            </Text>
            <Text className={descriptionClasses}>
              Ofrecemos servicio técnico profesional, reemplazo de partes
              originales, mantenimiento preventivo y correctivo, actualización
              de firmware a equipos fotográficos, drones, audiovisuales y
              perifericos en general. <br /> <br />
              Contamos con más de 7 años de experiencia en nuestras labores
              asegurando calidad y confianza a nuestros clientes.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
