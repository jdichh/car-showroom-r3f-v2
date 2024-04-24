import { useUIStore } from "../../../../lib/zustandstores/uiStore";
import ShowcaseCarDetails from "./ShowcaseCarDetails/ShowcaseCarDetails";
import ShowcaseCarLabel from "./ShowcaseCarLabel/ShowcaseCarLabel";
import ShowcaseHeader from "./ShowcaseHeader/ShowcaseHeader";
import "./Showcase.css";
import { createContext } from "react";

type ShowcaseProps = {
  startEngine: () => void;
};

export const EngineContext = createContext<ShowcaseProps>({
  startEngine: () => {
    console.error("playAudio() was called without a provider.");
  },
});

const Showcase = ({ startEngine }: ShowcaseProps) => {
  const { isUIVisible, isInShowcaseMenu } = useUIStore();

  return (
    <div className="showcase-container">
      <EngineContext.Provider value={{ startEngine }}>
        <ShowcaseHeader />
      </EngineContext.Provider>
      <div
        className={`${
          isUIVisible === false || isInShowcaseMenu === false
            ? "invisible ui-invisible-animation"
            : "visible main-ui-container ui-visible-animation"
        }`}
      >
        <ShowcaseCarLabel />
        <ShowcaseCarDetails />
      </div>
    </div>
  );
};

export default Showcase;
