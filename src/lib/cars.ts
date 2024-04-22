import amgLogo from "/logos/amg.webp";
import fordLogo from "/logos/ford.webp";
import nissanLogo from "/logos/nissan.webp";
import lexusLogo from "/logos/lexus.webp";
import alfaLogo from "/logos/alfa.webp";
import lamboLogo from "/logos/lambo.webp";
import ferrariLogo from "/logos/ferrari.webp";
import porscheLogo from "/logos/porsche.webp";
import dodgeLogo from "/logos/dodge.webp"

import italy from "/countryflags/it.svg"
import japan from "/countryflags/jp.svg"
import usa from "/countryflags/us.svg"
import germany from "/countryflags/de.svg"

import viperSound from "/audio/carsounds/viper.mp3";
import f12Sound from "/audio/carsounds/f12.mp3";
import gtamSound from "/audio/carsounds/gtam.mp3";
import gtrSound from "/audio/carsounds/gtr.mp3";
import huracanSound from "/audio/carsounds/huracan.mp3";
import lfaSound from "/audio/carsounds/lfa.mp3";
import porsche991Sound from "/audio/carsounds/991.mp3";
import gt350rSound from "/audio/carsounds/gt350r.mp3"
import amggtrSound from "/audio/carsounds/amggtr.mp3"

