import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience/Experience";
import LandingMenu from "./components/UI/LandingMenu/LandingMenu";
import { useUIStore } from "./lib/zustandstores/uiStore";
import Scene from "./components/Scene/Scene";

const App = () => {
  const { isInLandingMenu } = useUIStore();

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
          <Experience />
        </Canvas>
      )}
    </>
  );
};

export default App;
