import { RESOURCE } from "./resources";

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
            name: "procyon v-b",
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
            name: "procyon v-c",
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
export const STAR_SYSTEMS = [
  ...LEVEL_1_SYSTEMS,
  ...LEVEL_5_SYSTEMS,
  ...LEVEL_10_SYSTEMS,
];
