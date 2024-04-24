import { useSelectedCarStore } from "../../../lib/zustandstores/selectedCarStore";
import { useUIStore } from "../../../lib/zustandstores/uiStore";
import CarDetails from "../CarDetails/CarDetails";
import CarLabel from "../CarLabel/CarLabel";
import CarSelection from "../CarSelection/CarSelection";

const ShowcaseUI = () => {
  const { selectedCar } = useSelectedCarStore();
  const { isUIVisible, isInShowcaseMenu } = useUIStore();

  return (
    <main
      className={`${
        isUIVisible === false || isInShowcaseMenu === false
          ? "invisible ui-invisible-animation"
          : "visible main-ui-container ui-visible-animation"
      }`}
    >
      <CarSelection />

      <CarLabel />

      <CarDetails {...selectedCar} />
    </main>
  );
};

export default ShowcaseUI;
