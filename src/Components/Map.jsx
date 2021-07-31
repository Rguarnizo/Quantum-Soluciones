import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const AnyReactComponent = ({ text1, text2, image }) => (
  // <div className="card-location w-72 bg-white rounded h-12 p-2">
  //   <p className="montserrat-normal-shark-12px">{text1}</p>
  //   <p className="montserrat-normal-shark-12px">{text2}</p>

  //   <span class="flex absolute h-3 w-3 top-0 left-0 -mt-1 -mr-1">
  //     <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
  //     <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
  //   </span>
  // </div>
  <div className="bg-white w-64 h-44 rounded-lg">
    <div className="flex absolute w-full h-25 top-0">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-64 h-20 object-cover rounded-t-lg object-center "
      />
    </div>
    <span class="flex absolute h-4 w-4 top-0 left-0 -mt-1 -mr-1">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
    </span>
    <form className="flex-auto p-6 ">
      <div className="flex flex-wrap mt-20">
        <h1 className="flex-auto text-base font-semibold">{text1}</h1>
        {/* <div className="text-xl font-semibold text-gray-500">$110.00</div> */}
        {/* <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
          In stock
        </div> */}
      </div>
      <p className="text-sm text-gray-500">{text2}</p>
    </form>
  </div>
);

const Map = (props) => {
  const Container = styled.div`
    /* position: absolute;
    left: 270px;
    top: 500px; */
    height: 100%;
    width: 100%;
    border-radius: 50px;
  `;

  return (
    // Important! Always set the container height explicitly
    <Container className={props.className}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API }}
        center={props.center}
        zoom={props.zoom}
        mapId="cba9cfc2eadf14f0"
      >
        <AnyReactComponent
          lat={4.66430205309855}
          lng={-74.05867751000919}
          text1="Centro de Alta Tecnología"
          text2="Local 2-64: Carrera 15 # 77-05"
          image="Images/LogoLago.jpg"
        />
        <AnyReactComponent
          lat={4.607711126602565}
          lng={-74.14074388887656}
          text1="Barrio Carvajal Osorio"
          text2="Calle 39 Sur #68L-75"
          image="/assets/logo.png"
        />
      </GoogleMapReact>
    </Container>
  );
};

export default Map;
