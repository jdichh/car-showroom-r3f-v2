export type CarManufacturer =
  | "Lamborghini"
  | "Ferrari"
  | "Ford"
  | "Porsche"
  | "Dodge"
  | "Lexus"
  | "Nissan"
  | "Mercedes-Benz"
  | "Chevrolet";

export type LoaderProps = {
  selectedCar: {
    manufacturer: string;
    model: string;
    logo: string;
  };
};

export type CarColorProps = {
  name: string;
  hexCode: string;
};
