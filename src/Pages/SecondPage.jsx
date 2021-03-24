import "../Styles/secondPage.scss";
import ImageSecondPage from "../resources/ImageSecondPage";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const SecondPage = () => {
  return (
    <section className="spage-container" id="offers">
      <div className="grid grid-rows-2 grid-cols-2 gap-4 h-screen">
        <div className="fpage-content flex flex-wrap content-center justify-center col-span-2 md:col-span-1 row-span-1 md:row-span-2 ">
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="max-w-sm md:max-w-2xl mt-32 md:mt-0"
          >
            <div className="flex justify-center">
              <ImageSecondPage />
            </div>

            <div className="flex justify-center">
              <h2>Promociones</h2>
            </div>
            <div className="flex text-center">
              <p className="description">
                {" "}
                Echa un vistazo a las promociones que tenemos para ti!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
