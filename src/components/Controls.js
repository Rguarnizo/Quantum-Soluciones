import React,{useRef} from "react";
import {useFrame,extend,useThree} from "react-three-fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


extend({OrbitControls});


const Controlls = ( ) => {
    const {camera,gl} = useThree();
    const ctrlRef = useRef();

    useFrame(()=>{ctrlRef.current.update()})


    return(
        <orbitControls
        args = {[camera,gl.domElement]}
        ref={ctrlRef} />
    );
}



export default Controlls;