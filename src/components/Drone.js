/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import {useFrame} from '@react-three/fiber'
import { useGLTF,useAnimations,useThree } from '@react-three/drei'

export default function Drone(props) {
  const group = useRef()
  const { nodes, materials,animations} = useGLTF('Models/Drone/Drone.gltf')
  const mixer = new THREE.AnimationMixer();
  const clock = new THREE.Clock();

  useEffect(()=>{
    mixer.clipAction(animations[0],group.current).play();
  },[])

  useFrame(()=>{

    const delta = clock.getDelta();
    mixer.update(delta);
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={nodes.Cylinder001.material}
        geometry={nodes.Cylinder001.geometry}
        position={[-0.06, 0.25, -3.09]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={nodes.Cylinder.material}
        geometry={nodes.Cylinder.geometry}
        position={[0.06, 0.25, -3.09]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials.pale}
        geometry={nodes.Circle005.geometry}
        position={[3.05, 1, 2.19]}
        rotation={[0, -1.36, 0]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        material={materials.pale}
        geometry={nodes.Circle004.geometry}
        position={[-3.03, 1, 2.19]}
        rotation={[0, -0.39, 0]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        material={materials.pale}
        geometry={nodes.Circle003.geometry}
        position={[-3.03, 1, -2.75]}
        rotation={[0, -1.44, 0]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        material={materials.pale}
        geometry={nodes.Circle002.geometry}
        position={[3.06, 1, -2.73]}
        rotation={[0, 0.05, 0]}
        scale={[0.15, 0.15, 0.15]}
      />
      <mesh
        material={nodes.Cube001.material}
        geometry={nodes.Cube001.geometry}
        position={[1.14, 0.28, -0.83]}
        scale={[0.1, 0.05, 0.05]}
      />
      <mesh
        material={materials['Material.004']}
        geometry={nodes.Sphere001.geometry}
        position={[0, -0.12, 2.49]}
        scale={[0.17, 0.16, 0.13]}
      />
      <mesh
        material={materials['Material.005']}
        geometry={nodes.Sphere.geometry}
        position={[0.05, -0.19, -2.87]}
        scale={[0.1, 0.12, 0.1]}
      />
      <group position={[0.02, 0, -0.27]}>
        <mesh material={materials['Material.001']} geometry={nodes.Cube_1.geometry} />
        <mesh material={materials['Material.002']} geometry={nodes.Cube_2.geometry} />
      </group>
      <group position={[3.08, -0.05, -2.73]}>
        <mesh material={materials['Material.001']} geometry={nodes.Circle001_1.geometry} />
        <mesh material={materials['Material.003']} geometry={nodes.Circle001_2.geometry} />
      </group>
      <group name="Circle" position={[1.38, 0.61, -1.98]} scale={[0.42, 0.42, 0.42]}>
        <mesh material={materials['Material.001']} geometry={nodes.Circle_1.geometry} />
        <mesh material={materials['Material.003']} geometry={nodes.Circle_2.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('Models/Drone/Drone.gltf')
