import React, { useEffect,  useState } from "react";
import { Canvas } from "@react-three/fiber";
// import DronDJI from "./DronDJI";
import {useStorage} from "reactfire";


export default function Scene() {
  const storage = useStorage();
  // eslint-disable-next-line no-unused-vars
  const [url,setUrl] = useState();


  useEffect(()=>{
    storage.ref("/DJIDrone.glb").getDownloadURL().then((downloadURL) => {
      
      setUrl(downloadURL);

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        // var blob = xhr.response;
        // console.log("blob:",blob);
      };
      xhr.open('GET',downloadURL);
      xhr.send();
    });
  })
  
  
  return (<>  
    <Canvas id="canvas" className="EscenaProductos " color={0x000000} camera={{position:[0,0,3]}}>
      <spotLight position={[5, 5, 0]} intensity={5} castShadow />
      <spotLight position={[-5, 5, 0]} intensity={5} castShadow />
      <spotLight position={[-5, -5, 0]} intensity={5} castShadow />
      <spotLight position={[5, -5, 0]} intensity={5} castShadow />
      <hemisphereLight args={[0xffeeb1, 0x080820, 4]} position={[5, 5, 0]} />
      {/* <Suspense fallback={null}>
        <DronDJI url={url}/>
      </Suspense> */}
    </Canvas>
    </>
  );
}
