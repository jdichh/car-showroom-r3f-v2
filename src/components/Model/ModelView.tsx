import { Suspense, useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { cars } from "../../lib/cars";
import { F40 } from "./Car/fer_f40/Model";
import { Huracan } from "../Model/Car/lam_huracan/Model";
import { M3 } from "./Car/bmw_m3_touring/Model";
import Floor from "../Model/Floor/Floor";
import Top from "../UI/top/Top";
import Bottom from "../UI/bottom/Bottom";

type CarColor = {
  name: string;
  hexCode: string;
};

const ModelView = () => {
  const [color, setColor] = useState({
    name: "",
    hexCode: "#FBA400",
  });

  const [selectedCar, setSelectedCar] = useState<{
    manufacturer: string;
    model: string;
    description: string;
    colors: CarColor[];
  }>({
    manufacturer: "Lamborghini",
    model: "Huracan",
    description: "",
    colors: [],
  });

  useEffect(() => {
    if (selectedCar.colors.length > 0) {
      setColor(selectedCar.colors[0]);
    }
  }, [selectedCar]);

  return (
    <>
      {selectedCar.manufacturer === "Lamborghini" ? (
        <Suspense
          fallback={
            <Html
              fullscreen
              style={{ backgroundColor: "black" }}
              className="flex justify-center items-center"
            >
              <p className="text-white">LOADING</p>
            </Html>
          }
        >
          <Huracan color={color} />
        </Suspense>
      ) : selectedCar.manufacturer === "Ferrari" ? (
        <Suspense
          fallback={
            <Html
              fullscreen
              style={{ backgroundColor: "black" }}
              className="flex justify-center items-center"
            >
              <p className="text-white">LOADING</p>
            </Html>
          }
        >
          <F40 color={color} />
        </Suspense>
      ) : selectedCar.manufacturer === "BMW" ? (
        <Suspense
          fallback={
            <Html
              fullscreen
              style={{ backgroundColor: "black" }}
              className="flex justify-center items-center"
            >
              <p className="text-white">LOADING</p>
            </Html>
          }
        >
          <M3 color={color} />
        </Suspense>
      ) : (
        ""
      )}
      <Floor />

      <Html
        fullscreen
        className="flex flex-row justify-between border absolute"
      >
        <Top />
        <div className="flex flex-col outline outline-white">
          <div className="text-white flex flex-col">
            <p className="text-white">
              <span className="font-bold text-xl">
                {selectedCar.manufacturer} {selectedCar.model}
              </span>
            </p>
            <div className="flex flex-col">
              {cars.map((car, index) => (
                <button key={index} onClick={() => setSelectedCar(car)}>
                  {car.manufacturer}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-bold text-xl">{color.name}</p>
            <p className="text-white">{selectedCar.description}</p>
            <ul>
              {selectedCar.colors.map((color, index) => (
                <li
                  key={index}
                  style={{ backgroundColor: color.hexCode }}
                  className="w-full cursor-pointer"
                  onClick={() => setColor(color)}
                >
                  {color.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Bottom />
      </Html>
    </>
  );
};

export default ModelView;
