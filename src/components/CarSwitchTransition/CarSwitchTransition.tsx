import { Html } from "@react-three/drei";
import { LoaderProps } from "../../lib/types/types";
import './CarSwitchTransition.css'

const CarSwitchTransition = ({ selectedCar }: LoaderProps) => {
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
      />
    </Html>
  );
};

export default CarSwitchTransition;
