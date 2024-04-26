import { IoCaretBackOutline } from "react-icons/io5";
import { PiPaintBucketFill } from "react-icons/pi";
import { iconColor, iconSize } from "../../../../../../lib/constants/constants";
import { useCarColorStore } from "../../../../../../lib/zustandstores/carColorStore";
import { useSelectedCarStore } from "../../../../../../lib/zustandstores/selectedCarStore";
import { useUIStore } from "../../../../../../lib/zustandstores/uiStore";
import "./SceneLandingPaintSelection.css";

const SceneLandingPaintSelection = () => {
  const { setColor } = useCarColorStore();
  const { selectedCar } = useSelectedCarStore();
  const { isInPaintSelection, togglePaintSelection } = useUIStore();

  return (
    <>
      {isInPaintSelection ? (
        <>
          <div className="paint-sample-container">
          <button onClick={togglePaintSelection} className="ui-btn">
              <IoCaretBackOutline color={iconColor} size={iconSize} />
            </button>
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
          </div>
        </>
      ) : (
        <button onClick={togglePaintSelection} className="ui-btn">
          <PiPaintBucketFill color={iconColor} size={iconSize} />
        </button>
      )}
    </>
  );
};

export default SceneLandingPaintSelection;
