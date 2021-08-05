import React from "react";
import "../Styles/waButton.scss";
const WhatsAppButton = () => {
  return (
    <div
      className="wa-button "
      onClick={(e) => {
        window.open(
          "https://api.whatsapp.com/send?phone=573102985467&text=%C2%A1Hola%21+Quisiera+saber+m%C3%A1s+acerca+de+Soluciones+Quantum",
          "Contáctanos a través de WhatsApp"
        );
      }}
    >
      <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
      </span>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Fwhatsapp.svg?alt=media&token=492b5861-c755-44c3-b3a5-63b9a1ed8f17"
        alt="...."
      />
    </div>
  );
};

export default WhatsAppButton;
