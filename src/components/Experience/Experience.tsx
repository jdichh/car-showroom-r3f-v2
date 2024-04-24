import { Suspense } from "react";
import Scene from "../Scene/Scene";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

export const maxDistance = 33;

// add car selection between landing and scene
const Experience = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Scene />
    </Suspense>
  );
};

export default Experience;
