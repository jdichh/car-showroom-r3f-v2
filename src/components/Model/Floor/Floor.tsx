import { Plane } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

const Floor = () => {
  const [aoMap, colorMap, disMap, normGlMap, roughnessMap] = useLoader(
    TextureLoader,
    [
      "/floor/Concrete032_1K-JPG_AmbientOcclusion.jpg",
      "/floor/Concrete032_1K-JPG_Color.jpg",
      "/floor/Concrete032_1K-JPG_Displacement.jpg",
      "/floor/Concrete032_1K-JPG_NormalGL.jpg",
      "/floor/Concrete032_1K-JPG_Roughness.jpg",
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
    roughness: 0.7,
  });

  return (
    <Plane
      args={[planeWidth, planeHeight]}
      material={material}
      receiveShadow
      castShadow
      rotation-x={-Math.PI / 2}
      position-y={-2.83}
    />
  );
};

export default Floor;
