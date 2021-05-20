import React from "react";
import "../../Styles/Desktop/fourthPageQuantum.scss";
import FourthPageQuantumMobile from "../Mobile/FourthPageQuantumMobile";

const FourthPageQuantum = (props) => {
  return (
    <section id="fourth" data-aos="fade-down" data-aos-duration="1500" className={`${props.setDark}`}>
      <div className="hidden xl:block">
        <div className="container-center-horizontal">
          <div className="tienda screen bg-white dark:bg-gray-900">
            <div className="overlap-group1">
              <ComponentsInfo
                experiencedTeamI95="Visita nuestra tienda"
                frame689Props={componentsInfoData.frame689Props}
                baseComponentsImageImageLargeProps={
                  componentsInfoData.baseComponentsImageImageLargeProps
                }
              />
              <img
                className="vector-3"
                src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60972002678c03d79e779bf1/img/vector-3@1x.png"
                alt=""
              />
              <Saly12 src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609083139fffd20f5d421d93/img/saly-12@1x.png" />
            </div>
            <div className="overlap-group1">
              <ComponentsInfo2
                theBestDesignFor="Explora nuestro catálogo"
                convallisTurpisEra="Te ofrecemos las mejores marcas en equipos como cámaras, lentes, flashes, drones y también en accesorios."
                baseComponentsImageImageLargeProps={
                  componentsInfo2Data.baseComponentsImageImageLargeProps
                }
              />
              <img
                className="vector-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609719ce678c03d79e779be9/img/vector-2@2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block xl:hidden">
        <FourthPageQuantumMobile />
      </div>
    </section>
  );
};

export default FourthPageQuantum;

function ComponentsInfo(props) {
  const {
    experiencedTeamI95,
    frame689Props,
    // baseComponentsImageImageLargeProps,
  } = props;

  return (
    <div className="components-info">
      <div className="frame-12">
        <Frame689 text1={frame689Props.text1} text2={frame689Props.text2} />
        <div className="experienced-team-i95 valign-text-middle">
          {experiencedTeamI95}
        </div>
      </div>
      {/* <BaseComponentsImageImageLarge src={baseComponentsImageImageLargeProps.src} /> */}
    </div>
  );
}

function Frame689(props) {
  const { text1, text2 } = props;

  return (
    <div className="frame-689">
      <h1 className="text-1 montserrat-bold-shark-52px dark:text-white">{text1}</h1>
      <div className="text-2 montserrat-normal-shark-28px dark:text-white">{text2}</div>
    </div>
  );
}

function BaseComponentsImageImageLarge(props) {
  const { src, className } = props;

  return (
    <div
      className={`base-components-age-image-large ${className || ""}`}
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  );
}

function Saly12(props) {
  const { src } = props;

  return (
    <div className="saly-12-1">
      <img className="saly-12" src={src} alt="" />
    </div>
  );
}

function ComponentsInfo2(props) {
  const {
    theBestDesignFor,
    convallisTurpisEra,
    baseComponentsImageImageLargeProps,
  } = props;

  return (
    <div className="components-info-1">
      <BaseComponentsImageImageLarge
        src={baseComponentsImageImageLargeProps.src}
        className="base-components-age-image-large-1"
      />
      <div className="frame-606">
        <div className="the-best-design-for montserrat-bold-shark-52px dark:text-white">
          {theBestDesignFor}
        </div>
        <div className="convallis-turpis-era montserrat-normal-shark-28px dark:text-white">
          {convallisTurpisEra}
        </div>
        <div className="grid grid-cols-4 gap-3 justify-items-center p-2">
          {" "}
          <button className="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 p-2 flex justify-center items-center ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Fcanon_white.png?alt=media&token=d0125797-5944-49d0-8750-b14579f76735"
              alt=""
              className="rounded-none"
              style={{ width: "90%", height: "75%" }}
            />
          </button>
          <button className="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 flex justify-center items-center p-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Fsony-logo-png-transparent-13_c.png?alt=media&token=5e8bab26-5452-4a0f-aefd-cfdd3da3f71e"
              alt=""
              className="rounded-none"
              style={{ width: "80%", height: "50%" }}
            />
          </button>
          <button className="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 p-3">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FPikPng.com_panasonic-logo-png_1400111.png?alt=media&token=6bdcb1f4-298f-4aea-8f9f-9b1c581f7cc5"
              alt=""
              className="rounded-none"
            />
          </button>
          <button className="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 p-3 flex justify-center items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDaco_77293.png?alt=media&token=cc928a8c-579f-417f-8532-185b0a3a50fe"
              alt=""
              className="rounded-none"
            />
          </button>
          <button className="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 p-3 flex justify-center items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDaco_5061982.png?alt=media&token=a7855dad-9c47-4655-ad9b-d16a801bb40c"
              alt=""
              className="rounded-none"
              style={{ width: "100%", height: "80%" }}
            />
          </button>
          <button className="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 p-3 flex justify-center items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Fgopro_logo_PNG12.png?alt=media&token=8e381300-40c0-485b-918a-e6aaac18d6d0"
              alt=""
              className="rounded-none"
              style={{ width: "100%", height: "90%" }}
            />
          </button>
          <button className="focus:outline-none w-24 rounded-md bg-gray-600 ring ring-gray-300 p-3 flex justify-center items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDaco_5295857.png?alt=media&token=c8170945-dc21-4a56-8bdc-dd7ae39c1d23"
              alt=""
              className="rounded-none align-middle"
              style={{ width: "50%", height: "85%" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

const frame689Data = {
  text1: "Conoce nuestra tienda!",
  text2:
    "Ofrecemos a tu disposición cientos de equipos y accesorios de la mejor calidad y al mejor precio",
};

const baseComponentsImageImageLargeData = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609083139fffd20f5d421d93/img/rectangle@1x.png",
};

const componentsInfoData = {
  frame689Props: frame689Data,
  baseComponentsImageImageLargeProps: baseComponentsImageImageLargeData,
};

const baseComponentsImageImageLarge2Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609083139fffd20f5d421d93/img/rectangle@1x.png",
};

const componentsInfo2Data = {
  baseComponentsImageImageLargeProps: baseComponentsImageImageLarge2Data,
};
