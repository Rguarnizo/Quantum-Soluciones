/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: hartwelkisaka (https://sketchfab.com/hartwelkisaka)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/animated-drone-d47d61f8a78d4cce9f985ad7ade3e403
title: Animated Drone
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import { useAnimations } from '@react-three/drei'

export default function Drone(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('Models/Drone/scene.glb')
  //const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} scale={[10,10,10]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={[0.01, 0.01, 0.01]}>
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh
              material={materials.material_0}
              geometry={nodes.mesh_0.geometry}
              skeleton={nodes.mesh_0.skeleton}
            />
            <skinnedMesh
              material={materials.material_1}
              geometry={nodes.mesh_1.geometry}
              skeleton={nodes.mesh_1.skeleton}
            />
            <skinnedMesh
              material={materials.material_2}
              geometry={nodes.mesh_2.geometry}
              skeleton={nodes.mesh_2.skeleton}
            />
            <skinnedMesh
              material={materials.material_3}
              geometry={nodes.mesh_3.geometry}
              skeleton={nodes.mesh_3.skeleton}
            />
            <skinnedMesh
              material={materials.material_4}
              geometry={nodes.mesh_4.geometry}
              skeleton={nodes.mesh_4.skeleton}
            />
            <skinnedMesh
              material={materials.material_5}
              geometry={nodes.mesh_5.geometry}
              skeleton={nodes.mesh_5.skeleton}
            />
            <skinnedMesh
              material={materials.material_6}
              geometry={nodes.mesh_6.geometry}
              skeleton={nodes.mesh_6.skeleton}
            />
            <skinnedMesh
              material={materials.material_7}
              geometry={nodes.mesh_7.geometry}
              skeleton={nodes.mesh_7.skeleton}
            />
            <skinnedMesh
              material={materials.material_8}
              geometry={nodes.mesh_8.geometry}
              skeleton={nodes.mesh_8.skeleton}
            />
            <skinnedMesh
              material={materials.material_9}
              geometry={nodes.mesh_9.geometry}
              skeleton={nodes.mesh_9.skeleton}
            />
            <skinnedMesh
              material={materials.material_10}
              geometry={nodes.mesh_10.geometry}
              skeleton={nodes.mesh_10.skeleton}
            />
            <skinnedMesh
              material={materials.material_11}
              geometry={nodes.mesh_11.geometry}
              skeleton={nodes.mesh_11.skeleton}
            />
            <skinnedMesh
              material={materials.material_12}
              geometry={nodes.mesh_12.geometry}
              skeleton={nodes.mesh_12.skeleton}
            />
            <skinnedMesh
              material={materials.material_13}
              geometry={nodes.mesh_13.geometry}
              skeleton={nodes.mesh_13.skeleton}
            />
            <skinnedMesh
              material={materials.material_14}
              geometry={nodes.mesh_14.geometry}
              skeleton={nodes.mesh_14.skeleton}
            />
            <skinnedMesh
              material={materials.material_15}
              geometry={nodes.mesh_15.geometry}
              skeleton={nodes.mesh_15.skeleton}
            />
            <skinnedMesh
              material={materials.material_16}
              geometry={nodes.mesh_16.geometry}
              skeleton={nodes.mesh_16.skeleton}
            />
            <skinnedMesh
              material={materials.material_17}
              geometry={nodes.mesh_17.geometry}
              skeleton={nodes.mesh_17.skeleton}
            />
            <skinnedMesh
              material={materials.material_18}
              geometry={nodes.mesh_18.geometry}
              skeleton={nodes.mesh_18.skeleton}
            />
            <skinnedMesh
              material={materials.material_19}
              geometry={nodes.mesh_19.geometry}
              skeleton={nodes.mesh_19.skeleton}
            />
            <skinnedMesh
              material={materials.material_20}
              geometry={nodes.mesh_20.geometry}
              skeleton={nodes.mesh_20.skeleton}
            />
            <skinnedMesh
              material={materials.material_21}
              geometry={nodes.mesh_21.geometry}
              skeleton={nodes.mesh_21.skeleton}
            />
            <skinnedMesh
              material={materials.material_22}
              geometry={nodes.mesh_22.geometry}
              skeleton={nodes.mesh_22.skeleton}
            />
            <skinnedMesh
              material={materials.material_23}
              geometry={nodes.mesh_23.geometry}
              skeleton={nodes.mesh_23.skeleton}
            />
            <skinnedMesh
              material={materials.material_24}
              geometry={nodes.mesh_24.geometry}
              skeleton={nodes.mesh_24.skeleton}
            />
            <skinnedMesh
              material={materials.material_25}
              geometry={nodes.mesh_25.geometry}
              skeleton={nodes.mesh_25.skeleton}
            />
            <skinnedMesh
              material={materials.material_26}
              geometry={nodes.mesh_26.geometry}
              skeleton={nodes.mesh_26.skeleton}
            />
            <skinnedMesh
              material={materials.material_27}
              geometry={nodes.mesh_27.geometry}
              skeleton={nodes.mesh_27.skeleton}
            />
            <skinnedMesh
              material={materials.material_28}
              geometry={nodes.mesh_28.geometry}
              skeleton={nodes.mesh_28.skeleton}
            />
            <skinnedMesh
              material={materials.material_29}
              geometry={nodes.mesh_29.geometry}
              skeleton={nodes.mesh_29.skeleton}
            />
            <skinnedMesh
              material={materials.material_30}
              geometry={nodes.mesh_30.geometry}
              skeleton={nodes.mesh_30.skeleton}
            />
            <skinnedMesh
              material={materials.material_31}
              geometry={nodes.mesh_31.geometry}
              skeleton={nodes.mesh_31.skeleton}
            />
            <skinnedMesh
              material={materials.material_32}
              geometry={nodes.mesh_32.geometry}
              skeleton={nodes.mesh_32.skeleton}
            />
            <skinnedMesh
              material={materials.material_33}
              geometry={nodes.mesh_33.geometry}
              skeleton={nodes.mesh_33.skeleton}
            />
            <skinnedMesh
              material={materials.material_34}
              geometry={nodes.mesh_34.geometry}
              skeleton={nodes.mesh_34.skeleton}
            />
            <skinnedMesh
              material={materials.material_35}
              geometry={nodes.mesh_35.geometry}
              skeleton={nodes.mesh_35.skeleton}
            />
            <skinnedMesh
              material={materials.material_36}
              geometry={nodes.mesh_36.geometry}
              skeleton={nodes.mesh_36.skeleton}
            />
            <skinnedMesh
              material={materials.material_37}
              geometry={nodes.mesh_37.geometry}
              skeleton={nodes.mesh_37.skeleton}
            />
            <skinnedMesh
              material={materials.material_38}
              geometry={nodes.mesh_38.geometry}
              skeleton={nodes.mesh_38.skeleton}
            />
            <skinnedMesh
              material={materials.material_39}
              geometry={nodes.mesh_39.geometry}
              skeleton={nodes.mesh_39.skeleton}
            />
            <skinnedMesh
              material={materials.material_40}
              geometry={nodes.mesh_40.geometry}
              skeleton={nodes.mesh_40.skeleton}
            />
            <skinnedMesh
              material={materials.material_41}
              geometry={nodes.mesh_41.geometry}
              skeleton={nodes.mesh_41.skeleton}
            />
            <skinnedMesh
              material={materials.material_42}
              geometry={nodes.mesh_42.geometry}
              skeleton={nodes.mesh_42.skeleton}
            />
            <skinnedMesh
              material={materials.material_43}
              geometry={nodes.mesh_43.geometry}
              skeleton={nodes.mesh_43.skeleton}
            />
            <skinnedMesh
              material={materials.material_44}
              geometry={nodes.mesh_44.geometry}
              skeleton={nodes.mesh_44.skeleton}
            />
            <skinnedMesh
              material={materials.material_45}
              geometry={nodes.mesh_45.geometry}
              skeleton={nodes.mesh_45.skeleton}
            />
            <skinnedMesh
              material={materials.material_46}
              geometry={nodes.mesh_46.geometry}
              skeleton={nodes.mesh_46.skeleton}
            />
            <skinnedMesh
              material={materials.material_47}
              geometry={nodes.mesh_47.geometry}
              skeleton={nodes.mesh_47.skeleton}
            />
            <skinnedMesh
              material={materials.material_48}
              geometry={nodes.mesh_48.geometry}
              skeleton={nodes.mesh_48.skeleton}
            />
            <skinnedMesh
              material={materials.material_49}
              geometry={nodes.mesh_49.geometry}
              skeleton={nodes.mesh_49.skeleton}
            />
            <skinnedMesh
              material={materials.material_50}
              geometry={nodes.mesh_50.geometry}
              skeleton={nodes.mesh_50.skeleton}
            />
            <skinnedMesh
              material={materials.material_51}
              geometry={nodes.mesh_51.geometry}
              skeleton={nodes.mesh_51.skeleton}
            />
            <skinnedMesh
              material={materials.material_52}
              geometry={nodes.mesh_52.geometry}
              skeleton={nodes.mesh_52.skeleton}
            />
            <skinnedMesh
              material={materials.material_53}
              geometry={nodes.mesh_53.geometry}
              skeleton={nodes.mesh_53.skeleton}
            />
            <skinnedMesh
              material={materials.material_54}
              geometry={nodes.mesh_54.geometry}
              skeleton={nodes.mesh_54.skeleton}
            />
            <skinnedMesh
              material={materials.material_55}
              geometry={nodes.mesh_55.geometry}
              skeleton={nodes.mesh_55.skeleton}
            />
            <skinnedMesh
              material={materials.material_56}
              geometry={nodes.mesh_56.geometry}
              skeleton={nodes.mesh_56.skeleton}
            />
            <skinnedMesh
              material={materials.material_57}
              geometry={nodes.mesh_57.geometry}
              skeleton={nodes.mesh_57.skeleton}
            />
            <skinnedMesh
              material={materials.material_58}
              geometry={nodes.mesh_58.geometry}
              skeleton={nodes.mesh_58.skeleton}
            />
            <skinnedMesh
              material={materials.material_59}
              geometry={nodes.mesh_59.geometry}
              skeleton={nodes.mesh_59.skeleton}
            />
            <skinnedMesh
              material={materials.material_60}
              geometry={nodes.mesh_60.geometry}
              skeleton={nodes.mesh_60.skeleton}
            />
            <skinnedMesh
              material={materials.material_61}
              geometry={nodes.mesh_61.geometry}
              skeleton={nodes.mesh_61.skeleton}
            />
            <skinnedMesh
              material={materials.material_62}
              geometry={nodes.mesh_62.geometry}
              skeleton={nodes.mesh_62.skeleton}
            />
            <skinnedMesh
              material={materials.material_63}
              geometry={nodes.mesh_63.geometry}
              skeleton={nodes.mesh_63.skeleton}
            />
            <skinnedMesh
              material={materials.material_64}
              geometry={nodes.mesh_64.geometry}
              skeleton={nodes.mesh_64.skeleton}
            />
            <skinnedMesh
              material={materials.material_65}
              geometry={nodes.mesh_65.geometry}
              skeleton={nodes.mesh_65.skeleton}
            />
            <skinnedMesh
              material={materials.material_66}
              geometry={nodes.mesh_66.geometry}
              skeleton={nodes.mesh_66.skeleton}
            />
            <skinnedMesh
              material={materials.material_67}
              geometry={nodes.mesh_67.geometry}
              skeleton={nodes.mesh_67.skeleton}
            />
            <skinnedMesh
              material={materials.material_68}
              geometry={nodes.mesh_68.geometry}
              skeleton={nodes.mesh_68.skeleton}
            />
            <skinnedMesh
              material={materials.material_69}
              geometry={nodes.mesh_69.geometry}
              skeleton={nodes.mesh_69.skeleton}
            />
            <skinnedMesh
              material={materials.material_70}
              geometry={nodes.mesh_70.geometry}
              skeleton={nodes.mesh_70.skeleton}
            />
            <skinnedMesh
              material={materials.material_71}
              geometry={nodes.mesh_71.geometry}
              skeleton={nodes.mesh_71.skeleton}
            />
            <skinnedMesh
              material={materials.material_72}
              geometry={nodes.mesh_72.geometry}
              skeleton={nodes.mesh_72.skeleton}
            />
            <skinnedMesh
              material={materials.material_73}
              geometry={nodes.mesh_73.geometry}
              skeleton={nodes.mesh_73.skeleton}
            />
            <skinnedMesh
              material={materials.material_74}
              geometry={nodes.mesh_74.geometry}
              skeleton={nodes.mesh_74.skeleton}
            />
            <skinnedMesh
              material={materials.material_75}
              geometry={nodes.mesh_75.geometry}
              skeleton={nodes.mesh_75.skeleton}
            />
            <skinnedMesh
              material={materials.material_76}
              geometry={nodes.mesh_76.geometry}
              skeleton={nodes.mesh_76.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('Models/Drone/scene.glb')
