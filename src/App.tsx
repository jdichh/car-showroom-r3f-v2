// src/App.tsx
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience from "./components/Experience/Experience";
import LandingMenu from "./components/UI/LandingMenu/LandingMenu";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import { useUIStore } from "./lib/zustandstores/uiStore";

const App = () => {
  const { isInLandingMenu, setIsInLandingMenu } = useUIStore();

  return (
    <>
      {isInLandingMenu ? (
        <LandingMenu />
      ) : (
        <Canvas
          shadows
          style={{ background: "black" }}
          eventSource={document.getElementById("root") as HTMLElement}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Experience />
          </Suspense>
        </Canvas>
      )}
    </>
  );
};

export default App;
