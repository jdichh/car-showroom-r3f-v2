import { createContext, useContext } from "react";
import {
  CarColorContextTypes,
  CarSelectionContextTypes,
  MenuContextTypes,
  UIVisibilityContextTypes,
} from "../types/types";

export const MenuContext = createContext<MenuContextTypes>({
  isInLandingMenu: true,
  setIsInLandingMenu: () => {},
});

export const CarSelectionContext = createContext<
  CarSelectionContextTypes | undefined
>(undefined);

export const UIContext = createContext<UIVisibilityContextTypes>({
  isUIVisible: true,
  setIsUIVisible: () => {},
  toggleUI: () => {
    console.error("toggleUI() was called without a provider.");
  },
});

export const CarColorContext = createContext<CarColorContextTypes | undefined>(
  undefined
);

export const useCarSelection = () => {
  const ctx = useContext(CarSelectionContext);
  if (!ctx) {
    throw new Error(
      "useCarSelection must be used within a CarSelectionContext.Provider."
    );
  }
  return ctx;
};

export const useCarColorSelection = () => {
  const ctx = useContext(CarColorContext);
  if (!ctx) {
    throw new Error(
      "useCarColorSelection must be used within a CarColorSeletionContext.Provider."
    );
  }

  return ctx;
};
