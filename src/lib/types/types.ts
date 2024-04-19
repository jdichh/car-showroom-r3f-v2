export type CarColorProps = {
  name: string;
  hexCode: string;
};

export type SelectedCarProps = {
  logo: string;
  manufacturer: string;
  model: string;
  year: string;
  colors: CarColorProps[];
  displacement: string;
  maxPower: string;
  torque: string;
  drivetrain: string;
  length: string;
  width:string;
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
