// src/App.tsx
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Experience from "./components/Experience/Experience";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import LandingMenu from "./components/UI/LandingMenu/LandingMenu";
import { MenuContext } from "./lib/contexts/contexts";

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
            style={{ background: "black" }}
            eventSource={document.getElementById("root") as HTMLElement}
          >
             {/* <Perf position={'bottom-right'} /> */}
            <Suspense fallback={<LoadingSpinner />}>
              <Experience />
            </Suspense>
          </Canvas>
        )}
      </MenuContext.Provider>
    </>
  );
};

export default App;
