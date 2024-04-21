import { PerspectiveCamera } from "@react-three/drei";
import Lighting from "../Lighting/Lighting";
import Scene from "../Scene/Scene";

export const maxDistance = 33

const Experience = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, maxDistance]} fov={25}/>
      <Lighting />
      <Scene />
    </>
  );
};

export default Experience;
