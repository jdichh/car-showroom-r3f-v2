import {
  BakeShadows,
  Html,
  OrbitControls,
  PositionalAudio,
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { CarManufacturer } from "../../lib/types/types";
import {
  AMGGTR,
  F12,
  GT350R,
  GTR,
  Huracan,
  LFA,
  Porsche911,
  Viper,
} from "../../lib/models/ModelImports";
import { useCarColorStore } from "../../lib/zustandstores/carColorStore";
import { useFloorStateStore } from "../../lib/zustandstores/floorStore";
import { useLoadingStateStore } from "../../lib/zustandstores/loadingStore";
import { useSelectedCarStore } from "../../lib/zustandstores/selectedCarStore";
import { useUIStore } from "../../lib/zustandstores/uiStore";
import { maxDistance } from "../Experience/Experience";
import CarSwitchTransition from "../UI/CarSwitchTransition/CarSwitchTransition";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import SceneLanding from "../UI/SceneLanding/SceneLanding";
import ShowcaseUI from "../UI/Showcase/Showcase";
import Floor from "./Floor/Floor";
import "./Scene.css";


const Scene = () => {
  const { isInShowcaseMenu } = useUIStore();
  const { color, setColor } = useCarColorStore();
  const { isLoading, setIsLoading } = useLoadingStateStore();
  const { isFloorVisible, setIsFloorVisible } = useFloorStateStore();
  const { selectedCar, setSelectedCar } = useSelectedCarStore();

  const audioRef = useRef<any>(null);

  const startEngine = () => {
    if (audioRef.current) {
      audioRef.current.setVolume(40);
      audioRef.current.play();
    }
  };

  const orbitControlsRef = useRef<any>(null);
  const resetCameraPosition = () => {
    const orbitControls = orbitControlsRef.current;
    if (orbitControls) {
      orbitControls.reset();
    }
  };

  // delays for transition
  useEffect(() => {
    setIsLoading(true);
    setIsFloorVisible(false);
    resetCameraPosition();
    setSelectedCar(selectedCar);
    if (selectedCar.colors.length > 0) {
      setColor(selectedCar.colors[0]);
    }

    setTimeout(() => {
      setIsFloorVisible(true);
      setIsLoading(false);
    }, 3000);
  }, [selectedCar]);

  const carModelComponents: {
    [key in CarManufacturer]: React.LazyExoticComponent<
      (props: any) => JSX.Element
    >;
  } = {
    Lamborghini: Huracan,
    Ferrari: F12,
    Porsche: Porsche911,
    Ford: GT350R,
    Dodge: Viper,
    Lexus: LFA,
    Nissan: GTR,
    "Mercedes-AMG": AMGGTR,
  };

  const CarModelComponent =
    carModelComponents[selectedCar.manufacturer as CarManufacturer];

  return (
    <>
      {isLoading ? (
        <CarSwitchTransition selectedCar={selectedCar} />
      ) : (
        <>
          <OrbitControls
            makeDefault
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.6}
            minPolarAngle={1.15}
            maxPolarAngle={Math.PI - 1.55}
            enableZoom={true}
            enableRotate={true}
            ref={orbitControlsRef}
            minDistance={20}
            maxDistance={maxDistance + 2}
          />

          {CarModelComponent ? (
            <Suspense fallback={<LoadingSpinner />}>
              <CarModelComponent color={color} />
              {selectedCar.sound ? (
                <PositionalAudio
                  ref={audioRef}
                  url={selectedCar.sound}
                  position={
                    selectedCar.manufacturer === "Dodge"
                      ? [0, -1, -2]
                      : [0, -1, -9]
                  }
                  loop={false}
                  distance={0.7}
                />
              ) : (
                ""
              )}
              <BakeShadows />
            </Suspense>
          ) : (
            ""
          )}

          {/* prevents floor plane from flashing between the landing page and canvas transition */}
          {isFloorVisible === true ? <Floor /> : ""}

          <Html fullscreen>
            {isInShowcaseMenu === true ? <ShowcaseUI /> : <SceneLanding />}
          </Html>
        </>
      )}
    </>
  );
};

export default Scene;
