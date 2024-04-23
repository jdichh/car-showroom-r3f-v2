import { Plane } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import {
  SpotlightProp
} from "../../../lib/models/ModelImports";

const Floor = () => {
  const [aoMap, colorMap, disMap, normGlMap, roughnessMap] = useLoader(
    TextureLoader,
    [
      "/floor/Concrete033_1K-JPG_AmbientOcclusion.jpg",
      "/floor/Concrete033_1K-JPG_Color.jpg",
      "/floor/Concrete033_1K-JPG_Displacement.jpg",
      "/floor/Concrete033_1K-JPG_NormalGL.jpg",
      "/floor/Concrete033_1K-JPG_Roughness.jpg",
    ]
  );

  const scale = 12;
  const planeWidth = 250;
  const planeHeight = 250;

  [aoMap, colorMap, disMap, normGlMap, roughnessMap].forEach((tex) => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(scale, scale);
  });

  const material = new THREE.MeshStandardMaterial({
    aoMap: aoMap,
    aoMapIntensity: 1,
    map: colorMap,
    displacementMap: disMap,
    displacementScale: 1,
    normalMap: normGlMap,
    normalMapType: THREE.TangentSpaceNormalMap,
    roughnessMap: roughnessMap,
    roughness: 1,
  });

  return (
    <>
      <Plane
        args={[planeWidth, planeHeight]}
        material={material}
        receiveShadow
        rotation-x={-Math.PI / 2}
        position-y={-2.83}
      />
      <SpotlightProp position={[0,-2.3,-37]} rotation={[0,0,0]} />
      <SpotlightProp position={[0,-2.3,37]} rotation={[0,Math.PI,0]} />
      <SpotlightProp position={[37,-2.3,0]} rotation={[0,Math.PI * 5.5,0]} />
      <SpotlightProp position={[-37,-2.3,0]} rotation={[0,Math.PI * 2.5,0]} />
    </>
  );
};

export default Floor;
