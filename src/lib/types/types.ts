export type CarManufacturer =
  | "Alfa Romeo"
  | "Lamborghini"
  | "Ferrari"
  | "Porsche"
  | "Dodge"
  | "Lexus"
  | "Nissan";

export type CarColorProps = {
  name: string;
  hexCode: string;
};

export type CarProps = {
  color: CarColorProps;
  children: React.ReactNode;
};

export type SelectedCarProps = {
  logo: string;
  country: string;
  manufacturer: string;
  model: string;
  year: string;
  sound?: string;
  colors: CarColorProps[];
  displacement: string;
  maxPower: string;
  torque: string;
  drivetrain: string;
  length: string;
  width: string;
  height: string;
  weight: string;
  description: string;
};

export type LoaderProps = {
  selectedCar: {
    manufacturer: string;
    model: string;
    logo: string;
  };
};

export type MenuContextTypes = {
  isInLandingMenu: boolean;
  setIsInLandingMenu: (value: boolean) => void;
};

export type CarSelectionContextTypes = {
  selectedCar: SelectedCarProps;
  setSelectedCar: (value: SelectedCarProps) => void;
};

export type CarColorContextTypes = {
  color: CarColorProps;
  setColor: (value: CarColorProps) => void;
};

export type UIVisibilityContextTypes = {
  isUIVisible: boolean;
  setIsUIVisible: (value: boolean) => void;
  toggleUI: () => void;
  playAudio: () => void;
};

export type ShowcaseUIProps = {
  selectedCar: SelectedCarProps;
  setSelectedCar: (selectedCar: SelectedCarProps) => void;
  isUIVisible: boolean;
  toggleUI: () => void;
  playAudio: () => void;
  color: CarColorProps;
  setColor: (color: CarColorProps) => void;
};