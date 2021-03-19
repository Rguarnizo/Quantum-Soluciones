import React from "react";
import "../Styles/navBar.scss";
const NavBar = () => {
  return (
    <>
      <div className="w-screen hidden lg:flex justify-center items-center navbar ">
        <div className="navbar-content flex justify-between items-center w-3/4 ">
          <div className="company-logo flex justify-center items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Fcompany_logo.png?alt=media&token=d0d4bd51-648b-4dd5-a02e-cbbfb4b0e608"
              alt=""
            />
          </div>

          <div className="menu flex justify-end items-center gap-4">
            <div className="options">Home</div>
            <div className="options">Reparaciones</div>
            <div className="options ">Tienda</div>
            <div className="options">
              <span class="relative inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  class=" items-center px-4 py-2 border border-green-400 text-base leading-6 font-medium rounded-md text-green-800 bg-white hover:text-green-700 focus:border-green-300 transition ease-in-out duration-150"
                >
                  Rastrea tu orden
                </button>
                <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
