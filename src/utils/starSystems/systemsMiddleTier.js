import { RESOURCE } from '../resources';

const LEVEL_25_SYSTEMS = [
  {
    name: 'delta pavonis',
    level: '25',
    planets: [
      {
        name: 'curie',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [],
      },
      {
        name: 'magnar',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.ALUMINUM,
          RESOURCE.COBALT,
          RESOURCE.SILVER,
          RESOURCE.BERYLLIUM,
        ],
        moons: [],
      },
      {
        name: 'arachna',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.TUNGSTEN,
          RESOURCE.DYSPROSIUM,
        ],
        moons: [
          {
            name: 'worthless',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'bitsy',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: 'itsy',
            resources: [],
          },
        ],
      },
      {
        name: 'nascent',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [
          {
            name: 'rudiment',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'fundament',
            resources: [],
          },
        ],
      },
      {
        name: 'gamow',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.CHLORINE,
          RESOURCE.COBALT,
          RESOURCE.ALKANES,
          RESOURCE.CHLOROSILANES,
          RESOURCE.LITHIUM,
        ],
        moons: [
          {
            name: 'bose',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'bode',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.NEODYMIUM,
        ],
        moons: [
          {
            name: 'herald',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: 'augur',
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
        name: 'faraday',
        resources: [],
        moons: [
          {
            name: 'coulomb',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'ampere',
            resources: [
              RESOURCE.WATER,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.ALKANES,
              RESOURCE.SILVER,
              RESOURCE.IRIDIUM,
              RESOURCE.VANADIUM,
            ],
          },
          {
            name: 'volt',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.YTTERBIUM,
            ],
          },
          {
            name: 'ohm',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
        ],
      },
    ],
  },
  {
    name: 'groombridge',
    level: '25',
    planets: [
      {
        name: 'groombridge i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.VANADIUM,
        ],
        moons: [],
      },
      {
        name: 'groombridge ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.ALKANES,
          RESOURCE.TUNGSTEN,
        ],
        moons: [
          {
            name: 'groombridge ii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'groombridge ii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.LEAD,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
          {
            name: 'groombridge ii-c',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
            ],
          },
        ],
      },
      {
        name: 'groombridge iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.SILVER,
        ],
        moons: [
          {
            name: 'groombridge iii-a',
            resources: [],
          },
        ],
      },
      {
        name: 'groombridge iv',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: 'groombridge iv-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'groombridge v',
        resources: [],
        moons: [
          {
            name: 'groombridge v-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'groombridge v-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
            ],
          },
          {
            name: 'groombridge v-c',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'groombridge v-d',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
          {
            name: 'groombridge v-e',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: 'groombridge vi',
        resources: [],
        moons: [
          {
            name: 'groombridge vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.COPPER,
            ],
          },
          {
            name: 'groombridge vi-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
        ],
      },
      {
        name: 'groombridge vii',
        resources: [],
        moons: [
          {
            name: 'groombridge vii-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: 'groombridge vii-b',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.TITANIUM],
          },
        ],
      },
      {
        name: 'groombridge viii',
        resources: [],
        moons: [
          {
            name: 'groombridge viii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.LEAD,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: 'groombridge viii-b',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: 'groombridge viii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.COPPER,
              RESOURCE.LEAD,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: 'groombridge viii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.IRIDIUM,
              RESOURCE.LITHIUM,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'kumasi',
    level: '25',
    planets: [
      {
        name: 'kumasi i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.NEON,
        ],
        moons: [
          {
            name: 'kumasi i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.TANTALUM],
          },
        ],
      },
      {
        name: 'kumasi ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.IRIDIUM,
          RESOURCE.PLATINUM,
          RESOURCE.PALLADIUM,
          RESOURCE.PLUTONIUM,
        ],
        moons: [
          {
            name: 'kumasi ii-a',
            resources: [],
          },
        ],
      },
      {
        name: 'kumasi iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.ARGON,
          RESOURCE.COBALT,
        ],
        moons: [
          {
            name: 'kumasi iii-a',
            resources: [],
          },
        ],
      },
      {
        name: 'kumasi iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.COBALT,
          RESOURCE.DYSPROSIUM,
        ],
        moons: [
          {
            name: 'kumasi iv-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'kumasi v',
        resources: [],
        moons: [
          {
            name: 'kumasi v-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.GOLD],
          },
          {
            name: 'kumasi v-b',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'kumasi v-c',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'kumasi v-d',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'kumasi v-e',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
        ],
      },
      {
        name: 'kumasi vi',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.IRIDIUM,
          RESOURCE.CAESIUM,
        ],
        moons: [
          {
            name: 'kumasi vi-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: 'kumasi vii',
        resources: [],
        moons: [
          {
            name: 'kumasi vii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
              RESOURCE.EUROPIUM,
            ],
          },
          {
            name: 'kumasi vii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.TETRAFLUORIDES,
              RESOURCE.IONIC_LIQUIDS,
            ],
          },
          {
            name: 'kumasi vii-c',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'kumasi vii-d',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: 'kumasi viii',
        resources: [],
        moons: [
          {
            name: 'kumasi viii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.IRON,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.NEON,
            ],
          },
          {
            name: 'kumasi viii-b',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
          {
            name: 'kumasi viii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.IONIC_LIQUIDS,
            ],
          },
          {
            name: 'kumasi viii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.CHLOROSILANES,
              RESOURCE.FLUORINE,
              RESOURCE.COBALT,
            ],
          },
        ],
      },
      {
        name: 'kumasi ix',
        resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
        moons: [
          {
            name: 'kumasi ix-a',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE, RESOURCE.XENON],
          },
        ],
      },
    ],
  },
  {
    name: 'lunara',
    level: '25',
    planets: [
      {
        name: 'vesta',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.FLUORINE,
          RESOURCE.MERCURY,
        ],
        moons: [
          {
            name: 'vesta lunaris',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'numitor',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: 'remus',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.ALKANES],
          },
          {
            name: 'romulus',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'petria',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.FLUORINE,
          RESOURCE.TETRAFLUORIDES,
        ],
        moons: [
          {
            name: 'earrach',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.ALKANES],
          },
        ],
      },
      {
        name: 'gaea',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.NEODYMIUM],
        moons: [
          {
            name: 'crius',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: 'coeus',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'cassini',
        resources: [],
        moons: [
          {
            name: 'lillius',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'abetti',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.NEON,
            ],
          },
          {
            name: 'gasparis',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
              RESOURCE.ANTIMONY,
            ],
          },
        ],
      },
      {
        name: 'okoro',
        resources: [],
        moons: [
          {
            name: 'okoro alpha',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'okoro beta',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.XENON,
            ],
          },
          {
            name: 'okoro delta',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: 'okoro epsilon',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
          {
            name: 'okoro gamma',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.PLATINUM],
          },
        ],
      },
      {
        name: 'cthol',
        resources: [],
        moons: [
          {
            name: 'nyarloth',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'uvhan',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
          {
            name: 'az-valok',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: `reva's world`,
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [],
      },
    ],
  },
  {
    name: 'oborum proxima',
    level: '25',
    planets: [
      {
        name: 'oborum proxima i',
        resources: [RESOURCE.WATER, RESOURCE.CHLORINE, RESOURCE.LEAD],
        moons: [],
      },
    ],
  },
  {
    name: 'vega',
    level: '25',
    planets: [
      {
        name: 'vega i',
        resources: [],
        moons: [
          {
            name: 'vega i-a',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'vega i-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'vega i-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
        ],
      },
      {
        name: 'vega ii',
        resources: [],
        moons: [
          {
            name: 'vega ii-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: 'vega ii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.LEAD,
              RESOURCE.TITANIUM,
              RESOURCE.DYSPROSIUM,
            ],
          },
          {
            name: 'vega ii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.ARGON,
            ],
          },
          {
            name: 'vega ii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.ALKANES,
              RESOURCE.PALLADIUM,
            ],
          },
          {
            name: 'vega ii-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.COBALT,
              RESOURCE.PALLADIUM,
            ],
          },
        ],
      },
    ],
  },
];

