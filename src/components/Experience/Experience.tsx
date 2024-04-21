import { PerspectiveCamera } from "@react-three/drei";
import Lighting from "../Lighting/Lighting";
import ModelView from "../Model/ModelView";

const Experience = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.5, 27]} fov={32}/>
      <Lighting />
      <ModelView />
    </>
  );
};

export default Experience;
