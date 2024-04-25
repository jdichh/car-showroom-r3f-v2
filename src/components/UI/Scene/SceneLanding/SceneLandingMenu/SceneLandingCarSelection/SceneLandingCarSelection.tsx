import { useSelectedCarStore } from "../../../../../../lib/zustandstores/selectedCarStore";
import { useUIStore } from "../../../../../../lib/zustandstores/uiStore";
import { cars } from "../../../../../../lib/cars";
import "./SceneLandingCarSelection.css";

const SceneLandingCarSelection = () => {
  const { selectedCar, setSelectedCar } = useSelectedCarStore();
  const { isInCarSelection, toggleCarSelection } = useUIStore();

  return (
    <>
      {isInCarSelection ? (
        <>
          <div className="car-selection-container">
            <ol className="car-selection-list">
              {cars.map((car, index) =>
                car.manufacturer !== selectedCar.manufacturer ? (
                  <li
                    key={index}
                    className="car-selection-btn"
                    onClick={() => setSelectedCar(car)}
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
            <button onClick={toggleCarSelection} className="ui-btn">
              Back
            </button>
          </div>
        </>
      ) : (
        <button onClick={toggleCarSelection} className="ui-btn">
          Garage
        </button>
      )}
    </>
  );
};

export default SceneLandingCarSelection;
