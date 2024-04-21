import { Html } from "@react-three/drei";
import { LoaderProps } from "../../lib/types/types";

const CarSwitchTransition = ({ selectedCar }: LoaderProps) => {
  return (
    <Html
      fullscreen
      style={{ backgroundColor: "black" }}
      className="flex flex-col justify-center items-center"
    >
      <img
        className={`logo transition-opacity duration-1000 ease-in-out`}
        src={selectedCar.logo}
        width={250}
        height={250}
      />
    </Html>
  );
};

export default CarSwitchTransition;
