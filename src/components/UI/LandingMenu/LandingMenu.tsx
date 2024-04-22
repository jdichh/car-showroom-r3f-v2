import { useContext } from "react";
import { MenuContext } from "../../../lib/contexts/contexts";

const Landing = () => {
  const { isInLandingMenu, setIsInLandingMenu } = useContext(MenuContext);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-4">Welcome!</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={() => setIsInLandingMenu(false)}
      >
        Start
      </button>
    </div>
  );
};

export default Landing;
