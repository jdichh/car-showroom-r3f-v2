import { useContext } from "react";
import { cars } from "../../../lib/cars";
import { UIContext, useCarSelection } from "../../../lib/contexts/contexts";
import "./CarSelection.css";

const CarSelection = () => {
  const { selectedCar, setSelectedCar } = useCarSelection();
  const { isUIVisible, setIsUIVisible, toggleUI } = useContext(UIContext);
  return (
    <section id="top">
      <div className="car-selection-container">
        {cars.map((car, index) =>
          car.manufacturer !== selectedCar.manufacturer ? (
            <button
              key={index}
              className="car-selection-btn"
              onClick={() => setSelectedCar(car)}
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
      <button onClick={toggleUI} className="toggle-ui-btn">
        {isUIVisible === false ? "Show UI" : "Hide UI"}
      </button>
    </section>
  );
};

export default CarSelection;
