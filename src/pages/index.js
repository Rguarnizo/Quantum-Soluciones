import React from "react"
import {Canvas} from "react-three-fiber";

export default function Home() {
  return <Canvas>
    <Box/>
  </Canvas>
}


const Box = () => {

  

  return <mesh>
    <boxGeometry args={[10,10,1]}/>
  </mesh>;
  

}
