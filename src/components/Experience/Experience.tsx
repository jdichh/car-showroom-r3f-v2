import Lighting from "../Lighting/Lighting";
import ModelView from "../Model/ModelView";
import { PerspectiveCamera } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2.5, 40]} fov={20} />
      <Lighting />
      <ModelView />
    </>
  );
};

export default Experience;
