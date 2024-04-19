import { Suspense, useEffect, useRef, useState } from "react";
import { SelectedCarProps } from "../../lib/types/types";
import { Html, OrbitControls } from "@react-three/drei";
import { cars } from "../../lib/cars";

import { AventadorSV } from "../../lib/modelImports/modelImports";
import { F12 } from "../../lib/modelImports/modelImports";
import { Giulia } from "../../lib/modelImports/modelImports";

import Floor from "../Model/Floor/Floor";
import Bottom from "../UI/Bottom/Bottom";
import Top from "../UI/Top/Top";
import LoadingLogo from "../Loading/Loading";

const ModelView = () => {
  const car1 = cars[0];
  const [isLoading, setIsLoading] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [color, setColor] = useState({
    name: "Alpine White",
    hexCode: "#C4C4C4",
  });
  const [selectedCar, setSelectedCar] = useState<SelectedCarProps>({
    logo: car1.logo,
    manufacturer: car1.manufacturer,
    model: car1.model,
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
    setIsModelLoading(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsModelLoading(false);
      setIsLoading(false);

      setSelectedCar(selectedCar);
      resetCameraPosition();
    }, 1000);

    if (selectedCar.colors.length > 0) {
      setColor(selectedCar.colors[0]);
    }
  }, [selectedCar]);

  return (
    <>
      {isLoading || isModelLoading ? (
        <LoadingLogo selectedCar={selectedCar} />
      ) : (
        <>
          <OrbitControls
            makeDefault
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.9}
            minPolarAngle={0.5}
            maxPolarAngle={Math.PI - 1.6}
            enableZoom={true}
            enableRotate={true}
            ref={orbitControlsRef}
          />
          {selectedCar.manufacturer === "Alfa Romeo" ? (
            <Suspense fallback={<LoadingLogo selectedCar={selectedCar} />}>
              <Giulia color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Lamborghini" ? (
            <Suspense fallback={<LoadingLogo selectedCar={selectedCar} />}>
              <AventadorSV color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Ferrari" ? (
            <Suspense fallback={<LoadingLogo selectedCar={selectedCar} />}>
              <F12 color={color} />
            </Suspense>
          ) : (
            ""
          )}
          <Floor />
          <Html fullscreen className="z-10">
            <main className="max-w-[1920px] mx-auto h-full flex flex-col justify-between">
              <Top />
              <div className="flex flex-colp-2">
                <div className="text-white flex flex-col">
                  <p className="text-white">
                    <span className="font-bold text-xl text-center">
                      {selectedCar.manufacturer} {selectedCar.model}
                      {color.name ? <span> in {color.name}</span> : ""}
                    </span>
                  </p>
                  <div className="flex flex-col">
                    {cars.map((car, index) =>
                      car.manufacturer !== selectedCar.manufacturer ? (
                        <button key={index} onClick={() => setSelectedCar(car)}>
                          {car.manufacturer} {car.model}
                        </button>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </div>
                <div>
                  {selectedCar.colors.map((color, index) => (
                    <button
                      key={index}
                      style={{ backgroundColor: color.hexCode }}
                      className="p-5 cursor-pointer"
                      onClick={() => setColor(color)}
                    />
                  ))}
                </div>
              </div>
              <Bottom {...selectedCar} />
            </main>
          </Html>
        </>
      )}
    </>
  );
};

export default ModelView;