const LEVEL_30_SYSTEMS = [
  {
    name: 'alpha andraste',
    level: '30',
    planets: [
      {
        name: 'alpha andraste i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [
          {
            name: 'alpha andraste i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'alpha andraste ii',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.BERYLLIUM,
          RESOURCE.TANTALUM,
        ],
        moons: [],
      },
      {
        name: 'alpha andraste iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.CHLOROSILANES,
          RESOURCE.XENON,
        ],
        moons: [],
      },
      {
        name: 'alpha andraste iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.ALKANES,
          RESOURCE.TITANIUM,
          RESOURCE.PALLADIUM,
        ],
        moons: [],
      },
      {
        name: 'alpha andraste v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.IRIDIUM,
        ],
        moons: [],
      },
      {
        name: 'alpha andraste vi',
        resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.LEAD],
        moons: [],
      },
    ],
  },
  {
    name: 'copernicus',
    level: '30',
    planets: [
      {
        name: 'copernicus i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.TUNGSTEN,
        ],
        moons: [],
      },
      {
        name: 'copernicus ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.BENZENE,
          RESOURCE.FLUORINE,
          RESOURCE.TITANIUM,
        ],
        moons: [],
      },
      {
        name: 'copernicus iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
        ],
        moons: [
          {
            name: 'copernicus iii-a',
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
        name: 'copernicus iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.NICKEL,
          RESOURCE.ARGON,
          RESOURCE.BERYLLIUM,
        ],
        moons: [],
      },
      {
        name: 'copernicus v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.ARGON,
          RESOURCE.LITHIUM,
        ],
        moons: [],
      },
      {
        name: 'copernicus vi',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.NEODYMIUM,
          RESOURCE.EUROPIUM,
        ],
        moons: [],
      },
      {
        name: 'copernicus vii',
        resources: [],
        moons: [
          {
            name: 'copernicus vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.FLUORINE,
            ],
          },
          {
            name: 'copernicus vii-b',
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
        name: 'copernicus viii',
        resources: [],
        moons: [
          {
            name: 'copernicus viii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'copernicus viii-b',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
          {
            name: 'copernicus viii-c',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.TITANIUM],
          },
          {
            name: 'copernicus viii-d',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
        ],
      },
    ],
  },
  {
    name: 'copernicus minor',
    level: '30',
    planets: [
      {
        name: 'copernicus minor i',
        resources: [],
        moons: [
          {
            name: 'copernicus minor i-a',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE, RESOURCE.LITHIUM],
          },
          {
            name: 'copernicus minor i-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.CHLOROSILANES,
              RESOURCE.ALKANES,
              RESOURCE.LITHIUM,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'denebola',
    level: '30',
    planets: [
      {
        name: 'denebola i',
        resources: [],
        moons: [
          {
            name: 'denebola i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'denebola i-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.SILVER,
              RESOURCE.IRIDIUM,
            ],
          },
        ],
      },
      {
        name: 'denebola ii',
        resources: [],
        moons: [],
      },
      {
        name: 'denebola iii',
        resources: [],
        moons: [
          {
            name: 'denebola iii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.CHLOROSILANES,
              RESOURCE.ALKANES,
              RESOURCE.TANTALUM,
              RESOURCE.YTTERBIUM,
            ],
          },
          {
            name: 'denebola iii-b',
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
    name: 'lantana',
    level: '30',
    planets: [
      {
        name: 'lantana i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [],
      },
      {
        name: 'lantana ii',
        resources: [
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.TUNGSTEN,
        ],
        moons: [],
      },
      {
        name: 'lantana iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.CHLOROSILANES,
        ],
        moons: [
          {
            name: 'lantana iii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'lantana iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.COBALT,
        ],
        moons: [],
      },
      {
        name: 'lantana v',
        resources: [],
        moons: [
          {
            name: 'lantana v-a',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.ALKANES],
          },
          {
            name: 'lantana v-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: 'lantana vi',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.ALKANES,
          RESOURCE.VANADIUM,
        ],
        moons: [],
      },
      {
        name: 'lantana vii',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.SILVER,
          RESOURCE.GOLD,
        ],
        moons: [],
      },
      {
        name: 'lantana viii',
        resources: [],
        moons: [
          {
            name: 'lantana viii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
          {
            name: 'lantana viii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.IRIDIUM,
              RESOURCE.PLATINUM,
              RESOURCE.PLUTONIUM,
            ],
          },
          {
            name: 'lantana viii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'lantana viii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.COBALT,
              RESOURCE.PLATINUM,
              RESOURCE.PALLADIUM,
            ],
          },
        ],
      },
      {
        name: 'lantana ix',
        resources: [],
        moons: [
          {
            name: 'lantana ix-a',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'lantana ix-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.LEAD,
              RESOURCE.SILVER,
              RESOURCE.MERCURY,
            ],
          },
          {
            name: 'lantana ix-c',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: 'lantana ix-d',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'lantana ix-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.ALKANES,
              RESOURCE.TANTALUM,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'porrima',
    level: '30',
    planets: [
      {
        name: 'porrima i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [
          {
            name: 'porrima i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.ALKANES],
          },
          {
            name: 'porrima i-b',
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
        name: 'porrima ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.LITHIUM,
          RESOURCE.CAESIUM,
        ],
        moons: [
          {
            name: 'porrima ii-a',
            resources: [],
          },
          {
            name: 'porrima ii-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'porrima ii-c',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE, RESOURCE.LEAD],
          },
        ],
      },
      {
        name: 'porrima iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.LITHIUM,
        ],
        moons: [
          {
            name: 'porrima iii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.EUROPIUM,
            ],
          },
          {
            name: 'porrima iii-b',
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
        name: 'porrima iv',
        resources: [],
        moons: [
          {
            name: 'porrima iv-a',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'porrima iv-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'porrima iv-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.ARGON,
              RESOURCE.CHLOROSILANES,
              RESOURCE.ALKANES,
              RESOURCE.CARBOXYLIC_ACIDS,
              RESOURCE.NEON,
            ],
          },
          {
            name: 'porrima iv-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.CARBOXYLIC_ACIDS,
              RESOURCE.PLUTONIUM,
              RESOURCE.NEON,
            ],
          },
        ],
      },
      {
        name: 'porrima v',
        resources: [],
        moons: [
          {
            name: 'porrima v-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.FLUORINE,
              RESOURCE.LITHIUM,
              RESOURCE.CAESIUM,
            ],
          },
          {
            name: 'porrima v-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
            ],
          },
          {
            name: 'porrima v-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.GOLD,
              RESOURCE.ANTIMONY,
            ],
          },
        ],
      },
      {
        name: 'porrima vi',
        resources: [RESOURCE.WATER, RESOURCE.CHLORINE, RESOURCE.LITHIUM],
        moons: [
          {
            name: 'porrima vi-a',
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
    name: 'ursae majoris',
    level: '30',
    planets: [
      {
        name: 'ursae major i',
        resources: [RESOURCE.COPPER, RESOURCE.URANIUM, RESOURCE.FLUORINE],
        moons: [
          {
            name: 'ursae major i-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: 'ursae major i-b',
            resources: [RESOURCE.COPPER, RESOURCE.URANIUM, RESOURCE.FLUORINE],
          },
          {
            name: 'ursae major i-c',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.TANTALUM],
          },
        ],
      },
      {
        name: 'ursae major ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.CHLOROSILANES,
        ],
        moons: [],
      },
      {
        name: 'ursae major iii',
        resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
        moons: [],
      },
    ],
  },
];

const LEVEL_35_SYSTEMS = [
  {
    name: 'al-battani',
    level: '35',
    planets: [
      {
        name: 'al-battani i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [
          {
            name: 'al-battani i-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: 'al-battani i-b',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: 'al-battani i-c',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.TANTALUM],
          },
        ],
      },
      {
        name: 'al-battani ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.ALKANES,
          RESOURCE.IONIC_LIQUIDS,
          RESOURCE.DYSPROSIUM,
        ],
        moons: [],
      },
      {
        name: 'al-battani iii',
        resources: [
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.FLUORINE,
          RESOURCE.PALLADIUM,
        ],
        moons: [
          {
            name: 'al-battani iii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'al-battani iii-b',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'al-battani iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.CHLOROSILANES,
          RESOURCE.ALKANES,
        ],
        moons: [
          {
            name: 'al-battani iv-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'al-battani iv-b',
            resources: [],
          },
        ],
      },
      {
        name: 'al-battani v',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [
          {
            name: 'al-battani v-a',
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
        name: 'al-battani vi',
        resources: [],
        moons: [
          {
            name: 'al-battani vi-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: 'al-battani vi-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: 'al-battani vii',
        resources: [],
        moons: [
          {
            name: 'al-battani vii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'al-battani viii',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: 'al-battani viii-a',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.SILVER],
          },
        ],
      },
    ],
  },
  {
    name: 'alpha tirna',
    level: '35',
    planets: [
      {
        name: 'tirna i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.TANTALUM],
        moons: [],
      },
      {
        name: 'tirna ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.FLUORINE,
          RESOURCE.IONIC_LIQUIDS,
          RESOURCE.DYSPROSIUM,
        ],
        moons: [
          {
            name: 'tirna ii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'tirna iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.FLUORINE,
          RESOURCE.COBALT,
          RESOURCE.SILVER,
        ],
        moons: [
          {
            name: 'tirna iii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: 'tirna iii-b',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: 'tirna iii-c',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'tirna iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.COBALT,
          RESOURCE.VANADIUM,
        ],
        moons: [
          {
            name: 'tirna iv-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.TANTALUM],
          },
        ],
      },
      {
        name: 'tirna v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.FLUORINE,
          RESOURCE.TUNGSTEN,
          RESOURCE.VANADIUM,
        ],
        moons: [],
      },
      {
        name: 'tirna vi',
        resources: [],
        moons: [
          {
            name: 'tirna vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
          {
            name: 'tirna vi-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
              RESOURCE.EUROPIUM,
            ],
          },
          {
            name: 'tirna vi-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'tirna vi-d',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'tirna vi-e',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
        ],
      },
      {
        name: 'tirna vii',
        resources: [],
        moons: [
          {
            name: 'tirna vii-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'tirna vii-b',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.TUNGSTEN],
          },
          {
            name: 'tirna vii-c',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
        ],
      },
      {
        name: 'tirna viii',
        resources: [],
        moons: [
          {
            name: 'tirna viii-a',
            resources: [],
          },
          {
            name: 'tirna viii-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'tirna viii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.ALKANES,
              RESOURCE.TUNGSTEN,
              RESOURCE.TANTALUM,
              RESOURCE.TITANIUM,
              RESOURCE.DYSPROSIUM,
            ],
          },
          {
            name: 'tirna viii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.ALKANES,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: 'tirna viii-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.IRIDIUM,
              RESOURCE.NEON,
            ],
          },
        ],
      },
      {
        name: 'tirna ix',
        resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.TETRAFLUORIDES],
        moons: [],
      },
      {
        name: 'tirna x',
        resources: [],
        moons: [
          {
            name: 'tirna x-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.TUNGSTEN,
              RESOURCE.GOLD,
              RESOURCE.TITANIUM,
            ],
          },
          {
            name: 'tirna x-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'tirna x-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'beta tirna',
    level: '35',
    planets: [
      {
        name: 'tirna b',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.ALKANES],
        moons: [],
      },
    ],
  },
  {
    name: 'bolivar',
    level: '35',
    planets: [
      {
        name: 'bolivar i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.TUNGSTEN,
        ],
        moons: [],
      },
    ],
  },
  {
    name: 'jaffa',
    level: '35',
    planets: [
      {
        name: 'jaffa i',
        resources: [
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.TUNGSTEN,
          RESOURCE.TITANIUM,
          RESOURCE.DYSPROSIUM,
        ],
        moons: [
          {
            name: 'jaffa i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.ALKANES],
          },
        ],
      },
      {
        name: 'jaffa ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.FLUORINE,
          RESOURCE.LITHIUM,
          RESOURCE.GOLD,
          RESOURCE.MERCURY,
        ],
        moons: [
          {
            name: 'jaffa ii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.IRIDIUM,
              RESOURCE.PALLADIUM,
              RESOURCE.PLUTONIUM,
            ],
          },
        ],
      },
      {
        name: 'jaffa iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.URANIUM,
          RESOURCE.CHLOROSILANES,
        ],
        moons: [],
      },
      {
        name: 'jaffa iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.VANADIUM,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [
          {
            name: 'jaffa iv-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'jaffa v',
        resources: [RESOURCE.VANADIUM],
        moons: [
          {
            name: 'jaffa v-a',
            resources: [
              RESOURCE.VANADIUM,
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
        ],
      },
      {
        name: 'jaffa vi',
        resources: [],
        moons: [
          {
            name: 'jaffa vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.BENZENE,
              RESOURCE.SILVER,
            ],
          },
          {
            name: 'jaffa vi-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'jaffa vi-c',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
              RESOURCE.EUROPIUM,
            ],
          },
        ],
      },
      {
        name: 'jaffa vii',
        resources: [],
        moons: [
          {
            name: 'jaffa vii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'jaffa vii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.CHLOROSILANES,
              RESOURCE.TUNGSTEN,
              RESOURCE.TITANIUM,
              RESOURCE.DYSPROSIUM,
            ],
          },
          {
            name: 'jaffa vii-c',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: 'jaffa vii-d',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: 'jaffa vii-e',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
        ],
      },
      {
        name: 'jaffa viii',
        resources: [RESOURCE.WATER, RESOURCE.ARGON],
        moons: [],
      },
    ],
  },
  {
    name: 'nemeria',
    level: '35',
    planets: [
      {
        name: 'nemeria i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.SILVER,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [],
      },
      {
        name: 'nemeria ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.TUNGSTEN,
          RESOURCE.NEON,
        ],
        moons: [
          {
            name: 'nemeria ii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: 'nemeria ii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.ALKANES,
            ],
          },
        ],
      },
      {
        name: 'nemeria iii',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: 'nemeria iii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'nemeria iv',
        resources: [],
        moons: [
          {
            name: 'nemeria iv-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.COPPER,
              RESOURCE.LEAD,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.FLUORINE,
              RESOURCE.ANTIMONY,
            ],
          },
          {
            name: 'nemeria iv-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.VANADIUM,
              RESOURCE.PALLADIUM,
              RESOURCE.DYSPROSIUM,
            ],
          },
        ],
      },
      {
        name: 'nemeria v',
        resources: [RESOURCE.VANADIUM],
        moons: [
          {
            name: 'nemeria v-a',
            resources: [
              RESOURCE.VANADIUM,
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
            ],
          },
          {
            name: 'nemeria v-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'nemeria v-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.ALKANES,
              RESOURCE.TETRAFLUORIDES,
              RESOURCE.VANADIUM,
            ],
          },
        ],
      },
      {
        name: 'nemeria vi',
        resources: [],
        moons: [
          {
            name: 'nemeria vi-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'nemeria vi-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.FLUORINE,
              RESOURCE.ALKANES,
              RESOURCE.TUNGSTEN,
              RESOURCE.YTTERBIUM,
            ],
          },
          {
            name: 'nemeria vi-c',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'nemeria vi-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
              RESOURCE.ANTIMONY,
            ],
          },
        ],
      },
      {
        name: 'nemeria vii',
        resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
        moons: [],
      },
    ],
  },
  {
    name: 'rivera',
    level: '35',
    planets: [
      {
        name: 'rivera i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.COBALT,
          RESOURCE.PLATINUM,
        ],
        moons: [
          {
            name: 'rivera i-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.BERYLLIUM,
              RESOURCE.CHLOROSILANES,
              RESOURCE.NEODYMIUM,
            ],
          },
        ],
      },
      {
        name: 'rivera ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.SILVER,
          RESOURCE.MERCURY,
        ],
        moons: [
          {
            name: 'rivera ii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: 'rivera ii-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'rivera ii-c',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.EUROPIUM,
            ],
          },
        ],
      },
      {
        name: 'rivera iii',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [],
      },
      {
        name: 'rivera iv',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.ALKANES],
        moons: [
          {
            name: 'rivera iv-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'rivera v',
        resources: [RESOURCE.VANADIUM],
        moons: [
          {
            name: 'rivera v-a',
            resources: [
              RESOURCE.VANADIUM,
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.PLATINUM,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'shoza',
    level: '35',
    planets: [
      {
        name: 'shoza i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.URANIUM,
          RESOURCE.IRIDIUM,
        ],
        moons: [
          {
            name: 'shoza i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.YTTERBIUM],
          },
        ],
      },
      {
        name: 'shoza ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.COBALT,
          RESOURCE.SILVER,
        ],
        moons: [
          {
            name: 'shoza ii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.URANIUM,
              RESOURCE.CHLOROSILANES,
              RESOURCE.COBALT,
            ],
          },
        ],
      },
      {
        name: 'shoza iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.CHLOROSILANES,
          RESOURCE.FLUORINE,
          RESOURCE.LITHIUM,
        ],
        moons: [
          {
            name: 'shoza iii-a',
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
        name: 'shoza iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.COBALT,
          RESOURCE.PLATINUM,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [],
      },
      {
        name: 'shoza v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.FLUORINE,
          RESOURCE.TUNGSTEN,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [],
      },
      {
        name: 'shoza vi',
        resources: [],
        moons: [
          {
            name: 'shoza vi-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: 'shoza vii',
        resources: [],
        moons: [
          {
            name: 'shoza vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.COPPER,
              RESOURCE.LEAD,
              RESOURCE.FLUORINE,
              RESOURCE.TUNGSTEN,
            ],
          },
          {
            name: 'shoza vii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
            ],
          },
          {
            name: 'shoza vii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.BERYLLIUM,
              RESOURCE.COBALT,
              RESOURCE.EUROPIUM,
              RESOURCE.PALLADIUM,
            ],
          },
        ],
      },
      {
        name: 'shoza viii',
        resources: [],
        moons: [
          {
            name: 'shoza viii-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'shoza viii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.BERYLLIUM,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
            ],
          },
          {
            name: 'shoza viii-c',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'shoza viii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.IRIDIUM,
              RESOURCE.PALLADIUM,
            ],
          },
        ],
      },
      {
        name: 'shoza ix',
        resources: [RESOURCE.WATER, RESOURCE.CHLORINE, RESOURCE.CHLOROSILANES],
        moons: [],
      },
    ],
  },
];

