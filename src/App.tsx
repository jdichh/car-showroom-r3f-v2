import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Suspense } from "react";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <>
      <Canvas
        shadows
        style={{ background: "#000" }}
        eventSource={document.getElementById("root") as HTMLElement}
      >
        <Suspense
          fallback={
            <Html
              fullscreen
              style={{ backgroundColor: "black" }}
              className="flex flex-col justify-center items-center"
            >
              <p className="text-white">Welcome!</p>
            </Html>
          }
        >
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
