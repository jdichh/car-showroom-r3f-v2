import { Box, OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls autoRotate />
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="red" />
      </Box>
    </>
  );
};

export default Experience;
