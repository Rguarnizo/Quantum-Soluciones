import React from 'react'
import {Canvas,useThree,useFrame} from 'react-three-fiber';

let Box = () => {
    return (
        <mesh
          scale={1}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'hotpink'} />
        </mesh>
      )
}

let EscenaProductos = () => {

return <>
        <Box/>
        <Box/>
</>

}





export default EscenaProductos;