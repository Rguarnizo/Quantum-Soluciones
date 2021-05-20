import React from "react";
import "../../Styles/Mobile/footerMobile.scss";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";

const FooterMobile = () => {
  let scroll = Scroll.animateScroll;
  return (
    <div className="container-center-horizontal">
      <div className="footer-phone screen">
        <div className="overlap-group2">
          <div className="group-681">
            <div className="social-icons-2">
              <img
                className="path-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609f453d4a5b8cd6aa2fabe0/img/path@2x.png"
                alt=""
              />
            </div>
            <div className="social-icons">
              <img
                className="path-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60976d553465028d25658202/img/path-1@2x.png"
                alt=""
              />
            </div>
            <div className="social-icons-1">
              <img
                className="path-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60976d553465028d25658202/img/path-2@2x.png"
                alt=""
              />
            </div>
            <div className="social-icons-3">
              <img
                className="path"
                src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60976d553465028d25658202/img/path-3@2x.png"
                alt=""
              />
            </div>
          </div>
          <div className="group-665">
            <div className="flex-col">
              <div className="pages valign-text-middle montserrat-bold-shark-18px">
                Páginas
              </div>
              <div
                className="inicio valign-text-middle montserrat-bold-shark-18px hover:text-blue-100 cursor-pointer"
                onClick={() => {
                  scroll.scrollTo(0);
                }}
              >
                Inicio
              </div>
              <div className="price valign-text-middle montserrat-bold-shark-18px cursor-pointer">
                <Link
                  className="options hover:text-blue-100"
                  to="second"
                  smooth
                  duration={1200}
                  delay={150}
                >
                  Servicios
                </Link>
              </div>
              <div className="help valign-text-middle montserrat-bold-shark-18px cursor-pointer">
                <Link
                  className="options hover:text-blue-100"
                  to="fourth"
                  smooth
                  duration={1200}
                  delay={150}
                >
                  Tienda
                </Link>
              </div>
              <div className="contacto valign-text-middle montserrat-bold-shark-18px cursor-pointer">
                <Link
                  className="options hover:text-blue-100"
                  to="sixth"
                  smooth
                  duration={1200}
                  delay={150}
                >
                  Contacto
                </Link>
              </div>
            </div>
            <div className="flex-col-1">
              <div className="demos valign-text-middle montserrat-bold-shark-18px ">
                Quantum App
              </div>
              <div className="dark-theme valign-text-middle montserrat-bold-shark-18px">
                <a href="https://app.solucionesquantum.com/quantum/login">
                  Acceso
                </a>
              </div>
              <div className="light-theme valign-text-middle montserrat-bold-blue-ribbon-18px">
                <a href="https://app.solucionesquantum.com/quantum/tracker">
                  Rastrea tu orden
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row">
          <h1 className="title valign-text-middle">Soluciones Quantum</h1>
          <div className="overlap-group1">
            <div className="phone-1 montserrat-normal-shark-12px">
              +57 314 245 2778
            </div>
            <div className="phone montserrat-normal-shark-12px">
              +57 310 298 5467
            </div>
          </div>
        </div>
        <div className="flex-row-1">
          <div className="text-1 montserrat-bold-shark-18px">© 2021</div>
          <div className="terms-of-service valign-text-middle montserrat-bold-shark-18px">
            Made with ♥ by ANG Software Team
          </div>
        </div>
        <div className="overlap-group">
          <div className="group-655"></div>
          <div className="group-656"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
