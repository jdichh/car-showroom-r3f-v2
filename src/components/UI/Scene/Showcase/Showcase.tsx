import { useUIStore } from "../../../../lib/zustandstores/uiStore";
import ShowcaseCarDetails from "./ShowcaseCarDetails/ShowcaseCarDetails";
import ShowcaseCarLabel from "./ShowcaseCarLabel/ShowcaseCarLabel";
import ShowcaseHeader from "./ShowcaseHeader/ShowcaseHeader";

const Showcase = () => {
  const { isUIVisible, isInShowcaseMenu } = useUIStore();

  return (
    <div
      className={`${
        isUIVisible === false || isInShowcaseMenu === false
          ? "invisible ui-invisible-animation"
          : "visible main-ui-container ui-visible-animation"
      }`}
    >
      <ShowcaseHeader />
      <ShowcaseCarLabel />
      <ShowcaseCarDetails />
    </div>
  );
};

export default Showcase;
