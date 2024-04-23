import {
  BakeShadows,
  Html,
  OrbitControls,
  PositionalAudio,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { cars } from "../../lib/cars";
import {
  CarColorProps,
  CarManufacturer,
  SelectedCarProps,
} from "../../lib/types/types";
import "./Scene.css";

import {
  AMGGTR,
  F12,
  GT350R,
  GTR,
  Giulia,
  Huracan,
  LFA,
  Porsche911,
  Viper,
} from "../../lib/models/ModelImports";

import CarSwitchTransition from "../CarSwitchTransition/CarSwitchTransition";
import { maxDistance } from "../Experience/Experience";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import Floor from "./Floor/Floor";
import ShowcaseUI from "./Showcase/Showcase";

const Scene = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFloorVisible, setIsFloorVisible] = useState<boolean>(false);
  const audioRef = useRef<any>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.setVolume(40);
      audioRef.current.play();
    }
  };

  const [color, setColor] = useState<CarColorProps>({
    name: "Alpine White",
    hexCode: "#C4C4C4",
  });

  const car1 = cars[0];
  const [selectedCar, setSelectedCar] = useState<SelectedCarProps>({
    logo: car1.logo,
    country: car1.country,
    manufacturer: car1.manufacturer,
    model: car1.model,
    year: car1.year,
    sound: car1.sound,
    colors: car1.colors,
    displacement: car1.displacement,
    maxPower: car1.maxPower,
    torque: car1.torque,
    drivetrain: car1.drivetrain,
    length: car1.length,
    width: car1.width,
    height: car1.height,
    weight: car1.weight,
    description: car1.description,
  });

  const [isUIVisible, setIsUIVisible] = useState<boolean>(true);
  const toggleUI = () => {
    setIsUIVisible(!isUIVisible);
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
    "Alfa Romeo": Giulia,
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
            <ShowcaseUI
              selectedCar={selectedCar}
              setSelectedCar={setSelectedCar}
              isUIVisible={isUIVisible}
              playAudio={playAudio}
              toggleUI={toggleUI}
              color={color}
              setColor={setColor}
            />
          </Html>
        </>
      )}
    </>
  );
};

export default Scene;
