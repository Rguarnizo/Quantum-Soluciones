import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/core/useGLTF'

var file;


export default function Model(props) {
  file = props.path;

  const group = useRef();
  const { nodes, materials } = useGLTF(props.path);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 26.25, 0]} rotation={[0, 0, 0]}>
            <group position={[-41.17, -17.54, 0]}>
              <mesh material={materials.Material_476} geometry={nodes['top_ring_Material_#476_0'].geometry} />
            </group>
          </group>
          <group position={[0, -20.91, 0]} rotation={[0, 0, 0]}>
            <group position={[124.19, 29.63, 0]}>
              <mesh material={materials.Material_476} geometry={nodes['bottom_ring_Material_#476_0'].geometry} />
            </group>
          </group>
          <group position={[0, 28.5, 0]} rotation={[0, 0, 0]}>
            <group position={[37.22, 24.65, 0]}>
              <mesh material={materials.Material_343} geometry={nodes['Line002_Material_#343_0'].geometry} />
              <mesh material={materials.Material_345} geometry={nodes['Line002_Material_#345_0'].geometry} />
            </group>
          </group>
          <group position={[0, -0.13, 36.72]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[35.99, 70.41, 8.84]}>
              <mesh material={materials.canon_logo__0} geometry={nodes.canon_logo__0.geometry} />
            </group>
          </group>
          <group position={[0, -0.13, 36.58]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[35.99, 76.17, 8.84]}>
              <mesh material={materials.Material_286} geometry={nodes['Object012_Material_#286_0'].geometry} />
            </group>
          </group>
          <group position={[0, -3.39, 0]} rotation={[0, 0, 0]}>
            <group position={[35.99, 12.1, 0]}>
              <mesh material={materials.Material_475} geometry={nodes['Line007_Material_#475_0'].geometry} />
            </group>
          </group>
          <group position={[0, -0.13, 36.72]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[35.99, 74.43, 8.84]}>
              <mesh material={materials.Material_286} geometry={nodes['Object013_Material_#286_0'].geometry} />
            </group>
          </group>
          <group position={[39.8, -1.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-31.47, 0, 9.96]}>
              <mesh material={materials.Material_365} geometry={nodes['Object014_Material_#365_0'].geometry} />
              <mesh material={materials.Material_364} geometry={nodes['Object014_Material_#364_0'].geometry} />
            </group>
          </group>
          <group position={[-35.96, 2.53, 6.8]} rotation={[0, -0.04, 0]}>
            <group position={[78.54, 7.32, -7.19]}>
              <mesh material={materials.Material_392} geometry={nodes['Object020_Material_#392_0'].geometry} />
              <mesh material={materials.Material_394} geometry={nodes['Object020_Material_#394_0'].geometry} />
              <mesh material={materials.Material_391} geometry={nodes['Object020_Material_#391_0'].geometry} />
            </group>
          </group>
          <group position={[-30.54, -39.51, 15]} rotation={[1.67, 0.24, -2.14]} scale={[1, 1, 1]}>
            <mesh material={materials.Material_290} geometry={nodes['Sphere001_Material_#290_0'].geometry} />
          </group>
          <group position={[0, -48.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh material={materials.Material_63} geometry={nodes['Cylinder003_Material_#63_0'].geometry} />
          </group>
          <group position={[0, -1.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 46.55]} rotation={[0, 0, 0]}>
              <mesh material={materials.Material_473} geometry={nodes['Sphere002_Material_#473_0'].geometry} />
            </group>
            <group position={[0, 0, 39.07]} rotation={[0, 0, 0]}>
              <mesh material={materials.Material_473} geometry={nodes['Sphere003_Material_#473_0'].geometry} />
            </group>
            <group position={[0, 0, 0.7]} rotation={[0, 0, 0]} scale={[0.53, 0.57, 0.13]}>
              <mesh material={materials.Material_473} geometry={nodes['Sphere004_Material_#473_0'].geometry} />
            </group>
            <group position={[0, 0, -12.1]} rotation={[0, 0, 0]} scale={[0.53, 0.57, 0.31]}>
              <mesh material={materials.Material_473} geometry={nodes['Sphere005_Material_#473_0'].geometry} />
            </group>
            <group position={[0, 0, -43.74]} rotation={[0, 0, 0]} scale={[0.53, 0.57, 0.28]}>
              <mesh material={materials.Material_473} geometry={nodes['Sphere006_Material_#473_0'].geometry} />
            </group>
            <group position={[0, 0, -46.42]} rotation={[Math.PI, 0, 0]} scale={[0.53, 0.57, 0.23]}>
              <mesh material={materials.Material_473} geometry={nodes['Sphere007_Material_#473_0'].geometry} />
            </group>
          </group>
          <group position={[40.93, 1.72, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-34.02, 0, 7.21]}>
              <mesh material={materials.Material_282} geometry={nodes['Object025_Material_#282_0'].geometry} />
            </group>
          </group>
          <group position={[41.37, 1.72, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.89, 0.89, 0.89]}>
            <group position={[-34.02, 0, 7.21]}>
              <mesh material={materials.Material_282} geometry={nodes['Object026_Material_#282_0'].geometry} />
            </group>
          </group>
          <group position={[-37.97, 2.72, 15.56]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 0]} rotation={[-Math.PI, 0, 1.13]} scale={[1, 1, 1]}>
              <group position={[0, 0.94, -7.52]}>
                <mesh material={materials.Material_286} geometry={nodes['Capsule001_Material_#286_0'].geometry} />
              </group>
            </group>
            <group position={[-0.29, -0.14, 3]} rotation={[-Math.PI, 0, 1.13]} scale={[0.95, 0.95, 0.95]}>
              <group position={[2.55, -4.53, -4.52]}>
                <mesh material={materials.Material_348} geometry={nodes['Object027_Material_#348_0'].geometry} />
                <mesh material={materials.Material_388} geometry={nodes['Object027_Material_#388_0'].geometry} />
              </group>
            </group>
          </group>
          <group position={[-42.9, 2.82, 0.03]} rotation={[-Math.PI / 2, 0, -0.44]} scale={[0.9, 0.9, 0.9]}>
            <group position={[0, 0, 0]} rotation={[-Math.PI, 0, 1.13]} scale={[1, 1, 1]}>
              <group position={[0, 0.94, -7.52]}>
                <mesh material={materials.Material_286} geometry={nodes['Capsule002_Material_#286_0'].geometry} />
              </group>
            </group>
            <group position={[-0.29, -0.14, 3]} rotation={[-Math.PI, 0, 1.13]} scale={[0.95, 0.95, 0.95]}>
              <group position={[2.55, -4.53, -4.52]}>
                <mesh material={materials.Material_348} geometry={nodes['Object028_Material_#348_0'].geometry} />
                <mesh material={materials.Material_388} geometry={nodes['Object028_Material_#388_0'].geometry} />
              </group>
            </group>
          </group>
          <group position={[0, -3.39, 0]} rotation={[0, 0, 0]}>
            <group position={[35.99, 12.1, 0]}>
              <mesh material={materials.Material_308} geometry={nodes['Object029_Material_#308_0'].geometry} />
            </group>
          </group>
          <group position={[0, 58.37, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh material={materials.Material_474} geometry={nodes['Circle001_Material_#474_0'].geometry} />
          </group>
          <group position={[0, -0.8, 37.45]} rotation={[0, 0, 0]}>
            <group position={[35.99, 9.51, -37.52]}>
              <mesh material={materials.Material_478} geometry={nodes['logo_14_Material_#478_0'].geometry} />
            </group>
          </group>
          <group position={[0, -49.86, 0]} rotation={[0, 0, 0]}>
            <group position={[35.99, 72.18, 0]}>
              <mesh material={materials.Material_341} geometry={nodes['end_cap001_Material_#341_0'].geometry} />
            </group>
          </group>
          <group position={[0, -0.13, 36.76]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[35.99, 70.41, 8.84]}>
              <mesh material={materials.Material_428} geometry={nodes['logo_1_Material_#428_0'].geometry} />
            </group>
          </group>
          <group position={[0, -0.13, 36.76]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[35.99, 70.41, 8.84]}>
              <mesh material={materials.Material_425} geometry={nodes['logo_2_Material_#425_0'].geometry} />
            </group>
          </group>
          <group position={[0, -0.13, 36.78]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[35.99, 70.41, 8.84]}>
              <mesh material={materials.Material_340} geometry={nodes['logo_3_Material_#340_0'].geometry} />
            </group>
          </group>
          <group position={[0, -3.39, -0.04]} rotation={[0, 0, 0]}>
            <group position={[35.99, 12.1, 0]}>
              <mesh material={materials.Material_351} geometry={nodes['logo_4_Material_#351_0'].geometry} />
            </group>
          </group>
          <group position={[0, -20.91, 0.06]} rotation={[0, 0, 0]}>
            <group position={[124.19, 29.63, 0]}>
              <mesh material={materials.Material_310} geometry={nodes['logo_5_Material_#310_0'].geometry} />
            </group>
          </group>
          <group position={[0, -3.39, 0.11]} rotation={[0, 0, 0]}>
            <group position={[35.99, 12.1, 0]}>
              <mesh material={materials.Material_326} geometry={nodes['logo_6_Material_#326_0'].geometry} />
            </group>
          </group>
          <group position={[0.04, -3.39, 0.04]} rotation={[0, 0, 0]}>
            <group position={[35.99, 12.1, 0]}>
              <mesh material={materials.Material_307} geometry={nodes['logo_7_Material_#307_0'].geometry} />
            </group>
          </group>
          <group position={[39.85, -1.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-31.47, 0, 9.96]}>
              <mesh material={materials.Material_479} geometry={nodes['logo_8_Material_#479_0'].geometry} />
            </group>
          </group>
          <group position={[-35.99, 2.53, 6.8]} rotation={[0, -0.04, 0]}>
            <group position={[78.54, 7.32, -7.19]}>
              <mesh material={materials.Material_395} geometry={nodes['logo_9_Material_#395_0'].geometry} />
            </group>
          </group>
          <group position={[-36, 2.53, 6.8]} rotation={[0, -0.04, 0]}>
            <group position={[78.54, 7.32, -7.19]}>
              <mesh material={materials.Material_390} geometry={nodes['logo_10_Material_#390_0'].geometry} />
            </group>
          </group>
          <group position={[0, 28.56, 0]} rotation={[0, 0, 0]}>
            <group position={[37.22, 24.65, 0]}>
              <mesh material={materials.Material_346} geometry={nodes['logo_11_Material_#346_0'].geometry} />
            </group>
          </group>
          <group position={[-38.26, 5.72, 15.7]} rotation={[Math.PI / 2, 0, 1.13]} scale={[0.95, 0.95, 0.95]}>
            <group position={[2.55, -4.53, -4.52]}>
              <mesh material={materials.Material_326} geometry={nodes['logo_12_Material_#326_0'].geometry} />
            </group>
          </group>
          <group position={[-43.19, 5.51, 0.02]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.85, 0.85, 0.85]}>
            <group position={[2.55, -4.53, -4.52]}>
              <mesh material={materials.Material_326} geometry={nodes['logo_13_Material_#326_0'].geometry} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(file);