/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Lamborghini_HuracanLP6104_2014_Wheel_2Combined3DWheel_3DWheel_f: THREE.Mesh
    Lamborghini_HuracanLP6104RewardRecycled_2014_CallipersCombi: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Engine_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Grille3_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Grille4_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Interior_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014InteriorTilling_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Kit0_Badge_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Kit0_Base_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Kit0_Coloured_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Kit0_Grille1_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Kit0_Grille2_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Kit0_LicensePlate_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Kit0_Light_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Kit0_ManufacturerPlate_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Kit0_Paint_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Kit0_Window_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014SeatBelt_Geo_lodA: THREE.Mesh
    Lamborghini_HuracanLP6104_2014Kit0_RearLights: THREE.Mesh
    Lamborghini_HuracanLP6104_2014_Wheel_2Combined3DWheel_3DWhe: THREE.Mesh
    Lamborghini_HuracanLP6104Reward_2014_CallipersCombinedCalli001: THREE.Mesh
    Lamborghini_HuracanLP6104_2014_Wheel_2Combined3DWheel_3DWhe001: THREE.Mesh
    Lamborghini_HuracanLP6104RewardRecycled_2014_CallipersCombi001: THREE.Mesh
    Lamborghini_HuracanLP6104_2014_Wheel_2Combined3DWheel_3DWhe002: THREE.Mesh
    Lamborghini_HuracanLP6104Reward_2014_CallipersCombinedCalli002: THREE.Mesh
  }
  materials: {
    Wheel: THREE.MeshPhysicalMaterial
    Caliper: THREE.MeshStandardMaterial
    Engine: THREE.MeshPhysicalMaterial
    Grille3: THREE.MeshPhysicalMaterial
    Grille4: THREE.MeshPhysicalMaterial
    Interior: THREE.MeshStandardMaterial
    Interior2: THREE.MeshStandardMaterial
    Badge: THREE.MeshPhysicalMaterial
    Paint2: THREE.MeshPhysicalMaterial
    Grille1: THREE.MeshStandardMaterial
    Grille2: THREE.MeshStandardMaterial
    Lights: THREE.MeshStandardMaterial
    Plate: THREE.MeshPhysicalMaterial
    Paint: THREE.MeshPhysicalMaterial
    Glass: THREE.MeshPhysicalMaterial
    Seatbelt: THREE.MeshStandardMaterial
    RearLights: THREE.MeshPhysicalMaterial
    ['Wheel.001']: THREE.MeshPhysicalMaterial
    ['Wheel.002']: THREE.MeshPhysicalMaterial
    ['Caliper.001']: THREE.MeshStandardMaterial
    ['Wheel.003']: THREE.MeshPhysicalMaterial
    ['Caliper.002']: THREE.MeshStandardMaterial
  }
}

export function Huracan(props: any) {
  const { nodes, materials } = useGLTF('model/huracan.glb') as GLTFResult

  useEffect(() => {
    // car paint
    Object.entries(materials).map((material) => {
      if (material[0] == "Paint") {
        material[1].color = new THREE.Color(props.color.hexCode);
      }
      if (material[0] == "Caliper.001") {
        material[1].color = new THREE.Color(props.color.hexCode);
      }
      if (material[0] == "Caliper.002") {
        material[1].color = new THREE.Color(props.color.hexCode);
      }
      if (material[0] == "Caliper") {
        material[1].color = new THREE.Color(props.color.hexCode);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props]);

  return (
    <group {...props} dispose={null} scale={4} position={[0, -2.16, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014_Wheel_2Combined3DWheel_3DWheel_f.geometry}
        material={materials.Wheel}
        position={[0.79, 0.336, -1.315]}
        rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamborghini_HuracanLP6104RewardRecycled_2014_CallipersCombi.geometry}
          material={materials.Caliper}
          position={[-0.003, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Engine_Geo_lodA.geometry}
        material={materials.Engine}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Grille3_Geo_lodA.geometry}
        material={materials.Grille3}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Grille4_Geo_lodA.geometry}
        material={materials.Grille4}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Interior_Geo_lodA.geometry}
        material={materials.Interior}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014InteriorTilling_Geo_lodA.geometry}
        material={materials.Interior2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Kit0_Badge_Geo_lodA.geometry}
        material={materials.Badge}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Kit0_Base_Geo_lodA.geometry}
        material={materials.Paint2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Kit0_Coloured_Geo_lodA.geometry}
        material={materials.Paint2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Kit0_Grille1_Geo_lodA.geometry}
        material={materials.Grille1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Kit0_Grille2_Geo_lodA.geometry}
        material={materials.Grille2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Kit0_LicensePlate_Geo_lodA.geometry}
        material={nodes.Lamborghini_HuracanLP6104_2014Kit0_LicensePlate_Geo_lodA.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Kit0_Light_Geo_lodA.geometry}
        material={materials.Lights}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Kit0_ManufacturerPlate_Geo_lodA.geometry}
        material={materials.Plate}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Kit0_Paint_Geo_lodA.geometry}
        material={materials.Paint}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Kit0_Window_Geo_lodA.geometry}
        material={materials.Glass}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014SeatBelt_Geo_lodA.geometry}
        material={materials.Seatbelt}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014Kit0_RearLights.geometry}
        material={materials.RearLights}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014_Wheel_2Combined3DWheel_3DWhe.geometry}
        material={materials['Wheel.001']}
        position={[-0.79, 0.336, 1.303]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamborghini_HuracanLP6104Reward_2014_CallipersCombinedCalli001.geometry}
          material={materials.Caliper}
          position={[0, 0.013, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014_Wheel_2Combined3DWheel_3DWhe001.geometry}
        material={materials['Wheel.002']}
        position={[-0.79, 0.336, -1.315]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamborghini_HuracanLP6104RewardRecycled_2014_CallipersCombi001.geometry}
          material={materials['Caliper.001']}
          position={[-0.003, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamborghini_HuracanLP6104_2014_Wheel_2Combined3DWheel_3DWhe002.geometry}
        material={materials['Wheel.003']}
        position={[0.79, 0.336, 1.303]}
        rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamborghini_HuracanLP6104Reward_2014_CallipersCombinedCalli002.geometry}
          material={materials['Caliper.002']}
          position={[0, 0.013, 0]}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('model/huracan.glb')