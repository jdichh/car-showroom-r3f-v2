import { PiGarageFill } from "react-icons/pi";
import { cars } from "../../../../../../lib/cars";
import { iconColor, iconSize } from "../../../../../../lib/constants/constants";
import { useSelectedCarStore } from "../../../../../../lib/zustandstores/selectedCarStore";
import { useUIStore } from "../../../../../../lib/zustandstores/uiStore";
import "./SceneLandingCarSelection.css";
import { IoCaretBackOutline } from "react-icons/io5";

const SceneLandingCarSelection = () => {
  const { selectedCar, setSelectedCar } = useSelectedCarStore();
  const { isInCarSelection, setIsInCarSelection, toggleCarSelection } =
    useUIStore();

  return (
    <>
      {isInCarSelection ? (
        <>
          <div className="car-selection-container">
            <button onClick={toggleCarSelection} className="ui-btn">
              <IoCaretBackOutline color={iconColor} size={iconSize} />
            </button>
            <ol className="car-selection-list">
              {cars.map((car, index) =>
                car.manufacturer !== selectedCar.manufacturer ? (
                  <li
                    key={index}
                    className="car-selection-btn"
                    onClick={() => {
                      setSelectedCar(car);
                      setIsInCarSelection(!isInCarSelection);
                    }}
                    aria-label={`Select the ${car.year} ${car.manufacturer} ${car.model}.`}
                  >
                    <img
                      src={car.logo}
                      alt={`${car.manufacturer} ${car.model}`}
                      height={40}
                      width={40}
                    />
                  </li>
                ) : (
                  ""
                )
              )}
            </ol>
          </div>
        </>
      ) : (
        <button onClick={toggleCarSelection} className="ui-btn">
          <PiGarageFill color={iconColor} size={iconSize} />
        </button>
      )}
    </>
  );
};

export default SceneLandingCarSelection;
