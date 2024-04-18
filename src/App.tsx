import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";
import Experience from "./components/Experience/Experience";

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html center className="w-screen flex flex-col justify-center items-center">
      <p className="text-white flex ">
        {progress.toFixed(0)}% loaded
      </p>
    </Html>
  );
}

const App = () => {
  return (
    <>
      <Canvas
        shadows
        style={{ background: "#000" }}
        eventSource={document.getElementById("root") as HTMLElement}
      >
        <Suspense fallback={<Loader />}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