const LEVEL_40_SYSTEMS = [
  {
    name: 'beta ternion',
    level: '40',
    planets: [
      {
        name: 'beta ternion i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.CHLOROSILANES,
          RESOURCE.LITHIUM,
        ],
        moons: [
          {
            name: 'beta ternion i-a',
            resources: [],
          },
        ],
      },
      {
        name: 'beta ternion ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.COBALT,
          RESOURCE.PLATINUM,
          RESOURCE.PALLADIUM,
        ],
        moons: [],
      },
      {
        name: 'beta ternion iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
        ],
        moons: [],
      },
      {
        name: 'beta ternion iii-a',
        resources: [
          RESOURCE.WATER,
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.CHLOROSILANES,
        ],
        moons: [],
      },
    ],
  },
  {
    name: 'freya',
    level: '40',
    planets: [
      {
        name: 'freya i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.EUROPIUM],
        moons: [],
      },
      {
        name: 'freya ii',
        resources: [
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.VANADIUM,
        ],
        moons: [],
      },
      {
        name: 'freya iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.SILVER,
          RESOURCE.MERCURY,
        ],
        moons: [],
      },
      {
        name: 'freya iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.IRIDIUM,
          RESOURCE.EUROPIUM,
        ],
        moons: [
          {
            name: 'freya iv-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'freya iv-b',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.EUROPIUM,
            ],
          },
          {
            name: 'freya iv-c',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'freya v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.HELIUM_3,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.CHLOROSILANES,
          RESOURCE.COBALT,
        ],
        moons: [],
      },
      {
        name: 'freya vi',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [],
      },
      {
        name: 'freya vii',
        resources: [],
        moons: [
          {
            name: 'freya vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.FLUORINE,
              RESOURCE.TUNGSTEN,
              RESOURCE.TETRAFLUORIDES,
              RESOURCE.TITANIUM,
            ],
          },
        ],
      },
      {
        name: 'freya viii',
        resources: [],
        moons: [
          {
            name: 'freya viii-a',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
        ],
      },
      {
        name: 'freya ix',
        resources: [],
        moons: [
          {
            name: 'freya ix-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.XENON,
            ],
          },
          {
            name: 'freya ix-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.PLATINUM,
            ],
          },
          {
            name: 'freya ix-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.BERYLLIUM,
              RESOURCE.EUROPIUM,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'hyla',
    level: '40',
    planets: [
      {
        name: 'hyla i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.IRIDIUM,
          RESOURCE.MERCURY,
        ],
        moons: [
          {
            name: 'hyla i-a',
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
        name: 'hyla ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.FLUORINE,
          RESOURCE.BERYLLIUM,
          RESOURCE.SILVER,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [
          {
            name: 'hyla ii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.EUROPIUM,
            ],
          },
          {
            name: 'hyla ii-b',
            resources: [],
          },
        ],
      },
      {
        name: 'hyla iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.LEAD,
          RESOURCE.BERYLLIUM,
          RESOURCE.NEODYMIUM,
          RESOURCE.MERCURY,
        ],
        moons: [],
      },
      {
        name: 'hyla iv',
        resources: [],
        moons: [
          {
            name: 'hyla iv-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.PLATINUM],
          },
          {
            name: 'hyla iv-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
        ],
      },
      {
        name: 'hyla v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.LEAD,
          RESOURCE.SILVER,
          RESOURCE.NEODYMIUM,
          RESOURCE.MERCURY,
        ],
        moons: [
          {
            name: 'hyla v-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.TANTALUM,
              RESOURCE.VANADIUM,
              RESOURCE.NEON,
            ],
          },
        ],
      },
      {
        name: 'hyla vi',
        resources: [],
        moons: [
          {
            name: 'hyla vi-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: 'hyla vi-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: 'hyla vii',
        resources: [],
        moons: [
          {
            name: 'hyla vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.LEAD,
              RESOURCE.TUNGSTEN,
              RESOURCE.LITHIUM,
              RESOURCE.TITANIUM,
            ],
          },
        ],
      },
      {
        name: 'hyla viii',
        resources: [],
        moons: [
          {
            name: 'hyla viii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.TETRAFLUORIDES,
              RESOURCE.IONIC_LIQUIDS,
            ],
          },
          {
            name: 'hyla viii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.CAESIUM,
            ],
          },
          {
            name: 'hyla viii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'hyla viii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.URANIUM,
              RESOURCE.FLUORINE,
              RESOURCE.IRIDIUM,
              RESOURCE.PLUTONIUM,
            ],
          },
          {
            name: 'hyla viii-e',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
        ],
      },
    ],
  },
  {
    name: 'ixyll',
    level: '40',
    planets: [
      {
        name: 'ixyll i',
        resources: [
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.ALKANES,
          RESOURCE.IRIDIUM,
        ],
        moons: [],
      },
      {
        name: 'ixyll ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.CHLOROSILANES,
          RESOURCE.ALKANES,
          RESOURCE.GOLD,
          RESOURCE.ANTIMONY,
        ],
        moons: [
          {
            name: 'ixyll ii-a',
            resources: [],
          },
        ],
      },
      {
        name: 'ixyll iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.CHLOROSILANES,
        ],
        moons: [
          {
            name: 'ixyll iii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.EUROPIUM,
            ],
          },
          {
            name: 'ixyll iii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.BERYLLIUM,
              RESOURCE.CHLOROSILANES,
            ],
          },
        ],
      },
      {
        name: 'ixyll iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.CARBOXYLIC_ACIDS,
          RESOURCE.NEON,
        ],
        moons: [],
      },
      {
        name: 'ixyll v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.FLUORINE,
          RESOURCE.SILVER,
          RESOURCE.LITHIUM,
        ],
        moons: [],
      },
      {
        name: 'ixyll vi',
        resources: [],
        moons: [
          {
            name: 'ixyll vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.IONIC_LIQUIDS,
            ],
          },
          {
            name: 'ixyll vi-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'ixyll vi-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.ALKANES,
              RESOURCE.EUROPIUM,
            ],
          },
          {
            name: 'ixyll vi-d',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
          {
            name: 'ixyll vi-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.CHLOROSILANES,
              RESOURCE.COBALT,
            ],
          },
        ],
      },
      {
        name: 'ixyll vii',
        resources: [],
        moons: [
          {
            name: 'ixyll vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.COPPER,
              RESOURCE.URANIUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.FLUORINE,
              RESOURCE.ANTIMONY,
            ],
          },
          {
            name: 'ixyll vii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.LEAD,
              RESOURCE.TUNGSTEN,
              RESOURCE.GOLD,
            ],
          },
          {
            name: 'ixyll vii-c',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
        ],
      },
      {
        name: 'ixyll viii',
        resources: [],
        moons: [
          {
            name: 'ixyll viii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.URANIUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.IRIDIUM,
              RESOURCE.PLUTONIUM,
            ],
          },
          {
            name: 'ixyll viii-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
        ],
      },
      {
        name: 'ixyll ix',
        resources: [],
        moons: [
          {
            name: 'ixyll ix-a',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
          {
            name: 'ixyll ix-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.LITHIUM,
            ],
          },
          {
            name: 'ixyll ix-c',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.GOLD],
          },
          {
            name: 'ixyll ix-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.URANIUM,
              RESOURCE.FLUORINE,
              RESOURCE.VANADIUM,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'khayyam',
    level: '40',
    planets: [
      {
        name: 'khayyam i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: 'khayyam i-a',
            resources: [],
          },
        ],
      },
      {
        name: 'khayyam ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.CHLOROSILANES,
          RESOURCE.IRIDIUM,
          RESOURCE.XENON,
          RESOURCE.PLUTONIUM,
        ],
        moons: [
          {
            name: 'khayyam ii-a',
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
        name: 'khayyam iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.CHLOROSILANES,
          RESOURCE.ALKANES,
          RESOURCE.GOLD,
        ],
        moons: [
          {
            name: 'khayyam iii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'khayyam iii-b',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.IRON,
              RESOURCE.ALKANES,
              RESOURCE.YTTERBIUM,
            ],
          },
          {
            name: 'khayyam iii-c',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.EUROPIUM,
            ],
          },
        ],
      },
      {
        name: 'khayyam iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.ALKANES,
          RESOURCE.TUNGSTEN,
          RESOURCE.TANTALUM,
          RESOURCE.TITANIUM,
        ],
        moons: [
          {
            name: 'khayyam iv-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'khayyam v',
        resources: [],
        moons: [
          {
            name: 'khayyam v-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
        ],
      },
      {
        name: 'khayyam vi',
        resources: [],
        moons: [
          {
            name: 'khayyam vi-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: 'khayyam vi-b',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.TUNGSTEN],
          },
          {
            name: 'khayyam vi-c',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
          {
            name: 'khayyam vi-d',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'khayyam vi-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.TETRAFLUORIDES,
              RESOURCE.IONIC_LIQUIDS,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'moloch',
    level: '40',
    planets: [
      {
        name: 'moloch i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.VANADIUM,
          RESOURCE.MERCURY,
        ],
        moons: [
          {
            name: 'moloch i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'moloch ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.LITHIUM,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [],
      },
      {
        name: 'moloch iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.FLUORINE,
          RESOURCE.CARBOXYLIC_ACIDS,
          RESOURCE.ANTIMONY,
        ],
        moons: [],
      },
      {
        name: 'moloch iv',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [],
      },
      {
        name: 'moloch v',
        resources: [],
        moons: [
          {
            name: 'moloch v-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: 'moloch v-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.GOLD],
          },
          {
            name: 'moloch v-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.SILVER,
            ],
          },
          {
            name: 'moloch v-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.COPPER,
              RESOURCE.NEODYMIUM,
            ],
          },
        ],
      },
      {
        name: 'moloch vi',
        resources: [],
        moons: [
          {
            name: 'moloch vi-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: 'moloch vi-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NICKEL,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.IRIDIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
        ],
      },
      {
        name: 'moloch vii',
        resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
        moons: [],
      },
    ],
  },
  {
    name: 'nikola',
    level: '40',
    planets: [
      {
        name: 'nikola i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.IRON,
          RESOURCE.ARGON,
          RESOURCE.BERYLLIUM,
          RESOURCE.ALKANES,
          RESOURCE.TANTALUM,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [],
      },
      {
        name: 'nikola ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.TUNGSTEN,
          RESOURCE.PLUTONIUM,
        ],
        moons: [
          {
            name: 'nikola ii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'nikola iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.ALKANES,
          RESOURCE.TANTALUM,
        ],
        moons: [
          {
            name: 'nikola iii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'nikola iii-b',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'nikola iv',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.NEODYMIUM,
        ],
        moons: [
          {
            name: 'nikola iv-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'nikola v',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.NEODYMIUM,
        ],
        moons: [],
      },
      {
        name: 'nikola vi',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: 'nikola vi-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'nikola vi-b',
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
        name: 'nikola vii',
        resources: [],
        moons: [
          {
            name: 'nikola vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.FLUORINE,
              RESOURCE.COBALT,
              RESOURCE.IRIDIUM,
              RESOURCE.PLATINUM,
            ],
          },
        ],
      },
      {
        name: 'nikola viii',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [
          {
            name: 'nikola viii-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: 'nikola ix',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [],
      },
      {
        name: 'nikola x',
        resources: [],
        moons: [
          {
            name: 'nikola x-a',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
        ],
      },
    ],
  },
  {
    name: 'nirvana',
    level: '40',
    planets: [
      {
        name: 'nirvana i',
        resources: [
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.SILVER,
          RESOURCE.IRIDIUM,
          RESOURCE.VANADIUM,
        ],
        moons: [],
      },
      {
        name: 'nirvana ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.FLUORINE,
          RESOURCE.TETRAFLUORIDES,
          RESOURCE.VANADIUM,
          RESOURCE.IONIC_LIQUIDS,
        ],
        moons: [
          {
            name: 'nirvana ii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.ALKANES],
          },
        ],
      },
      {
        name: 'nirvana iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.IRIDIUM,
          RESOURCE.VANADIUM,
        ],
        moons: [
          {
            name: 'nirvana iii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'nirvana iv',
        resources: [],
        moons: [
          {
            name: 'nirvana iv-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
    ],
  },
  {
    name: 'Rasalhague',
    level: '40',
    planets: [
      {
        name: 'rasalhague i',
        resources: [
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.YTTERBIUM,
        ],
        moons: [
          {
            name: 'rasalhague i-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'rasalhague ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.COBALT,
          RESOURCE.CAESIUM,
        ],
        moons: [],
      },
      {
        name: 'rasalhague iii',
        resources: [],
        moons: [
          {
            name: 'rasalhague iii-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'rasalhague iii-b',
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
        name: 'rasalhague iv',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [],
      },
    ],
  },
];

const LEVEL_45_SYSTEMS = [
  {
    name: 'alpha marae',
    level: '45',
    planets: [
      {
        name: 'alpha marae i',
        resources: [
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.SILVER,
          RESOURCE.VANADIUM,
        ],
        moons: [],
      },
      {
        name: 'alpha marae ii',
        resources: [],
        moons: [
          {
            name: 'alpha marae ii-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
        ],
      },
      {
        name: 'alpha marae iii',
        resources: [],
        moons: [
          {
            name: 'alpha marae iii-a',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
          {
            name: 'alpha marae iii-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'alpha marae iii-c',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'alpha marae iii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.IRIDIUM,
              RESOURCE.LITHIUM,
            ],
          },
        ],
      },
      {
        name: 'alpha marae iv',
        resources: [],
        moons: [
          {
            name: 'alpha marae iv-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'alpha marae iv-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.BERYLLIUM,
              RESOURCE.COBALT,
              RESOURCE.ALKANES,
            ],
          },
        ],
      },
      {
        name: 'alpha marae v',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.EUROPIUM,
        ],
        moons: [],
      },
    ],
  },
  {
    name: 'bara',
    level: '45',
    planets: [
      {
        name: 'bara i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [],
      },
      {
        name: 'bara ii',
        resources: [RESOURCE.IRON, RESOURCE.URANIUM, RESOURCE.IRIDIUM],
        moons: [
          {
            name: 'bara ii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'bara iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.ARGON,
          RESOURCE.CHLOROSILANES,
          RESOURCE.ALKANES,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [
          {
            name: 'bara iii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'bara iv',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.TANTALUM],
        moons: [],
      },
      {
        name: 'bara v',
        resources: [],
        moons: [
          {
            name: 'bara v-a',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.TITANIUM],
          },
        ],
      },
      {
        name: 'bara vi',
        resources: [],
        moons: [
          {
            name: 'bara vi-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: 'bara vi-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'bara vi-c',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.GOLD],
          },
        ],
      },
      {
        name: 'bara vii',
        resources: [],
        moons: [
          {
            name: 'bara vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
            ],
          },
          {
            name: 'bara vii-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'bara vii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.LITHIUM,
            ],
          },
          {
            name: 'bara vii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.LITHIUM,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'beta marae',
    level: '45',
    planets: [
      {
        name: 'beta marae i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
        ],
        moons: [
          {
            name: 'beta marae i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'beta marae ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.FLUORINE,
          RESOURCE.COBALT,
          RESOURCE.TUNGSTEN,
          RESOURCE.PALLADIUM,
        ],
        moons: [
          {
            name: 'beta marae ii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: 'beta marae ii-b',
            resources: [],
          },
        ],
      },
      {
        name: 'beta marae iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.IONIC_LIQUIDS,
        ],
        moons: [
          {
            name: 'beta marae iii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'beta marae iv',
        resources: [],
        moons: [
          {
            name: 'beta marae iv-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.PALLADIUM],
          },
          {
            name: 'beta marae iv-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.IRIDIUM,
              RESOURCE.VANADIUM,
            ],
          },
          {
            name: 'beta marae iv-c',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: 'beta marae iv-d',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
        ],
      },
      {
        name: 'beta marae v',
        resources: [],
        moons: [
          {
            name: 'beta marae v-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'beta marae v-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.ANTIMONY],
          },
          {
            name: 'beta marae v-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.ALKANES,
              RESOURCE.VANADIUM,
              RESOURCE.PLUTONIUM,
            ],
          },
          {
            name: 'beta marae v-d',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
        ],
      },
      {
        name: 'beta marae vi',
        resources: [],
        moons: [
          {
            name: 'beta marae vi-a',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'beta marae vi-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'beta marae vi-c',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
    ],
  },
  {
    name: 'heinlein',
    level: '45',
    planets: [
      {
        name: 'heinlein i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [],
      },
      {
        name: 'heinlein ii',
        resources: [
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.IRIDIUM,
          RESOURCE.VANADIUM,
        ],
        moons: [
          {
            name: 'heinlein ii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: 'heinlein ii-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'heinlein iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.IRIDIUM,
          RESOURCE.PALLADIUM,
          RESOURCE.NEON,
        ],
        moons: [
          {
            name: 'heinlein iii-a',
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
        name: 'heinlein iv',
        resources: [],
        moons: [
          {
            name: 'heinlein iv-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: 'heinlein iv-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.ALKANES,
              RESOURCE.SILVER,
              RESOURCE.MERCURY,
              RESOURCE.CAESIUM,
            ],
          },
          {
            name: 'heinlein iv-c',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.NICKEL],
          },
          {
            name: 'heinlein iv-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: 'heinlein iv-e',
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
        name: 'heinlein v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.COBALT,
          RESOURCE.SILVER,
          RESOURCE.CARBOXYLIC_ACIDS,
          RESOURCE.PALLADIUM,
        ],
        moons: [
          {
            name: 'heinlein v-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.LITHIUM,
            ],
          },
          {
            name: 'heinlein v-b',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
              RESOURCE.EUROPIUM,
            ],
          },
          {
            name: 'heinlein v-c',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'heinlein vi',
        resources: [],
        moons: [
          {
            name: 'heinlein vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.CHLOROSILANES,
              RESOURCE.COBALT,
              RESOURCE.XENON,
              RESOURCE.PALLADIUM,
            ],
          },
          {
            name: 'heinlein vi-b',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'heinlein vi-c',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE, RESOURCE.LITHIUM],
          },
          {
            name: 'heinlein vi-d',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: 'heinlein vi-e',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
        ],
      },
      {
        name: 'heinlein vii',
        resources: [RESOURCE.WATER, RESOURCE.LEAD],
        moons: [],
      },
    ],
  },
  {
    name: 'linnaeus',
    level: '45',
    planets: [
      {
        name: 'linnaeus i',
        resources: [RESOURCE.URANIUM, RESOURCE.IRIDIUM],
        moons: [],
      },
      {
        name: 'linnaeus ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.SILVER,
        ],
        moons: [
          {
            name: 'linnaeus ii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.TANTALUM],
          },
        ],
      },
      {
        name: 'linnaeus iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.FLUORINE,
          RESOURCE.TETRAFLUORIDES,
        ],
        moons: [
          {
            name: 'linnaeus iii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'linnaeus iv',
        resources: [],
        moons: [
          {
            name: 'linnaeus iv-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.IRIDIUM,
              RESOURCE.PLATINUM,
            ],
          },
          {
            name: 'linnaeus iv-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.BERYLLIUM,
              RESOURCE.ALKANES,
              RESOURCE.YTTERBIUM,
            ],
          },
          {
            name: 'linnaeus iv-c',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.LEAD],
          },
        ],
      },
      {
        name: 'linnaeus v',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.EUROPIUM],
        moons: [],
      },
      {
        name: 'linnaeus vi',
        resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
        moons: [],
      },
      {
        name: 'linnaeus vii',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.NEODYMIUM],
        moons: [],
      },
    ],
  },
  {
    name: 'ophion',
    level: '45',
    planets: [
      {
        name: 'ophion i',
        resources: [],
        moons: [
          {
            name: 'ophion i-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
        ],
      },
    ],
  },
  {
    name: 'rutherford',
    level: '45',
    planets: [
      {
        name: 'rutherford i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: 'rutherford i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'rutherford i-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'rutherford ii',
        resources: [
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.PLATINUM,
        ],
        moons: [
          {
            name: 'rutherford ii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
            ],
          },
        ],
      },
      {
        name: 'rutherford iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.CHLOROSILANES,
          RESOURCE.LITHIUM,
        ],
        moons: [
          {
            name: 'rutherford iii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'rutherford iv',
        resources: [],
        moons: [
          {
            name: 'rutherford iv-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'rutherford iv-b',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'rutherford iv-c',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
          {
            name: 'rutherford iv-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.IRIDIUM,
              RESOURCE.VANADIUM,
            ],
          },
          {
            name: 'rutherford iv-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.CARBOXYLIC_ACIDS,
              RESOURCE.NEON,
            ],
          },
        ],
      },
      {
        name: 'rutherford v',
        resources: [],
        moons: [
          {
            name: 'rutherford v-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.LEAD,
              RESOURCE.TITANIUM,
            ],
          },
          {
            name: 'rutherford v-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.CHLOROSILANES,
              RESOURCE.MERCURY,
            ],
          },
        ],
      },
      {
        name: 'rutherford vi',
        resources: [],
        moons: [
          {
            name: 'rutherford vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.URANIUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
              RESOURCE.CAESIUM,
            ],
          },
          {
            name: 'rutherford vi-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.ANTIMONY],
          },
          {
            name: 'rutherford vi-c',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'rutherford vi-d',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
        ],
      },
    ],
  },
  {
    name: 'tidacha',
    level: '45',
    planets: [
      {
        name: 'tidacha i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.ARGON,
          RESOURCE.ALKANES,
          RESOURCE.BENZENE,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [
          {
            name: 'tidacha i-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: 'tidacha i-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.TANTALUM],
          },
          {
            name: 'tidacha i-c',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.YTTERBIUM],
          },
        ],
      },
    ],
  },
];

export const MIDDLE_TIER_SYSTEMS = [
  ...LEVEL_25_SYSTEMS,
  ...LEVEL_30_SYSTEMS,
  ...LEVEL_35_SYSTEMS,
  ...LEVEL_40_SYSTEMS,
  ...LEVEL_45_SYSTEMS,
];
