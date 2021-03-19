import React, { Suspense } from "react";
import "../Styles/firstPage.scss";
import { useTransition, animated, config } from "react-spring";

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
  React.useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 4), 10000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="fpage-image h-3/4 xl:w-3/4 w-3/4 z-0"
      style={{
        ...props,
        backgroundImage: `url(${item.url})`,
      }}
    />
  ));

  // const [index, set] = React.useState(0);
  // const transitions = useTransition(photosSource[index], (item) => item.id, {
  //   config: config.molasses,
  // });
  // React.useEffect(
  //   () => void setInterval(() => set((state) => (state + 1) % 2), 10000),
  //   []
  // );
  // return transitions.map(({ item, props, key }) => (
  //   <animated.div
  //     key={key}
  //     class="fpage-image h-3/4 xl:w-3/4 w-3/4 z-0"
  //     style={{
  //       ...props,
  //       backgroundImage: `url(${item.url})`,
  //     }}
  //   />
  // ));

  // return (

  // );
};

const FirstPage = () => {
  const [showLetters, setshowLetters] = React.useState("");
  const [actualIndex, setactualIndex] = React.useState(0);

  // const [actualVideo, setactualVideo] = React.useState(videosSource[1]);
  // const [videoCounter, setvideoCounter] = React.useState(1);
  // const [showVideo, setshowVideo] = React.useState(true);

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
    <>
      <div className="grid grid-cols-2 gap-4 h-screen">
        <div className="fpage-content flex flex-wrap content-center justify-center col-span-2 md:col-span-1 p-8 ">
          <div className="fpage-content-container">
            <h1 className="fpage-title">Soluciones Quantum</h1>
            <p id="fpage-description">
              Servicio técnico especializado en
              <span className="fpage-writing">
                {" "}
                {showLetters}
                <span>&#160;</span>
              </span>
            </p>
          </div>
        </div>
        <div className="h-screen hidden lg:flex flex-wrap content-center justify-center">
          <ImageCard />
          {/* <div className="img-card-1 z-10">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FSaly-22.svg?alt=media&token=de0782d3-8808-4162-b46e-e56bb0f40edc"
              alt="test"
              width="130"
              height="130"
            />
          </div> */}
        </div>
      </div>
      {/* <div className="col-12 col-lg-6 col-xl-6 fpage-content">
        <div className="row">
          <h1 className="fpage-title" data-glitch="Soluciones Quantum">
            Soluciones Quantum
          </h1>
          <p id="fpage-description">
            Servicio técnico especializado en
            <span className="fpage-writing">
              {" "}
              {showLetters}
              <span>&#160;</span>
            </span>
          </p>
        </div>
      </div>
      <div className="d-none col-md-6 col-lg-6 fpage-image p-5 d-flex justify-content-center ">
        <div className="img-container">
          <div className="img-card-1">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FSaly-22.svg?alt=media&token=de0782d3-8808-4162-b46e-e56bb0f40edc"
              alt="test"
              width="130"
              height="130"
            />
          </div>
          <div className="img-card-2">
            <strong>This is a test</strong>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default FirstPage;
