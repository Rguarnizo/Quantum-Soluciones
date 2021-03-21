import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {Canvas} from "react-three-fiber";
import Box from "./components/Box";
import Controlls from "./components/Controls";

const divRoot = document.querySelector("#root")


ReactDOM.render(
<Canvas>
    <ambientLight/>
    <Box position={[5,0,0]}/>
    <Box position={[-5,0,0]}/>
    <Controlls/>
    <fog attach="fog" args={["white",4.5,6]}/>
    <spotLight penumbra={1}/>
    <mesh rotation={[-Math.PI/2,0,0]}>
        <planeBufferGeometry attach="geometry" args={[200,200]}/>
        <meshPhysicalMaterial attach="material" color="black"/>
    </mesh>
    <Box/>
</Canvas>,
divRoot
)