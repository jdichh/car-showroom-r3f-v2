/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Ferrari_F12berlinetta_2014Base_Geo_lodA: THREE.Mesh
    Ferrari_F12berlinetta_2014Engine_Geo_lodA: THREE.Mesh
    Ferrari_F12berlinetta_2014Grille1_Geo_lodA: THREE.Mesh
    Ferrari_F12berlinetta_2014Grille2_Geo_lodA: THREE.Mesh
    Ferrari_F12berlinetta_2014Kit0_Badge_Geo_lodA: THREE.Mesh
    Ferrari_F12berlinetta_2014Kit0_Carbon2_Geo_lodA: THREE.Mesh
    Ferrari_F12berlinetta_2014Kit0_Coloured_Geo_lodA: THREE.Mesh
    Ferrari_F12berlinetta_2014Kit0_Interior_Geo_lodA: THREE.Mesh
    Ferrari_F12berlinetta_2014Kit0_Paint_Geo_lodA: THREE.Mesh
    Ferrari_F12berlinetta_2014Light_Geo_lodA: THREE.Mesh
    Ferrari_F12berlinetta_2014ManufacturerPlate_Geo_lodA: THREE.Mesh
    Ferrari_F12berlinetta_2014SeatBelt_Geo_lodA: THREE.Mesh
    Ferrari_F12berlinetta_2014Window_Geo_lodA: THREE.Mesh
    Ferrari_F12berlinetta_2014RearEmissions: THREE.Mesh
    Ferrari_F8Tributo_2020_Wheel_2ACombined3DWheel_3DWheel_front_L_: THREE.Mesh
    Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta: THREE.Mesh
    Ferrari_F8Tributo_2020_Wheel_2ACombined3DWheel_3DWheel_fron: THREE.Mesh
    Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta001: THREE.Mesh
    Ferrari_F8Tributo_2020_Wheel_2ACombined3DWheel_3DWheel_fron001: THREE.Mesh
    Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta002: THREE.Mesh
    Ferrari_F8Tributo_2020_Wheel_2ACombined3DWheel_3DWheel_fron002: THREE.Mesh
    Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta003: THREE.Mesh
  }
  materials: {
    Paint2: THREE.MeshStandardMaterial
    Engine: THREE.MeshStandardMaterial
    Grille1: THREE.MeshStandardMaterial
    Grille2: THREE.MeshStandardMaterial
    Badge: THREE.MeshStandardMaterial
    Interior: THREE.MeshStandardMaterial
    BodyPaint: THREE.MeshStandardMaterial
    Lights: THREE.MeshStandardMaterial
    Plate: THREE.MeshStandardMaterial
    Seatbelt: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
    RearEmission: THREE.MeshStandardMaterial
    Wheel: THREE.MeshPhysicalMaterial
    ['Caliper.001']: THREE.MeshStandardMaterial
    ['Wheel.002']: THREE.MeshPhysicalMaterial
    ['Caliper.003']: THREE.MeshStandardMaterial
    ['Wheel.004']: THREE.MeshPhysicalMaterial
    ['Caliper.004']: THREE.MeshStandardMaterial
    ['Wheel.005']: THREE.MeshPhysicalMaterial
    ['Caliper.005']: THREE.MeshStandardMaterial
  }
}

export function F12(props: any) {
  const { nodes, materials } = useGLTF('model/f12.glb') as GLTFResult

  useEffect(() => {
    // car paint
    Object.entries(materials).map((material) => {
      if (material[0] == "BodyPaint") {
        material[1].color = new THREE.Color(props.color.hexCode);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props]);


  return (
    <group {...props} dispose={null} scale={4} position={[0, -1.26, 0]} rotation={[0,-1,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Base_Geo_lodA.geometry}
        material={materials.Paint2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Engine_Geo_lodA.geometry}
        material={materials.Engine}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Grille1_Geo_lodA.geometry}
        material={materials.Grille1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Grille2_Geo_lodA.geometry}
        material={materials.Grille2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Kit0_Badge_Geo_lodA.geometry}
        material={materials.Badge}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Kit0_Carbon2_Geo_lodA.geometry}
        material={materials.Paint2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Kit0_Coloured_Geo_lodA.geometry}
        material={materials.Paint2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Kit0_Interior_Geo_lodA.geometry}
        material={materials.Interior}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Kit0_Paint_Geo_lodA.geometry}
        material={materials.BodyPaint}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Light_Geo_lodA.geometry}
        material={materials.Lights}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014ManufacturerPlate_Geo_lodA.geometry}
        material={materials.Plate}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014SeatBelt_Geo_lodA.geometry}
        material={materials.Seatbelt}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Window_Geo_lodA.geometry}
        material={materials.Glass}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014RearEmissions.geometry}
        material={materials.RearEmission}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F8Tributo_2020_Wheel_2ACombined3DWheel_3DWheel_front_L_.geometry}
        material={materials.Wheel}
        position={[0.795, 0.24, 1.357]}
        rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta.geometry}
          material={materials['Caliper.001']}
          position={[-0.021, -0.181, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F8Tributo_2020_Wheel_2ACombined3DWheel_3DWheel_fron.geometry}
        material={materials['Wheel.002']}
        position={[-0.795, 0.24, -1.362]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta001.geometry}
          material={materials['Caliper.003']}
          position={[-0.013, 0.177, 0]}
          rotation={[-Math.PI, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F8Tributo_2020_Wheel_2ACombined3DWheel_3DWheel_fron001.geometry}
        material={materials['Wheel.004']}
        position={[-0.795, 0.24, 1.357]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta002.geometry}
          material={materials['Caliper.004']}
          position={[-0.021, -0.181, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F8Tributo_2020_Wheel_2ACombined3DWheel_3DWheel_fron002.geometry}
        material={materials['Wheel.005']}
        position={[0.795, 0.24, -1.362]}
        rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta003.geometry}
          material={materials['Caliper.005']}
          position={[-0.013, 0.177, 0]}
          rotation={[-Math.PI, 0, 0]}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('model/f12.glb')