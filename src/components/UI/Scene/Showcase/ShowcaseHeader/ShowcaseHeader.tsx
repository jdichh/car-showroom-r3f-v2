import { useEngineSoundStore } from "../../../../../lib/zustandstores/engineSoundStore";
import { useUIStore } from "../../../../../lib/zustandstores/uiStore";
import "./ShowcaseHeader.css";

const ShowcaseHeader = () => {
  const {
    isUIVisible,
    toggleUI,
    toggleShowcaseMenu,
    isInCarSelection,
    isInPaintSelection,
    setIsInCarSelection,
    setIsInPaintSelection,
  } = useUIStore();
  const { startEngine } = useEngineSoundStore();

  const uiHandler = () => {
    toggleShowcaseMenu();
    if (isInCarSelection) {
      setIsInCarSelection(false);
    }
    if (isInPaintSelection) {
      setIsInPaintSelection(false);
    }
  };

  const handleStartEngine = () => {
    startEngine();
  };

  return (
    <header className="showcase-header">
      <div className="flex gap-2">
        <button
          onClick={() => uiHandler()}
          className="ui-btn"
          aria-label="Toggle the user interface."
        >
          Back
        </button>
      </div>
      <div className="flex gap-2">
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
    </header>
  );
};

export default ShowcaseHeader;
