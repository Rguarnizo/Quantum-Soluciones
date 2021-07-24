import React from "react";
import styled from "styled-components";

const CompanyLogo = styled.img``;
const NavMenu = styled.p`
  font-family: "DM Sans", sans-serif;
`;

const NavBar = () => {
  const CompanyLogoClasses = `border-solid border-2 border-blue-200 border-opacity-100 rounded h-16 p-2`;
  const NavMenuClasses = `font-extrabold  text-lg md:text-2xl mr-10 text-gray-500 cursor-pointer hover:text-blue-200 dark:text-gray-200`;

  return (
    <div className="w-full items-center md:px-16 pt-10 dark:bg-gray-800 px-5 h-auto mb-5 absolute ">
      <div className="grid grid-flow-col grid-cols-2">
        <div className="flex items-center ">
          <CompanyLogo src="/assets/logo.png" className={CompanyLogoClasses} />
        </div>
        <div className="flex items-center justify-end lg:hidden">
          <NavMenu className={NavMenuClasses}>Menú</NavMenu>
        </div>
        <div className="hidden lg:flex items-center justify-end">
          <NavMenu className={NavMenuClasses}>Inicio</NavMenu>
          <NavMenu className={NavMenuClasses}>Servicios</NavMenu>
          <NavMenu className={NavMenuClasses}>Tienda</NavMenu>
          <NavMenu className={NavMenuClasses}>Nosotros</NavMenu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
