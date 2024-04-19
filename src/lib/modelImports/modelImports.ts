import { lazy } from "react";

export const Giulia = lazy(() =>
  import("../../components/Model/Car/giulia_gtam/Model").then(({ Giulia }) => ({ default: Giulia }))
);
export const F12 = lazy(() =>
  import("../../components/Model/Car/f12/Model").then(({ F12 }) => ({
    default: F12,
  }))
);
export const AventadorSV = lazy(() =>
  import("../../components/Model/Car/aventador_sv/Model").then(({ AventadorSV }) => ({
    default: AventadorSV,
  }))
);
