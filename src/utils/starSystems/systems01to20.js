import { RESOURCE } from "../resources";
import { LEVEL_25_SYSTEMS, LEVEL_30_SYSTEMS } from "./systems25to30";

const LEVEL_1_SYSTEMS = [
  {
    name: "barnard's star",
    level: "1",
    planets: [
      {
        name: "frost",
        resources: [RESOURCE.WATER, RESOURCE.HELIUM_3, RESOURCE.LEAD],
        moons: [],
      },
    ],
  },
  {
    name: "cheyenne",
    level: "1",
    planets: [
      {
        name: "akila",
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.NICKEL,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.COBALT,
        ],
        moons: [
          {
            name: "antherum",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: "bindi",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.SILVER,
            ],
          },
          {
            name: "codos",
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.ARGON,
              RESOURCE.BERYLLIUM,
              RESOURCE.ALKANES,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
        ],
      },
      {
        name: "skink",
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.FLUORINE,
          RESOURCE.COBALT,
          RESOURCE.SILVER,
          RESOURCE.MERCURY,
        ],
        moons: [],
      },
      {
        name: "burran",
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [
          {
            name: "rell",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: "grizzit",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: "washakie",
        resources: [
          RESOURCE.WATER,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.SILVER,
          RESOURCE.NEON,
        ],
        moons: [
          {
            name: "smet",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.EUROPIUM,
            ],
          },
        ],
      },
      {
        name: "montara",
        resources: [],
        moons: [
          {
            name: "montara luna",
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.COBALT,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: "heilo",
            resources: [
              RESOURCE.WATER,
              RESOURCE.LEAD,
              RESOURCE.TUNGSTEN,
              RESOURCE.TITANIUM,
            ],
          },
          {
            name: "kalira",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
            ],
          },
          {
            name: "thren",
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.TUNGSTEN],
          },
          {
            name: "wellish",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.IONIC_LIQUIDS,
            ],
          },
        ],
      },
      {
        name: "agamon",
        resources: [],
        moons: [
          {
            name: "agamon a",
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.ARGON],
          },
          {
            name: "agamon b",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: "agamon c",
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: "agamon d",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: "stellis",
        resources: [],
        moons: [
          {
            name: "stellis a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.COBALT,
              RESOURCE.GOLD,
            ],
          },
          {
            name: "stellis b",
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: "stellis c",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: "stellis d",
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.COBALT,
              RESOURCE.PLATINUM,
              RESOURCE.PALLADIUM,
            ],
          },
        ],
      },
      {
        name: "fenn",
        resources: [],
        moons: [
          {
            name: "tarhnis",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: "cragg",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.SILVER,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
        ],
      },
      {
        name: "navaha",
        resources: [],
        moons: [
          {
            name: "hardpoint",
            resources: [],
          },
          {
            name: "belwah",
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.COBALT,
              RESOURCE.IRIDIUM,
              RESOURCE.VANADIUM,
            ],
          },
          {
            name: "laramie",
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: "olaran",
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: "bismark",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
        ],
      },
    ],
  },
  {
    name: "maheo",
    level: "1",
    planets: [
      {
        name: "maheo i",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.COBALT,
          RESOURCE.SILVER,
        ],
        moons: [],
      },
      {
        name: "maheo ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.HELIUM_3,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.ALKANES,
          RESOURCE.TETRAFLUORIDES,
          RESOURCE.YTTERBIUM,
        ],
        moons: [],
      },
      {
        name: "maheo iii",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: "maheo iii-a",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: "maheo iii-b",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: "maheo iv",
        resources: [],
        moons: [
          {
            name: "maheo iv-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
            ],
          },
          {
            name: "maheo iv-b",
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.NEON],
          },
          {
            name: "maheo iv-c",
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.NEODYMIUM,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: "maheo iv-d",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.LITHIUM,
            ],
          },
        ],
      },
      {
        name: "maheo v",
        resources: [],
        moons: [
          {
            name: "maheo v-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
        ],
      },
      {
        name: "maheo vi",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: "maheo vi-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: "maheo vii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.FLUORINE,
          RESOURCE.ANTIMONY,
        ],
        moons: [
          {
            name: "maheo vii-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "narion",
    level: "1",
    planets: [
      {
        name: "anselon",
        resources: [],
        moons: [
          {
            name: "kreet",
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.ARGON,
              RESOURCE.ALKANES,
              RESOURCE.SILVER,
              RESOURCE.NEON,
            ],
          },
          {
            name: "vectera",
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.ARGON,
              RESOURCE.ALKANES,
              RESOURCE.SILVER,
              RESOURCE.NEON,
            ],
          },
        ],
      },
      {
        name: "magreth",
        resources: [RESOURCE.HELIUM_3, RESOURCE.LEAD, RESOURCE.ALUMINUM],
        moons: [
          {
            name: "hyperia",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
        ],
      },
      {
        name: "sumati",
        resources: [
          RESOURCE.WATER,
          RESOURCE.LEAD,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.CHLOROSILANES,
          RESOURCE.FLUORINE,
          RESOURCE.TETRAFLUORIDES,
        ],
        moons: [
          {
            name: "andraphon",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.IRON,
              RESOURCE.BERYLLIUM,
              RESOURCE.EUROPIUM,
            ],
          },
        ],
      },
      {
        name: "niira",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.FLUORINE,
          RESOURCE.IONIC_LIQUIDS,
        ],
        moons: [],
      },
      {
        name: "danra",
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.URANIUM,
          RESOURCE.IRIDIUM,
        ],
        moons: [
          {
            name: "podius",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: "gryphus",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
              RESOURCE.EUROPIUM,
            ],
          },
          {
            name: "dalvik",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.CAESIUM,
            ],
          },
        ],
      },
      {
        name: "deepala",
        resources: [],
        moons: [
          {
            name: "grimsey",
            resources: [
              RESOURCE.URANIUM,
              RESOURCE.IRIDIUM,
              RESOURCE.VANADIUM,
              RESOURCE.PLUTONIUM,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "sol",
    level: "1",
    planets: [
      {
        name: "mercury",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.NEODYMIUM],
        moons: [],
      },
      {
        name: "venus",
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.COBALT,
          RESOURCE.DYSPROSIUM,
        ],
        moons: [],
      },
      {
        name: "earth",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.CHLOROSILANES,
          RESOURCE.MERCURY,
        ],
        moons: [
          {
            name: "luna",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: "mars",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.CHLOROSILANES,
        ],
        moons: [
          {
            name: "deimos",
            resources: [],
          },
          {
            name: "phobos",
            resources: [],
          },
        ],
      },
      {
        name: "jupiter",
        resources: [],
        moons: [
          {
            name: "europa",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: "callisto",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: "io",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: "ganymede",
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
        ],
      },
      {
        name: "saturn",
        resources: [],
        moons: [
          {
            name: "rhea",
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: "enceladus",
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: "lapetus",
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: "dione",
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.SILVER],
          },
          {
            name: "mimas",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.PALLADIUM],
          },
          {
            name: "titan",
            resources: [
              RESOURCE.WATER,
              RESOURCE.LEAD,
              RESOURCE.TUNGSTEN,
              RESOURCE.TITANIUM,
            ],
          },
          {
            name: "tethys",
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
        ],
      },
      {
        name: "uranus",
        resources: [],
        moons: [
          {
            name: "oberon",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: "ariel",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: "titania",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: "miranda",
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
          {
            name: "umbriel",
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
        ],
      },
      {
        name: "neptune",
        resources: [],
        moons: [
          {
            name: "triton",
            resources: [],
          },
        ],
      },
      {
        name: "pluto",
        resources: [
          RESOURCE.WATER,
          RESOURCE.LEAD,
          RESOURCE.TUNGSTEN,
          RESOURCE.TITANIUM,
        ],
        moons: [
          {
            name: "charon",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
    ],
  },
];

const LEVEL_5_SYSTEMS = [
  {
    name: "alpha centauri",
    level: "5",
    planets: [
      {
        name: "jemison",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.CHLOROSILANES,
        ],
        moons: [
          {
            name: "kurtz",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: "bondar",
        resources: [
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.TUNGSTEN,
          RESOURCE.PLATINUM,
          RESOURCE.XENON,
        ],
        moons: [
          {
            name: "curbeam",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: "grissom",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: "olivas",
        resources: [],
        moons: [
          {
            name: "lovell",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: "voss",
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.TUNGSTEN,
              RESOURCE.VANADIUM,
              RESOURCE.DYSPROSIUM,
            ],
          },
          {
            name: "chawla",
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: "zamka",
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.VANADIUM,
            ],
          },
          {
            name: "hawley",
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
            ],
          },
        ],
      },
      {
        name: "gagarin",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.CHLOROSILANES,
        ],
        moons: [],
      },
    ],
  },
  {
    name: "luyten's star",
    level: "5",
    planets: [
      {
        name: "luyten's rock",
        resources: [
          RESOURCE.WATER,
          RESOURCE.HELIUM_3,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.ARGON,
          RESOURCE.ALKANES,
          RESOURCE.LITHIUM,
          RESOURCE.TANTALUM,
        ],
        moons: [],
      },
    ],
  },
  {
    name: "procyon b",
    level: "5",
    planets: [
      {
        name: "procyon-b i",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.NEODYMIUM],
        moons: [],
      },
    ],
  },
  {
    name: "sirius",
    level: "5",
    planets: [
      {
        name: "sirius i",
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.ALKANES],
        moons: [],
      },
      {
        name: "sirius ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.IRIDIUM,
          RESOURCE.LITHIUM,
          RESOURCE.XENON,
        ],
        moons: [
          {
            name: "sirius ii-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
            ],
          },
        ],
      },
      {
        name: "sirius iii",
        resources: [],
        moons: [
          {
            name: "sirius iii-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.LITHIUM,
            ],
          },
          {
            name: "sirius iii-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "toliman",
    level: "5",
    planets: [
      {
        name: "toliman i",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [],
      },
      {
        name: "toliman ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.SILVER,
        ],
        moons: [
          {
            name: "toliman ii-a",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: "toliman ii-b",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: "toliman ii-c",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: "sirius iii",
        resources: [],
        moons: [
          {
            name: "sirius iii-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.LITHIUM,
            ],
          },
          {
            name: "sirius iii-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "valo",
    level: "5",
    planets: [
      {
        name: "polvo",
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.IRIDIUM,
          RESOURCE.VANADIUM,
        ],
        moons: [
          {
            name: "miatha",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: "navacci",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.EUROPIUM,
            ],
          },
        ],
      },
      {
        name: "cantra",
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.NEODYMIUM,
        ],
        moons: [],
      },
      {
        name: "prax",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [],
      },
      {
        name: "hillex",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [],
      },
      {
        name: "lumos",
        resources: [],
        moons: [
          {
            name: "golga",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: "kindi",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: "shorun",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.LITHIUM,
            ],
          },
          {
            name: "virum",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
        ],
      },
    ],
  },
  {
    name: "volii",
    level: "5",
    planets: [
      {
        name: "volii alpha",
        resources: [RESOURCE.WATER, RESOURCE.BENZENE],
        moons: [],
      },
      {
        name: "volii beta",
        resources: [RESOURCE.WATER, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: "volii delta",
            resources: [],
          },
        ],
      },
      {
        name: "volii chi",
        resources: [RESOURCE.WATER, RESOURCE.LEAD],
        moons: [],
      },
      {
        name: "volii epsilon",
        resources: [
          RESOURCE.WATER,
          RESOURCE.LEAD,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.CHLOROSILANES,
          RESOURCE.FLUORINE,
          RESOURCE.IONIC_LIQUIDS,
        ],
        moons: [
          {
            name: "volii gamma",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: "volii omega",
        resources: [],
        moons: [
          {
            name: "volii upsilon",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: "volii tau",
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [
          {
            name: "volii psi",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: "volii phi",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "wolf",
    level: "5",
    planets: [
      {
        name: "etherea",
        resources: [],
        moons: [
          {
            name: "pontem",
            resources: [
              RESOURCE.WATER,
              RESOURCE.LEAD,
              RESOURCE.SILVER,
              RESOURCE.MERCURY,
            ],
          },
        ],
      },
      {
        name: "chthonia",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [],
      },
    ],
  },
];

const LEVEL_10_SYSTEMS = [
  {
    name: "bessel",
    level: "10",
    planets: [
      {
        name: "bessel i",
        resources: [],
        moons: [],
      },
      {
        name: "bessel ii",
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.NEODYMIUM,
        ],
        moons: [],
      },
      {
        name: "bessel iii",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [
          {
            name: "bessel iii-a",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: "bessel iii-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.ARGON,
              RESOURCE.COBALT,
              RESOURCE.PLATINUM,
              RESOURCE.NEON,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "carinae",
    level: "10",
    planets: [
      {
        name: "carinae i",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [],
      },
      {
        name: "carinae ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.ARGON,
          RESOURCE.NEODYMIUM,
          RESOURCE.NEON,
        ],
        moons: [
          {
            name: "carinae ii-a",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: "carinae iii",
        resources: [],
        moons: [
          {
            name: "carinae iii-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.ALKANES,
              RESOURCE.ROTHICITE,
            ],
          },
          {
            name: "carinae iii-b",
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.MERCURY],
          },
          {
            name: "carinae iii-c",
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
          {
            name: "carinae iii-d",
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
        ],
      },
      {
        name: "carinae iv",
        resources: [],
        moons: [
          {
            name: "carinae iv-a",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: "carinae v",
        resources: [],
        moons: [
          {
            name: "carinae v-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
          {
            name: "carinae v-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.CAESIUM,
            ],
          },
          {
            name: "carinae v-c",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.CHLOROSILANES,
              RESOURCE.TUNGSTEN,
              RESOURCE.XENON,
              RESOURCE.PALLADIUM,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "eta cassiopeia",
    level: "10",
    planets: [
      {
        name: "cassiopaeia i",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.FLUORINE,
          RESOURCE.COBALT,
        ],
        moons: [],
      },
      {
        name: "cassiopaeia ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.COBALT,
          RESOURCE.PLATINUM,
        ],
        moons: [
          {
            name: "cassiopaeia ii-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.CHLOROSILANES,
              RESOURCE.TUNGSTEN,
            ],
          },
        ],
      },
      {
        name: "cassiopaeia iii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
        ],
        moons: [
          {
            name: "cassiopaeia iii-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: "cassiopaeia iv",
        resources: [],
        moons: [
          {
            name: "cassiopaeia iv-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.ALKANES,
              RESOURCE.IRIDIUM,
              RESOURCE.TANTALUM,
            ],
          },
          {
            name: "cassiopaeia iv-b",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: "cassiopaeia iv-c",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.PLATINUM],
          },
        ],
      },
    ],
  },
  {
    name: "kapteyn's star",
    level: "10",
    planets: [
      {
        name: "kapteyn i",
        resources: [
          RESOURCE.WATER,
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.PLATINUM,
          RESOURCE.VANADIUM,
        ],
        moons: [],
      },
      {
        name: "kapteyn ii",
        resources: [],
        moons: [],
      },
    ],
  },
  {
    name: "olympus",
    level: "10",
    planets: [
      {
        name: "nesoi",
        resources: [
          RESOURCE.WATER,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.IRIDIUM,
          RESOURCE.CARBOXYLIC_ACIDS,
          RESOURCE.TANTALUM,
        ],
        moons: [],
      },
      {
        name: "ananke",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.EUROPIUM],
        moons: [],
      },
      {
        name: "Ourea",
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.IRON,
          RESOURCE.CARBOXYLIC_ACIDS,
          RESOURCE.VANADIUM,
        ],
        moons: [],
      },
      {
        name: "thanatos",
        resources: [],
        moons: [
          {
            name: "hypnos",
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
        ],
      },
      {
        name: "erebus",
        resources: [RESOURCE.IRON, RESOURCE.URANIUM, RESOURCE.ALKANES],
        moons: [
          {
            name: "pontus",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: "thalassa",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: "aion",
        resources: [],
        moons: [
          {
            name: "orphius",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: "dionysus",
            resources: [
              RESOURCE.WATER,
              RESOURCE.LEAD,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.BENZENE,
              RESOURCE.ALKANES,
            ],
          },
          {
            name: "mithras",
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.COBALT,
              RESOURCE.PALLADIUM,
            ],
          },
          {
            name: "cybele",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
    ],
  },
  {
    name: "piazzi",
    level: "10",
    planets: [
      {
        name: "piazzi i",
        resources: [RESOURCE.LEAD],
        moons: [],
      },
      {
        name: "piazzi ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.FLUORINE,
          RESOURCE.COBALT,
          RESOURCE.PLATINUM,
          RESOURCE.PALLADIUM,
        ],
        moons: [],
      },
      {
        name: "piazzi iii",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [
          {
            name: "piazzi iii-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: "piazzi iii-b",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
        ],
      },
      {
        name: "piazzi iv",
        resources: [],
        moons: [
          {
            name: "piazzi iv-a",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.EUROPIUM,
            ],
          },
          {
            name: "piazzi iv-b",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: "piazzi iv-c",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.CHLOROSILANES,
            ],
          },
        ],
      },
      {
        name: "piazzi v",
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.ALKANES],
        moons: [
          {
            name: "piazzi v-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: "piazzi v-b",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: "piazzi v-c",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.EUROPIUM,
            ],
          },
        ],
      },
      {
        name: "piazzi vi",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [
          {
            name: "piazzi vi-a",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.EUROPIUM,
            ],
          },
          {
            name: "piazzi vi-b",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: "piazzi vi-c",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.CAESIUM,
            ],
          },
        ],
      },
      {
        name: "piazzi vii",
        resources: [],
        moons: [
          {
            name: "piazzi vii-a",
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: "piazzi vii-b",
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.GOLD],
          },
          {
            name: "piazzi vii-c",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
        ],
      },
    ],
  },
  {
    name: "procyon a",
    level: "10",
    planets: [
      {
        name: "procyon i",
        resources: [
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.FLUORINE,
          RESOURCE.TUNGSTEN,
          RESOURCE.IRIDIUM,
        ],
        moons: [
          {
            name: "procyon i-a",
            resources: [],
          },
        ],
      },
      {
        name: "procyon ii",
        resources: [RESOURCE.NICKEL, RESOURCE.LEAD, RESOURCE.TITANIUM],
        moons: [],
      },
      {
        name: "procyon iii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.ARGON,
          RESOURCE.FLUORINE,
          RESOURCE.TETRAFLUORIDES,
          RESOURCE.IONIC_LIQUIDS,
          RESOURCE.NEON,
        ],
        moons: [
          {
            name: "procyon iii-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: "procyon iv",
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
        ],
        moons: [
          {
            name: "procyon iv-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: "procyon v",
        resources: [],
        moons: [
          {
            name: "procyon v-a",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: "procyon v-b",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: "procyon v-c",
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
        ],
      },
      {
        name: "procyon vi",
        resources: [],
        moons: [
          {
            name: "procyon vi-a",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: "procyon vi-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: "procyon vi-c",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.ALKANES,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "tau ceti",
    level: "10",
    planets: [
      {
        name: "tau ceti i",
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.PLATINUM,
          RESOURCE.VANADIUM,
          RESOURCE.PALLADIUM,
        ],
        moons: [],
      },
      {
        name: "tau ceti ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.ALKANES,
        ],
        moons: [
          {
            name: "tau ceti ii-a",
            resources: [RESOURCE.WATER, RESOURCE.ALUMINUM, RESOURCE.NEODYMIUM],
          },
        ],
      },
      {
        name: "tau ceti iii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.ALKANES,
          RESOURCE.LITHIUM,
          RESOURCE.TETRAFLUORIDES,
        ],
        moons: [],
      },
      {
        name: "tau ceti iv",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.CHLOROSILANES,
          RESOURCE.FLUORINE,
        ],
        moons: [
          {
            name: "tau ceti iv-a",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: "tau ceti iv-b",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: "tau ceti v",
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.COBALT,
          RESOURCE.ALKANES,
          RESOURCE.PLATINUM,
          RESOURCE.PALLADIUM,
          RESOURCE.YTTERBIUM,
        ],
        moons: [],
      },
      {
        name: "tau ceti vi",
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.NEODYMIUM,
        ],
        moons: [
          {
            name: "tau ceti vi-a",
            resources: [RESOURCE.WATER, RESOURCE.IRON, RESOURCE.TANTALUM],
          },
        ],
      },
      {
        name: "tau ceti vii",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [
          {
            name: "tau ceti vii-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: "tau ceti viii",
        resources: [],
        moons: [
          {
            name: "tau ceti viii-a",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: "tau ceti viii-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.ARGON,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: "tau ceti viii-c",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.LITHIUM,
              RESOURCE.CAESIUM,
            ],
          },
          {
            name: "tau ceti viii-d",
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.PLATINUM,
              RESOURCE.PALLADIUM,
            ],
          },
          {
            name: "tau ceti ix",
            resources: [],
          },
        ],
      },
    ],
  },
  {
    name: "the pup",
    level: "10",
    planets: [
      {
        name: "pup i",
        resources: [RESOURCE.WATER, RESOURCE.CHLORINE, RESOURCE.CAESIUM],
        moons: [],
      },
    ],
  },
  {
    name: "van maanen's star",
    level: "10",
    planets: [
      {
        name: "van maanen i",
        resources: [RESOURCE.WATER, RESOURCE.COPPER],
        moons: [],
      },
    ],
  },
];

const LEVEL_15_SYSTEMS = [
  {
    name: "altair",
    level: "15",
    planets: [
      {
        name: "altair i",
        resources: [
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.ARGON,
          RESOURCE.IRIDIUM,
          RESOURCE.PLATINUM,
          RESOURCE.PLUTONIUM,
        ],
        moons: [],
      },
      {
        name: "altair ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
        ],
        moons: [],
      },
      {
        name: "altair iii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.FLUORINE,
          RESOURCE.GOLD,
        ],
        moons: [
          {
            name: "altair iii-a",
            resources: [],
          },
          {
            name: "altair iii-b",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: "altair iii-c",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: "altair iv",
        resources: [],
        moons: [
          {
            name: "altair iv-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
          {
            name: "altair iv-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: "altair iv-c",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.COBALT,
              RESOURCE.TUNGSTEN,
            ],
          },
          {
            name: "altair iv-d",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
        ],
      },
      {
        name: "altair v",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: "altair v-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.LEAD],
          },
        ],
      },
    ],
  },
  {
    name: "andromas",
    level: "15",
    planets: [
      {
        name: "andromas i",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.IRIDIUM,
          RESOURCE.VANADIUM,
          RESOURCE.XENON,
        ],
        moons: [],
      },
      {
        name: "andromas ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.ARGON,
          RESOURCE.FLUORINE,
          RESOURCE.CHLOROSILANES,
          RESOURCE.LITHIUM,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [],
      },
      {
        name: "andromas iii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.ARGON,
          RESOURCE.BERYLLIUM,
          RESOURCE.EUROPIUM,
          RESOURCE.NEON,
        ],
        moons: [],
      },
      {
        name: "andromas iv",
        resources: [],
        moons: [
          {
            name: "andromas iv-a",
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
        ],
      },
      {
        name: "andromas v",
        resources: [],
        moons: [
          {
            name: "andromas v-a",
            resources: [],
          },
          {
            name: "andromas v-b",
            resources: [],
          },
        ],
      },
      {
        name: "andromas vi",
        resources: [],
        moons: [
          {
            name: "andromas vi-a",
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: "andromas vi-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.BERYLLIUM,
              RESOURCE.FLUORINE,
              RESOURCE.ALKANES,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "aranae",
    level: "15",
    planets: [
      {
        name: "aranae i",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [],
      },
      {
        name: "aranae ii",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [
          {
            name: "aranae ii-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: "aranae ii-b",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: "aranae iii",
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [],
      },
      {
        name: "aranae iv",
        resources: [],
        moons: [
          {
            name: "aranae iv-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.TANTALUM],
          },
          {
            name: "aranae iv-b",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.ALKANES],
          },
          {
            name: "aranae iv-c",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: "aranae iv-d",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: "aranae v",
        resources: [RESOURCE.WATER, RESOURCE.LEAD],
        moons: [],
      },
    ],
  },
  {
    name: "arcturus",
    level: "15",
    planets: [
      {
        name: "arcturus i",
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.IRIDIUM,
        ],
        moons: [],
      },
      {
        name: "arcturus ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.IRIDIUM,
        ],
        moons: [],
      },
      {
        name: "arcturus iii",
        resources: [],
        moons: [
          {
            name: "arcturus iii-a",
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
        ],
      },
    ],
  },
  {
    name: "muphrid",
    level: "15",
    planets: [
      {
        name: "muphrid i",
        resources: [RESOURCE.URANIUM, RESOURCE.IRIDIUM],
        moons: [
          {
            name: "muphrid i-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: "muphrid ii",
        resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.URANIUM],
        moons: [
          {
            name: "muphrid ii-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NICKEL,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: "muphrid iii",
        resources: [
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.VANADIUM,
        ],
        moons: [
          {
            name: "muphrid iii-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.YTTERBIUM],
          },
          {
            name: "muphrid iii-b",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: "muphrid iii-c",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: "muphrid iv",
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.ARGON,
          RESOURCE.CHLOROSILANES,
          RESOURCE.ALKANES,
          RESOURCE.LITHIUM,
        ],
        moons: [],
      },
      {
        name: "muphrid v",
        resources: [],
        moons: [
          {
            name: "muphrid v-a",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: "muphrid v-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.LEAD,
              RESOURCE.CHLOROSILANES,
              RESOURCE.FLUORINE,
              RESOURCE.TUNGSTEN,
              RESOURCE.XENON,
            ],
          },
          {
            name: "muphrid v-c",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: "muphrid v-d",
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.COBALT,
            ],
          },
        ],
      },
      {
        name: "muphrid vi",
        resources: [],
        moons: [
          {
            name: "muphrid vi-a",
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: "muphrid vi-b",
            resources: [
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.MERCURY,
            ],
          },
          {
            name: "muphrid vi-c",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: "muphrid vi-d",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.ANTIMONY,
            ],
          },
        ],
      },
      {
        name: "muphrid vii",
        resources: [],
        moons: [
          {
            name: "muphrid vii-a",
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.ANTIMONY],
          },
          {
            name: "muphrid vii-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.FLUORINE,
              RESOURCE.COBALT,
              RESOURCE.ANTIMONY,
            ],
          },
          {
            name: "muphrid vii-c",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.IONIC_LIQUIDS,
            ],
          },
        ],
      },
      {
        name: "muphrid viii",
        resources: [],
        moons: [
          {
            name: "muphrid viii-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.SILVER,
              RESOURCE.PLATINUM,
              RESOURCE.VANADIUM,
            ],
          },
          {
            name: "muphrid viii-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.CAESIUM,
            ],
          },
          {
            name: "muphrid viii-c",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.COBALT,
              RESOURCE.TUNGSTEN,
            ],
          },
          {
            name: "muphrid viii-d",
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.COBALT,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "sagan",
    level: "15",
    planets: [
      {
        name: "sagan 1",
        resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
        moons: [],
      },
    ],
  },
  {
    name: "sakharov",
    level: "15",
    planets: [
      {
        name: "bonner",
        resources: [],
        moons: [
          {
            name: "mir ii",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
    ],
  },
];

const LEVEL_20_SYSTEMS = [
  {
    name: "beta andraste",
    level: "20",
    planets: [
      {
        name: "beta andraste i",
        resources: [],
        moons: [
          {
            name: "beta andraste i-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.URANIUM,
              RESOURCE.IRON,
              RESOURCE.IRIDIUM,
              RESOURCE.VANADIUM,
            ],
          },
          {
            name: "beta andraste i-b",
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: "beta andraste i-c",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.GOLD,
              RESOURCE.ANTIMONY,
            ],
          },
          {
            name: "beta andraste i-d",
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
        ],
      },
    ],
  },
  {
    name: "bradbury",
    level: "20",
    planets: [
      {
        name: "bradbury i",
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.IRON,
          RESOURCE.ALKANES,
          RESOURCE.YTTERBIUM,
        ],
        moons: [
          {
            name: "bradbury i-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: "bradbury i-b",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: "bradbury ii",
        resources: [
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
        ],
        moons: [],
      },
      {
        name: "bradbury iii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.COBALT,
          RESOURCE.TITANIUM,
        ],
        moons: [],
      },
      {
        name: "bradbury iv",
        resources: [
          RESOURCE.WATER,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
        ],
        moons: [
          {
            name: "bradbury iv-a",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.EUROPIUM,
            ],
          },
        ],
      },
      {
        name: "bradbury v",
        resources: [],
        moons: [
          {
            name: "bradbury v-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "eridani",
    level: "20",
    planets: [
      {
        name: "eridani i",
        resources: [RESOURCE.CHLORINE, RESOURCE.URANIUM],
        moons: [],
      },
      {
        name: "eridani ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.FLUORINE,
          RESOURCE.COBALT,
          RESOURCE.GOLD,
        ],
        moons: [],
      },
      {
        name: "eridani iii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.IRIDIUM,
          RESOURCE.VANADIUM,
          RESOURCE.PLUTONIUM,
        ],
        moons: [
          {
            name: "eridani iii-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.ALKANES],
          },
          {
            name: "eridani iii-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.IRIDIUM,
              RESOURCE.VANADIUM,
            ],
          },
          {
            name: "eridani iii-c",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: "eridani iv",
        resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.FLUORINE],
        moons: [
          {
            name: "eridani iv-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: "eridani iv-b",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
              RESOURCE.EUROPIUM,
            ],
          },
          {
            name: "eridani iv-c",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.EUROPIUM,
            ],
          },
        ],
      },
      {
        name: "eridani v",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.SILVER,
        ],
        moons: [],
      },
      {
        name: "eridani vi",
        resources: [],
        moons: [
          {
            name: "eridani vi-a",
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
        ],
      },
      {
        name: "eridani vii",
        resources: [],
        moons: [
          {
            name: "eridani vii-a",
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.NEON],
          },
          {
            name: "eridani vii-b",
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
          {
            name: "eridani vii-c",
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.TUNGSTEN,
              RESOURCE.TITANIUM,
              RESOURCE.EUROPIUM,
            ],
          },
        ],
      },
      {
        name: "eridani viii",
        resources: [],
        moons: [
          {
            name: "eridani viii-a",
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
          {
            name: "eridani viii-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.BERYLLIUM,
              RESOURCE.COBALT,
              RESOURCE.SILVER,
            ],
          },
          {
            name: "eridani viii-c",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.LITHIUM,
              RESOURCE.CAESIUM,
            ],
          },
          {
            name: "eridani viii-d",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.ALKANES,
              RESOURCE.LITHIUM,
            ],
          },
        ],
      },
      {
        name: "eridani ix",
        resources: [RESOURCE.WATER, RESOURCE.NICKEL],
        moons: [],
      },
    ],
  },
  {
    name: "guniibuu",
    level: "20",
    planets: [
      {
        name: "gunibuu i",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [
          {
            name: "gunibuu i-a",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: "gunibuu i-b",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
            ],
          },
        ],
      },
      {
        name: "gunibuu ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.ALUMINUM,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.BERYLLIUM,
          RESOURCE.FLUORINE,
          RESOURCE.GOLD,
        ],
        moons: [],
      },
      {
        name: "gunibuu iii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.IRIDIUM,
          RESOURCE.VANADIUM,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [
          {
            name: "gunibuu iii-a",
            resources: [],
          },
          {
            name: "gunibuu iii-b",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: "gunibuu iii-c",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: "gunibuu iv",
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.IRIDIUM,
          RESOURCE.TANTALUM,
        ],
        moons: [
          {
            name: "gunibuu iv-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: "gunibuu iv-b",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
            ],
          },
        ],
      },
      {
        name: "gunibuu v",
        resources: [],
        moons: [
          {
            name: "gunibuu v-a",
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: "gunibuu v-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.CAESIUM,
            ],
          },
          {
            name: "gunibuu v-c",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: "gunibuu v-d",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: "gunibuu v-e",
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
        ],
      },
      {
        name: "gunibuu vi",
        resources: [],
        moons: [
          {
            name: "gunibuu vi-a",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: "gunibuu vi-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.COBALT,
              RESOURCE.MERCURY,
              RESOURCE.LEAD,
            ],
          },
          {
            name: "gunibuu vi-c",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: "gunibuu vi-d",
            resources: [
              RESOURCE.WATER,
              RESOURCE.LEAD,
              RESOURCE.ALKANES,
              RESOURCE.TITANIUM,
            ],
          },
          {
            name: "gunibuu vi-e",
            resources: [
              RESOURCE.WATER,
              RESOURCE.LEAD,
              RESOURCE.TUNGSTEN,
              RESOURCE.TITANIUM,
            ],
          },
        ],
      },
      {
        name: "gunibuu vii",
        resources: [],
        moons: [
          {
            name: "gunibuu vii-a",
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
          {
            name: "gunibuu vii-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: "gunibuu vii-c",
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
        ],
      },
    ],
  },
  {
    name: "indum",
    level: "20",
    planets: [
      {
        name: "indum i",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.IRIDIUM,
          RESOURCE.TANTALUM,
        ],
        moons: [
          {
            name: "indum i-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: "indum ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.COPPER,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.BERYLLIUM,
          RESOURCE.FLUORINE,
        ],
        moons: [],
      },
      {
        name: "indum iii",
        resources: [],
        moons: [
          {
            name: "indum iii-a",
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.ANTIMONY],
          },
          {
            name: "indum iii-b",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.COBALT,
              RESOURCE.TETRAFLUORIDES,
              RESOURCE.TANTALUM,
              RESOURCE.YTTERBIUM,
            ],
          },
          {
            name: "indum iii-c",
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: "indum iii-d",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
            ],
          },
        ],
      },
      {
        name: "indum iv",
        resources: [],
        moons: [
          {
            name: "indum iv-a",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.PLATINUM],
          },
          {
            name: "indum iv-b",
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: "indum iv-c",
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.MERCURY],
          },
          {
            name: "indum iv-d",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
              RESOURCE.TANTALUM,
              RESOURCE.ANTIMONY,
            ],
          },
        ],
      },
      {
        name: "indum v",
        resources: [],
        moons: [
          {
            name: "indum v-a",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.IRON,
              RESOURCE.ALKANES,
              RESOURCE.YTTERBIUM,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "kryx",
    level: "20",
    planets: [
      {
        name: "suvorov",
        resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
        moons: [
          {
            name: "neebas",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.GOLD,
              RESOURCE.PLUTONIUM,
            ],
          },
          {
            name: "max",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.CHLOROSILANES,
              RESOURCE.LITHIUM,
            ],
          },
          {
            name: "rocklock",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: "candore",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: "nox",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: "boron",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: "ice",
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
        ],
      },
    ],
  },
  {
    name: "mcclure",
    level: "20",
    planets: [
      {
        name: "mcclure i",
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.NEODYMIUM],
        moons: [
          {
            name: "mcclure i-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: "mcclure ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.CHLOROSILANES,
        ],
        moons: [
          {
            name: "mcclure ii-a",
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: "mcclure ii-b",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: "mcclure ii-c",
            resources: [],
          },
        ],
      },
      {
        name: "mcclure iii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.COBALT,
          RESOURCE.ALKANES,
          RESOURCE.TANTALUM,
        ],
        moons: [],
      },
    ],
  },
  {
    name: "oborum prime",
    level: "20",
    planets: [
      {
        name: "oborum i",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.CHLOROSILANES,
          RESOURCE.GOLD,
        ],
        moons: [],
      },
      {
        name: "oborum ii",
        resources: [],
        moons: [
          {
            name: "oborum ii-a",
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.SILVER,
              RESOURCE.PLATINUM,
              RESOURCE.TANTALUM,
            ],
          },
          {
            name: "oborum ii-b",
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
        ],
      },
      {
        name: "oborum iii",
        resources: [],
        moons: [
          {
            name: "oborum iii-a",
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: "oborum iii-b",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: "oborum iii-c",
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
          {
            name: "oborum iii-d",
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
        ],
      },
      {
        name: "oborum iv",
        resources: [],
        moons: [],
      },
    ],
  },
  {
    name: "ursae minoris",
    level: "20",
    planets: [
      {
        name: "ursae minor i",
        resources: [
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.FLUORINE,
          RESOURCE.COBALT,
          RESOURCE.IRIDIUM,
        ],
        moons: [
          {
            name: "ursae minor i-a",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.EUROPIUM,
            ],
          },
          {
            name: "ursae minor i-b",
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.TANTALUM],
          },
        ],
      },
      {
        name: "ursae minor ii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.ARGON,
          RESOURCE.TETRAFLUORIDES,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [
          {
            name: "ursae minor ii-a",
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.EUROPIUM,
            ],
          },
        ],
      },
      {
        name: "ursae minor iii",
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.CHLOROSILANES,
        ],
        moons: [],
      },
    ],
  },
];

export const STAR_SYSTEMS = [
  ...LEVEL_1_SYSTEMS,
  ...LEVEL_5_SYSTEMS,
  ...LEVEL_10_SYSTEMS,
  ...LEVEL_15_SYSTEMS,
  ...LEVEL_20_SYSTEMS,
  ...LEVEL_25_SYSTEMS,
  ...LEVEL_30_SYSTEMS,
];
