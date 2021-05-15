import React from "react";
import "../../Styles/Mobile/seventhPageQuantumMobile.scss";
const SeventhPageQuantumMobile = () => {
  return (
    <div class="container-center-horizontal">
      <div className="ubicacion-phone screen">
        <div className="overlap-group">
          <img
            className="rectangle-38"
            src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609f3bd3be9def8884f64ad5/img/rectangle-38@1x.png"
            alt=""
          />
          <IconsNumber1 src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609f3bd3be9def8884f64ad5/img/1@2x.png" />
          <IconsNumber2 src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609f3bd3be9def8884f64ad5/img/2@2x.png" />
          <h1 className="text-1">¿Dónde nos puedes encontrar?</h1>
          <div className="text-2 montserrat-normal-shark-20px">
            <span className="span montserrat-normal-shark-20px">
              Estamos ubicados en el Centro de Alta Tecnología: <br />
            </span>
            <span className="span montserrat-semi-bold-shark-20px">
              &nbsp;&nbsp;&nbsp;&nbsp; Carrera 15 # 77-05. Segundo Piso, Local
              2-64
              <br />
            </span>
            <span className="span montserrat-normal-shark-20px">
              También nos encuentras en el Barrio Carvajal Osorio:
              <br />
            </span>
            <span className="span montserrat-semi-bold-shark-20px">
              &nbsp;&nbsp;&nbsp;&nbsp; Calle 39 Sur #68L-75
              <br />
            </span>
            <span className="span4 ">Síguenos en nuestras redes sociales!</span>
          </div>
          <img
            className="saly-7"
            src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609f3bd3be9def8884f64ad5/img/saly-7@2x.png"
            alt=""
          />
          <img
            className="vector-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609f3bd3be9def8884f64ad5/img/vector-3@2x.png"
            alt=""
          />
        </div>
        <div className="overlap-group1">
          <div className="group-655"></div>
          <div className="group-656"></div>
        </div>
      </div>
    </div>
  );
};

export default SeventhPageQuantumMobile;

function IconsNumber1(props) {
  const { src } = props;

  return (
    <div className="icons-number-1 border-2px-blue-ribbon">
      <img className="x1" src={src} alt="" />
    </div>
  );
}

function IconsNumber2(props) {
  const { src } = props;

  return (
    <div className="icons-number-2 border-2px-blue-ribbon">
      <img className="x2" src={src} alt="" />
    </div>
  );
}
