import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { LoaderProps } from "../../lib/types/types";
import "./CarSwitchTransition.css";

const CarSwitchTransition = ({ selectedCar }: LoaderProps) => {
  const [pulsateIcon, setPulsateIcon] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setPulsateIcon(true);
    }, 1000);
  }, []);

  return (
    <Html
      fullscreen
      style={{ backgroundColor: "#080706" }}
      className="car-switch-transition"
    >
      <img
        src={selectedCar.logo}
        width={250}
        height={250}
        alt={selectedCar.manufacturer}
        className={`${pulsateIcon ? "animate-pulse" : ""}`}
      />
    </Html>
  );
};

export default CarSwitchTransition;
