import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {Canvas} from "react-three-fiber";
import Box from "./components/Box";
import Controlls from "./components/Controls";

const divRoot = document.querySelector("#root")


ReactDOM.render(
<Canvas onCreated={({gl})=> gl.shadowMap.enabled = true}>
    <ambientLight/>
    <Box position={[5,0,0]}/>
    <Box position={[-5,0,0]}/>
    <Controlls/>
    
    <spotLight penumbra={1} castShadow position={[0,10,15]} intensity={1}/>
    <mesh rotation={[-Math.PI/2,0,0]} position={[0,-2,0]} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[200,200]} />
        <meshPhysicalMaterial attach="material" color="white"/>
    </mesh>
    <Box/>
</Canvas>,
divRoot
)