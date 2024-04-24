export type CarManufacturer =
  | "Lamborghini"
  | "Ferrari"
  | "Ford"
  | "Porsche"
  | "Dodge"
  | "Lexus"
  | "Nissan"
  | "Mercedes-AMG";
  
export type LoaderProps = {
  selectedCar: {
    manufacturer: string;
    model: string;
    logo: string;
  };
};
