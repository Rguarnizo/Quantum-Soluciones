import React from "react";
import "../Styles/navBar.scss";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Group640 = (props) => {
  const { text2, text1, text4, text3 } = props;
  let scroll = Scroll.animateScroll;

  return (
    <div className="group-640">
      <div
        className="text-2 valign-text-middle montserrat-bold-geyser-21px cursor-pointer hover:text-blue-100"
        onClick={() => {
          scroll.scrollTo(0);
        }}
      >
        {text2}
      </div>
      <div className="text-1 valign-text-middle montserrat-bold-geyser-21px cursor-pointer">
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
      <div className="text-4 valign-text-middle montserrat-bold-geyser-21px cursor-pointer">
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
      <div className="text-3 valign-text-middle montserrat-bold-geyser-21px cursor-pointer">
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
    <div className="button-button-small border-2px-blue-ribbon cursor-pointer">
      <div className="overlap-group">
        <div className="frame-692"></div>
        <div className="get-in-touch-i66665 valign-text-middle montserrat-bold-blue-ribbon-14px">
          <a href="https://app.solucionesquantum.com/quantum/tracker">
            {" "}
            {children}
          </a>
        </div>
      </div>
    </div>
  );
};

const NavBar = (props) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

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
      <div className= {`hidden lg:block ${props.setDark}`}>
        <div className="nav-bar bg-white dark:bg-gray-900">
          <div className="absolute top-6 left-16">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FQuantum_Logo.png?alt=media&token=6c9587a8-04f0-4b2d-813b-2dd8d99d4a5a"
              alt=""
              className="h-12 w-auto"
            />
          </div>
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
  const [showMenu, setshowMenu] = React.useState(false);

  const closeMenu = () => {
    setshowMenu(false);
    window.onscroll = function () {};
  };

  return (
    <div className="nav-mobile flex w-100 items-center mx-10 my-5 justify-center text-center">
      {/* <div className="montserrat-bold-geyser-15px flex-auto items-center">
        Inicio
      </div> */}
      <div className=" montserrat-bold-geyser-15px flex-auto ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Flogo%20quantum%20maraca%20de%20agua%20(1).jpg?alt=media&token=9d0a2e8c-e13c-4a10-9bef-d6e102c44a09"
          alt=""
          className="w-auto h-9"
        />
      </div>
      <div
        className=" montserrat-bold-geyser-15px flex-auto cursor-pointer"
        onClick={() => {
          if (!showMenu) {
            setshowMenu(true);
            window.onscroll = function () {
              window.scrollTo(0, 0);
            };
          }
        }}
      >
        Menu
      </div>
      <div className=" montserrat-bold-blue-ribbon-15px flex-auto">
        <a href="https://app.solucionesquantum.com/quantum/tracker">
          Rastrea tu orden
        </a>
      </div>
      {showMenu ? <MenuNavBar closeMenu={closeMenu} /> : null}
    </div>
  );
};

const MenuNavBar = (props) => {
  return (
    <div
      className="w-full h-full z-10 bg-gray-400 opacity-50 absolute top-0 left-0"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div className="flex flex-col h-full  justify-center gap-8">
        <div className="montserrat-bold-white-25px cursor-pointer">
          <Link
            className="options hover:text-blue-100"
            to="second"
            smooth
            duration={1200}
            delay={150}
            onClick={() => {
              props.closeMenu();
            }}
          >
            Servicios
          </Link>
        </div>
        <div className="montserrat-bold-white-25px cursor-pointer">
          <Link
            className="options hover:text-blue-100"
            to="fourth"
            smooth
            duration={1200}
            delay={150}
            onClick={() => {
              props.closeMenu();
            }}
          >
            Tienda
          </Link>
        </div>
        <div className="montserrat-bold-white-25px cursor-pointer">
          <Link
            className="options hover:text-blue-100"
            to="sixth"
            smooth
            duration={1200}
            delay={150}
            onClick={() => {
              props.closeMenu();
            }}
          >
            Contacto
          </Link>
        </div>
        <div
          className="montserrat-bold-white-25px cursor-pointer"
          onClick={() => {
            props.closeMenu();
          }}
        >
          Cerrar
        </div>
      </div>
    </div>
  );
};

export default NavBar;
