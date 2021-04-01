import React,{useRef,useEffect} from 'react'
import {gsap} from 'gsap';


let BrandName = () => {

    let brandsRef = useRef([]);
    brandsRef.current = [];

    let onMouseOver = (el) => {
        gsap.to(el.target,{duration:1,scale:1.3,ease:"power4"},);
    }

    let onMouseOut = (el) => {
        gsap.to(el.target,{duration:1,scale:1,ease:"power4"},);
    }


    
    

    return <>
      <div className="brands">
        <a onMouseOver={onMouseOver } onMouseOut={onMouseOut} className="brand m-3 p-0 block w-28" href=""><img className="m-0 p-0"  src="Logos/Canon.png" ></img></a>
        <a onMouseOver={onMouseOver } onMouseOut={onMouseOut} className="brand m-3 p-0 block w-28" href=""><img className="m-0 p-0"  src="Logos/Nikon.jpeg" ></img></a>
        <a onMouseOver={onMouseOver } onMouseOut={onMouseOut} className="brand m-3 p-0 block w-28" href=""><img className="m-0 p-0"  src="Logos/Sony.png" ></img></a>
        <a onMouseOver={onMouseOver } onMouseOut={onMouseOut} className="brand m-3 p-0 block w-28" href=""><img className="m-0 p-0"  src="Logos/GoPro.png" ></img></a>
      </div> 
    </>
}


export default BrandName;