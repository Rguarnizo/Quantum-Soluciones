import React from "react";
import "../../Styles/Mobile/sixthPageQuantumMobile.scss";
const SixthPageQuantumMobile = () => {
  return (
    <SobreNosotrosPhone
      peterOlexaPl7Irex9AgyUnsplash10="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609e91aceccb8cc9ee1deb57/img/peter-olexa-pl7irex9agy-unsplash-10-1@2x.png"
      peterOlexaPl7Irex9AgyUnsplash8="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609e91aceccb8cc9ee1deb57/img/peter-olexa-pl7irex9agy-unsplash-8@2x.png"
      acercaDeNosotros="Acerca de nosotros"
      text1="Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat."
    />
  );
};

export default SixthPageQuantumMobile;

function SobreNosotrosPhone(props) {
  const {
    peterOlexaPl7Irex9AgyUnsplash10,
    peterOlexaPl7Irex9AgyUnsplash8,
    acercaDeNosotros,
    text1,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sobre-nosotros-phone screen">
        <div className="flex-row">
          <img
            className="peter-olexa-p-l-agy-unsplash-20"
            src={peterOlexaPl7Irex9AgyUnsplash10}
            alt=""
          />
          <img
            className="peter-olexa-p-l-agy-unsplash-21"
            src={peterOlexaPl7Irex9AgyUnsplash8}
            alt=""
          />
        </div>
        <h1 className="title montserrat-bold-shark-35px">{acercaDeNosotros}</h1>
        <div className="text-1 montserrat-normal-shark-20px">{text1}</div>
        <div className="overlap-group">
          <div className="group-655"></div>
          <div className="group-656"></div>
        </div>
      </div>
    </div>
  );
}
