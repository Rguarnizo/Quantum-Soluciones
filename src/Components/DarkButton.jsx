import React from "react";
import "../Styles/darkButton.scss";

const DarkButton = (props) => {
  const [image, setimage] = React.useState(
    "http://upir.ir/images/3h5bm7om60h8p238b15.svg"
  );
  const [shadow, setshadow] = React.useState("shadow-light");
  return (
    <div
      className={`theme-container cursor-pointer ${shadow}`}
      onClick={() => {
        if (props.setDark === "") {
          props.setsetDark("dark");
          setimage("http://upir.ir/images/naf6siuc4jn3eqjb9380.svg");
          setshadow("shadow-dark");
        } else {
          props.setsetDark("");
          setimage("http://upir.ir/images/3h5bm7om60h8p238b15.svg");
          setshadow("shadow-light");
        }
      }}
    >
      <img id="theme-icon" src={image} alt="" className="w-6 h-6" />
    </div>
  );
};

export default DarkButton;
