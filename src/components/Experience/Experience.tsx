import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Lighting from "../Lighting/Lighting";
import { useState } from "react";
import { carColors } from "../../lib/colors";
import { CarModel } from "../Model/Car/CarModel";

const Experience = () => {
  const [color, setColor] = useState({
    name: "Arancio Borealis",
    hexCode: "#FBA400",
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 5, 50]} fov={20} />
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.6}
        enablePan={false}
        minPolarAngle={0.75}
        maxPolarAngle={Math.PI - 1.6}
        enableZoom={true}
      />
      <Lighting />
      {/* temporary lighting */}
      {/* <ambientLight intensity={1} /> */}
      <CarModel color={color} />
      <Html fullscreen className="flex justify-end items-end border-white border">
        <div className="outline outline-white max-w-[500px] p-2">
          <p className="text-white">
            <span>current color is: </span>
            <span className="font-bold text-xl">{color.name}</span>
          </p>
          <ul>
            {carColors.map((color, index) => (
              <li
                key={index}
                style={{ backgroundColor: color.hexCode }}
                className="text-red-500 cursor-pointer"
                onClick={() => setColor(color)}
              >
                {color.name}
              </li>
            ))}
          </ul>
        </div>
      </Html>
    </>
  );
};

export default Experience;
