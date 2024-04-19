import { Suspense, useEffect, useRef, useState } from "react";
import { SelectedCarProps } from "../../lib/types/types";
import { Html, OrbitControls } from "@react-three/drei";
import { cars } from "../../lib/cars";

import {
  Porsche918,
  F12,
  Giulia,
  Huracan,
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

    setTimeout(() => {
      setIsLoading(false);
      resetCameraPosition();
      setSelectedCar(selectedCar);
    }, 500);

    if (selectedCar.colors.length > 0) {
      setColor(selectedCar.colors[0]);
    }
  }, [selectedCar]);

  const devCamera = true;

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
            minPolarAngle={0.5}
            maxPolarAngle={Math.PI - 1.6}
            enableZoom={devCamera}
            enableRotate={devCamera}
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
          ) : (
            ""
          )}
          <Floor />
          <Html fullscreen className={`${isLoading ? "invisible" : "visible"}`}>
            <main className="max-w-[1920px] mx-auto h-full flex flex-col justify-between">
              <section className="flex p-2 justify-center backdrop-blur bg-black/50 gap-3">
                {cars.map((car, index) =>
                  car.manufacturer !== selectedCar.manufacturer ? (
                    <button
                      key={index}
                      className="hover:scale-110 active:scale-95 hover:bg-white/30 transition-all outline outline-1 outline-white/50 rounded-sm py-3 px-6"
                      onClick={() => setSelectedCar(car)}
                    >
                      <img
                        src={car.logo}
                        alt={`${car.manufacturer} ${car.model}`}
                        height={40}
                        width={40}
                      />
                    </button>
                  ) : (
                    ""
                  )
                )}
              </section>

              <section
                id="middle"
                className="text-white h-full p-14 flex flex-col justify-between"
              >
                <div className="flex justify-between items-center">
                  <img src={selectedCar.logo} height={90} width={90} />
                  <div>
                    <div className="flex gap-1">
                      {selectedCar.colors.map((color, index) => (
                        <button
                          key={index}
                          style={{ backgroundColor: color.hexCode }}
                          className="p-5 cursor-pointer rounded-sm"
                          onClick={() => setColor(color)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <hgroup className="flex flex-col px-14">
                  <h2>{selectedCar.manufacturer}</h2>
                  <h3>{selectedCar.model}</h3>
                  <h4>{selectedCar.year}</h4>
                </hgroup>
                <div className="flex flex-col items-end">
                    <p>PP</p>
                    <p>220,000</p>
                </div>
              </section>
              <Bottom {...selectedCar} />
            </main>
          </Html>
        </>
      )}
      {/* <Top /> */}
      {/* {color.name ? <span> in {color.name}</span> : ""} */}
    </>
  );
};

export default ModelView;
