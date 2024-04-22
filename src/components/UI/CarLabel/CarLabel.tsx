// this component contains the name, model & year of the car

import {
  useCarColorSelection,
  useCarSelection,
} from "../../../lib/contexts/contexts";
import "./CarLabel.css";

const CarLabel = () => {
  const { selectedCar, setSelectedCar } = useCarSelection();
  const { color, setColor } = useCarColorSelection();

  return (
    <section id="middle">
      <div className="logo-and-paint-container">
        <img
          src={selectedCar.logo}
          height={100}
          width={selectedCar.manufacturer === "Dodge" ? 200 : 100}
        />
        <div className="paint-sample-container">
          <div className="paint-samples">
            {selectedCar.colors.map((color, index) => (
              <button
                key={index}
                style={{ backgroundColor: color.hexCode }}
                className="paint-samples-button"
                onClick={() => setColor(color)}
              />
            ))}
          </div>
          <p className="mt-2">{color.name}</p>
        </div>
      </div>
      <hgroup className="current-car-container font-fjalla">
        <div className="current-car">
          <img
            src={selectedCar.country}
            alt={selectedCar.country}
            width={25}
            height={25}
          />
          <h2 className="text-2xl">{selectedCar.manufacturer} </h2>
        </div>

        <h3 className="text-7xl">{selectedCar.model}</h3>
        <h4 className="text-2xl">{selectedCar.year}</h4>
      </hgroup>
      <div />
    </section>
  );
};

export default CarLabel;
