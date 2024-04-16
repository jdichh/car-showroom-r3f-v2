import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <>
      <Canvas
        shadows
        style={{
          backgroundColor: "black"
        }}
      >
        {/* suspense here */}
        <Experience />
      </Canvas>
    </>
  );
};

export default App;
