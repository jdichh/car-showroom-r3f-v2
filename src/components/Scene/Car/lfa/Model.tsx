/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Lexus_LFA_2011_Wheel_1Combined3DWheel_3DWheel_front_L_Instance1: THREE.Mesh
    Lexus_LFA_2011_CallipersCombinedCalliperExotic6CalliperExotic6_: THREE.Mesh
    Lexus_LFA_2011Kit0_Badge_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Base_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Carbon1_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Carbon2_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Coloured_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Engine_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Grille1_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Grille2_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Grille4_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Grille5_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Grille6_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Interior_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Light_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_ManufacturerPlate_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Paint_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_SeatBelt_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011Kit0_Window_Geo_lodA: THREE.Mesh
    Lexus_LFA_2011_Wheel_1Combined3DWheel_3DWheel_front_L_Insta001: THREE.Mesh
    Lexus_LFA_2011_CallipersCombinedCalliperExotic4CalliperExot001: THREE.Mesh
    Lexus_LFA_2011_Wheel_1Combined3DWheel_3DWheel_front_L_Insta: THREE.Mesh
    Lexus_LFA_2011_CallipersCombinedCalliperExotic6CalliperExot: THREE.Mesh
    Lexus_LFA_2011_Wheel_1Combined3DWheel_3DWheel_front_L_Insta002: THREE.Mesh
    Lexus_LFA_2011_CallipersCombinedCalliperExotic4CalliperExot002: THREE.Mesh
    Lexus_LFA_2011Kit0_RearLights: THREE.Mesh
    Lexus_LFA_2011Kit0_RearLightCovers: THREE.Mesh
    Lexus_LFA_2011Kit0_Logo: THREE.Mesh
  }
  materials: {
    Wheel: THREE.MeshPhysicalMaterial
    Caliper: THREE.MeshStandardMaterial
    Badge: THREE.MeshPhysicalMaterial
    Paint2: THREE.MeshPhysicalMaterial
    Paint: THREE.MeshPhysicalMaterial
    Engine: THREE.MeshStandardMaterial
    Grille1: THREE.MeshStandardMaterial
    Grille2: THREE.MeshStandardMaterial
    Grille4: THREE.MeshStandardMaterial
    Grille5: THREE.MeshStandardMaterial
    Grille6: THREE.MeshStandardMaterial
    Interior: THREE.MeshStandardMaterial
    MainLights: THREE.MeshStandardMaterial
    Plate: THREE.MeshPhysicalMaterial
    Seatbelt: THREE.MeshStandardMaterial
    Glass: THREE.MeshPhysicalMaterial
    ['Wheel.002']: THREE.MeshPhysicalMaterial
    ['Caliper.002']: THREE.MeshStandardMaterial
    ['Wheel.005']: THREE.MeshPhysicalMaterial
    ['Caliper.004']: THREE.MeshStandardMaterial
    ['Wheel.006']: THREE.MeshPhysicalMaterial
    ['Caliper.005']: THREE.MeshStandardMaterial
    RearLights: THREE.MeshStandardMaterial
    RearLightCovers: THREE.MeshPhysicalMaterial
    Logo: THREE.MeshPhysicalMaterial
  }
}

export function LFA(props: any) {
  const { nodes, materials } = useGLTF('models/lfa.glb') as GLTFResult

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
     <group {...props} dispose={null} scale={4} position={[0, -1.73, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011_Wheel_1Combined3DWheel_3DWheel_front_L_Instance1.geometry}
        material={materials.Wheel}
        position={[-0.78, 0.227, 1.356]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lexus_LFA_2011_CallipersCombinedCalliperExotic6CalliperExotic6_.geometry}
          material={materials.Caliper}
          position={[0.023, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Badge_Geo_lodA.geometry}
        material={materials.Badge}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Base_Geo_lodA.geometry}
        material={materials.Paint2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Carbon1_Geo_lodA.geometry}
        material={materials.Paint}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Carbon2_Geo_lodA.geometry}
        material={materials.Paint2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Coloured_Geo_lodA.geometry}
        material={materials.Paint2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Engine_Geo_lodA.geometry}
        material={materials.Engine}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Grille1_Geo_lodA.geometry}
        material={materials.Grille1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Grille2_Geo_lodA.geometry}
        material={materials.Grille2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Grille4_Geo_lodA.geometry}
        material={materials.Grille4}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Grille5_Geo_lodA.geometry}
        material={materials.Grille5}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Grille6_Geo_lodA.geometry}
        material={materials.Grille6}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Interior_Geo_lodA.geometry}
        material={materials.Interior}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Light_Geo_lodA.geometry}
        material={materials.MainLights}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_ManufacturerPlate_Geo_lodA.geometry}
        material={materials.Plate}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Paint_Geo_lodA.geometry}
        material={materials.Paint}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_SeatBelt_Geo_lodA.geometry}
        material={materials.Seatbelt}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Window_Geo_lodA.geometry}
        material={materials.Glass}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011_Wheel_1Combined3DWheel_3DWheel_front_L_Insta001.geometry}
        material={materials['Wheel.002']}
        position={[0.78, 0.227, -1.272]}
        rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lexus_LFA_2011_CallipersCombinedCalliperExotic4CalliperExot001.geometry}
          material={materials['Caliper.002']}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011_Wheel_1Combined3DWheel_3DWheel_front_L_Insta.geometry}
        material={materials['Wheel.005']}
        position={[0.78, 0.227, 1.356]}
        rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lexus_LFA_2011_CallipersCombinedCalliperExotic6CalliperExot.geometry}
          material={materials['Caliper.004']}
          position={[0.023, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011_Wheel_1Combined3DWheel_3DWheel_front_L_Insta002.geometry}
        material={materials['Wheel.006']}
        position={[-0.78, 0.227, -1.272]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lexus_LFA_2011_CallipersCombinedCalliperExotic4CalliperExot002.geometry}
          material={materials['Caliper.005']}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_RearLights.geometry}
        material={materials.RearLights}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_RearLightCovers.geometry}
        material={materials.RearLightCovers}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lexus_LFA_2011Kit0_Logo.geometry}
        material={materials.Logo}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('models/lfa.glb')