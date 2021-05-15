import React from "react";
import "../Styles/navBar.scss";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";

const Group640 = (props) => {
  const { text2, text1, text4, text3 } = props;
  let scroll = Scroll.animateScroll;

  return (
    <div className="group-640">
      <div
        className="text-2 valign-text-middle montserrat-bold-geyser-21px"
        onClick={() => {
          scroll.scrollTo(0);
        }}
      >
        {text2}
      </div>
      <div className="text-1 valign-text-middle montserrat-bold-geyser-21px">
        <Link
          className="options hover:text-blue-100"
          to="second"
          smooth
          duration={1200}
          delay={150}
        >
          {text1}
        </Link>
      </div>
      <div className="text-4 valign-text-middle montserrat-bold-geyser-21px">
        <Link
          className="options hover:text-blue-100"
          to="fourth"
          smooth
          duration={1200}
          delay={150}
        >
          {text4}
        </Link>
      </div>
      <div className="text-3 valign-text-middle montserrat-bold-geyser-21px">
        <Link
          className="options hover:text-blue-100"
          to="sixth"
          smooth
          duration={1200}
          delay={150}
        >
          {text3}
        </Link>
      </div>
    </div>
  );
};

const ButtonButtonSmall = (props) => {
  const { children } = props;

  return (
    <div className="button-button-small border-2px-blue-ribbon">
      <div className="overlap-group">
        <div className="frame-692"></div>
        <div className="get-in-touch-i66665 valign-text-middle montserrat-bold-blue-ribbon-14px">
          {children}
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <>
      {/* <div className="w-screen hidden lg:flex justify-center items-center navbar ">
        <div className="navbar-content flex justify-between items-center w-3/4 ">
          <div className="company-logo flex justify-center items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FQuantum_Logo.png?alt=media&token=6c9587a8-04f0-4b2d-813b-2dd8d99d4a5a"
              alt=""
            />
          </div>

          <div className="menu flex justify-end items-center gap-4">
            <Link
              className="options hover:text-blue-100"
              to="home"
              smooth
              duration={2000}
              delay={200}
            >
              Home
            </Link>
            <Link
              className="options hover:text-blue-100"
              to="offers"
              smooth
              duration={1000}
              delay={200}
            >
              Promociones
            </Link>
            <div className="options hover:text-blue-100">Reparaciones</div>
            <div className="options hover:text-blue-100">Tienda</div>
            <div className="options">
              <span class="relative inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  class=" items-center px-4 py-2 border border-blue-500 text-base leading-6 font-medium rounded-md text-white  hover:text-blue-100 focus:border-green-300 transition ease-in-out duration-150"
                >
                  Rastrea tu orden
                </button>
                <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="hidden lg:block">
        <div className="nav-bar">
          <div className="components-header">
            <Group640
              text2="Inicio"
              text1="Servicios"
              text4="Tienda"
              text3="Nosotros"
            />
            <ButtonButtonSmall>Rastrea tu orden</ButtonButtonSmall>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <NavBarMobile />
      </div>
    </>
  );
};

const NavBarMobile = () => {
  return (
    <div className="nav-mobile flex w-100 items-center mx-10 my-5 justify-center text-center">
      {/* <div className="montserrat-bold-geyser-15px flex-auto items-center">
        Inicio
      </div> */}
      <div className=" montserrat-bold-geyser-15px flex-auto"></div>
      <div className=" montserrat-bold-geyser-15px flex-auto">Menu</div>
      <div className=" montserrat-bold-blue-ribbon-15px flex-auto">Rastrea tu orden</div>
    </div>
  );
};

export default NavBar;
