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
import { SelectedCarProps } from "../../lib/types/types";
import "./Scene.css";

import {
  F12,
  Giulia,
  Huracan,
  LFA,
  Porsche918,
  Viper,
} from "../../lib/models/ModelImports";

import CarSwitchTransition from "../CarSwitchTransition/CarSwitchTransition";
import CarDetails from "../UI/CarDetails/CarDetails";
import Floor from "./Floor/Floor";

const Scene = () => {
  const devCamera = true;

  const car1 = cars[0];

  const [isLoading, setIsLoading] = useState(false);

  const [color, setColor] = useState({
    name: "Alpine White",
    hexCode: "#C4C4C4",
  });

  const [selectedCar, setSelectedCar] = useState<SelectedCarProps>({
    logo: car1.logo,
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

  const [isUIVisible, setIsUIVisible] = useState(true);
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

  useEffect(() => {
    setIsLoading(true);
    resetCameraPosition();

    setTimeout(() => {
      setIsLoading(false);
      setSelectedCar(selectedCar);
    }, 3000);

    if (selectedCar.colors.length > 0) {
      setColor(selectedCar.colors[0]);
    }
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
            maxPolarAngle={Math.PI - 1.6}
            enableZoom={devCamera}
            enableRotate={true}
            ref={orbitControlsRef}
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
              <Porsche918 color={color} />
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
          ) : (
            ""
          )}
          <Floor />

          <Html fullscreen>
            <main
              className={`${
                isLoading || isUIVisible === false
                  ? "invisible"
                  : "visible max-w-[1920px] mx-auto h-full flex flex-col justify-between"
              }`}
            >
              {/* componetize sections */}
              <section id="top">
                <div className="car-selection-container">
                  {cars.map((car, index) =>
                    car.manufacturer !== selectedCar.manufacturer ? (
                      <button
                        key={index}
                        className="car-selection-btn"
                        onClick={() => setSelectedCar(car)}
                      >
                        <img
                          src={car.logo}
                          alt={`${car.manufacturer} ${car.model}`}
                          height={35}
                          width={35}
                        />
                      </button>
                    ) : (
                      ""
                    )
                  )}
                </div>
                <button onClick={() => toggleUI()} className="toggle-ui-btn">
                  {isUIVisible === false ? "Show UI" : "Hide UI"}
                </button>
              </section>

              <section id="middle">
                <div className="logo-and-paint-container">
                  <img
                    src={selectedCar.logo}
                    height={100}
                    width={selectedCar.manufacturer === "Dodge" ? 200 : 100}
                  />
                  <div className="paint-sample-container">
                    <div className="paint-samples">
                      {selectedCar.colors.map((color, index) => (
                        <button
                          key={index}
                          style={{ backgroundColor: color.hexCode }}
                          className="paint-samples-button"
                          onClick={() => setColor(color)}
                        />
                      ))}
                    </div>
                    <p className="mt-2">{color.name}</p>
                  </div>
                </div>
                <hgroup className="current-car font-fjalla uppercase">
                  <h2 className="text-2xl">{selectedCar.manufacturer}</h2>
                  <h3 className="text-7xl">{selectedCar.model}</h3>
                  <h4 className="text-2xl">{selectedCar.year}</h4>
                </hgroup>
                <div />
              </section>

              <CarDetails {...selectedCar} />
            </main>
          </Html>
        </>
      )}
      {/* <Top /> */}
    </>
  );
};

export default Scene;
