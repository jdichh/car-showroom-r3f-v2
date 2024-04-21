import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { LoaderProps } from "../../lib/types/types";

const LoadingLogo = ({ selectedCar }: LoaderProps) => {
 const [opacity, setOpacity] = useState(0);

 useEffect(() => {
    setOpacity(1);

    const fadeOutTimeout = setTimeout(() => {
      setOpacity(0);
    }, 2000); 

    return () => clearTimeout(fadeOutTimeout);
 }, []); 

 return (
    <Html
      fullscreen
      style={{ backgroundColor: "black" }}
      className="flex flex-col justify-center items-center z-[1000] h-screen"
    >
      <img
        className={`logo transition-opacity duration-500 ease-in-out ${opacity === 0 ? 'opacity-0' : 'opacity-100'}`}
        src={selectedCar.logo}
        width={250}
        height={250}
      />
    </Html>
 );
};

export default LoadingLogo;