export const cars = [
  {
    logo: alfaLogo,
    country: italy,
    manufacturer: "Alfa Romeo",
    model: "Giulia GTAm",
    year: "2020",
    sound: gtamSound,
    colors: [
      {
        name: "Bianco Trofeo",
        hexCode: "#B2B7B8",
      },
      {
        name: "Rosso GTA",
        hexCode: "#870000",
      },
      {
        name: "Verde Montreal",
        hexCode: "#005E4D",
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
    country: usa,
    manufacturer: "Dodge",
    model: "Viper GTS",
    year: "2013",
    sound: viperSound,
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
        hexCode: "#EEF2E6",
      },
      {
        name: "Viper GTS Blue",
        hexCode: "#174D97",
      },
      {
        name: "Viper Race Yellow",
        hexCode: "#F5DF00",
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
    country: italy,
    manufacturer: "Ferrari",
    model: "F12berlinetta",
    year: "2012",
    sound: f12Sound,
    colors: [
      {
        name: "Argento Nurburgring",
        hexCode: "#999C9C",
      },
      {
        name: "Bianco Avus",
        hexCode: "#BBBEB0",
      },
      {
        name: "Blu Abu Dhabi",
        hexCode: "#002A3B",
      },
      {
        name: "Blu Mirabeau",
        hexCode: "#1F3C59",
      },
      {
        name: "Blu Pozzi",
        hexCode: "#050526",
      },
      {
        name: "Blu Tour de France",
        hexCode: "#001F3D",
      },
      {
        name: "Giallo Modena",
        hexCode: "#BF9A00",
      },
      {
        name: "Grigio Alloy",
        hexCode: "#849BA9",
      },
      {
        name: "Grigio Ingrid",
        hexCode: "#5F584C",
      },
      {
        name: "Grigio Silverstone",
        hexCode: "#424341",
      },
      {
        name: "Grigio Titanio",
        hexCode: "#737B7D",
      },
      {
        name: "Nero",
        hexCode: "#040607"
      },
      {
        name: "Nero Daytona",
        hexCode: "#121212",
      },
      {
        name: "Rosso Corsa",
        hexCode: "#9E0001",
      },
      {
        name: "Rosso Mugello",
        hexCode: "#4C0007",
      },
      {
        name: "Rosso Scuderia",
        hexCode: "#B00000",
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
    logo: fordLogo,
    country: usa,
    manufacturer: "Ford",
    model: "Shelby GT350R",
    year: "2016",
    sound: gt350rSound,
    colors: [
      {
        name: "Avalanche Grey",
        hexCode: "#7A8288",
      },
      {
        name: "Competition Orange",
        hexCode: "#B25304",
      },
      {
        name: "Deep Impact Blue",
        hexCode: "#001454",
      },
      {
        name: "Magnetic",
        hexCode: "#0F0F0F",
      },
      {
        name: "Oxford White",
        hexCode: "#9F9F9F",
      },
      {
        name: "Race Red",
        hexCode: "#750000",
      },
      {
        name: "Shadow Black",
        hexCode: "#000000",
      },
      {
        name: "Triple Yellow",
        hexCode: "#B28600",
      },
    ],
    displacement: "5,163 cc",
    maxPower: "526 BHP @ 7,500 rpm",
    torque: "429 lb-ft",
    drivetrain: "RWD",
    length: "4,818 mm",
    width: "1,928 mm",
    height: "1,361 mm",
    weight: "1,658 kg",
    description: `"This high-performance model of the seventh-generation Mustang 
    takes its name from a legend." The roots of the Shelby GT350R date back to 
    1965, when Ford commissioned Carroll Shelby to build a car to compete in the 
    SCCA (Sports Car Club of America). Based on the first-generation Mustang, 
    the GT350R was sold as a road car because the SCCA allowed only minor 
    modifications for its competition cars. Still, the car dominated its class, 
    gaining instant recognition. Fast forward to 2016, when the Shelby 350R 
    based on the seventh-generation Mustang, made its debut as road car that 
    was race ready, like the original model. Its naturally-aspirated 5.2-liter 
    V-8 was tuned to produce 525.6 HP and 428.9 ft-lb and was mated to a 6-speed 
    manual transmission. The reinforced chassis featured Ford's MagneRide 
    suspension system, which detected road conditions and adjusted damping 
    strength using magnetorheological fluid. Also, to reduce weight, the 2+2 
    layout of the stock Mustang was converted into that of a two-seater. The 
    GT350R enjoyed a loyal following and great success, thanks in part to it 
    exclusivity. It was sold as a special model available through a limited 
    number of dealers.`,
  },
  {
    logo: lamboLogo,
    country: italy,
    manufacturer: "Lamborghini",
    model: "Huracán",
    sound: huracanSound,
    year: "2015",
    colors: [
      {
        name: "Arancio Borealis",
        hexCode: "#FBA400",
      },
      {
        name: "Bianco Canopus",
        hexCode: "#B7B9B7",
      },
      {
        name: "Bianco Icarus",
        hexCode: "#B7C0BF",
      },
      {
        name: "Bianco Monocerus",
        hexCode: "#B6BAB8",
      },
      {
        name: "Blu Caelum",
        hexCode: "#002669",
      },
      {
        name: "Grigio Admetus",
        hexCode: "#6B685C",
      },
      {
        name: "Grigio Lynx",
        hexCode: "#707176",
      },
      {
        name: "Grigio Nimbus",
        hexCode: "#7F8282",
      },
      {
        name: "Giallo Inti",
        hexCode: "#AA850E",
      },
      {
        name: "Giallo Horus",
        hexCode: "#947205",
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
        hexCode: "#BE0001",
      },
      {
        name: "Verde Mantis",
        hexCode: "#6BB716",
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
    country: japan,
    manufacturer: "Lexus",
    model: "LFA",
    year: "2010",
    sound: lfaSound,
    colors: [
      {
        name: "Black",
        hexCode: "#232325",
      },
      {
        name: "Metallic Silver",
        hexCode: "#979CA0",
      },
      {
        name: "Pearl Blue",
        hexCode: "#2C33A8",
      },
      {
        name: "Pearl Brown",
        hexCode: "#654C38",
      },
      {
        name: "Pearl Gray",
        hexCode: "#64686B",
      },
      {
        name: "Pearl Red",
        hexCode: "#903233",
      },
      {
        name: "Pearl White",
        hexCode: "#C6CBD1",
      },
      {
        name: "Pearl Yellow",
        hexCode: "#F1D343",
      },
      {
        name: "Red",
        hexCode: "#C90102",
      },
      {
        name: "Whitest White",
        hexCode: "#EBF0F4",
      },
    ],
    displacement: "4,805 cc",
    maxPower: "552 BHP @ 8,700 rpm",
    torque: "354 lb-ft",
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
    logo: amgLogo,
    country: germany,
    manufacturer: "Mercedes-AMG",
    model: "GT R",
    year: "2017",
    sound: amggtrSound,
    colors: [
      {
        name: "AMG Green Hell",
        hexCode: "#166804",
      },
      {
        name: "Diamond White Bright",
        hexCode: "#A8A59F",
      },
      {
        name: "Iridium Silver",
        hexCode: "#B9C1C1",
      },
      {
        name: "Selenite Grey",
        hexCode: "#4C5051",
      },
      {
        name: "Magnetite Black",
        hexCode: "#050506",
      },
      {
        name: "Jupiter Red",
        hexCode: "#B40000",
      },
      {
        name: "Hyacinth Red Metallic",
        hexCode: "#610000",
      },
      {
        name: "Brilliant Blue",
        hexCode: "#04043C",
      },
    ],
    displacement: "3,982 cc",
    maxPower: "577 BHP @ 6,250 rpm",
    torque: "516 lb-ft",
    drivetrain: "RWD",
    length: "4,547 mm",
    width: "2,007 mm",
    height: "1,285 mm",
    weight: "1,660 kg",
    description: `"This 'road-legal race car' evokes the image of the 
    much-celebrated 300SL sports car." The Mercedes AMG GT R made its debut in 
    2016 as a high performance version of the AMG GT introduced in 2014. While 
    it was officially designated as a road car, it was in fact a race car in 
    street-car clothing. The first thing to catch the eye on the AMG GT R were 
    the vertical accents on the grille, reminiscent of those of the 300SL that 
    won the 1952 Carrera Panamericana Mexico. Other notable features of the 
    exterior included IM= the adjustable rear wing and the flared fenders. Under 
    the sheet metal, many of the car's components were swapped for carbon-fiber 
    pieces, including the roof, front fenders and torque tube. This car was also 
    the first Mercedes AMG model with 4-wheel steering. Under the hood, the car's 
    twin-turbocharged 4.0-liter V-8 was retuned to produce 576.9 HP and 515.7 
    ft-lb, allowing the AMG GT R to run from 0-100 km/h in a lightning quick 
    3.6 seconds and reach a top speed of 318 km/h.`,
  },
  {
    logo: nissanLogo,
    country: japan,
    manufacturer: "Nissan",
    model: "GT-R",
    year: "2017",
    sound: gtrSound,
    colors: [
      {
        name: "Aurora Flare Blue Pearl",
        hexCode: "#000D2C",
      },
      {
        name: "Brilliant White Pearl",
        hexCode: "#BCBEB9",
      },
      {
        name: "Ultimate Metal Silver",
        hexCode: "#9BA2A4",
      },
      {
        name: "Dark Metal Grey",
        hexCode: "#5A5E61",
      },
      {
        name: "Meteor Flake Black Pearl",
        hexCode: "#000000",
      },
      {
        name: "Ultimate Shiny Orange",
        hexCode: "#943E00",
      },
      {
        name: "Vibrant Red",
        hexCode: "#620000",
      },
    ],
    displacement: "3,799 cc",
    maxPower: "565 BHP @ 6,800 rpm",
    torque: "467 lb-ft",
    drivetrain: "4WD",
    length: "4,710 mm",
    width: "1,895 mm",
    height: "1,370 mm",
    weight: "1,700 kg",
    description: `The Nissan GT-R was announced at the New York International 
    Auto Show in April 2016. For the R35 GT-R, this was the biggest update since 
    its release in 2007. This is a GT-R, a luxury Japanese sports car. When you 
    look at the advancements in detail, you can see the extent to which Nissan 
    has gone to polish the model. The exterior changes do not just involve looks; 
    they balance air resistance, downforce, and cooling performance at a high 
    level. On the front is Nissan's signature design: the V motion. The rigidity 
    of the engine hood has been raised to suppress deformation at ultra high 
    speeds, and the new front spoiler achieves high levels of downforce. The 
    interior has also been changed greatly. There is high quality, craftsman 
    stitched leather for the instrument panel. The paddle shift is now fixed to 
    the steering wheel, allowing a higher steering angle from which a driver can 
    shift without letting go, for better control. All the equipment is wrapped 
    around the driver to cater to their every need, from every angle. The maximum 
    output of the 3.8 L V6 twin turbo engine, built individually and by hand, 
    has been raised to 565 BHP / 6,800 rpm, with a maximum torque of 467 lb-ft 
    (64.6 kgfm). Combined with the improved 6-speed dual clutch transmission, 
    it provides smoother acceleration through mid to high speed ranges. 
    Of course, to be considered the world's best handling car, the cornering 
    performance has also been improved. This is a car that personifies a 
    Japanese sports car, as can be seen in its 'Deep Evolution'.`,
  },
  {
    logo: porscheLogo,
    country: germany,
    manufacturer: "Porsche",
    model: "911 GT3 RS",
    year: "2016",
    sound: porsche991Sound,
    colors: [
      {
        name: "Lava Orange",
        hexCode: "#BB3C23",
      },
      {
        name: "GT Silver Metallic",
        hexCode: "#616265",
      },
      {
        name: "Ultraviolet",
        hexCode: "#3C2260",
      },
      {
        name: "White",
        hexCode: "#BDBFB6",
      },
    ],
    displacement: "3,996 cc",
    maxPower: "491 BHP @ 8,250 rpm",
    torque: "340 lb-ft",
    drivetrain: "RWD",
    length: "4,545 mm",
    width: "1,900 mm",
    height: "1,290 mm",
    weight: "1,420 kg",
    description: `Since the Type 996, the name "GT3" had been given to Porsche 
    911 road cars with a strong emphasis on motorsports, developed with FIA GT3 
    race regulations in mind. For the 996 and the later 997, there exists a 
    "GT3 RS", which further refines the GT3 and improves its performance. At 
    the 2015 Geneva Motor Show, the successor to these, the Type 991 GT3 RS 
    was announced. The model is said to be based on the Type 991 GT3, but on the 
    inside it is something that looks like it has been developed from scratch 
    using all the know-how they have gathered over the years. The body takes the 
    widest 911 Turbo model, with track widths in the front and rear widened even 
    further. The roof is made of magnesium, the front fenders and bonnet/engine 
    lid are carbon fibre. The rear and rear side windows are acrylic, giving a 
    total weight reduction of 10 kg. Aerodynamic parts have also been updated. 
    The front spoiler is even lower and wider, and the rear wing stands much 
    higher and is larger. Behind the front fenders are air outlets for drawing 
    air out from under the car. As a result, the downforce is more than double 
    that of a standard 911. The engine takes the 3.8-litre engine of the GT3 and
     extends its stroke, making it 4.0 litres in displacement. The tuned engine 
     now produces 24 BHP / 2.0 kgfm more, at 493 BHP / 46.9 kgfm. And the 
     dampers, springs and stabilisers for both the front and rear have been 
     newly developed for this car. As a result, the car lapped the Nürburgring 
     at 7 minutes 20 seconds, a full 5 seconds faster than the base 911 GT3.`,
  },
];
