import React from "react";
import "../../Styles/Desktop/secondPageQuantum.scss";
import SecondPageQuantumMobile from "../Mobile/SecondPageQuantumMobile";

const SecondPageQuantum = () => {
  return (
    <section id="second">
      <div className="hidden xl:block">
        <NuestrosServicios
          vector2="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/6097044c6842df4f40142662/img/vector-2@1x.png"
          componentsCardProps={nuestrosServiciosData.componentsCardProps}
          saly22Props={nuestrosServiciosData.saly22Props}
        />
      </div>
      <div className="block xl:hidden">
        <SecondPageQuantumMobile />
      </div>
    </section>
  );
}

export default SecondPageQuantum;

function NuestrosServicios(props) {
  const { vector2, componentsCardProps, saly22Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="nuestros-servicios screen">
        <div className="overlap-group">
          <ComponentsCard {...componentsCardProps} />
          <img className="vector-2" src={vector2} alt="" />
          <Saly22 src={saly22Props.src} />
        </div>
      </div>
    </div>
  );
}

function ComponentsCard(props) {
  const {
    theBestDesignFor,
    overlapGroup1,
    auditI766713629,
    loremIpsumDolorSi,
    rectangle38,
    teamworkI7667136,
    loremIpsumDolorSi2,
    rectangle382,
    createI766713654,
    loremIpsumDolorSi3,
    group649Props,
    group6492Props,
    group6492Props2,
  } = props;

  return (
    <div className="components-card">
      <div className="text">
        <h1 className="the-best-design-for">{theBestDesignFor}</h1>
        <div className="link"></div>
      </div>
      <div className="frame-6">
        <div className="card">
          <div className="group-564">
            <div
              className="overlap-group1"
              style={{ backgroundImage: `url(${overlapGroup1})` }}
            >
              <div className="frame-558-1">
                <div className="audit-i766713629 montserrat-medium-shark-44px">
                  {auditI766713629}
                </div>
                <div className="lorem-ipsum-dolor-si-1 montserrat-normal-shark-22px">
                  {loremIpsumDolorSi}
                </div>
              </div>
            </div>
          </div>
          <Group649
            overlapGroup2={group649Props.overlapGroup2}
            experiencedTeamI76={group649Props.experiencedTeamI76}
          />
        </div>
        <div className="card">
          <div className="overlap-group-1">
            <img className="rectangle-38" src={rectangle38} alt="" />
            <div className="frame-558-2">
              <div className="teamwork-i7667136 montserrat-medium-shark-44px">
                {teamworkI7667136}
              </div>
              <div className="lorem-ipsum-dolor-si montserrat-normal-shark-22px">
                {loremIpsumDolorSi2}
              </div>
            </div>
            <Group649
              overlapGroup2={group6492Props.overlapGroup2}
              experiencedTeamI76={group6492Props.experiencedTeamI76}
              className="group-64"
            />
          </div>
        </div>
        <div className="card">
          <div className="overlap-group-1">
            <img className="rectangle-38" src={rectangle382} alt="" />
            <Group649
              overlapGroup2={group6492Props2.overlapGroup2}
              experiencedTeamI76={group6492Props2.experiencedTeamI76}
              className="group-64"
            />
            <div className="frame-558">
              <div className="create-i766713654 montserrat-medium-shark-44px">
                {createI766713654}
              </div>
              <div className="lorem-ipsum-dolor-si-2 montserrat-normal-shark-22px">
                {loremIpsumDolorSi3}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group649(props) {
  const { overlapGroup2, experiencedTeamI76, className } = props;

  return (
    <div className={`group-649 ${className || ""}`}>
      <div
        className="overlap-group2"
        style={{ backgroundImage: `url(${overlapGroup2})` }}
      >
        <div className="experienced-team-i76 valign-text-middle montserrat-bold-vulcan-21px">
          {experiencedTeamI76}
        </div>
      </div>
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

const group649Data = {
  overlapGroup2:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/608f0f604cc71dff1a2277db/img/rectangle-39-1@2x.png",
  experiencedTeamI76: "Saber más",
};

const group6492Data = {
  overlapGroup2:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/608f0f604cc71dff1a2277db/img/rectangle-39-1@2x.png",
  experiencedTeamI76: "Ir a la tienda",
};

const group6493Data = {
  overlapGroup2:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/608f0f604cc71dff1a2277db/img/rectangle-39-1@2x.png",
  experiencedTeamI76: "Saber más",
};

const componentsCardData = {
  theBestDesignFor: "Nuestros servicios",
  overlapGroup1:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/608f0f604cc71dff1a2277db/img/rectangle-38-1@2x.png",
  auditI766713629: "Reparación de equipos",
  loremIpsumDolorSi:
    "Disponemos del mejor equipo para llevar a cabo la reparación de equipos como cámaras, lentes, drones, flashes, radios y otros dispositivos eléctronicos",
  rectangle38:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/608f0f604cc71dff1a2277db/img/rectangle-38-1@2x.png",
  teamworkI7667136: "Venta de equipos y accesorios",
  loremIpsumDolorSi2:
    "Ofrecemos un amplio catálogo de equipos y accesorios a los mejores precios del mercado",
  rectangle382:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/608f0f604cc71dff1a2277db/img/rectangle-38-1@2x.png",
  createI766713654: "Automatización y sistemas",
  loremIpsumDolorSi3:
    "Proveemos servicios de automatización, desarrollo de sistemas de facturación, desarrollo de páginas web y otros servicios",
  group649Props: group649Data,
  group6492Props: group6492Data,
  group6492Props2: group6493Data,
};

const saly22Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/6097044c6842df4f40142662/img/saly-22@2x.png",
};

const nuestrosServiciosData = {
  componentsCardProps: componentsCardData,
  saly22Props: saly22Data,
};
