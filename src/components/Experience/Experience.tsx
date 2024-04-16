import { Box, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ModelView from "../Model/ModelView";

import Lighting from "../Lighting/Lighting";

const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.75} />
      {/* <Lighting /> */}
      {/* temporary lighting */}
      <ambientLight intensity={1}  /> 
      <ModelView />
    </>
  );
};

export default Experience;
