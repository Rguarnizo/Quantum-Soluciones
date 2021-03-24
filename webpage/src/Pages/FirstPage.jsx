import React, { Suspense } from "react";
import "../Styles/firstPage.scss";
import { useTransition, animated, config } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

/*eslint no-unused-vars: "off"*/

const slides = [
  {
    id: 0,
    url:
      "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDSC05649.jpg?alt=media&token=3759de40-714c-4196-86de-49842da6d397",
  },
  {
    id: 1,
    url:
      "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDSC05612.jpg?alt=media&token=60965d35-cec3-4813-8d9e-7b7f8d1f0d8e",
  },
  {
    id: 2,
    url:
      "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDSC05622.jpg?alt=media&token=5627aa61-22ab-4ae9-9924-d7126f735bd8",
  },
  {
    id: 3,
    url:
      "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDSC05656.jpg?alt=media&token=5e29dc95-6b83-430b-ace3-d6ada205d588",
  },
  {
    id: 4,
    url:
      "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDSC05676.jpg?alt=media&token=52712d54-b73a-4fe1-b8b9-69bfab309884",
  },
];
const ImageCard = (props) => {
  const [index, set] = React.useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { transform: "scale(1.3)" },
    enter: { transform: "scale(0.8)" },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  React.useEffect(() => {
    void setInterval(() => set((state) => (state + 1) % 4), 10000);
  }, []);

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return transitions.map(({ item, props, key }) => {
    // timeout(1000).then(() => {
    //   console.log("Eso cabronaaa");
    // });

    // console.log(props);
    // if (props.opacity) {
    //   setTimeout(() => {
    //     "Hola";
    //   }, 1000);
    //   return (
    //     <React.Fragment key={key}>
    //       <svg
    //         class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //       >
    //         <circle
    //           class="opacity-25"
    //           cx="12"
    //           cy="12"
    //           r="10"
    //           stroke="currentColor"
    //           stroke-width="4"
    //         ></circle>
    //         <path
    //           class="opacity-75"
    //           fill="currentColor"
    //           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    //         ></path>
    //       </svg>
    //     </React.Fragment>
    //   );
    // }
    return (
      <animated.div
        key={key}
        class="fpage-image h-3/4 xl:w-3/4 w-3/4 z-0"
        style={{
          ...props,
          backgroundImage: `url(${item.url})`,
        }}
      />
    );
  });
};

const SocialButton = (props) => {
  return (
    <div
      className={`border border-gray-100 rounded-lg shadow social-button-${props.social}`}
      style={{ height: 60, width: 60 }}
    >
      <img
        src={props.img}
        alt="..."
        style={{ filter: "brightness(0) invert(1)", transform: "scale(0.5)" }}
      />
    </div>
  );
};

const FirstPage = () => {
  const [showLetters, setshowLetters] = React.useState("");
  const [actualIndex, setactualIndex] = React.useState(0);

  const wait = async (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const fillWord = async (word) => {
    for (let letter of word) {
      setshowLetters((state) => {
        return state + letter;
      });
      await wait(200);
    }
  };

  const deleteWord = async (word) => {
    for (let _ of word) {
      setshowLetters((state) => {
        return state.substring(0, state.length - 1);
      });
      await wait(200);
    }
  };

  const renderWords = async () => {
    const words = ["cámaras", "drones", "lentes", "flashes"];
    while (true) {
      for (let word of words) {
        await fillWord(word);
        await deleteWord(word);
      }
    }
  };

  React.useEffect(() => {
    console.log(actualIndex);
    renderWords();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="fpage-container" id="home">
      <video
        className="hidden lg:flex"
        play
        autoPlay
        muted
        loop
        id="myVideo"
        src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/videos%2FTV_Studio_Camera_Sweep_In.mp4?alt=media&token=dc56a9b6-529f-41b7-a4c5-4731bd1feb2a"
      ></video>

      <div className="grid grid-cols-2 gap-4 h-screen">
        <div className="fpage-content flex flex-wrap content-center justify-center col-span-2 md:col-span-1 p-8 ">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
            className="fpage-content-container"
          >
            <h1 className="fpage-title">Soluciones Quantum</h1>
            <p id="fpage-description">
              Servicio técnico especializado en
              <span className="fpage-writing">
                {" "}
                {showLetters}
                <span>&#160;</span>
              </span>
            </p>
            {/* <br/>
            <p id="fpage-social-buttons">
              Síguenos en nuestras redes sociales!
            </p> */}
            <div className="fpage-social-buttons flex content-start gap-6 mt-9">
              <SocialButton
                social={"facebook"}
                img={
                  "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Ffacebook-app-symbol.svg?alt=media&token=1c01ce6d-20b6-4c9c-8448-b7c03b7433b1"
                }
              />
              <SocialButton
                social={"instagram"}
                img={
                  "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Finstagram.svg?alt=media&token=dbcd5810-5ee9-4e04-8339-c3f6c4bd0afb"
                }
              />
              <SocialButton
                social={"youtube"}
                img={
                  "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2Fyoutube.svg?alt=media&token=456619db-09a2-4ca2-88af-2b4911a7b579"
                }
              />
            </div>
          </div>
        </div>
        <div className="h-screen hidden lg:flex flex-wrap content-center justify-center">
          <ImageCard />
        </div>
      </div>
    </section>
  );
};

export default FirstPage;
