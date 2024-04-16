import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience/Experience";
import * as THREE from "three";


const App = () => {
  return (
    <>
      <Canvas
        shadows
        style={{ background: "#000" }}
        gl={{
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
      >
        {/* suspense here */}
        <Experience />
      </Canvas>
    </>
  );
};

export default App;
