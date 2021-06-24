import React from 'react';
import Card from './Card';

export default function Services(){
    

    return <div
    id="Promociones"
    className="relative h-screen w-screen flex lg:flex-row lg:py-0 items-center flex-wrap lg:px-16 lg:flex-nowrap justify-center"
  >
    <h2 className="hidden lg:block absolute top-0 font-bold font-roboto text-5xl">
      Nuestros servicios
    </h2>

    <Card
      title={"Reparación de equipos"}
      content={
        "Disponemos del mejor equipo para llevar a cabo la reparación de equipos como cámaras, lentes, drones, flashes, radios y otros dispositivos eléctronicos"
      }
      link={"Saber más"}
      url="google.com"
    />
    <Card
      title={"Venta de equipos y accesorios"}
      content={
        "Ofrecemos un amplio catálogo de equipos y accesorios a los mejores precios del mercado"
      }
      link={"Ir a la tienda"}
      url="google.com"
    />
    <Card
      // className={"flex-shrink-0"}
      title={"Automatización y sistemas"}
      content={
        "Proveemos servicios de automatización, desarrollo de sistemas de facturación, desarrollo de páginas web y otros servicios"
      }
      link={"Saber más"}
      url="google.com"
    />
    <div className="absolute top-0 right-0" id="drone">
      <img className="hidden lg:block object-scale-down" src="Images/Drone.png" />
    </div>
  </div>
}