import React from "react";
import "../../Styles/Desktop/footer.scss";
import FooterMobile from "../Mobile/FooterMobile";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";

const Footer = (props) => {
  return (
    <div data-aos="fade-down" data-aos-duration="2000" className={`${props.setDark}`}>
      <div className="hidden xl:block">
        <div class="container-center-horizontal ">
          <div className="footer screen bg-white dark:bg-gray-900">
            <div className="overlap-group">
              <ComponentsFooter {...componentsFooterData} />
              <IconsNumber1 src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/6097721342748e933a55297c/img/1@2x.png" />
              <IconsNumber2 src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/6097721342748e933a55297c/img/2@2x.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="block xl:hidden">
        <FooterMobile />
      </div>
    </div>
  );
};

export default Footer;

function ComponentsFooter(props) {
  const {
    line1,
    text1,
    spanText,
    spanText2,
    spanText3,
    socialIcons,
    socialIcons2,
    path2,
    socialIcons3,
    path3,
    socialIcons4,
    path4,
    pagesI1218763840,
    templatesI1218763,
    priceI1218763846,
    helpI1218763844,
    contactI12187638,
    demosI1218763839,
    darkThemeI121876,
    lightThemeI121876,
    frame1Props,
  } = props;

  let scroll = Scroll.animateScroll;

  return (
    <div className="components-footer">
      <div className="overlap-group1">
        <img className="line-1" src={line1} alt="" />
        <div className="body">
          <div className="frame-2">
            <div className="flex-col-1">
              <div className="group-664">
                <h1 className="text-1 valign-text-middle sarina-normal-shark-35px dark:text-white">
                  {text1}
                </h1>
                <div className="the-best-design-for montserrat-semi-bold-shark-24px dark:text-white">
                  <span className="span0 montserrat-semi-bold-shark-24px dark:text-white">
                    {spanText}
                  </span>
                  <span className="span1 dark:text-white">{spanText2}</span>
                  <span className="span2 dark:text-white">{spanText3}</span>
                </div>
              </div>
              <div className="group-681">
                <div
                  className="social-icons-3"
                  style={{ backgroundImage: `url(${socialIcons})` }}
                >
                  <img
                    className="path-1"
                    src="https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60976d553465028d25658202/img/path@2x.png"
                    alt=""
                  />
                </div>
                <div
                  className="social-icons-1"
                  style={{ backgroundImage: `url(${socialIcons2})` }}
                >
                  <img className="path-1" src={path2} alt="" />
                </div>
                <div
                  className="social-icons-2"
                  style={{ backgroundImage: `url(${socialIcons3})` }}
                >
                  <img className="path" src={path3} alt="" />
                </div>
                <div
                  className="social-icons"
                  style={{ backgroundImage: `url(${socialIcons4})` }}
                >
                  <img className="path-2" src={path4} alt="" />
                </div>
              </div>
            </div>
            <div className="group-665">
              <div className="flex-col cursor-pointer hover:text-blue-100 dark:text-white">
                <div className="pages-i1218763840 valign-text-middle montserrat-bold-shark-18px dark:text-white ">
                  {pagesI1218763840}
                </div>
                <div
                  className="x-i121876 valign-text-middle montserrat-bold-shark-18px hover:text-blue-100 dark:text-white"
                  onClick={() => {
                    scroll.scrollTo(0);
                  }}
                >
                  {templatesI1218763}
                </div>
                <div className="x-i121876384 valign-text-middle montserrat-bold-shark-18px cursor-pointer hover:text-blue-100 dark:text-white">
                  <Link
                    className="options hover:text-blue-100"
                    to="second"
                    smooth
                    duration={1200}
                    delay={150}
                  >
                    {priceI1218763846}
                  </Link>
                </div>
                <div className="x-i121876384 valign-text-middle montserrat-bold-shark-18px cursor-pointer hover:text-blue-100 dark:text-white">
                  <Link
                    className="options hover:text-blue-100"
                    to="fourth"
                    smooth
                    duration={1200}
                    delay={150}
                  >
                    {helpI1218763844}
                  </Link>
                </div>
                <div className="contact-i12187638 valign-text-middle montserrat-bold-shark-18px cursor-pointer hover:text-blue-100 dark:text-white">
                  <Link
                    className="options hover:text-blue-100"
                    to="sixth"
                    smooth
                    duration={1200}
                    delay={150}
                  >
                    {contactI12187638}
                  </Link>
                </div>
              </div>
              <div className="flex-col-2">
                <div className="demos-i1218763839 valign-text-middle montserrat-bold-shark-18px dark:text-white">
                  {demosI1218763839}
                </div>
                <div className="x-i121876 valign-text-middle montserrat-bold-shark-18px dark:text-white">
                  <a href="https://app.solucionesquantum.com/quantum/login">
                    {darkThemeI121876}
                  </a>
                </div>
                <div className="light-theme-i121876 valign-text-middle">
                  <a href="https://app.solucionesquantum.com/quantum/tracker">
                    {lightThemeI121876}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Frame1
            x20192021AllRigh={frame1Props.x20192021AllRigh}
            termsOfServiceI12={frame1Props.termsOfServiceI12}
          />
        </div>
      </div>
    </div>
  );
}

function Frame1(props) {
  const { x20192021AllRigh, termsOfServiceI12 } = props;

  return (
    <div className="frame-1">
      <div className="x2019-2021-all-righ montserrat-bold-shark-18px dark:text-white">
        {x20192021AllRigh}
      </div>
      <div className="terms-of-service-i12 valign-text-middle montserrat-bold-shark-18px dark:text-white">
        {termsOfServiceI12}
      </div>
    </div>
  );
}

function IconsNumber1(props) {
  // const { src } = props;

  return (
    <></>
    // <div className="icons-number-1 border-2px-blue-ribbon">
    //   <img className="x1" src={src} alt="" />
    // </div>
  );
}

function IconsNumber2(props) {
  // const { src } = props;

  return (
    <></>
    // <div className="icons-number-2 border-2px-blue-ribbon">
    //   <img className="x2" src={src} alt="" />
    // </div>
  );
}

const frame1Data = {
  x20192021AllRigh: "© 2021",
  termsOfServiceI12: "Made with ♥ by ANG Software Team",
};

const componentsFooterData = {
  line1:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/609083139fffd20f5d421d93/img/line-1@1x.png",
  text1: "Soluciones Quantum",
  spanText: (
    <>
      ¡Síguenos en nuestras redes sociales!
      <br />
    </>
  ),
  spanText2: (
    <>
      Contacto telefónico: <br />
    </>
  ),
  spanText3: "+57 310 298 5467 ; +57 314 245 2778",
  socialIcons:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60976d553465028d25658202/img/bg@2x.png",
  socialIcons2:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60976d553465028d25658202/img/bg@2x.png",
  path2:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60976d553465028d25658202/img/path-1@2x.png",
  socialIcons3:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60976d553465028d25658202/img/bg@2x.png",
  path3:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60976d553465028d25658202/img/path-2@2x.png",
  socialIcons4:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60976d553465028d25658202/img/bg@2x.png",
  path4:
    "https://anima-uploads.s3.amazonaws.com/projects/608f0074bb4573608fa2b001/releases/60976d553465028d25658202/img/path-3@2x.png",
  pagesI1218763840: "Páginas",
  templatesI1218763: "Inicio",
  priceI1218763846: "Servicios",
  helpI1218763844: "Tienda",
  contactI12187638: "Nosotros",
  demosI1218763839: "Quantum App",
  darkThemeI121876: "Acceso",
  lightThemeI121876: "Rastrea tu orden",
  frame1Props: frame1Data,
};