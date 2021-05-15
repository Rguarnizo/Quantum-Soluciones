import React from "react";
import "../../Styles/Mobile/secondPageQuantumMobile.scss";

const SecondPageQuantumMobile = () => {
  return <NuestosServiciosPhone {...nuestosServiciosPhoneData} />;
};

export default SecondPageQuantumMobile;

function NuestosServiciosPhone(props) {
  const {
    vector3,
    nuestrosServicios,
    overlapGroup2,
    overlapGroup3,
    saberMs,
    overlapGroup22,
    overlapGroup32,
    saberMs2,
    overlapGroup23,
    overlapGroup33,
    irALaTienda,
    frame558Props,
    frame5582Props,
    saly22Props,
    frame5583Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="nuestos-servicios-phone screen">
        <div className="overlap-group">
          <img className="vector-3" src={vector3} alt="" />
          <h1 className="title montserrat-bold-shark-45px">
            {nuestrosServicios}
          </h1>
          <div className="card-1">
            <div className="group-564">
              <div
                className="overlap-group2-2"
                style={{ backgroundImage: `url(${overlapGroup2})` }}
              >
                <Frame558
                  text1={frame558Props.text1}
                  text2={frame558Props.text2}
                />
              </div>
            </div>
            <div className="group-649-1">
              <div
                className="overlap-group3-2"
                style={{ backgroundImage: `url(${overlapGroup3})` }}
              >
                <div className="saber-ms valign-text-middle montserrat-bold-vulcan-17px">
                  {saberMs}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overlap-group1">
          <div className="card">
            <div className="group-564-2">
              <div
                className="overlap-group2-1"
                style={{ backgroundImage: `url(${overlapGroup22})` }}
              >
                <Frame558
                  text1={frame5582Props.text3}
                  text2={frame5582Props.text4}
                />
              </div>
            </div>
            <div className="group-649-2">
              <div
                className="overlap-group3"
                style={{ backgroundImage: `url(${overlapGroup32})` }}
              >
                <div className="saber-ms-1 valign-text-middle montserrat-bold-vulcan-17px">
                  {saberMs2}
                </div>
              </div>
            </div>
          </div>
          <Saly22 src={saly22Props.src} />
        </div>
        <div className="card-2">
          <div className="group-564-1">
            <div
              className="overlap-group2"
              style={{ backgroundImage: `url(${overlapGroup23})` }}
            >
              <Frame5583
                text5={frame5583Props.text5}
                text6={frame5583Props.text6}
              />
            </div>
          </div>
          <div className="group-649">
            <div
              className="overlap-group3-1"
              style={{ backgroundImage: `url(${overlapGroup33})` }}
            >
              <div className="ir-a-la-tienda valign-text-middle montserrat-bold-vulcan-17px">
                {irALaTienda}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame558(props) {
  const { text1, text2 } = props;

  return (
    <div className="frame-558">
      <div className="text-1 montserrat-bold-shark-22px">{text1}</div>
      <p className="text-2 montserrat-normal-shark-15px">{text2}</p>
    </div>
  );
}

function Frame5582(props) {
  const { text3, text4 } = props;

  return (
    <div className="frame-558-1">
      <div className="text-3 montserrat-bold-shark-22px">{text3}</div>
      <p className="text-4 montserrat-normal-shark-15px">{text4}</p>
    </div>
  );
}

function Saly22(props) {
  const { src } = props;

  return (
    <div className="saly-22-1">
      <img className="saly-22" src={src} alt="" />
    </div>
  );
}

function Frame5583(props) {
  const { text5, text6 } = props;

  return (
    <div className="frame-558-2">
      <div className="text-5 montserrat-bold-shark-22px">{text5}</div>
      <p className="text-6 montserrat-normal-shark-15px">{text6}</p>
    </div>
  );
}

const frame558Data = {
  text1: "Reparación de equipos",
  text2:
    "Disponemos del mejor equipo para llevar a cabo la reparación de equipos como cámaras, lentes, drones, flashes, radios y otros dispositivos eléctronicos",
};

const frame5582Data = {
  text3: "Automatización y sistemas",
  text4:
    "Proveemos servicios de automatización, desarrollo de sistemas de facturación, desarrollo de páginas web y otros servicios",
};

const saly22Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609b1c058be9f9a21fc2159d/img/saly-22@2x.png",
};

const frame5583Data = {
  text5: "Venta de equipos y accesorios",
  text6:
    "Ofrecemos un amplio catálogo de equipos y accesorios a los mejores precios del mercado",
};

const nuestosServiciosPhoneData = {
  vector3:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609b1c058be9f9a21fc2159d/img/vector-3@2x.png",
  nuestrosServicios: "Nuestros servicios",
  overlapGroup2:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609b1c058be9f9a21fc2159d/img/rectangle-38@2x.png",
  overlapGroup3:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609b1c058be9f9a21fc2159d/img/rectangle-39@2x.png",
  saberMs: "Saber más",
  overlapGroup22:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609b1c058be9f9a21fc2159d/img/rectangle-38-1@2x.png",
  overlapGroup32:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609b1c058be9f9a21fc2159d/img/rectangle-39-1@2x.png",
  saberMs2: "Saber más",
  overlapGroup23:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609b1c058be9f9a21fc2159d/img/rectangle-38-2@2x.png",
  overlapGroup33:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609b1c058be9f9a21fc2159d/img/rectangle-39-2@2x.png",
  irALaTienda: "Ir a la tienda",
  frame558Props: frame558Data,
  frame5582Props: frame5582Data,
  saly22Props: saly22Data,
  frame5583Props: frame5583Data,
};
