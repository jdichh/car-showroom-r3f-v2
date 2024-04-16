import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience/Experience";
import * as THREE from "three"

const App = () => {
  return (
    <>
      <Canvas
        shadows
        style={{ background: "#060606" }}
        gl={{
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        camera={{
          position: [0, 5, 50],
          fov: 20
        }}
      >
        {/* suspense here */}
        <Experience />
      </Canvas>
    </>
  );
};

export default App;
