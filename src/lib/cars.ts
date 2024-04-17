import placeholderLoading from "/placeholder_loading.webp";
import bmwLogo from "/logos/bmw_logo.webp";
import toyotaLogo from "/logos/toyota_logo.webp";
import nissanLogo from "/logos/nissan_logo.webp";

export const loadingScreen = placeholderLoading;
export const bmwLogo_2 = bmwLogo

export const cars = [
  {
    logo: bmwLogo,
    manufacturer: "BMW",
    model: "M3 Coupé",
    description: "test bmw description",
    colors: [
      {
        name: "Alpine White",
        hexCode: "#EDEBE8",
      },
      {
        name: "Carbon Black",
        hexCode: "#1A1412",
      },
      {
        name: "Imola Red",
        hexCode: "#B72C24",
      },
      {
        name: "Laguna Seca Blue",
        hexCode: "#63A7F4",
      },
      {
        name: "Phoenix Yellow",
        hexCode: "#E4D676",
      },
      {
        name: "Titanium Silver",
        hexCode: "#CBD1D6",
      },
    ],
  },
  {
    logo: nissanLogo,
    manufacturer: "Nissan",
    model: "Skyline GT-R (R32)",
    description: "test nissan description",
    colors: [
      {
        name: "Black",
        hexCode: "#202020",
      },
      {
        name: "Crystal White",
        hexCode: "#C5C5BD",
      },
      {
        name: "Dark Blue",
        hexCode: "#181831",
      },
      {
        name: "Grayish Blue",
        hexCode: "#8B8B94",
      },
      {
        name: "Gun Gray",
        hexCode: "#393929",
      },
      {
        name: "Red",
        hexCode: "#621020",
      },
    ],
  },
  {
    logo: toyotaLogo,
    manufacturer: "Toyota",
    model: "Supra RZ",
    description: "test toyota description",
    colors: [
      {
        name: "Black",
        hexCode: "#202020",
      },
      {
        name: "Blue Mica Metallic",
        hexCode: "#18296A",
      },
      {
        name: "Grayish Green Mica",
        hexCode: "#7B7B7B",
      },
      {
        name: "Super Bright Yellow",
        hexCode: "#FFFF00",
      },
      {
        name: "Super Red",
        hexCode: "#830820",
      },
      {
        name: "Super White",
        hexCode: "#CDCDBD",
      },
    ],
  },
];
