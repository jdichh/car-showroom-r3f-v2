import Lighting from "../Lighting/Lighting";
import ModelView from "../Model/ModelView";
import { PerspectiveCamera } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 27]} fov={35}/>
      <Lighting />
      <ModelView />
    </>
  );
};

export default Experience;
