/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: WARENTERTAINMENT™ (https://sketchfab.com/WarEntertainment)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lamborghini-huracan-basic-edition-f4004ef10bd44845b3cece359e6a6b2e
Title: Lamborghini Huracan (Basic Edition)
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import Floor from "../Floor/Floor";
import { carColors } from "../../../lib/colors";

type GLTFResult = GLTF & {
  nodes: {
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_38: THREE.Mesh;
    Object_40: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_44: THREE.Mesh;
    Object_46: THREE.Mesh;
    Object_48: THREE.Mesh;
    Object_50: THREE.Mesh;
    Object_52: THREE.Mesh;
    Object_54: THREE.Mesh;
    Object_56: THREE.Mesh;
    Object_58: THREE.Mesh;
    Object_60: THREE.Mesh;
    Object_62: THREE.Mesh;
    Object_64: THREE.Mesh;
    Object_66: THREE.Mesh;
    Object_68: THREE.Mesh;
    Object_70: THREE.Mesh;
  };
  materials: {
    Brake2Mtl: THREE.MeshStandardMaterial;
    LicensePlate2Mtl: THREE.MeshStandardMaterial;
    Meshpart11Mtl: THREE.MeshStandardMaterial;
    Meshpart27Mtl: THREE.MeshStandardMaterial;
    Meshpart30Mtl: THREE.MeshStandardMaterial;
    Steering2Mtl: THREE.MeshPhysicalMaterial;
    Details1Mtl: THREE.MeshStandardMaterial;
    Disc1Mtl: THREE.MeshPhysicalMaterial;
    Hb1Mtl: THREE.MeshStandardMaterial;
    LicensePlate1Mtl: THREE.MeshPhysicalMaterial;
    Meshpart14Mtl: THREE.MeshPhysicalMaterial;
    Meshpart18Mtl: THREE.MeshStandardMaterial;
    Meshpart5Mtl: THREE.MeshStandardMaterial;
    Mirrorreflections1Mtl: THREE.MeshStandardMaterial;
    Paint1Mtl: THREE.MeshPhysicalMaterial;
    Rright1Mtl: THREE.MeshStandardMaterial;
    Runl1Mtl: THREE.MeshStandardMaterial;
    Threads1Mtl: THREE.MeshStandardMaterial;
    Tire1Mtl: THREE.MeshPhysicalMaterial;
    Wipers1Mtl: THREE.MeshStandardMaterial;
  };
};

export function CarModel(props: any) {
  const { nodes, materials } = useGLTF(
    "model/lamborghini_huracan_basic_edition.glb"
  ) as GLTFResult;
  const carModel = useRef<THREE.Group<THREE.Object3DEventMap>>(null);

  useEffect(() => {
    // enable car shadows
    carModel.current?.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    // car paint
    Object.entries(materials).map((material) => {
      if (material[0] == "Paint1Mtl") {
        material[1].color = new THREE.Color(props.color.hexCode);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props]);

  return (
    <group {...props} dispose={null} position={[0, -1, 0]}>
      <Floor />
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-86.5, -17.1, 355]}
        ref={carModel}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Brake2Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.LicensePlate2Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Meshpart11Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Meshpart27Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.Meshpart30Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.Steering2Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.Details1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.Disc1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.Hb1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.LicensePlate1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.LicensePlate1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.LicensePlate1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.LicensePlate1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.LicensePlate1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.LicensePlate1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.Meshpart14Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.Meshpart18Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.Meshpart5Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.Mirrorreflections1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.Mirrorreflections1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.Mirrorreflections1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.Mirrorreflections1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.Mirrorreflections1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.Mirrorreflections1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.Mirrorreflections1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.Paint1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.Paint1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials.Rright1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.Runl1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={materials.Threads1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials.Tire1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials.Wipers1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_70.geometry}
          material={materials.Wipers1Mtl}
        />
      </group>
    </group>
  );
}

useGLTF.preload("model/lamborghini_huracan_basic_edition.glb");
