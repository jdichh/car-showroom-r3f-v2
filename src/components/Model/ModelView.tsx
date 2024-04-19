import { Suspense, lazy, useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { cars } from "../../lib/cars";
import Floor from "../Model/Floor/Floor";
import Bottom from "../UI/bottom/Bottom";
import Top from "../UI/top/Top";

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
    manufacturer: cars[0].manufacturer,
    model: cars[0].model,
    description: cars[0].description,
    colors: cars[0].colors,
    logo: cars[0].logo,
  });

  useEffect(() => {
    setIsModelLoading(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsModelLoading(false);
      setIsLoading(false);

      setSelectedCar(selectedCar);
    }, 500);

    if (selectedCar.colors.length > 0) {
      setColor(selectedCar.colors[0]);
    }
  }, [selectedCar]);

  return (
    <>
      <Floor />
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

          
            <Html fullscreen className="border border-yellow-600">
              <main className="max-w-[1920px] mx-auto border border-red-800 h-full flex flex-col justify-between">
                <Top />
                <div className="flex flex-colp-2">
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
                <Bottom />
              </main>
              
            </Html>
            
          
        </>
      )}
    </>
  );
};

export default ModelView;
