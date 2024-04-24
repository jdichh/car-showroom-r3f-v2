import { useCarColorStore } from "../../../../../lib/zustandstores/carColorStore";
import { useSelectedCarStore } from "../../../../../lib/zustandstores/selectedCarStore";
import { useUIStore } from "../../../../../lib/zustandstores/uiStore";
import "./SceneLandingHeader.css";

const SceneLandingHeader = () => {
  const { selectedCar } = useSelectedCarStore();
  const { color } = useCarColorStore();

  return (
    <header className="scene-landing-header">
      <div className="text-white flex items-center gap-2">
        <img
          src={selectedCar.country}
          alt={selectedCar.country}
          width={20}
          height={20}
        />
        <p>
          {selectedCar.manufacturer}{" "}
          <span className="text-white/50">
            {selectedCar.model} in {color.name}
          </span>
        </p>
      </div>
      <div>
        <p className="text-white/30 text-right">Work in Progress.</p>
        <p className="text-white/30 text-right">Developed by Jason Dichoso.</p>
      </div>
    </header>
  );
};

export default SceneLandingHeader;
