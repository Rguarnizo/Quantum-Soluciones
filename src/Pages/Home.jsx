import React from "react";
import styled from "styled-components";

const Home = () => {
  const QuantumSubtitleClasses = `text-2xl font-semibold uppercase text-gray-300 tracking-wider antialiased mb-12`;
  const QuantumTitleClasses= `font-black text-6xl tracking-tighter mb-6`
  const QuantumDescriptionClasses = `font-normal text-xl `
  const QuantumText = styled.span`
    font-family: "DM Sans", sans-serif;
  `;
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="flex items-center md:px-36">
          <div className="flex flex-col">
            <QuantumText className={QuantumSubtitleClasses}>
              soluciones quantum
            </QuantumText>
            <QuantumText className={QuantumTitleClasses}>Servicio técnico especializado </QuantumText>
            <QuantumText className={QuantumDescriptionClasses}>en reparación de  </QuantumText>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
