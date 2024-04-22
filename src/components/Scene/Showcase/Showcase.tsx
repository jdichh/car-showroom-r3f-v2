import {
    CarColorContext,
    CarSelectionContext,
    UIContext,
} from "../../../lib/contexts/contexts";
import { ShowcaseUIProps } from "../../../lib/types/types";
import CarDetails from "../../UI/CarDetails/CarDetails";
import CarLabel from "../../UI/CarLabel/CarLabel";
import CarSelection from "../../UI/CarSelection/CarSelection";

const ShowcaseUI = ({
  selectedCar,
  setSelectedCar,
  isUIVisible,
  playAudio,
  toggleUI,
  color,
  setColor,
}: ShowcaseUIProps) => {
  return (
    <main
      className={`${
        isUIVisible === false
          ? "invisible ui-invisible-animation"
          : "visible main-ui-container ui-visible-animation"
      }`}
    >
      <CarSelectionContext.Provider value={{ selectedCar, setSelectedCar }}>
        {/* top part */}
        <UIContext.Provider
          value={{ isUIVisible, setIsUIVisible: () => {}, toggleUI, playAudio }}
        >
          <CarSelection />
        </UIContext.Provider>

        {/* middle part */}
        <CarColorContext.Provider value={{ color, setColor }}>
          <CarLabel />
        </CarColorContext.Provider>
      </CarSelectionContext.Provider>

      {/* bottom part */}
      <CarDetails {...selectedCar} />
    </main>
  );
};

export default ShowcaseUI;
