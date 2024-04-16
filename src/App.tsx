import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <>
      <Canvas
        shadows
        style={{ background: "#000" }}
        eventSource={document.getElementById("root") as HTMLElement}
      >
        {/* suspense here */}
        <Experience />
      </Canvas>
    </>
  );
};

export default App;
