import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text1, text2 }) => (

  <div className="bg-white w-32 h-auto lg:w-64 lg:h-44 ">
    <div className="flex absolute w-full h-25 top-0">
      <img
        src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
        alt=""
        className="absolute inset-0 h-12 w-32 lg:w-64 lg:h-20 object-cover rounded-none object-center"
      />
    </div>
    <span class="flex absolute h-4 w-4 top-0 left-0 -mt-1 -mr-1">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
    </span>
    <form className="flex-auto p-6">
      <div className="flex flex-wrap mt-7 lg:mt-20">
        <h1 className="flex-auto text-sm lg:text-base font-semibold">
          {text1}
        </h1>
      </div>
      <p className="text-xsm text-gray-500">
        {text2}
      </p>
      <button className="hidden sm:block font-roboto text-sm text-blue-500 group font-bold hover:text-white py-1 px-1 rounded-md border-2 border-blue-500 hover:border-blue-200 hover:bg-blue-500 focus:border-transparent">
          Vamos allá!
          <span class="absolute -top-1 right-2">
            <span class="animate-ping absolute inline-flex h-1 w-1 rounded-full bg-blue-400  opacity-75"></span>
            <span class="absolute inline-flex rounded-full h-1 w-1 bg-blue-500 group-hover:bg-gray-100"></span>
          </span>
      </button>
    </form>

  </div>
);

const Map = (props) => {
  return (
    
    <div className={`map-container ${props.className}`}>    
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBJ1usqczqcrPEh0WcsLNUw_cWwUXrfj0s" }}
        center={props.center}
        zoom={props.zoom}
      >
        <AnyReactComponent
          lat={4.66430205309855}
          lng={-74.05867751000919}
          text1="Centro de Alta Tecnología"
          text2="Local 2-64: Carrera 15 # 77-05"
        />
        <AnyReactComponent
          lat={4.607711126602565}
          lng={-74.14074388887656}
          text1="Barrio Carvajal Osorio"
          text2="Calle 39 Sur #68L-75"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
