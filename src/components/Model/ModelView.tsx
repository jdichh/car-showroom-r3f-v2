import { Suspense, lazy, useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { bmwLogo_2, cars } from "../../lib/cars";
import Floor from "../Model/Floor/Floor";

// import { M3Touring } from "./Car/m3_touring/Model";
// import { NineEleven } from "./Car/911_gt3rs/Model";
// import { SL63 } from "./Car/sl63/Model";
// import { C8 } from "./Car/c8/Model";

const C8 = lazy(() =>
  import("./Car/c8/Model").then(({ C8 }) => ({ default: C8 }))
);
const M3Touring = lazy(() =>
  import("./Car/m3_touring/Model").then(({ M3Touring }) => ({
    default: M3Touring,
  }))
);
const NineEleven = lazy(() =>
  import("./Car/911_gt3rs/Model").then(({ NineEleven }) => ({
    default: NineEleven,
  }))
);
const SL63 = lazy(() =>
  import("./Car/sl63/Model").then(({ SL63 }) => ({ default: SL63 }))
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
    manufacturer: "BMW",
    model: "M3 Competition Touring",
    description: "",
    colors: [],
    logo: bmwLogo_2,
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
          {selectedCar.manufacturer === "BMW" ? (
            <Suspense fallback={<Loader selectedCar={selectedCar} />}>
              <M3Touring color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Porsche" ? (
            <Suspense fallback={<Loader selectedCar={selectedCar} />}>
              <NineEleven color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Mercedes-AMG" ? (
            <Suspense fallback={<Loader selectedCar={selectedCar} />}>
              <SL63 color={color} />
            </Suspense>
          ) : selectedCar.manufacturer === "Chevrolet" ? (
            <Suspense fallback={<Loader selectedCar={selectedCar} />}>
              <C8 color={color} />
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
