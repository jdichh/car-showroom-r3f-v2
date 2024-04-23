// src/App.tsx
import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Experience from "./components/Experience/Experience";
import LandingMenu from "./components/UI/LandingMenu/LandingMenu";
import { MenuContext } from "./lib/contexts/contexts";
import { Perf } from "r3f-perf";

// replace/improve this
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      center
      className="w-screen h-screen p-8 flex flex-col justify-center items-center"
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
        {isInLandingMenu ? (
          <LandingMenu />
        ) : (
          <Canvas
            shadows
            style={{ background: "#black" }}
            eventSource={document.getElementById("root") as HTMLElement}
          >
            <Suspense fallback={<Loader />}>
              <Experience />
            </Suspense>
          </Canvas>
        )}
      </MenuContext.Provider>
    </>
  );
};

export default App;
