import React from "react";
import "../../Styles/Mobile/thirdPageQuantumMobile.scss";

const ThirdPageQuantumMobile = () => {
  return (
    <div className="container-center-horizontal">
      <div className="reparaciones-phone screen">
        <div className="overlap-group5">
          <h1 className="text-1">
            Tu mejor opción en reparación <br />
            de equipos profesionales
          </h1>
          <div className="soluciones-quantum">SOLUCIONES QUANTUM</div>
          <div className="text-2 montserrat-normal-shark-20px flex-wrap">
            Contamos con un experimentado equipo de trabajo quien atenderá tus
            solicitudes de reparación.
            <br />
            Somos lideres en reparación de equipos profesionales
          </div>
          <div className="overlap-group1">
            <Frame691
              flashes="Flashes"
              text3="Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper."
            />
            <img
              className="iconfinderlens406724-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609c677f68ccea69cd60be27/img/iconfinder-lens-406724-1@2x.png"
              alt=""
            />
          </div>
          <div className="overlap-group4">
            <Frame691
              flashes="Lentes"
              text3="Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper."
              className="frame-691"
            />
            <img
              className="image-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609c677f68ccea69cd60be27/img/image-1@2x.png"
              alt=""
            />
          </div>
          <div className="overlap-group3">
            <img
              className="iconfinderapp-chat7627385-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609c677f68ccea69cd60be27/img/iconfinder-app-icons-photography---cam-camera-video-movie-media-@2x.png"
              alt=""
            />
            <div className="cmaras montserrat-bold-shark-30px">Cámaras</div>
          </div>
          <div className="text-5 montserrat-normal-shark-20px">
            Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan
            nulla nunc euismod ve semper.
          </div>
        </div>
        <div className="flex-row">
          <div className="overlap-group2">
            <div className="group-655"></div>
            <div className="group-656"></div>
          </div>
          <div className="overlap-group">
            <img
              className="image-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609c677f68ccea69cd60be27/img/image-2@2x.png"
              alt=""
            />
            <div className="drones montserrat-bold-shark-30px">Drones</div>
          </div>
        </div>
        <div className="text-6 montserrat-normal-shark-20px">
          Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan
          nulla nunc euismod ve semper.
        </div>
      </div>
    </div>
  );
};

export default ThirdPageQuantumMobile;

function Frame691(props) {
  const { flashes, text3, className } = props;

  return (
    <div className={`frame-691-1 ${className || ""}`}>
      <div className="flashes montserrat-bold-shark-30px">{flashes}</div>
      <div className="text-3 montserrat-normal-shark-20px">{text3}</div>
    </div>
  );
}
