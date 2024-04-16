import { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { cars } from "../../lib/cars";
import { F40 } from "./Car/fer_f40/Model";
import { Huracan } from "../Model/Car/lam_huracan/Model";
import { M3 } from "./Car/bmw_m3_touring/Model";
import Floor from "../Model/Floor/Floor";

type CarColor = {
  name: string;
  hexCode: string;
};

const ModelView = () => {
  const [color, setColor] = useState({
    name: "",
    hexCode: "",
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
    colors: []
  });

  useEffect(() => {
    if (selectedCar.colors.length > 0) {
      setColor(selectedCar.colors[0]);
    }
  }, [selectedCar]);

  return (
    <>
      {selectedCar.manufacturer === "Lamborghini" ? (
        <Huracan color={color} />
      ) : selectedCar.manufacturer === "Ferrari" ? (
        <F40 color={color} />
      ) : selectedCar.manufacturer === "BMW" ? (
        <M3 color={color} />
      ) : ""}
      <Floor />
      <Html fullscreen className="flex justify-end items-between">
        <div className="flex flex-col">
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
            <p className="text-white font-bold text-xl">
              {color.name}
            </p>
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
      </Html>
    </>
  );
};

export default ModelView;
