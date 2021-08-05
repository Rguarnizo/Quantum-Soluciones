import React, { useEffect } from "react";
import styled from "styled-components";
import "../Styles/Carrousel.scss";
import * as Icon from "react-feather";
import gsap from "gsap";


// Styled components
const QuantumText = styled.span`
  font-family: "Montserrat", sans-serif;
`;

const QuantumAltText = styled(QuantumText)`
  font-weight: bold;
`;
const Cursor = styled.span`
  border-right: 3px solid black;
  animation-name: parpadeo;
  animation-duration: 0.8s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  -webkit-animation-name: parpadeo;
  -webkit-animation-duration: 0.8s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;

  @-moz-keyframes parpadeo {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes parpadeo {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes parpadeo {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

//Carrousel elements

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  max-height: 600px;
  height: 100%;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const Cards = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
`;

const Card = styled.label`
  position: absolute;
  width: 60%;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform 0.4s ease;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const Home = () => {
  const carrouselRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const QuantumSubtitleClasses = `text-xl xl:text-2xl font-semibold uppercase dark:text-blue-100 tracking-wider antialiased mb-6 xl:mb-12 mt-16 xl:mt-0 text`;
  const QuantumTitleClasses = `font-bold text-5xl xl:text-7xl tracking-tighter mb-6 dark:text-blue-100 max-w-xl text`;
  const QuantumDescriptionClasses = `font-normal text-lg xl:text-2xl tracking-tighter dark:text-blue-100 text`;

  useEffect(() => {
    gsap.fromTo(".text", { alpha: 0 }, { alpha: 1, stagger: 0.4, delay: 2 });
    gsap.fromTo(".icon", { alpha: 0 }, { alpha: 1, stagger: 0.2, delay: 2 });
  }, []);

  const [showLetters, setshowLetters] = React.useState("");

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
    // eslint-disable-next-line no-unused-vars
    for (let _ of word) {
      setshowLetters((state) => {
        return state.substring(0, state.length - 1);
      });
      await wait(170);
    }
  };

  const renderWords = async () => {
    const words = ["cámaras.", "drones.", "lentes.", "flashes."];
    while (true) {
      for (let word of words) {
        await fillWord(word);
        await deleteWord(word);
      }
    }
  };

  const renderCarrousel = async () => {
    // carrouselRefs.current[0].current.checked = true;
    while (true) {
      for (let item of carrouselRefs.current) {
        item.current.checked = true;
        await wait(15000);
      }
    }
  };

  React.useEffect(() => {
    renderWords();
    renderCarrousel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="Home"
      className="grid lg:grid-cols-2 dark:bg-gray-800 h-screen"
    >
      <div className="flex items-center px-5 md:px-16">
        <div className="flex flex-col">
          <QuantumText className={QuantumSubtitleClasses}>
            soluciones quantum
          </QuantumText>
          <QuantumText className={QuantumTitleClasses}>
            Servicio técnico especializado{" "}
          </QuantumText>
          <QuantumText className={QuantumDescriptionClasses}>
            en reparación de{" "}
            <QuantumAltText>
              {showLetters}
              <Cursor>&#160; </Cursor>
            </QuantumAltText>
          </QuantumText>
          <div className="flex mt-7 gap-5 ">
            <a
              href="https://www.facebook.com/SolucionesQuantum01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.Facebook
                className="icon cursor-pointer"
                color="#93C5FD"
                size={30}
              />
            </a>
            <a
              href="https://www.instagram.com/quantum_serviciotecnicocamaras/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.Instagram
                className="icon cursor-pointer"
                color="#93C5FD"
                size={30}
              />
            </a>
            <Icon.Twitter
              className="icon cursor-pointer"
              color="#93C5FD"
              size={30}
            />
            <a
              href="https://www.youtube.com/channel/UCSk3_g71oDvJKY2c1d6wN4w"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Icon.Youtube
                className="icon cursor-pointer"
                color="#93C5FD"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center px-5 md:px-16 lg:py-36 carrousel">
        <Container>
          <input
            type="radio"
            name="slider"
            id="item-1"
            defaultChecked
            style={{ display: "none" }}
            ref={carrouselRefs.current[0]}
          />
          <input
            type="radio"
            name="slider"
            id="item-2"
            style={{ display: "none" }}
            ref={carrouselRefs.current[1]}
          />
          <input
            type="radio"
            name="slider"
            id="item-3"
            style={{ display: "none" }}
            ref={carrouselRefs.current[2]}
          />

          <Cards className="cards">
            <Card htmlFor="item-1" id="song-1">
              <Image
                src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
                alt="img"
              ></Image>
            </Card>
            <Card htmlFor="item-2" id="song-2">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDSC05649.jpg?alt=media&token=3759de40-714c-4196-86de-49842da6d397"
                alt="img"
              ></Image>
            </Card>
            <Card htmlFor="item-3" id="song-3">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/quantum-68439.appspot.com/o/resources%2FDSC05612.jpg?alt=media&token=60965d35-cec3-4813-8d9e-7b7f8d1f0d8e"
                alt="img"
              ></Image>
            </Card>
          </Cards>
        </Container>
      </div>
    </section>
  );
};

export default Home;
