import React,{useRef,useEffect} from 'react';
import {useFrame} from 'react-three-fiber';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useThree} from 'react-three-fiber';



let Scene = () => {

    const cube = useRef();
    let cameraRef = useThree('camera').camera;
    
    
    useFrame(() => {
        cube.current.rotation.x += 0.01;
        cube.current.rotation.y += 0.01;
    });


     return <>
            
            <mesh ref={cube}>
                <boxBufferGeometry args={[1,1,1]}/>
                <meshBasicMaterial color={"red"} />
            </mesh>
        
    </>
};


export default Scene;
