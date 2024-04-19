import { SelectedCarProps } from "../../../lib/types/types";
import "./Bottom.css";

const Bottom = (selectedCar: SelectedCarProps) => {
  return (
    <div className="main-container">
      <div className="car-information">
        <div className="car-information-container">
          <p className="detail">
            <span>Displacement</span>
            <span className="detail-number">{selectedCar.displacement}</span>
          </p>
        </div>
        <div className="car-information-container">
          <p className="detail">
            <span>Max. Power</span>
            <span className="detail-number">{selectedCar.maxPower}</span>
          </p>
        </div>
        <div className="car-information-container">
          <span className="detail">
            <span>Max. Torque</span>
            <span className="detail-number">{selectedCar.torque}</span>
          </span>
        </div>
        <div className="car-information-container">
          <p className="detail">
            <span>Drivetrain</span>
            <span className="detail-number">{selectedCar.drivetrain}</span>
          </p>
        </div>
        <div className="car-information-container">
          <p className="detail">
            <span>Length</span>
            <span className="detail-number">{selectedCar.length}</span>
          </p>
        </div>
        <div className="car-information-container">
          <p className="detail">
            <span>Width</span>
            <span className="detail-number">{selectedCar.width}</span>
          </p>
        </div>
        <div className="car-information-container">
          <p className="detail">
            <span>Height</span>
            <span className="detail-number">{selectedCar.height}</span>
          </p>
        </div>
        <div className="car-information-container">
          <p className="detail">
            <span>Weight</span>
            <span className="detail-number">{selectedCar.weight}</span>
          </p>
        </div>
      </div>
      <div className="slider">
        <p className="sliding-text">{selectedCar.description}</p>
      </div>
    </div>
  );
};

export default Bottom;
