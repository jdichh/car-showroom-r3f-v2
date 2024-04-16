import { Box, Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ModelView from "../Model/ModelView";
import Lighting from "../Lighting/Lighting";
import { useState } from "react";
import { carColors } from "../../lib/colors";
import { CarModel } from "../Model/Car/CarModel";
import * as THREE from "three";

const Experience = () => {
  const [color, setColor] = useState({
    name: "Bianco Monocerus",
    hexCode: "#E2E2DE",
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
        enableZoom={false}
      />
      <Lighting />
      {/* temporary lighting */}
      {/* <ambientLight intensity={1} /> */}
      <CarModel color={color} />
      <Html fullscreen>
        <div>
          <p className="text-white">
            <span>current color is: </span>
            <span className="font-bold text-xl">{color.name}</span>
          </p>
          <ul>
            {carColors.map((color) => (
              <li
                key={color.id}
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
