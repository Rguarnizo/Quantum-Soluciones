import React from "react";
import "../../Styles/Mobile/fourthPageQuantumMobile.scss";
const FourthPageQuantumMobile = () => {
  return (
    <div class="container-center-horizontal">
      <div className="tienda-phone screen">
        <div className="overlap-group1">
          <div className="overlap-group">
            <div className="frame-695">
              <h1 className="text-3 montserrat-bold-shark-35px">
                Conoce nuestra tienda!
              </h1>
              <div className="text- montserrat-normal-shark-20px">
                Ofrecemos a tu disposición cientos de equipos y accesorios de la
                mejor calidad y al mejor precio
              </div>
              <div className="text-1 valign-text-middle">
                Visita nuestra tienda
              </div>
            </div>
            <div className="frame-696">
              <div className="text-5 montserrat-bold-shark-35px">
                Explora nuestro catálogo
              </div>
              <div className="text- montserrat-normal-shark-20px">
                Te ofrecemos las mejores marcas en equipos como cámaras, lentes,
                flashes, drones y también en accesorios.
              </div>
            </div>
            <img
              className="vector-4"
              src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609d95dcef81b78f4ef50725/img/vector-4@1x.png"
              alt=""
            />
          </div>
          <BaseComponentsImageImageLarge src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609d95dcef81b78f4ef50725/img/rectangle@2x.png" />
        </div>
        <BaseComponentsImageImageLarge
          src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609d95dcef81b78f4ef50725/img/rectangle@2x.png"
          className="base-components-age-image-large"
        />
      </div>
    </div>
  );
};

export default FourthPageQuantumMobile;

function BaseComponentsImageImageLarge(props) {
  const { src, className } = props;

  return (
    <div
      className={`base-components-age-image-large-1 ${className || ""}`}
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  );
}
