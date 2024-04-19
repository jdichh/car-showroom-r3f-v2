import { Html } from "@react-three/drei";
import { LoaderProps } from "../../lib/types/types";

const LoadingLogo = ({ selectedCar }: LoaderProps) => {
  return (
    <Html
      fullscreen
      style={{ backgroundColor: "black" }}
      className="flex flex-col justify-center items-center z-[1000]"
    >
      <img src={selectedCar.logo} width={250} height={250} />
    </Html>
  );
};

export default LoadingLogo;
