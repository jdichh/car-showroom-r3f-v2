import { Html } from "@react-three/drei";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <Html
      center
      className="w-screen h-screen flex  justify-center items-center"
    >
      <div id="loading-container">
        <div id="loading-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Html>
  );
};

export default LoadingSpinner;
