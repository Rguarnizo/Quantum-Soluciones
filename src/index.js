import React,{Suspense} from "react";
import ReactDOM from "react-dom";
import './index.css';
import {Canvas} from "react-three-fiber";
import Box from "./components/Box";
import Controlls from "./components/Controls";
import Model from "./components/Model";

const divRoot = document.querySelector("#root")


ReactDOM.render(
<Canvas onCreated={({gl})=> gl.shadowMap.enabled = true}>
    <ambientLight/> 
    <Controlls />
    <Suspense fallback={null}>
        <Model path={'/camera-lens/scene.glb'} />
    </Suspense>
</Canvas>,
divRoot
)