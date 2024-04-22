import { lazy } from "react";

export const Giulia = lazy(() =>
  import("../../components/Scene/Car/giulia_gtam/Model").then(({ Giulia }) => ({
    default: Giulia,
  }))
);
export const F12 = lazy(() =>
  import("../../components/Scene/Car/f12/Model").then(({ F12 }) => ({
    default: F12,
  }))
);
export const Huracan = lazy(() =>
  import("../../components/Scene/Car/huracan/Model").then(({ Huracan }) => ({
    default: Huracan,
  }))
);
export const GTR = lazy(() =>
  import("../../components/Scene/Car/gtr/Model").then(({ GTR }) => ({
    default: GTR,
  }))
);
export const Porsche911 = lazy(() =>
  import("../../components/Scene/Car/911gt3rs/Model").then(({ Porsche911 }) => ({
    default: Porsche911,
  }))
);
export const Viper = lazy(() =>
  import("../../components/Scene/Car/viper/Model").then(({ Viper }) => ({
    default: Viper,
  }))
);
export const LFA = lazy(() =>
  import("../../components/Scene/Car/lfa/Model").then(({ LFA }) => ({
    default: LFA,
  }))
);
export const GT350R = lazy(() =>
  import("../../components/Scene/Car/gt350r/Model").then(({ GT350R }) => ({
    default: GT350R,
  }))
);
