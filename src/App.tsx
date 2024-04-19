// src/App.tsx
import { createContext, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";
import Experience from "./components/Experience/Experience";
import Landing from "./components/UI/Landing/Landing";

type MenuContextTypes = {
  isInLandingMenu: boolean;
  setIsInLandingMenu: (value: boolean) => void;
};

export const MenuContext = createContext<MenuContextTypes>({
  isInLandingMenu: true,
  setIsInLandingMenu: () => {},
});

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html center className="w-screen flex flex-col justify-center items-center">
      <p className="text-white flex ">{progress.toFixed(0)}% loaded</p>
    </Html>
  );
}

const App = () => {
  const [isInLandingMenu, setIsInLandingMenu] = useState(true);

  return (
    <>
      <MenuContext.Provider value={{ isInLandingMenu, setIsInLandingMenu }}>
        <Canvas
          shadows
          style={{ background: "#000" }}
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
