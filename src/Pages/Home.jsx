import React from "react";
import styled from "styled-components";
import "../Styles/Carrousel.scss";
import * as Icon from "react-feather";

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
  const QuantumSubtitleClasses = `text-xl xl:text-2xl font-semibold uppercase dark:text-blue-100 tracking-wider antialiased mb-6 xl:mb-12 mt-16 xl:mt-0`;
  const QuantumTitleClasses = `font-bold text-5xl xl:text-7xl tracking-tighter mb-6 dark:text-blue-100 max-w-xl`;
  const QuantumDescriptionClasses = `font-normal text-lg xl:text-2xl tracking-tighter dark:text-blue-100 `;

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

  React.useEffect(() => {
    renderWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="grid xl:grid-cols-2 dark:bg-gray-800 h-screen">
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
          <div className="flex mt-7 ">
            <Icon.Facebook className="mr-5" color="#93C5FD" size={30} />
            <Icon.Instagram className="mr-5" color="#93C5FD" size={30} />
            <Icon.Twitter className="mr-5" color="#93C5FD" size={30} />
            <Icon.Youtube className="mr-5" color="#93C5FD" size={30} />
          </div>
        </div>
      </div>
      <div className="flex items-center px-5 md:px-16 pb-10 xl:pb-0">
        <Container>
          <input
            type="radio"
            name="slider"
            id="item-1"
            defaultChecked
            style={{ display: "none" }}
          />
          <input
            type="radio"
            name="slider"
            id="item-2"
            style={{ display: "none" }}
          />
          <input
            type="radio"
            name="slider"
            id="item-3"
            style={{ display: "none" }}
          />

          <Cards className="cards">
            <Card htmlFor="item-1" id="song-1">
              <Image
                src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
                alt="img"
              ></Image>
            </Card>
            <Card htmlFor="item-2" id="song-2">
              <Image
                src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
                alt="img"
              ></Image>
            </Card>
            <Card htmlFor="item-3" id="song-3">
              <Image
                src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
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
