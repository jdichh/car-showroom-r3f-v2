import bmwLogo from "/logos/bmw_logo.webp";
import toyotaLogo from "/logos/toyota_logo.webp";
import lexusLogo from "/logos/lexus.webp";
import alfaLogo from "/logos/alfa.webp";
import lamboLogo from "/logos/lambo.webp";
import ferrariLogo from "/logos/ferrari.webp";
import porscheLogo from "/logos/porsche.webp";
import dodgeLogo from "/logos/dodge.webp"

export const cars = [
  {
    logo: alfaLogo,
    manufacturer: "Alfa Romeo",
    model: "Giulia GTAm",
    year: "2020",
    colors: [
      {
        name: "Verde Montreal",
        hexCode: "#007241",
      },
      {
        name: "Bianco Trofeo",
        hexCode: "#DFECF7",
      },
      {
        name: "Rosso GTA",
        hexCode: "#AD002C",
      },
    ],
    displacement: "2,891 cc",
    maxPower: "532 BHP @ 6,500 rpm",
    torque: "442 lb-ft",
    drivetrain: "RWD",
    length: "4,669 mm",
    width: "2,024 mm",
    height: "1,445 mm",
    weight: "1,580 kg",
    description: `"The top-of-the-line model in the Giulia lineup celebrated 110
    years of Alfa Romeo." In 2020, special editions of the Alfa Romeo Giulia were 
    introduced to celebrate the 110th anniversary of the historic company. The cars 
    were called the Giulia GTA and GTAm, which were based on the high-performance
    Quadrifoglio model. For these cars, the power output of the twin-turbocharged 
    2.9-liter V-6 was increased to 532.5 HP, while curb weight was reduced by 220 
    lbs. Also, the front and rear track were widened by 2.0 inches to enhance the 
    car's stability, while the cars' aerodynamics were significantly enhanced in 
    the form of new front and rear fenders, as well as other redesigned body parts, 
    thanks to help from Alfa Romeo's Formula 1 partner, Sauber. The GTAm offers a 
    more hardcore setup designed for circuit use. In addition to a larger front 
    splitter and carbon fiber rear wing, a roll-cage was installed and the rear 
    seats were removed.`,
  },
  {
    logo: dodgeLogo,
    manufacturer: "Dodge",
    model: "Viper GTS",
    year: "2013",
    colors: [
      {
        name: "Adrenaline Red",
        hexCode: "#CA2029",
      },
      {
        name: "Black",
        hexCode: "#000000",
      },
      {
        name: "Billet Metallic",
        hexCode: "#ACACAC",
      },
      {
        name: "Gunmetal Pearl",
        hexCode: "#3F3F3F",
      },
      {
        name: "Shadow Blue Pearl",
        hexCode: "#000035",
      },
      {
        name: "Viper Bright White",
        hexCode: "#F6FAED",
      },
      {
        name: "Viper GTS Blue",
        hexCode: "#184F9C",
      },
      {
        name: "Viper Race Yellow",
        hexCode: "#FFC44E",
      },
    ],
    displacement: "8,382 cc",
    maxPower: "640 BHP @ 6,150 rpm",
    torque: "600 lb-ft",
    drivetrain: "RWD",
    length: "4,463 mm",
    width: "1,941 mm",
    height: "1,246 mm",
    weight: "1,556 kg",
    description: `"The 5th generation Viper, backed by extreme performance under 
    the SRT brand." The achievement made by the Viper in the American automobile 
    industry is significant. For a long time the only choice in the American 
    supersport market was the Corvette, but the Viper challenged and defeated 
    the Corvette when it first appeared in 1991. This led to an escalated R&D 
    battle between the two and as a result, the performance standards of American 
    sports cars quickly rose to a level that sometimes exceeds that of mainstream 
    European supercars. For this reason there were many disappointed fans when 
    sales of the 4th generation Viper ended in 2010. The Viper was far from dead 
    though, as a 5th generation model debuted in 2012. The 5th generation Viper 
    was released by SRT, Chrysler's dedicated sports model brand. Although it 
    basically keeps to its original concepts, its performance has been greatly 
    improved. The platform still uses the square steel space frame as before, 
    but with aluminium cross bracings its rigidity is improved by 50%. With 
    lightweight materials such as carbon used in various parts, the car is 45 kg 
    lighter. The V10 mounted front mid-ship is still 8.4 L, but with changes in 
    pistons, intake, exhaust and engine management, it now produces 640 BHP and 
    83 kgfm of torque. The upper grade model GTS is also equipped with active 
    suspension. Its top speed: 329 km/h. Considering the base price of the 2013 
    model is under $100,000, the bite and venom of the 5th generation Viper will 
    definitely have an effect on its rivals.`,
  },
  {
    logo: ferrariLogo,
    manufacturer: "Ferrari",
    model: "F12berlinetta",
    year: "2012",
    colors: [
      {
        name: "Argento Nurburgring",
        hexCode: "#756D62",
      },
      {
        name: "Bianco Avus",
        hexCode: "#F2F3F6",
      },
      {
        name: "Blu Abu Dhabi",
        hexCode: "#2885B5",
      },
      {
        name: "Blu Pozzi",
        hexCode: "#2C3970",
      },
      {
        name: "Blu Tour de France",
        hexCode: "#2243AA",
      },
      {
        name: "Giallo Modena",
        hexCode: "#FCE903",
      },
      {
        name: "Grigio Ingrid",
        hexCode: "#756D62",
      },
      {
        name: "Grigio Silverstone",
        hexCode: "#585C64",
      },
      {
        name: "Grigio Titanio",
        hexCode: "#A8B8C0",
      },
      {
        name: "Rosso Scuderia",
        hexCode: "#FF2800",
      },
      {
        name: "Rosso Corsa",
        hexCode: "#D40000",
      },
      {
        name: "Rosso Mugello",
        hexCode: "#7A212A",
      },
      {
        name: "Nero Daytona",
        hexCode: "#231F1C",
      },
    ],
    displacement: "6,262 cc",
    maxPower: "730 BHP @ 8,250 rpm",
    torque: "509 lb-ft",
    drivetrain: "RWD",
    length: "4,618 mm",
    width: "1,942 mm",
    height: "1,273 mm",
    weight: "1,525 kg",
    description: `"The flagship model of Ferrari wasn't just fast, it was a 
    technological marvel." Ferrari unveiled its might new flagship, the F12 
    Berlinetta, in 2012 at the Geneva Motor Show. The successor to the 599 GTB 
    Fiorano featured a newly-designed base structure whose space frame and body 
    shell combined 12 different types of aluminum alloys. The front mid-mounted 
    engine came in the form of a naturally aspirated 6262 cc V-12 producing 
    729.7 HP and 509.9 ft-lb of peak torque, making it the most powerful Ferrari 
    road car to date. Impressive numbers, to be sure, but Ferrari spent a majority 
    of its development effort on the car's architecture. The F12 Berlinetta was 1.8 
    inches shorter, 0.7 inches narrower and 2.4 inches lower than its predecessor, 
    with a wheelbase that measured 1.1 inches less. The engine sat 1.1 inches lower 
    than the 599, and the dual clutch 7-speed F1-matic gearbox utilized a transaxle 
    layout—both of these features helped to lower the center of gravity by 0.9 inches 
    and established a nearly ideal front/rear weight ratio of 46:54. On the road, 
    the F12 Berlinetta, despite its elegant good looks, was an  absolute beast. 
    It ran from zero to 100 km/h in a phenomenal 3.1 seconds, getting to 200 km/h 
    in just 8.5, and topping out at a blurring 340 km/h. With its improved handling 
    balance, it set a new fastest road car lap around the Fiorano test track, 
    besting the 599 GTO by a full second. With refined aerodynamics, advanced 
    electronic devices and a brake cooling system that trickled down from its 
    Formula 1 race car, this prancing horse deserved to be the flagship for what 
    is arguably the most revered and recognized company in automotive history.`,
  },
  {
    logo: lamboLogo,
    manufacturer: "Lamborghini",
    model: "Huracán",
    year: "2015",
    colors: [
      {
        name: "Arancio Borealis",
        hexCode: "#FBA400",
      },
      {
        name: "Bianco Monocerus",
        hexCode: "#EDEDED",
      },
      {
        name: "Blu Caelum",
        hexCode: "#054AE3",
      },
      {
        name: "Grigio Lynx",
        hexCode: "#707176",
      },
      {
        name: "Grigio Nimbus",
        hexCode: "#6B7278",
      },
      {
        name: "Giallo Inti",
        hexCode: "#FED136",
      },
      {
        name: "Nero Helene",
        hexCode: "#151618",
      },
      {
        name: "Nero Nemesis",
        hexCode: "#312F30",
      },
      {
        name: "Nero Noctis",
        hexCode: "#292927",
      },
      {
        name: "Rosso Mars",
        hexCode: "#D40000",
      },
      {
        name: "Verde Mantis",
        hexCode: "#7DC23B",
      },
    ],
    displacement: "5,204 cc",
    maxPower: "602 BHP @ 8,000 rpm",
    torque: "413 lb-ft",
    drivetrain: "AWD",
    length: "4,459 mm",
    width: "2,236 mm",
    height: "1,165 mm",
    weight: "1,422 kg",
    description: `The Huracán was first shown at the 2014 Geneva Motor Show as 
    the successor to Lamborghini's most successful model to date, the Gallardo.
    The reason for the popularity of the Gallardo, which kept it in production 
    for 10 years, was the relatively compact body for a Lamborghini and the 
    resulting agility of the car that gave it a well-balanced level of performance 
    befitting the 'Supercar' label. The Huracán carries on these base 
    characteristics and though the length and width of the car have been 
    slightly enlarged, it was kept very close to the size of the Gallardo. 
    The styling however was changed drastically. Although it shares the base 
    wedge shape, the soulful form with its combination of curved lines and 
    surfaces sets it apart from the linear Gallardo and signifies that 
    Lamborghini design has entered its next phase. In terms of the car's 
    structure, it has evolved from an aluminium space frame to an aluminium and 
    carbon hybrid. This made the body 10% lighter and 50% higher in rigidity. 
    Mounted mid-ship in this shell is a fully revamped 5.2 litre V10 producing 
    601 BHP / 57.1 kgfm. This power is transferred through Lamborghini's first 
    7-speed dual clutch transmission and the new Haldex 5 AWD system to the ground.
    In addition, an integrated drive control system called ANIMA was added to 
    instantly switch the engine, transmission, AWD and handling characteristics 
    to cover everything from urban driving to circuit runs. With a top speed of 
    325 km/h and a 0-100 km/h acceleration of 3.2 seconds, it wouldn't do it 
    justice to call it a 'baby' Lambo anymore.`,
  },
  {
    logo: lexusLogo,
    manufacturer: "Lexus",
    model: "LFA",
    year: "2010",
    colors: [
      {
        name: "Arancio Borealis",
        hexCode: "#FBA400",
      },
      {
        name: "Bianco Monocerus",
        hexCode: "#EDEDED",
      },
      {
        name: "Blu Caelum",
        hexCode: "#054AE3",
      },
      {
        name: "Grigio Lynx",
        hexCode: "#707176",
      },
      {
        name: "Grigio Nimbus",
        hexCode: "#6B7278",
      },
      {
        name: "Giallo Inti",
        hexCode: "#FED136",
      },
      {
        name: "Nero Helene",
        hexCode: "#151618",
      },
      {
        name: "Nero Nemesis",
        hexCode: "#312F30",
      },
      {
        name: "Nero Noctis",
        hexCode: "#292927",
      },
      {
        name: "Rosso Mars",
        hexCode: "#D40000",
      },
      {
        name: "Verde Mantis",
        hexCode: "#7DC23B",
      },
    ],
    displacement: "4,805 cc",
    maxPower: "553 BHP @ 8,700 rpm",
    torque: "365 lb-ft",
    drivetrain: "RWD",
    length: "4,505 mm",
    width: "1,895 mm",
    height: "1,220 mm",
    weight: "1,480 kg",
    description: `"An ultra high-tech sportscar bringing stable quality to 
    cutting-edge technology." 20 years before Japan's automotive industry was 
    truly recognized by the world, Toyota created a sports car called the 2000GT, 
    which brought together the newest technology of the 1960s. And today in the 
    21st century, Toyota has again created a cutting edge sports car: the LFA. 
    Its development was not easy, having to start from the establishment of 
    production techniques for the carbon fiber body. For Toyota it was not enough 
    to make components match and fit together manually by hand; it was a 
    challenge of their pride as a mass production manufacturer, to provide the 
    newest technology with absolutely stable quality. One of the most important 
    factors of a sports car, the front to rear weight distribution, is 48 to 52. 
    The transaxle layout and the radiator mounted in the rear helped to achieve 
    this figure. The vehicle weight was suppressed to 1,480 kg (3,300 lb). And 
    the development team put even more emphasis on lowering the center of gravity, 
    utilizing a dry-sump lubrication system for the V10 engine, and going as far 
    as to position the driveshaft a bit higher by adding a reduction gear, so 
    that the entire mounting of the powertrain could be made lower. The 4.8-liter 
    V10 has a bank angle of 72 degrees, and it redlines at 9,500 rpm. The 552 
    BHP power equates to 115 BHP per liter, but its high performance is still 
    environmentally friendly. The transmission utilizes a 6-speed 2-pedal MT, 
    which shifts at 0.2 seconds, on par with the world's top racing machines.
    The brakes are standard carbon ceramic disks, with 6-pot calipers in the 
    front and 4-pot calipers in the rear, all with varying piston sizes. 0-62 
    mph acceleration is just 3.7 seconds, with a top speed of 201 mph (323 km/h), 
    and production of the LFA is limited to only 500 units.`,
  },
  {
    logo: porscheLogo,
    manufacturer: "Porsche",
    model: "918 Spyder",
    year: "2013",
    colors: [
      {
        name: "Basalt Black Metallic",
        hexCode: "#3D3D3D",
      },
      {
        name: "Black",
        hexCode: "#000001",
      },
      {
        name: "Dark Blue Metallic",
        hexCode: "#202A38",
      },
      {
        name: "Guards Red",
        hexCode: "#ED1E24",
      },
      {
        name: "GT Silver Metallic",
        hexCode: "#706F6B",
      },
      {
        name: "Liquid Metal Chrome Blue",
        hexCode: "#9FABBB",
      },
      {
        name: "Liquid Metal Silver",
        hexCode: "#B0B5BB",
      },
      {
        name: "Meteor Grey Metallic",
        hexCode: "#000006",
      },
      {
        name: "Racing Yellow",
        hexCode: "#F5DA31",
      },
      {
        name: "Rhodium Silver Metallic",
        hexCode: "#BFC1BD",
      },
      {
        name: "Sapphire Blue Metallic",
        hexCode: "#025593",
      },
      {
        name: "White",
        hexCode: "#C4C8CB",
      },
    ],
    displacement: "4,593 cc",
    maxPower: "875 BHP @ 8,700 rpm",
    torque: "944 lb-ft",
    drivetrain: "AWD",
    length: "4,645 mm",
    width: "1,940 mm",
    height: "1,168 mm",
    weight: "1,674 kg",
    description: `"This super sports car represents the first plug-in hybrid 
    flagship from the famed German car maker." Introduced by Porsche in 2013, 
    the 918 Spyder succeeded the Carrera GT as the company's flagship model 
    and was its first road-going supercar to feature a hybrid powerplant. Based 
    on the powertrain of the RS Spyder prototype race car, the 918 Spyder's 
    drive system takes a 599.6 HP 4.6-liter V-8, mounted amidships, and mates 
    it with a single electric motor at the rear. The combined output totals a 
    whopping 886 ps*, enabling the 918 to reach 100 km/h in just 2.6 seconds, 
    200km/h in 7.2 and 300km/h in just 19.9, when equipped with the Weissach 
    Package that reduces the car's curb weight from 3691 lbs to 3602 lbs. The 
    918 Spyder, of which only 918 examples were made, claimed a top speed of 
    350 km/h and lapped the famed Nürburgring Nordschleife in 6 minutes and 57 
    seconds.`,
  },
];
