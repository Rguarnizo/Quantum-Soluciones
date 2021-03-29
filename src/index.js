import React,{Suspense} from "react";
import ReactDOM from "react-dom";
import './index.css';
import {Canvas} from "react-three-fiber";
import Model from "./components/Model";
import {Html} from '@react-three/drei/web/Html';
import NavBar from "./components/NavBar";
import reactDom from "react-dom";


const divRoot = document.querySelector("#root")


ReactDOM.render(
<>
<Canvas onCreated={({gl})=> gl.shadowMap.enabled = true} camera={{position:[0,0,200]}}>
    <ambientLight/> 
    <Suspense fallback={null}>
        <Model path={'/camera-lens/scene.glb'}/>
    </Suspense>    
</Canvas>
<div style={{height: `${4*100}vh`}}>

</div>
</>
,
divRoot
)

window.onscroll((e) =>{
    console.log(e);
});

