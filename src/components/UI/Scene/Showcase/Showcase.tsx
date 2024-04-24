import { useUIStore } from "../../../../lib/zustandstores/uiStore";
import ShowcaseCarDetails from "./ShowcaseCarDetails/ShowcaseCarDetails";
import ShowcaseCarLabel from "./ShowcaseCarLabel/ShowcaseCarLabel";
import ShowcaseHeader from "./ShowcaseHeader/ShowcaseHeader";

const Showcase = () => {
  const { isUIVisible, isInShowcaseMenu } = useUIStore();

  return (
    <div className="flex flex-col h-full">
      <ShowcaseHeader />
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
