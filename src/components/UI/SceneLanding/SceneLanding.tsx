import { useUIStore } from "../../../lib/zustandstores/uiStore";

const SceneLanding = () => {
  const { isUIVisible, setIsInShowcaseMenu } = useUIStore();
  const { toggleUI } = useUIStore();

  const scenelanding = () => {
    setIsInShowcaseMenu(true);
    if (isUIVisible === false) {
      toggleUI();
    }
  };

  return (
    <button onClick={() => scenelanding()} className="ui-btn fade-down">
      showcase
    </button>
  );
};

export default SceneLanding;
