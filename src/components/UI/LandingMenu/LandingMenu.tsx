import { useContext } from "react";
import { MenuContext } from "../../../lib/contexts/contexts";
import "./LandingMenu.css";
import background from "/images/bg.webp";

const Landing = () => {
  const { isInLandingMenu, setIsInLandingMenu } = useContext(MenuContext);

  return (
    <main className="landing-page bg-img">
      <div className="menu-container fade-in">
        <hgroup>
          <h2 className="text-white/50 text-left">Welcome to the</h2>
          <h1 className="title">Modern Classics Garage</h1>
          <h2 className="text-white/50">
            Explore the the classic cars of today.
          </h2>
        </hgroup>
        <button className="ui-btn" onClick={() => setIsInLandingMenu(false)}>
          Enter
        </button>
      </div>
    </main>
  );
};

export default Landing;
