import React from "react";
import "../../Styles/Desktop/seventhPageQuantum.scss";
import SeventhPageQuantumMobile from "../Mobile/SeventhPageQuantumMobile";
import Map from "../../Components/Map";

const SeventhPageQuantum = (props) => {
  let defaultProps = {
    center: {
      lat: 4.66430205309855,
      lng: -74.05867751000919,
    },
    zoom: 15,
  };

  const [location, setlocation] = React.useState(defaultProps);

  return (
    <div data-aos="fade-down" data-aos-duration="1500" className={`${props.setDark}`}>
      <div className="hidden xl:block">
        <div class="container-center-horizontal">
          <div className="ubicacion screen bg-white dark:bg-gray-900">
            <div className="overlap-group">
              <ComponentsInfo />
              <ComponentsCTA {...componentsCTAData} />
              <IconsNumber1
                src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/6097643a89c0da4b789b658d/img/1@2x.png"
                setlocation={setlocation}
              />
              <IconsNumber2
                src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/6097643a89c0da4b789b658d/img/2@2x.png"
                setlocation={setlocation}
              />
              <img
                className="saly-7"
                src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/6097643a89c0da4b789b658d/img/saly-7@2x.png"
                alt=""
              />
            </div>
            <Map center={location.center} zoom={location.zoom} />
          </div>
        </div>
      </div>
      <div className="block xl:hidden">
        <SeventhPageQuantumMobile />
      </div>
    </div>
  );
};

export default SeventhPageQuantum;

function ComponentsInfo() {
  return <div className="components-info"></div>;
}

function ComponentsCTA(props) {
  const {
    rectangle38,
    maskGroup,
    allInOnePlatform,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
  } = props;

  return (
    <div className="components-cta">
      <div className="overlap-group1">
        <img className="rectangle-38" src={rectangle38} alt="" />
        <img className="mask-group" src={maskGroup} alt="" />
        <div className="frame-684">
          <h1 className="all-in-one-platform">{allInOnePlatform}</h1>
          <div className="lorem-ipsum-dolor-si montserrat-normal-shark-24px">
            <span className="span montserrat-normal-shark-24px">
              {spanText}
            </span>
            <span className="span montserrat-semi-bold-shark-24px">
              {spanText2}
            </span>
            <span className="span montserrat-normal-shark-24px">
              {spanText3}
            </span>
            <span className="span montserrat-semi-bold-shark-24px">
              {spanText4}
            </span>
            <span className="span4 ">{spanText5}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsNumber1(props) {
  const { src } = props;

  return (
    <div
      className="icons-number-1 border-2px-blue-ribbon cursor-pointer"
      onClick={() => {
        props.setlocation((state) => {
          return {
            center: {
              lat: 4.66430205309855,
              lng: -74.05867751000919,
            },
            zoom: 15,
          };
        });
      }}
    >
      <img className="x1" src={src} alt="" />
    </div>
  );
}

function IconsNumber2(props) {
  const { src } = props;
  return (
    <div
      className="icons-number-2 border-2px-blue-ribbon cursor-pointer"
      onClick={() => {
        props.setlocation((state) => {
          return {
            center: {
              lat: 4.607711126602565,
              lng: -74.14074388887656,
            },
            zoom: 15,
          };
        });
      }}
    >
      <img className="x2" src={src} alt="" />
    </div>
  );
}

const componentsCTAData = {
  rectangle38:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/6097643a89c0da4b789b658d/img/rectangle-38@1x.png",
  maskGroup:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/6097643a89c0da4b789b658d/img/mask-group@1x.png",
  allInOnePlatform: "¿Dónde nos puedes encontrar?",
  spanText: (
    <>
      Estamos ubicados en el Centro de Alta Tecnología: <br />
    </>
  ),
  spanText2: (
    <span className="ml-8">
      Carrera 15 # 77-05. Segundo Piso, Local 2-64
      <br />
    </span>
  ),
  spanText3: (
    <>
      También nos encuentras en el Barrio Carvajal Osorio:
      <br />
    </>
  ),
  spanText4: (
    <span className="ml-8">
      Calle 39 Sur #68L-75
      <br />
    </span>
  ),
  spanText5: "Síguenos en nuestras redes sociales!",
};
