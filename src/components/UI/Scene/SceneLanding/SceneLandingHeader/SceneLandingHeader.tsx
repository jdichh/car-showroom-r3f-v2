import { useSelectedCarStore } from "../../../../../lib/zustandstores/selectedCarStore";
import { useUIStore } from "../../../../../lib/zustandstores/uiStore";
import "./SceneLandingHeader.css";

const SceneLandingHeader = () => {
  const { isUIVisible, setIsInShowcaseMenu, toggleUI } = useUIStore();
  const { selectedCar } = useSelectedCarStore();

  const resetUIVisibility = () => {
    setIsInShowcaseMenu(true);
    if (isUIVisible === false) {
      toggleUI();
    }
  };

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
          <span className="text-white/50">{selectedCar.model}</span>
        </p>
      </div>
      <button className="ui-btn" onClick={() => resetUIVisibility()}>
        Showcase
      </button>
    </header>
  );
};

export default SceneLandingHeader;
