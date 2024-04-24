import { useUIStore } from "../../../../lib/zustandstores/uiStore";
import "./SceneLanding.css";
import SceneLandingHeader from "./SceneLandingHeader/SceneLandingHeader";
import SceneLandingCarSelection from "./SceneLandingMenu/SceneLandingCarSelection/SceneLandingCarSelection";
import SceneLandingPaintSelection from "./SceneLandingMenu/SceneLandingPaintSelection/SceneLandingPaintSelection";

const SceneLanding = () => {
  const {
    isInCarSelection,
    isInPaintSelection,
    isUIVisible,
    setIsInShowcaseMenu,
    toggleUI,
  } = useUIStore();

  const resetUIVisibility = () => {
    setIsInShowcaseMenu(true);
    if (isUIVisible === false) {
      toggleUI();
    }
  };

  return (
    <div className="main-ui-container">
      <SceneLandingHeader />
      <div className="scene-landing-menu">
        {!isInCarSelection && !isInPaintSelection && (
          <button className="ui-btn" onClick={() => resetUIVisibility()}>
            Showcase
          </button>
        )}
        {!isInPaintSelection && <SceneLandingCarSelection />}
        {!isInCarSelection && <SceneLandingPaintSelection />}
      </div>
    </div>
  );
};

export default SceneLanding;
