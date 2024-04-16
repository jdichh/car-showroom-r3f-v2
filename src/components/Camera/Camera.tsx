import { PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

const Camera = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 5, 45]} fov={30} />
      <OrbitControls
        makeDefault
        enablePan={false}
        // autoRotate
        // autoRotateSpeed={0.9}
        // minPolarAngle={0.5}
        // maxPolarAngle={Math.PI - 1.6}
        // enableZoom={false}
      />
    </>
  );
};

export default Camera;
