import { Suspense, useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { bmwLogo_2, cars } from "../../lib/cars";
import { E46M3 } from "./Car/m3_e46/Model";
import { SupraRZ } from "./Car/supra_rz/Model";
import { SkylineR32 } from "./Car/r32_gtr/Model";
import Floor from "../Model/Floor/Floor";
import Top from "../UI/top/Top";
import Bottom from "../UI/bottom/Bottom";


type CarColor = {
  name: string;
  hexCode: string;
};

const ModelView = () => {
  const [color, setColor] = useState({
    name: "Alpine White",
    hexCode: "#EDEBE8",
  });

  const [selectedCar, setSelectedCar] = useState<{
    manufacturer: string;
    model: string;
    description: string;
    colors: CarColor[];
    logo: string;
  }>({
    manufacturer: "BMW",
    model: "M3 Coupé",
    description: "",
    colors: [],
    logo: bmwLogo_2,
  });

  useEffect(() => {
    if (selectedCar.colors.length > 0) {
      setColor(selectedCar.colors[0]);
    }
  }, [selectedCar]);

  return (
    <>
      {selectedCar.manufacturer === "BMW" ? (
        <Suspense
          fallback={
            <Html
              fullscreen
              style={{ backgroundColor: "black" }}
              className="flex flex-col justify-center items-center"
            >
              <img src={selectedCar.logo} width={250} height={250} />
            </Html>
          }
        >
          <E46M3 color={color} />
        </Suspense>
      ) : selectedCar.manufacturer === "Nissan" ? (
        <Suspense
          fallback={
            <Html
              fullscreen
              style={{ backgroundColor: "black" }}
              className="flex flex-col justify-center items-center"
            >
              <img src={selectedCar.logo} width={250} height={250} />
            </Html>
          }
        >
          <SkylineR32 color={color} />
        </Suspense>
      ) : selectedCar.manufacturer === "Toyota" ? (
        <Suspense
          fallback={
            <Html
              fullscreen
              style={{ backgroundColor: "black" }}
              className="flex flex-col justify-center items-center"
            >
              <img src={selectedCar.logo} width={250} height={250} />
            </Html>
          }
        >
          <SupraRZ color={color} />
        </Suspense>
      ) : (
        ""
      )}
      <Floor />

      <Html fullscreen className="flex flex-col justify-end items-end absolute">
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
  );
};

export default ModelView;
