import React from "react";
import "../../Styles/Mobile/firstPageQuantumMobile.scss";
import ImagesCarousel from "../../Components/ImagesCarousel";
const FirstPageQuantumMobile = () => {
  return (
    <div className="fpage-mobile">
      <div class="container-center-horizontal">
        <div className="principal-phone screen">
          <div className="group-683">
            <div className="overlap-group">
              <div className="soluciones-quantum valign-text-middle">
                SOLUCIONES QUANTUM
              </div>
              <h1 className="text-1 valign-text-middle">
                Servicio técnico especializado
              </h1>
              <div className="text-2 valign-text-middle montserrat-normal-shark-19px">
                en reparación de drones
              </div>

              <div className="peter-olexa-p-l-agy-unsplash-11">
                <ImagesCarousel mobile={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPageQuantumMobile;
