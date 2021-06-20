import React from "react";
import { FaHome, FaInfoCircle, FaMapMarkedAlt, FaScrewdriver, FaStore, FaTools } from "react-icons/fa";


export default function LateralNav(props){
  return <nav
    className="flex flex-col h-screen py-6 px-4 shadow-xl items-center  justify-around "
    style={{ zIndex: "99999", display: "flex", position: "fixed" }}
  >
    <a
      className="flex flex-row  menu-icons font-roboto font-bold text-gray-500 hover:text-blue-500  text-2xl"
      href="#Home"
    >
      <FaHome />
      <h4 className="hidden">Home</h4>
    </a>

    <a
      className=" menu-icons font-roboto font-bold text-gray-500 hover:text-blue-500  text-2xl"
      href="#Productos"
    >
      <FaTools />
    </a>
    <a
      className=" menu-icons font-roboto font-bold text-gray-500 hover:text-blue-500  text-2xl"
      href="#Productos"
    >
      <FaStore />
    </a>
    <a
      className=" menu-icons font-roboto font-bold text-gray-500 hover:text-blue-500  text-2xl"
      href="#Ubicacion"
    >
      <FaMapMarkedAlt />
    </a>
    <a
      className=" menu-icons font-roboto font-bold text-gray-500 hover:text-blue-500  text-2xl"
      href="#Footer"
    >
      <FaInfoCircle />
    </a>    
  </nav>;
};
