import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {Canvas} from "react-three-fiber";
import Box from "./components/Box";

const divRoot = document.querySelector("#root")


ReactDOM.render(
<Canvas>
    <Box position={[5,0,0]}/>
    <Box position={[-5,0,0]}/>
    <Box/>
</Canvas>,
divRoot
)