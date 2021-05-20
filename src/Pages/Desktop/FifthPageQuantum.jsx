import React from "react";
import "../../Styles/Desktop/fifthPageQuantum.scss";
import FifthPageQuantumMobile from "../Mobile/FifthPageQuantumMobile";

const FifthPageQuantum = (props) => {
  return (
    <div data-aos="fade-down" data-aos-duration="1500" className={`${props.setDark}`}>
      <div className="hidden xl:block">
        <div className="container-center-horizontal">
          <div className="mas-servicios screen bg-white dark:bg-gray-900">
            <ComponentsInfo
              peterOlexaPl7Irex9AgyUnsplash8="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609083139fffd20f5d421d93/img/peter-olexa-pl7irex9agy-unsplash-8-1@1x.png"
              requirementsGatheri="Nuestros servicios en automatización y sistemas"
              text1="Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat."
              peterOlexaPl7Irex9AgyUnsplash10="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/608f0f604cc71dff1a2277db/img/peter-olexa-pl7irex9agy-unsplash-10@1x.png"
            />
          </div>
        </div>
      </div>
      <div className="block xl:hidden">
        <FifthPageQuantumMobile />
      </div>
    </div>
  );
};

export default FifthPageQuantum;

function ComponentsInfo(props) {
  const {
    peterOlexaPl7Irex9AgyUnsplash8,
    requirementsGatheri,
    text1,
    peterOlexaPl7Irex9AgyUnsplash10,
  } = props;

  return (
    <div className="components-info">
      <div className="auto-added-frame">
        <img
          className="peter-olexa-p-l-agy-unsplash-8"
          src={peterOlexaPl7Irex9AgyUnsplash8}
          alt=""
        />
      </div>
      <div className="frame-16">
        <div className="frame-14">
          <h1 className="requirements-gatheri montserrat-bold-shark-64px dark:text-white">
            {requirementsGatheri}
          </h1>
          <div className="text-1 montserrat-normal-shark-28px dark:text-white">{text1}</div>
        </div>
        <img
          className="peter-olexa-p-l-agy-unsplash-10"
          src={peterOlexaPl7Irex9AgyUnsplash10}
          alt=""
        />
      </div>
    </div>
  );
}
