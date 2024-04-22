/* todos: 
- organize code (componentize what needs/has to be)
- car sounds?
- lighting
- maybe more cars
- animations
*/

import { Html, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { cars } from "../../lib/cars";
import { CarColorProps, SelectedCarProps } from "../../lib/types/types";
import "./Scene.css";

import {
  F12,
  GTR,
  Giulia,
  Huracan,
  LFA,
  Porsche911,
  Viper,
} from "../../lib/models/ModelImports";

import {
  CarColorContext,
  CarSelectionContext,
  UIContext,
} from "../../lib/contexts/contexts";
import CarSwitchTransition from "../CarSwitchTransition/CarSwitchTransition";
import { maxDistance } from "../Experience/Experience";
import CarDetails from "../UI/CarDetails/CarDetails";
import CarLabel from "../UI/CarLabel/CarLabel";
import CarSelection from "../UI/CarSelection/CarSelection";
import Floor from "./Floor/Floor";

const Scene = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    if (selectedCar.colors.length > 0) {
      setColor(selectedCar.colors[0]);
    }
    resetCameraPosition();

    setTimeout(() => {
      setSelectedCar(selectedCar);
      setIsLoading(false);
    }, 3000);
  }, [selectedCar]);

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
            autoRotateSpeed={0.7}
            minPolarAngle={1.15}
            maxPolarAngle={Math.PI - 1.55}
            enableZoom={true}
            enableRotate={true}
            ref={orbitControlsRef}
            minDistance={20}
            maxDistance={maxDistance + 2}
          />

          {/* organize this!!! */}
          {selectedCar.manufacturer === "Alfa Romeo" ? (
            <Suspense
              fallback={<CarSwitchTransition selectedCar={selectedCar} />}
            >
              <Giulia color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Lamborghini" ? (
            <Suspense
              fallback={<CarSwitchTransition selectedCar={selectedCar} />}
            >
              <Huracan color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Ferrari" ? (
            <Suspense
              fallback={<CarSwitchTransition selectedCar={selectedCar} />}
            >
              <F12 color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Porsche" ? (
            <Suspense
              fallback={<CarSwitchTransition selectedCar={selectedCar} />}
            >
              <Porsche911 color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Dodge" ? (
            <Suspense
              fallback={<CarSwitchTransition selectedCar={selectedCar} />}
            >
              <Viper color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Lexus" ? (
            <Suspense
              fallback={<CarSwitchTransition selectedCar={selectedCar} />}
            >
              <LFA color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Nissan" ? (
            <Suspense
              fallback={<CarSwitchTransition selectedCar={selectedCar} />}
            >
              <GTR color={color} />
            </Suspense>
          ) : (
            ""
          )}

          <Floor />

          <Html fullscreen>
            <main
              className={`${
                isLoading || isUIVisible === false
                  ? "invisible ui-invisible-animation"
                  : "visible ui ui-visible-animation"
              }`}
            >
              <CarSelectionContext.Provider
                value={{ selectedCar, setSelectedCar }}
              >
                <UIContext.Provider
                  value={{ isUIVisible, setIsUIVisible, toggleUI }}
                >
                  <CarSelection />
                </UIContext.Provider>

                <CarColorContext.Provider value={{ color, setColor }}>
                  <CarLabel />
                </CarColorContext.Provider>
              </CarSelectionContext.Provider>

              <CarDetails {...selectedCar} />
            </main>
          </Html>
        </>
      )}
    </>
  );
};

export default Scene;
