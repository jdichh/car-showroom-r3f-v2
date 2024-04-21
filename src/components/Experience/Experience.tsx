import { PerspectiveCamera } from "@react-three/drei";
import Lighting from "../Lighting/Lighting";
import Scene from "../Scene/Scene";

const Experience = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.5, 34]} fov={22}/>
      <Lighting />
      <Scene />
    </>
  );
};

export default Experience;
