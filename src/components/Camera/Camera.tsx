import { PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

const Camera = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 5, 50]} fov={20} />
      <OrbitControls
        makeDefault
        enablePan={false}
        // autoRotate
        // autoRotateSpeed={0.6}
        // minPolarAngle={0.75}
        // maxPolarAngle={Math.PI - 1.7}
        // enableZoom={true}
        // maxZoom={2}
      />
    </>
  );
};

export default Camera;
