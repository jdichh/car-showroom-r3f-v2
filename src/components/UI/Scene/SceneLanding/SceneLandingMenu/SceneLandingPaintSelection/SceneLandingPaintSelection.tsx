import { useSelectedCarStore } from "../../../../../../lib/zustandstores/selectedCarStore";
import { useCarColorStore } from "../../../../../../lib/zustandstores/carColorStore";
import { useUIStore } from "../../../../../../lib/zustandstores/uiStore";
import "./SceneLandingPaintSelection.css";

const SceneLandingPaintSelection = () => {
  const { color, setColor } = useCarColorStore();
  const { selectedCar } = useSelectedCarStore();
  const { isInPaintSelection, togglePaintSelection } = useUIStore();

  return (
    <>
      {isInPaintSelection ? (
        <>
          <div className="paint-sample-container">
            <div className="paint-samples">
              {selectedCar.colors.map((color, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: color.hexCode }}
                  className="paint-samples-button"
                  onClick={() => setColor(color)}
                  aria-label={`Change the current color to ${color.name}.`}
                />
              ))}
            </div>
            <button onClick={togglePaintSelection} className="ui-btn">
              Back
            </button>
          </div>
        </>
      ) : (
        <button onClick={togglePaintSelection} className="ui-btn">
          Paint
        </button>
      )}
    </>
  );
};

export default SceneLandingPaintSelection;
