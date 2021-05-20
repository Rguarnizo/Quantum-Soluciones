import React from "react";
import "../../Styles/Mobile/fourthPageQuantumMobile.scss";
const FourthPageQuantumMobile = () => {
  return (
    <div className="container-center-horizontal">
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
            <div className="grid grid-brands grid-cols-3 gap-3 justify-items-center p-2">
              {" "}
              <button class="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 p-2 flex justify-center items-center ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Fcanon_white.png?alt=media&token=d0125797-5944-49d0-8750-b14579f76735"
                  alt=""
                  className="rounded-none"
                  style={{ width: "90%", height: "75%" }}
                />
              </button>
              <button class="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 flex justify-center items-center p-2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Fsony-logo-png-transparent-13_c.png?alt=media&token=5e8bab26-5452-4a0f-aefd-cfdd3da3f71e"
                  alt=""
                  className="rounded-none"
                  style={{ width: "80%", height: "50%" }}
                />
              </button>
              <button class="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 p-3">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FPikPng.com_panasonic-logo-png_1400111.png?alt=media&token=6bdcb1f4-298f-4aea-8f9f-9b1c581f7cc5"
                  alt=""
                  className="rounded-none"
                />
              </button>
              <button class="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 p-3 flex justify-center items-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDaco_77293.png?alt=media&token=cc928a8c-579f-417f-8532-185b0a3a50fe"
                  alt=""
                  className="rounded-none"
                  style={{ width: "100%", height: "50%" }}
                />
              </button>
              <button class="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 p-3 flex justify-center items-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDaco_5061982.png?alt=media&token=a7855dad-9c47-4655-ad9b-d16a801bb40c"
                  alt=""
                  className="rounded-none"
                  style={{ width: "100%", height: "80%" }}
                />
              </button>
              <button class="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 p-3 flex justify-center items-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Fgopro_logo_PNG12.png?alt=media&token=8e381300-40c0-485b-918a-e6aaac18d6d0"
                  alt=""
                  className="rounded-none"
                  style={{ width: "100%", height: "90%" }}
                />
              </button>
              <button class="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 p-3 flex justify-center items-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDaco_5295857.png?alt=media&token=c8170945-dc21-4a56-8bdc-dd7ae39c1d23"
                  alt=""
                  className="rounded-none align-middle"
                  style={{ width: "30%", height: "100%" }}
                />
              </button>
            </div>
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
