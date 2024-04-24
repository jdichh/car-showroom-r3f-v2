import { cars } from "../../../lib/cars";
import { useEngineSoundStore } from "../../../lib/zustandstores/engineSoundStore";
import { useSelectedCarStore } from "../../../lib/zustandstores/selectedCarStore";
import { useUIStore } from "../../../lib/zustandstores/uiStore";
import "./CarSelection.css";

const CarSelection = () => {
  const { selectedCar, setSelectedCar } = useSelectedCarStore();
  const { isUIVisible, toggleUI, toggleShowcaseMenu } = useUIStore();
  const { startEngine } = useEngineSoundStore();
  
  const handleStartEngine = () => {
    startEngine()
  }

  return (
    <header id="top">
      <div className="flex gap-2">
        <button
          onClick={toggleShowcaseMenu}
          className="ui-btn"
          aria-label="Toggle the user interface."
        >
          Back
        </button>
        <button
          onClick={handleStartEngine}
          className="ui-btn"
          aria-label="Start engine."
        >
          Start Up
        </button>
        <button
          onClick={toggleUI}
          className="ui-btn"
          aria-label="Toggle the user interface."
        >
          {isUIVisible === false ? "Show UI" : "Hide UI"}
        </button>
      </div>
      <ol className="car-selection-container">
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
                height={35}
                width={35}
              />
            </li>
          ) : (
            ""
          )
        )}
      </ol>
    </header>
  );
};

export default CarSelection;
