import React from "react";
import "../Styles/firstPage.scss";

const FirstPage = () => {
  return (
    <div className="col-12 col-lg-7 col-xl-7 fpage-content mb-5">
      <div className="row">
        <h1 className="fpage-title" data-glitch="Soluciones Quantum">
          Soluciones Quantum
        </h1>
        <p id="fpage-description">
          Servicio técnico especializado, mantenimiento reparacion y
          sincronizacion de equipos
        </p>
      </div>
      <div className="row d-flex justify-content-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FSaly-22.svg?alt=media&token=de0782d3-8808-4162-b46e-e56bb0f40edc"
          alt="test"
          width= "400"
          height = "400"
        />
      </div>
    </div>
  );
};

export default FirstPage;
