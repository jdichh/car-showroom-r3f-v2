import { Html } from "@react-three/drei";
import { useContext } from "react";
import { MenuContext } from "../../App";

const Menu = () => {
  const { isInMenu, setIsInMenu } = useContext(MenuContext);

  return (
    <Html
      center
      className="w-screen h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-white text-4xl mb-4">Welcome!</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={() => setIsInMenu(false)}
      >
        Start
      </button>
    </Html>
  );
};

export default Menu;
