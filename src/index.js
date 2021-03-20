import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Canvas} from "react-three-fiber";
import './index.css';

import reportWebVitals from './reportWebVitals';


const Box = () => {

  const [hovered,setHovered] = useState(false);
  const [active,setActive]   = useState(false);

  return <mesh 
  onPointerOver={()=> setHovered(true)}
  onPointerOut={()=> setHovered(false)}
  onClick= {()=> setActive(!active)}
  scale={active? [1.5,1.5,1.5] : [1,1,1]}
  >
  <boxBufferGeometry attach="geometry" args={[10,10,5]}/>
  <meshBasicMaterial attach="material" color= {hovered? "red":"hotpink"}/>
        </mesh>;
}

ReactDOM.render(
  <Canvas>    
    <Box/>
    <center/>
  </Canvas>
 ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
