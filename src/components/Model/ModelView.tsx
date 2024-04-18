import { Suspense, lazy, useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { cars } from "../../lib/cars";
import Floor from "../Model/Floor/Floor";
import alfaLogo from "/logos/alfa.webp";

const Giulia = lazy(() =>
  import("./Car/giulia_gtam/Model").then(({ Giulia }) => ({ default: Giulia }))
);
const F12 = lazy(() =>
  import("./Car/f12/Model").then(({ F12 }) => ({
    default: F12,
  }))
);
const AventadorSV = lazy(() =>
  import("./Car/aventador_sv/Model").then(({ AventadorSV }) => ({
    default: AventadorSV,
  }))
);

type CarColorProps = {
  name: string;
  hexCode: string;
};

type SelectedCarProps = {
  manufacturer: string;
  model: string;
  description: string;
  colors: CarColorProps[];
  logo: string;
};

type LoaderProps = {
  selectedCar: {
    manufacturer: string;
    model: string;
    logo: string;
  };
};

const Loader = ({ selectedCar }: LoaderProps) => {
  return (
    <Html
      fullscreen
      style={{ backgroundColor: "black" }}
      className="flex flex-col justify-center items-center"
    >
      <img src={selectedCar.logo} width={250} height={250} />
    </Html>
  );
};

const ModelView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(false);

  const [color, setColor] = useState({
    name: "Alpine White",
    hexCode: "#C4C4C4",
  });

  const [selectedCar, setSelectedCar] = useState<SelectedCarProps>({
    manufacturer: "Alfa Romeo",
    model: "Giulia GTAm",
    description: "",
    colors: [],
    logo: alfaLogo,
  });

  useEffect(() => {
    setIsModelLoading(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsModelLoading(false);
      setIsLoading(false);

      setSelectedCar(selectedCar);
    }, 2000);

    if (selectedCar.colors.length > 0) {
      setColor(selectedCar.colors[0]);
    }
  }, [selectedCar]);

  return (
    <>
      {isLoading || isModelLoading ? (
        <Loader selectedCar={selectedCar} />
      ) : (
        <>
          {selectedCar.manufacturer === "Alfa Romeo" ? (
            <Suspense fallback={<Loader selectedCar={selectedCar} />}>
              <Giulia color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Lamborghini" ? (
            <Suspense fallback={<Loader selectedCar={selectedCar} />}>
              <AventadorSV color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Ferrari" ? (
            <Suspense fallback={<Loader selectedCar={selectedCar} />}>
              <F12 color={color} />
            </Suspense>
          ) : (
            ""
          )}

          <Floor />
          <Html
            fullscreen
            className="flex flex-col justify-end items-end absolute"
          >
            {/* <Top /> */}
            <div className="flex flex-col outline outline-white p-2">
              <div className="text-white flex flex-col">
                <p className="text-white">
                  <span className="font-bold text-xl text-center">
                    {selectedCar.manufacturer} {selectedCar.model}
                    {color.name ? <span> in {color.name}</span> : ""}
                  </span>
                </p>
                <p className="text-white">{selectedCar.description}</p>
                <div className="flex flex-col">
                  {cars.map((car, index) => (
                    <button key={index} onClick={() => setSelectedCar(car)}>
                      {car.manufacturer} {car.model}
                    </button>
                  ))}
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
            {/* <Bottom /> */}
          </Html>
        </>
      )}
    </>
  );
};

export default ModelView;
