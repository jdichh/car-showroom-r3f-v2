import { useContext } from "react";
import { cars } from "../../../lib/cars";
import { UIContext, useCarSelection } from "../../../lib/contexts/contexts";
import "./CarSelection.css";

const CarSelection = () => {
  const { selectedCar, setSelectedCar } = useCarSelection();
  const { isUIVisible, setIsUIVisible, toggleUI, playAudio } =
    useContext(UIContext);
  return (
    <section id="top">
      <div className="car-selection-container">
        {cars.map((car, index) =>
          car.manufacturer !== selectedCar.manufacturer ? (
            <button
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
            </button>
          ) : (
            ""
          )
        )}
      </div>
      <div className="flex gap-2">
        <button className="ui-btn" onClick={playAudio} aria-label="Start engine.">
          Start Up
        </button>
        <button onClick={toggleUI} className="ui-btn" aria-label="Toggle the user interface.">
          {isUIVisible === false ? "Show UI" : "Hide UI"}
        </button>
      </div>
    </section>
  );
};

export default CarSelection;
