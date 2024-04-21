import { lazy } from "react";

export const Giulia = lazy(() =>
  import("../../components/Model/Car/giulia_gtam/Model").then(({ Giulia }) => ({
    default: Giulia,
  }))
);
export const F12 = lazy(() =>
  import("../../components/Model/Car/f12/Model").then(({ F12 }) => ({
    default: F12,
  }))
);
export const Huracan = lazy(() =>
  import("../../components/Model/Car/huracan/Model").then(({ Huracan }) => ({
    default: Huracan,
  }))
);
export const Porsche918 = lazy(() =>
  import("../../components/Model/Car/918/Model").then(({ Porsche918 }) => ({
    default: Porsche918,
  }))
);
export const Viper = lazy(() =>
  import("../../components/Model/Car/viper/Model").then(({ Viper }) => ({
    default: Viper,
  }))
);
export const LFA = lazy(() =>
  import("../../components/Model/Car/lfa/Model").then(({ LFA }) => ({
    default: LFA,
  }))
);
