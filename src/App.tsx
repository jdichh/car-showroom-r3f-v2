// src/App.tsx
import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Experience from "./components/Experience/Experience";
import Landing from "./components/UI/Landing/Landing";
import { MenuContext } from "./lib/contexts/MenuContext";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      center
      className="w-screen h-screen p-8 flex flex-col justify-end items-end"
    >
      <p className="text-white text-xl">{progress.toFixed(0)}%</p>
    </Html>
  );
};

const App = () => {
  const [isInLandingMenu, setIsInLandingMenu] = useState(true);

  return (
    <>
      <MenuContext.Provider value={{ isInLandingMenu, setIsInLandingMenu }}>
        <Canvas
          shadows
          style={{ background: "#040404" }}
          eventSource={document.getElementById("root") as HTMLElement}
        >
          {isInLandingMenu ? (
            <Suspense fallback={<Loader />}>
              <Landing />
            </Suspense>
          ) : (
            <Suspense fallback={<Loader />}>
              <Experience />
            </Suspense>
          )}
        </Canvas>
      </MenuContext.Provider>
    </>
  );
};

export default App;
