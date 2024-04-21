/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    AlfaRomeo_GiuliaGTAm_2021Light_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021ManufacturerPlate_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Window_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Kit1_Paint_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Kit1_Carbon1Livery_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Interior_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021InteriorTilling_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Carbon1_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Carbon1M_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Coloured_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Grille1_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Grille2_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Grille3_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Grille4_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Grille5_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Grille6_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Badge_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021Base_Geo_lodA: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021_Wheel_1Combined3DWheel_3DWheel_Front_: THREE.Mesh
    AlfaRomeo_GiuliaGTAmReward_2021_CallipersCombinedCalliperExotic: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021_Wheel_1Combined3DWheel_3DWheel_Fr: THREE.Mesh
    AlfaRomeo_GiuliaGTAmReward_2021_CallipersCombinedCalliperEx001: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021_Wheel_1Combined3DWheel_3DWheel_Fr001: THREE.Mesh
    AlfaRomeo_GiuliaGTAmReward_2021_CallipersCombinedCalliperEx: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021_Wheel_1Combined3DWheel_3DWheel_Fr002: THREE.Mesh
    AlfaRomeo_GiuliaGTAmReward_2021_CallipersCombinedCalliperEx002: THREE.Mesh
    AlfaRomeo_GiuliaGTAm_2021RearLights: THREE.Mesh
  }
  materials: {
    Lights: THREE.MeshStandardMaterial
    Plate: THREE.MeshPhysicalMaterial
    Glass: THREE.MeshPhysicalMaterial
    Paint: THREE.MeshPhysicalMaterial
    CarbonFiber: THREE.MeshPhysicalMaterial
    Interior: THREE.MeshStandardMaterial
    Interior2: THREE.MeshStandardMaterial
    Paint2: THREE.MeshPhysicalMaterial
    Grille1: THREE.MeshStandardMaterial
    Grille2: THREE.MeshStandardMaterial
    Grille3: THREE.MeshStandardMaterial
    Grille4: THREE.MeshStandardMaterial
    Grille5: THREE.MeshStandardMaterial
    Grille6: THREE.MeshPhysicalMaterial
    Badge: THREE.MeshPhysicalMaterial
    Wheel: THREE.MeshPhysicalMaterial
    Caliper: THREE.MeshStandardMaterial
    RearLights: THREE.MeshStandardMaterial
  }
}

export function Giulia(props: any) {
  const { nodes, materials } = useGLTF('models/gtam.glb') as GLTFResult

  useEffect(() => {
    // car paint
    Object.entries(materials).map((material) => {
      if (material[0] == "Paint") {
        material[1].color = new THREE.Color(props.color.hexCode);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props]);

  return (
    <group {...props} dispose={null} scale={4} position={[0, -1.7, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Light_Geo_lodA.geometry}
        material={materials.Lights}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021ManufacturerPlate_Geo_lodA.geometry}
        material={materials.Plate}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Window_Geo_lodA.geometry}
        material={materials.Glass}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Kit1_Paint_Geo_lodA.geometry}
        material={materials.Paint}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Kit1_Carbon1Livery_Geo_lodA.geometry}
        material={materials.CarbonFiber}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Interior_Geo_lodA.geometry}
        material={materials.Interior}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021InteriorTilling_Geo_lodA.geometry}
        material={materials.Interior2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Carbon1_Geo_lodA.geometry}
        material={materials.CarbonFiber}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Carbon1M_Geo_lodA.geometry}
        material={materials.CarbonFiber}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Coloured_Geo_lodA.geometry}
        material={materials.Paint2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Grille1_Geo_lodA.geometry}
        material={materials.Grille1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Grille2_Geo_lodA.geometry}
        material={materials.Grille2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Grille3_Geo_lodA.geometry}
        material={materials.Grille3}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Grille4_Geo_lodA.geometry}
        material={materials.Grille4}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Grille5_Geo_lodA.geometry}
        material={materials.Grille5}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Grille6_Geo_lodA.geometry}
        material={materials.Grille6}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Badge_Geo_lodA.geometry}
        material={materials.Badge}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021Base_Geo_lodA.geometry}
        material={materials.CarbonFiber}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021_Wheel_1Combined3DWheel_3DWheel_Front_.geometry}
        material={materials.Wheel}
        position={[0.726, 0.2, -1.328]}
        rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AlfaRomeo_GiuliaGTAmReward_2021_CallipersCombinedCalliperExotic.geometry}
          material={materials.Caliper}
          position={[-0.01, -0.029, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021_Wheel_1Combined3DWheel_3DWheel_Fr.geometry}
        material={materials.Wheel}
        position={[-0.702, 0.2, 1.499]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AlfaRomeo_GiuliaGTAmReward_2021_CallipersCombinedCalliperEx001.geometry}
          material={materials.Caliper}
          position={[-0.007, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021_Wheel_1Combined3DWheel_3DWheel_Fr001.geometry}
        material={materials.Wheel}
        position={[-0.726, 0.2, -1.328]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AlfaRomeo_GiuliaGTAmReward_2021_CallipersCombinedCalliperEx.geometry}
          material={materials.Caliper}
          position={[-0.01, -0.029, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021_Wheel_1Combined3DWheel_3DWheel_Fr002.geometry}
        material={materials.Wheel}
        position={[0.702, 0.2, 1.499]}
        rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AlfaRomeo_GiuliaGTAmReward_2021_CallipersCombinedCalliperEx002.geometry}
          material={materials.Caliper}
          position={[-0.007, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlfaRomeo_GiuliaGTAm_2021RearLights.geometry}
        material={materials.RearLights}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('models/gtam.glb')