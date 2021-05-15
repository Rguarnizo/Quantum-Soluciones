import React from "react";
import "../../Styles/Desktop/sixthPageQuantum.scss";
import SixthPageQuantumMobile from "../Mobile/SixthPageQuantumMobile";

const SixthPageQuantum = () => {
  return (
    <section id="sixth">
      <div className="hidden xl:block">
        <SobreNosotros
          componentsInfoProps={sobreNosotrosData.componentsInfoProps}
        />
      </div>
      <div className="block xl:hidden">
        <SixthPageQuantumMobile />
      </div>
    </section>
  );
};

export default SixthPageQuantum;

function SobreNosotros(props) {
  const { componentsInfoProps } = props;

  return (
    <div class="container-center-horizontal">
      <div className="sobre-nosotros screen">
        <ComponentsInfo
          peterOlexaPl7Irex9AgyUnsplash8={
            componentsInfoProps.peterOlexaPl7Irex9AgyUnsplash8
          }
          frame677Props={componentsInfoProps.frame677Props}
          frame14Props={componentsInfoProps.frame14Props}
        />
      </div>
    </div>
  );
}

function ComponentsInfo(props) {
  const { peterOlexaPl7Irex9AgyUnsplash8, frame677Props, frame14Props } = props;

  return (
    <div className="components-info">
      <div className="frame-16">
        <Frame677
          peterOlexaPl7Irex9AgyUnsplash10={
            frame677Props.peterOlexaPl7Irex9AgyUnsplash10
          }
          peterOlexaPl7Irex9AgyUnsplash11={
            frame677Props.peterOlexaPl7Irex9AgyUnsplash11
          }
        />
        <Frame14
          requirementsGatheri={frame14Props.requirementsGatheri}
          text1={frame14Props.text1}
        />
      </div>
      <div className="auto-added-frame">
        <img
          className="peter-olexa-p-l-agy-unsplash-8"
          src={peterOlexaPl7Irex9AgyUnsplash8}
          alt=""
        />
      </div>
    </div>
  );
}

function Frame677(props) {
  const { peterOlexaPl7Irex9AgyUnsplash10, peterOlexaPl7Irex9AgyUnsplash11 } =
    props;

  return (
    <div className="frame-677">
      <img
        className="peter-olexa-p-l-agy-unsplash-10"
        src={peterOlexaPl7Irex9AgyUnsplash10}
        alt=""
      />
      <img
        className="peter-olexa-p-l-agy-unsplash-5"
        src={peterOlexaPl7Irex9AgyUnsplash11}
        alt=""
      />
    </div>
  );
}

function Frame14(props) {
  const { requirementsGatheri, text1 } = props;

  return (
    <div className="frame-14">
      <h1 className="requirements-gatheri montserrat-bold-shark-64px">
        {requirementsGatheri}
      </h1>
      <div className="text-1 montserrat-normal-shark-28px">{text1}</div>
    </div>
  );
}

const frame677Data = {
  peterOlexaPl7Irex9AgyUnsplash10:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609083139fffd20f5d421d93/img/peter-olexa-pl7irex9agy-unsplash-10-1@1x.png",
  peterOlexaPl7Irex9AgyUnsplash11:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609083139fffd20f5d421d93/img/peter-olexa-pl7irex9agy-unsplash-11@1x.png",
};

const frame14Data = {
  requirementsGatheri: "Acerca de nosotros",
  text1:
    "Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.",
};

const componentsInfoData = {
  peterOlexaPl7Irex9AgyUnsplash8:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609083139fffd20f5d421d93/img/peter-olexa-pl7irex9agy-unsplash-8@1x.png",
  frame677Props: frame677Data,
  frame14Props: frame14Data,
};

const sobreNosotrosData = {
  componentsInfoProps: componentsInfoData,
};
