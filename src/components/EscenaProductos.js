import gsap from "gsap/gsap-core";
import React, { useEffect, useRef, Suspense} from "react";
import { Canvas, useThree, useFrame } from "react-three-fiber";
import Camera from "./Camera";

let EscenaProductos = () => {


  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Camera/>
      </Suspense>
    </>
  );
};

export default EscenaProductos;
