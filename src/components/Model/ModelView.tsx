import { Suspense, useEffect, useRef, useState } from "react";
import { SelectedCarProps } from "../../lib/types/types";
import { Html, OrbitControls } from "@react-three/drei";
import { cars } from "../../lib/cars";
import "./ModelView.css"

import {
  Porsche918,
  F12,
  Giulia,
  Huracan,
  Viper,
  LFA,
} from "../../lib/modelImports/modelImports";

import Floor from "../Model/Floor/Floor";
import Bottom from "../UI/Bottom/Bottom";
import Top from "../UI/Top/Top";
import LoadingLogo from "../Loading/Loading";

const ModelView = () => {
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
    }, 500);

    if (selectedCar.colors.length > 0) {
      setColor(selectedCar.colors[0]);
    }
  }, [selectedCar]);

  const [isUIVisible, setIsUIVisible] = useState(true);

  const toggleUI = () => {
    setIsUIVisible(!isUIVisible);
  };

  const devCamera = false;

  return (
    <>
      {isLoading ? (
        <LoadingLogo selectedCar={selectedCar} />
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
          {selectedCar.manufacturer === "Alfa Romeo" ? (
            <Suspense fallback={<LoadingLogo selectedCar={selectedCar} />}>
              <Giulia color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Lamborghini" ? (
            <Suspense fallback={<LoadingLogo selectedCar={selectedCar} />}>
              <Huracan color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Ferrari" ? (
            <Suspense fallback={<LoadingLogo selectedCar={selectedCar} />}>
              <F12 color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Porsche" ? (
            <Suspense fallback={<LoadingLogo selectedCar={selectedCar} />}>
              <Porsche918 color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Dodge" ? (
            <Suspense fallback={<LoadingLogo selectedCar={selectedCar} />}>
              <Viper color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Lexus" ? (
            <Suspense fallback={<LoadingLogo selectedCar={selectedCar} />}>
              <LFA color={color} />
            </Suspense>
          ) : (
            ""
          )}
          <Floor />
          <Html fullscreen>
            {/* <button onClick={() => toggleUI()} className="text-white absolute z-40">Hide UI</button> */}
            <main
              className={`${
                isLoading || isUIVisible === false
                  ? "invisible"
                  : "visible max-w-[1920px] mx-auto h-full flex flex-col justify-between"
              }`}
            >
              <section id="top">
                {cars.map((car, index) =>
                  car.manufacturer !== selectedCar.manufacturer ? (
                    <button
                      key={index}
                      className="car-selection"
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
                <hgroup className="current-car">
                  <h2>{selectedCar.manufacturer}</h2>
                  <h3>{selectedCar.model}</h3>
                  <h4>{selectedCar.year}</h4>
                </hgroup>
                <div />
              </section>
              <Bottom {...selectedCar} />
            </main>
          </Html>
        </>
      )}
      {/* <Top /> */}
    </>
  );
};

export default ModelView;
