import React from "react";
import "../../Styles/Desktop/thirdPageQuantum.scss";
import ThirdPageQuantumMobile from "../Mobile/ThirdPageQuantumMobile";

const ThirdPageQuantum = () => {
  return (
    <>
      <div className="hidden xl:block">
        <Reparaciones
          iconfinder_Lens_4067241="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60970b3e9d7a46414d9b746a/img/iconfinder-lens-406724-1@2x.png"
          image1="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60970b3e9d7a46414d9b746a/img/image-1@2x.png"
          iconfinder_App_Icons_Photography___="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60970b3e9d7a46414d9b746a/img/iconfinder-app-icons-photography---cam-camera-video-movie-media-@2x.png"
          image2="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60970b3e9d7a46414d9b746a/img/image-2@2x.png"
          componentsInfoProps={reparacionesData.componentsInfoProps}
        />
      </div>
      <div className="block xl:hidden">
        <ThirdPageQuantumMobile />
      </div>
    </>
  );
};

export default ThirdPageQuantum;

function Reparaciones(props) {
  const {
    iconfinder_Lens_4067241,
    image1,
    iconfinder_App_Icons_Photography___,
    image2,
    componentsInfoProps,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="reparaciones screen">
        <div className="overlap-group">
          <ComponentsInfo
            frame8Props={componentsInfoProps.frame8Props}
            frame691Props={componentsInfoProps.frame691Props}
            frame645Props={componentsInfoProps.frame645Props}
            frame6452Props={componentsInfoProps.frame6452Props}
            frame6453Props={componentsInfoProps.frame6453Props}
          />
          {/* <img
            className="iconfinderlens406724-1"
            src={iconfinder_Lens_4067241}
            alt=""
          />
          <img className="image-1" src={image1} alt="" />
          <img
            className="iconfinderapp-chat7627385-1"
            src={iconfinder_App_Icons_Photography___}
            alt=""
          />
          <img className="image-2" src={image2} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

function ComponentsInfo(props) {
  const {
    frame8Props,
    frame691Props,
    frame645Props,
    frame6452Props,
    frame6453Props,
  } = props;

  return (
    <div className="components-info">
      <Frame8
        text1={frame8Props.text1}
        text2={frame8Props.text2}
        text3={frame8Props.text3}
      />
      <div className="frame-7">
        <div className="group-672">
          <div className="overlap-group-1">
            <Frame691 text4={frame691Props.text4} text5={frame691Props.text5} />
            <Frame645
              text18={frame645Props.text18}
              text19={frame645Props.text19}
            />
          </div>
        </div>
        <div className="group-673">
          <div className="overlap-group-1">
            <Frame645
              text18={frame6452Props.text18}
              text19={frame6452Props.text19}
              className="frame-690"
            />
            <Frame645
              text18={frame6453Props.text18}
              text19={frame6453Props.text19}
              className="frame-509"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8(props) {
  const { text1, text2, text3 } = props;

  return (
    <div className="frame-8">
      <div className="text-1 montserrat-medium-shark-23px">{text1}</div>
      <h1 className="text-2 montserrat-bold-shark-64px">{text2}</h1>
      <div className="text-3 montserrat-normal-shark-28px">{text3}</div>
    </div>
  );
}

function Frame691(props) {
  const { text4, text5 } = props;

  return (
    <div className="frame-691">
      <div className="text-4 montserrat-bold-shark-30px">{text4}</div>
      <div className="text-5 montserrat-normal-shark-24px">{text5}</div>
    </div>
  );
}

function Frame645(props) {
  const { text18, text19, className } = props;

  return (
    <div className={`frame-645 ${className || ""}`}>
      <div className="lentes-i90453591 montserrat-bold-shark-30px">
        {text18}
      </div>
      <div className="text-6 montserrat-normal-shark-24px">{text19}</div>
    </div>
  );
}

const frame8Data = {
  text1: "SOLUCIONES QUANTUM",
  text2: (
    <>
      Tu mejor opción en reparación <br />
      de equipos profesionales
    </>
  ),
  text3: (
    <>
      Contamos con un experimentado equipo de trabajo quien atenderá tus
      solicitudes de reparación.
      <br />
      Somos lideres en reparación de equipos profesionales
    </>
  ),
};

const frame691Data = {
  text4: "Cámaras",
  text5:
    "Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.",
};

const frame645Data = {
  text18: "Lentes",
  text19:
    "Vitae nulla euismod velpretium tellus accumsan nulla nunc euismod ve semper.",
};

const frame6452Data = {
  text18: "Flashes",
  text19:
    "Vitae nulla nunc euismod tellus accumsan vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.",
};

const frame6453Data = {
  text18: "Drones",
  text19:
    "Vitae nulla nunc euismod tellus accumsan vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.",
};

const componentsInfoData = {
  frame8Props: frame8Data,
  frame691Props: frame691Data,
  frame645Props: frame645Data,
  frame6452Props: frame6452Data,
  frame6453Props: frame6453Data,
};

const reparacionesData = {
  componentsInfoProps: componentsInfoData,
};
