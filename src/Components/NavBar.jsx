import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const CompanyLogo = styled.img``;
const NavMenu = styled.a`
  font-family: "DM Sans", sans-serif;
`;

const MenuNavBar = (props) => {
  const NavMenuClasses = `font-extrabold text-3xl text-white cursor-pointer hover:text-blue-200 dark:text-gray-200`;
  // console.log(props);
  return (
    <div className="w-screen h-screen z-10 bg-black opacity-90 absolute top-0 left-0 lg:hidden">
      <div className="flex flex-col h-full w-full justify-center items-center gap-8">
        <NavMenu
          href="#services"
          className={NavMenuClasses}
          onClick={() => {
            props.close();
          }}
        >
          Servicios
        </NavMenu>
        <NavMenu
          href="#Shop"
          className={NavMenuClasses}
          onClick={() => {
            props.close();
          }}
        >
          Tienda
        </NavMenu>
        <NavMenu
          href="#AboutUs"
          className={NavMenuClasses}
          onClick={() => {
            props.close();
          }}
        >
          Nosotros
        </NavMenu>
        <NavMenu
          href="#CompanyLocations"
          className={NavMenuClasses}
          onClick={() => {
            props.close();
          }}
        >
          Ubicación
        </NavMenu>
        <NavMenu className={NavMenuClasses} onClick={() => props.close()}>
          Cerrar
        </NavMenu>
      </div>
    </div>
  );
};

const NavBar = () => {
  const CompanyLogoClasses = `border-solid border-2 border-blue-200 border-opacity-100 rounded h-16 p-2 navitem`;
  const NavMenuClasses = `font-extrabold  text-lg md:text-2xl mr-10 text-gray-500 cursor-pointer hover:text-blue-200 dark:text-gray-200 navitem`;
  const [showMenuBar, setshowMenuBar] = React.useState(false);

  const closeMenu = () => {
    setshowMenuBar(false);
    window.onscroll = function () {};
  };
  useEffect(() => {
    gsap.fromTo(
      ".navitem",
      { alpha: 0, y: -10 },
      { alpha: 1, y: 0, stagger: 0.2 }
    );
  });

  return (
    <>
      <div className="w-full items-center md:px-16 pt-10 dark:bg-gray-800 px-5 h-auto mb-5 absolute ">
        <div className="grid grid-flow-col grid-cols-2">
          <div className="flex items-center ">
            <CompanyLogo
              src="/assets/logo.png"
              className={CompanyLogoClasses}
            />
          </div>
          <div className="flex items-center justify-end lg:hidden">
            <NavMenu
              className={NavMenuClasses}
              onClick={() => {
                if (!showMenuBar) {
                  window.onscroll = function () {
                    window.scrollTo(0, 0);
                  };
                  setshowMenuBar(true);
                }
              }}
            >
              Menú
            </NavMenu>
          </div>
          <div className="hidden lg:flex items-center justify-end">
            <NavMenu href="#services" className={NavMenuClasses}>
              Servicios
            </NavMenu>
            <NavMenu href="#Shop" className={NavMenuClasses}>
              Tienda
            </NavMenu>
            <NavMenu href="#AboutUs" className={NavMenuClasses}>
              Nosotros
            </NavMenu>
            <NavMenu href="#CompanyLocations" className={NavMenuClasses}>
              Ubicación
            </NavMenu>
          </div>
        </div>
      </div>
      {showMenuBar ? <MenuNavBar close={closeMenu} /> : null}
    </>
  );
};

export default NavBar;
