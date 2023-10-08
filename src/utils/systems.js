import { RESOURCE } from "./resources";

const LEVEL_1_SYSTEMS = [
  {
    name: "barnard's star",
    level: 1,
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
    level: 1,
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
    level: 1,
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
    level: 1,
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
    level: 1,
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

export const STAR_SYSTEMS = [...LEVEL_1_SYSTEMS];