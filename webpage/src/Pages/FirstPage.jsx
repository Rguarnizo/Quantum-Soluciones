import React from "react";
import "../Styles/firstPage.scss";

/*eslint no-unused-vars: "off"*/

const FirstPage = () => {
  // const videosSource = [
  //   "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/videos%2F200415_01_Camera_Equipment_009.mp4?alt=media&token=3320b7dc-0dda-4e3b-9726-b291b22f9f38",
  //   "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/videos%2FTV_Studio_Camera_Sweep_In.mp4?alt=media&token=dc56a9b6-529f-41b7-a4c5-4731bd1feb2a",
  //   "https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/videos%2F200415_02_Batch_04_013.mp4?alt=media&token=bb567395-d0c2-4f20-9ed2-5aa1eab7d63e",
  // ];

  const [showLetters, setshowLetters] = React.useState("");
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
    renderWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="col-12 col-lg-6 col-xl-6 fpage-content mb-5">
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
        {/* <div className="row d-flex justify-content-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FSaly-22.svg?alt=media&token=de0782d3-8808-4162-b46e-e56bb0f40edc"
          alt="test"
          width= "400"
          height = "400"
        />
      </div> */}
      </div>

      {/* {showVideo ? (
        <div className="col-12 col-lg-6 col-xl-6 fpage-video ">
          <video
            src={actualVideo}
            autoPlay
            muted
            onEnded={() => {
              setactualVideo(
                videosSource[(videoCounter + 1) % videosSource.length]
              );
              setvideoCounter(videoCounter + 1);
              setshowVideo(false);
            }}
          ></video>
        </div>
      ) : null} */}
    </>
  );
};

export default FirstPage;
