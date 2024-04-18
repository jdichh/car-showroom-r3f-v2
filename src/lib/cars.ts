import bmwLogo from "/logos/bmw_logo.webp";
import toyotaLogo from "/logos/toyota_logo.webp";
import nissanLogo from "/logos/nissan_logo.webp";
import alfaLogo from "/logos/alfa.webp";
import lamboLogo from "/logos/lambo.webp";
import ferrariLogo from "/logos/ferrari.webp";

export const cars = [
  {
    logo: alfaLogo,
    manufacturer: "Alfa Romeo",
    model: "Giulia GTAm",
    description: "test alfa description",
    colors: [
      {
        name: "Alpine White",
        hexCode: "#C4C4C4",
      },
      {
        name: "Black Sapphire",
        hexCode: "#060606",
      },
    ],
  },
  {
    logo: lamboLogo,
    manufacturer: "Lamborghini",
    model: "Aventador SV",
    description: "test lambo description",
    colors: [
      {
        name: "Accelerate Yellow",
        hexCode: "#EBE434",
      },
      {
        name: "Arctic White",
        hexCode: "#FFFFFF",
      },
    ],
  },
  {
    logo: ferrariLogo,
    manufacturer: "Ferrari",
    model: "F12berlinetta",
    description: "test ferrari description",
    colors: [
      {
        name: "Red",
        hexCode: "#FF0000",
      },
      {
        name: "Arctic White",
        hexCode: "#FFFFFF",
      },
    ],
  },
];
