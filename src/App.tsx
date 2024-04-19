// src/App.tsx
import { createContext, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";
import Experience from "./components/Experience/Experience";
import Menu from "./components/Menu/Menu";

type MenuContextTypes = {
  isInMenu: boolean;
  setIsInMenu: (value: boolean) => void;
};

export const MenuContext = createContext<MenuContextTypes>({
  isInMenu: true,
  setIsInMenu: () => {},
});

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html center className="w-screen flex flex-col justify-center items-center">
      <p className="text-white flex ">{progress.toFixed(0)}% loaded</p>
    </Html>
  );
}

const App = () => {
  const [isInMenu, setIsInMenu] = useState(true);

  return (
    <>
      <MenuContext.Provider value={{ isInMenu, setIsInMenu }}>
        <Canvas
          shadows
          style={{ background: "#000" }}
          eventSource={document.getElementById("root") as HTMLElement}
        >
          {isInMenu ? (
            <Suspense fallback={<Loader />}>
              <Menu />
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
