import { createContext } from "react";
import { MenuContextTypes } from "../types/types";

export const MenuContext = createContext<MenuContextTypes>({
    isInLandingMenu: true,
    setIsInLandingMenu: () => {},
  });
  