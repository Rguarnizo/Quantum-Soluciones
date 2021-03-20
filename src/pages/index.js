import React from "react"
import "./style.css"
import { Canvas } from "react-three-fiber"

export default function Home() {
  return (
    <Canvas>
      <Box />
    </Canvas>
  )
}

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshBasicMaterial color={"red"} attach="materials"/>
    </mesh>
  )
}
