import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {Canvas} from "react-three-fiber";
import Box from "./components/Box";

const divRoot = document.querySelector("#root")


ReactDOM.render(
<Canvas>
    <ambientLight/>
    <Box position={[5,0,0]}/>
    <Box position={[-5,0,0]}/>
    <fog attach="fog" args={["white",4.5,6]}/>
    <Box/>
</Canvas>,
divRoot
)