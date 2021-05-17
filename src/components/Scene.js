import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EscenaProductos from "./EscenaProductos";
import Drone from "./Drone";
import DroneR from "./DroneR";



export default function Scene() {
  return (
    <Canvas className="EscenaProductos w-2/6">
        
            <EscenaProductos />
      
    <Suspense fallback={null}>
        <DroneR/>
    </Suspense>
      
    {/* <Suspense fallback={null}>
          <Tokyo/>
        </Suspense> */}
    </Canvas>
  );
}
