import { RESOURCE } from '../resources';

const LEVEL_50_SYSTEMS = [
  {
    name: 'alchiba',
    level: '50',
    planets: [
      {
        name: 'alchiba i',
        resources: [
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.COBALT,
          RESOURCE.PALLADIUM,
        ],
        moons: [],
      },
      {
        name: 'alchiba ii',
        resources: [
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.SILVER,
          RESOURCE.IRIDIUM,
        ],
        moons: [
          {
            name: 'alchiba ii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'alchiba iii',
        resources: [],
        moons: [
          {
            name: 'alchiba iii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.LEAD,
              RESOURCE.TUNGSTEN,
            ],
          },
          {
            name: 'alchiba iii-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'alchiba iii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NICKEL,
              RESOURCE.BERYLLIUM,
              RESOURCE.COBALT,
              RESOURCE.NEODYMIUM,
              RESOURCE.PLATINUM,
            ],
          },
        ],
      },
      {
        name: 'alchiba iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.IRIDIUM,
          RESOURCE.TETRAFLUORIDES,
          RESOURCE.VANADIUM,
        ],
        moons: [
          {
            name: 'alchiba iv-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.ARGON,
              RESOURCE.FLUORINE,
              RESOURCE.COBALT,
            ],
          },
        ],
      },
      {
        name: 'alchiba v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.IRIDIUM,
        ],
        moons: [
          {
            name: 'alchiba v-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.IRON,
              RESOURCE.ALKANES,
              RESOURCE.YTTERBIUM,
            ],
          },
        ],
      },
      {
        name: 'alchiba vi',
        resources: [],
        moons: [
          {
            name: 'alchiba vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
            ],
          },
          {
            name: 'alchiba vi-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
          {
            name: 'alchiba vi-c',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
        ],
      },
      {
        name: 'alchiba vii',
        resources: [],
        moons: [
          {
            name: 'alchiba vii-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: 'alchiba vii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.COBALT,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
          {
            name: 'alchiba vii-c',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.MERCURY],
          },
          {
            name: 'alchiba vii-d',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
        ],
      },
      {
        name: 'alchiba viii',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [
          {
            name: 'alchiba viii-a',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
          {
            name: 'alchiba viii-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'alchiba ix',
        resources: [],
        moons: [
          {
            name: 'alchiba ix-a',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
        ],
      },
      {
        name: 'alchiba x',
        resources: [],
        moons: [
          {
            name: 'alchiba x-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.GOLD],
          },
          {
            name: 'alchiba x-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.LEAD,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'bannoc',
    level: '50',
    planets: [
      {
        name: 'bannoc i',
        resources: [
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.SILVER,
          RESOURCE.MERCURY,
        ],
        moons: [],
      },
      {
        name: 'bannoc ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.IRIDIUM,
          RESOURCE.PLATINUM,
          RESOURCE.VANADIUM,
        ],
        moons: [],
      },
      {
        name: 'bannoc iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.CHLOROSILANES,
        ],
        moons: [
          {
            name: 'bannoc iii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'bannoc iv',
        resources: [],
        moons: [
          {
            name: 'bannoc iv-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.CAESIUM,
            ],
          },
          {
            name: 'bannoc iv-b',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.SILVER],
          },
        ],
      },
    ],
  },
  {
    name: 'bannoc secondus',
    level: '50',
    planets: [
      {
        name: 'bannoc secondus i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.NEODYMIUM],
        moons: [],
      },
    ],
  },
  {
    name: 'delta vulpes',
    level: '50',
    planets: [
      {
        name: 'delta vulpes i',
        resources: [],
        moons: [],
      },
      {
        name: 'delta vulpes ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.COBALT,
        ],
        moons: [],
      },
      {
        name: 'delta vulpes iii',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: 'delta vulpes iii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.TANTALUM],
          },
        ],
      },
      {
        name: 'delta vulpes iv',
        resources: [],
        moons: [
          {
            name: 'delta vulpes iv-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
        ],
      },
      {
        name: 'delta vulpes v',
        resources: [],
        moons: [
          {
            name: 'delta vulpes v-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: 'delta vulpes v-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
          {
            name: 'delta vulpes v-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
          {
            name: 'delta vulpes v-d',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'delta vulpes v-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.NEON,
            ],
          },
        ],
      },
      {
        name: 'delta vulpes vi',
        resources: [],
        moons: [
          {
            name: 'delta vulpes vi-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
        ],
      },
      {
        name: 'delta vulpes vii',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.ALKANES],
        moons: [],
      },
    ],
  },
  {
    name: 'gamma vulpes',
    level: '50',
    planets: [
      {
        name: 'gamma vulpes i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.CHLOROSILANES,
          RESOURCE.LITHIUM,
        ],
        moons: [],
      },
      {
        name: 'gamma vulpes ii',
        resources: [],
        moons: [
          {
            name: 'gamma vulpes ii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.COBALT,
              RESOURCE.IRIDIUM,
            ],
          },
          {
            name: 'gamma vulpes ii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
          {
            name: 'gamma vulpes ii-c',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: 'gamma vulpes ii-d',
            resources: [
              RESOURCE.WATER,
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
        name: 'gamma vulpes iii',
        resources: [],
        moons: [
          {
            name: 'gamma vulpes iii-a',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
        ],
      },
      {
        name: 'gamma vulpes iv',
        resources: [],
        moons: [
          {
            name: 'gamma vulpes iv-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.TUNGSTEN,
              RESOURCE.TITANIUM,
              RESOURCE.DYSPROSIUM,
            ],
          },
          {
            name: 'gamma vulpes iv-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'gamma vulpes iv-c',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'gamma vulpes iv-d',
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
    name: 'xi ophiuchi',
    level: '50',
    planets: [
      {
        name: 'xi ophiuchi i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [],
      },
      {
        name: 'xi ophiuchi ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.VANADIUM,
        ],
        moons: [],
      },
      {
        name: 'xi ophiuchi iii',
        resources: [
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.FLUORINE,
          RESOURCE.ALKANES,
          RESOURCE.IRIDIUM,
          RESOURCE.ANTIMONY,
          RESOURCE.YTTERBIUM,
        ],
        moons: [
          {
            name: 'xi ophiuchi iii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'xi ophiuchi iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.FLUORINE,
        ],
        moons: [],
      },
      {
        name: 'xi ophiuchi v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.FLUORINE,
          RESOURCE.COBALT,
          RESOURCE.TETRAFLUORIDES,
          RESOURCE.PLATINUM,
        ],
        moons: [
          {
            name: 'xi ophiuchi v-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.YTTERBIUM],
          },
        ],
      },
      {
        name: 'xi ophiuchi vi',
        resources: [],
        moons: [
          {
            name: 'xi ophiuchi vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'xi ophiuchi vi-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'xi ophiuchi vi-c',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'xi ophiuchi vi-d',
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
            name: 'xi ophiuchi vi-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.TUNGSTEN,
              RESOURCE.IRIDIUM,
              RESOURCE.VANADIUM,
              RESOURCE.DYSPROSIUM,
            ],
          },
        ],
      },
      {
        name: 'xi ophiuchi vii',
        resources: [],
        moons: [
          {
            name: 'xi ophiuchi vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.CHLOROSILANES,
              RESOURCE.SILVER,
              RESOURCE.LITHIUM,
              RESOURCE.MERCURY,
            ],
          },
          {
            name: 'xi ophiuchi vii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.ARGON,
              RESOURCE.COBALT,
              RESOURCE.PLATINUM,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
        ],
      },
      {
        name: 'xi ophiuchi viii',
        resources: [],
        moons: [
          {
            name: 'xi ophiuchi viii-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
          {
            name: 'xi ophiuchi viii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
            ],
          },
          {
            name: 'xi ophiuchi viii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.SILVER,
              RESOURCE.VANADIUM,
            ],
          },
          {
            name: 'xi ophiuchi viii-d',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'xi ophiuchi viii-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
        ],
      },
      {
        name: 'xi ophiuchi ix',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [],
      },
    ],
  },
  {
    name: 'zeta ophiuchi',
    level: '50',
    planets: [
      {
        name: 'zeta ophiuchi i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.ALKANES,
          RESOURCE.SILVER,
          RESOURCE.TANTALUM,
          RESOURCE.YTTERBIUM,
        ],
        moons: [],
      },
      {
        name: 'zeta ophiuchi ii',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [],
      },
      {
        name: 'zeta ophiuchi iii',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: 'zeta ophiuchi iii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'zeta ophiuchi iv',
        resources: [],
        moons: [
          {
            name: 'zeta ophiuchi iv-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: 'zeta ophiuchi iv-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'zeta ophiuchi iv-c',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'zeta ophiuchi iv-d',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: 'zeta ophiuchi iv-e',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.SILVER],
          },
        ],
      },
      {
        name: 'zeta ophiuchi v',
        resources: [],
        moons: [
          {
            name: 'zeta ophiuchi v-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.NEON,
            ],
          },
          {
            name: 'zeta ophiuchi v-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
        ],
      },
      {
        name: 'zeta ophiuchi vi',
        resources: [],
        moons: [
          {
            name: 'zeta ophiuchi vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
              RESOURCE.ANTIMONY,
            ],
          },
          {
            name: 'zeta ophiuchi vi-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
          {
            name: 'zeta ophiuchi vi-c',
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
            name: 'zeta ophiuchi vi-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'zeta ophiuchi vi-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.URANIUM,
              RESOURCE.IRIDIUM,
              RESOURCE.LITHIUM,
              RESOURCE.PLUTONIUM,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'zosma',
    level: '50',
    planets: [
      {
        name: 'zosma i',
        resources: [RESOURCE.NICKEL, RESOURCE.LEAD, RESOURCE.COBALT],
        moons: [
          {
            name: 'zosma i-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.XENON,
            ],
          },
        ],
      },
      {
        name: 'zosma ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.IRIDIUM,
          RESOURCE.TANTALUM,
        ],
        moons: [],
      },
      {
        name: 'zosma iii',
        resources: [],
        moons: [
          {
            name: 'zosma iii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.CHLORINE,
              RESOURCE.URANIUM,
            ],
          },
        ],
      },
      {
        name: 'zosma iv',
        resources: [],
        moons: [
          {
            name: 'zosma iv-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'zosma iv-b',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
          {
            name: 'zosma iv-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.COBALT,
              RESOURCE.ALKANES,
              RESOURCE.PALLADIUM,
            ],
          },
        ],
      },
      {
        name: 'zosma v',
        resources: [],
        moons: [
          {
            name: 'zosma v-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.CHLOROSILANES,
              RESOURCE.ALKANES,
            ],
          },
          {
            name: 'zosma v-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'zosma v-c',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
        ],
      },
    ],
  },
];

const LEVEL_55_SYSTEMS = [
  {
    name: 'bel',
    level: '55',
    planets: [
      {
        name: 'bel i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.ARGON,
          RESOURCE.FLUORINE,
          RESOURCE.CHLOROSILANES,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [
          {
            name: 'bel i-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'bel ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.LITHIUM,
        ],
        moons: [
          {
            name: 'bel ii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.ALKANES,
              RESOURCE.ANTIMONY,
            ],
          },
        ],
      },
      {
        name: 'bel iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.CHLOROSILANES,
          RESOURCE.TETRAFLUORIDES,
          RESOURCE.PALLADIUM,
        ],
        moons: [
          {
            name: 'bel iii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: 'bel iii-b',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: 'bel iii-c',
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
        name: 'bel iv',
        resources: [],
        moons: [
          {
            name: 'bel iv-a',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'bel iv-b',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'bel iv-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.ALUMINUM,
              RESOURCE.NICKEL,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: 'bel iv-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.COBALT,
              RESOURCE.ALKANES,
              RESOURCE.PLATINUM,
              RESOURCE.TANTALUM,
            ],
          },
          {
            name: 'bel iv-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.ALUMINUM,
              RESOURCE.NICKEL,
              RESOURCE.NEODYMIUM,
            ],
          },
        ],
      },
      {
        name: 'bel v',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [
          {
            name: 'bel v-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: 'bel vi',
        resources: [],
        moons: [],
      },
      {
        name: 'bel vii',
        resources: [RESOURCE.WATER, RESOURCE.ARGON],
        moons: [],
      },
    ],
  },
  {
    name: 'feynman',
    level: '55',
    planets: [
      {
        name: 'feynman i',
        resources: [
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.URANIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.FLUORINE,
          RESOURCE.IRIDIUM,
          RESOURCE.LITHIUM,
          RESOURCE.TETRAFLUORIDES,
        ],
        moons: [],
      },
      {
        name: 'feynman ii',
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
        name: 'feynman iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.IRIDIUM,
          RESOURCE.TANTALUM,
          RESOURCE.VANADIUM,
        ],
        moons: [],
      },
      {
        name: 'feynman iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.CHLOROSILANES,
        ],
        moons: [],
      },
      {
        name: 'feynman v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.FLUORINE,
          RESOURCE.COBALT,
          RESOURCE.TUNGSTEN,
          RESOURCE.IONIC_LIQUIDS,
        ],
        moons: [
          {
            name: 'feynman v-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.ALKANES],
          },
          {
            name: 'feynman v-b',
            resources: [],
          },
        ],
      },
      {
        name: 'feynman vi',
        resources: [],
        moons: [
          {
            name: 'feynman vi-a',
            resources: [RESOURCE.WATER, RESOURCE.PALLADIUM, RESOURCE.TUNGSTEN],
          },
          {
            name: 'feynman vi-b',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: 'feynman vi-c',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.TUNGSTEN],
          },
        ],
      },
      {
        name: 'feynman vii',
        resources: [],
        moons: [
          {
            name: 'feynman vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: 'feynman vii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.NEODYMIUM,
              RESOURCE.PLUTONIUM,
            ],
          },
          {
            name: 'feynman vii-c',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
        ],
      },
      {
        name: 'feynman viii',
        resources: [],
        moons: [
          {
            name: 'feynman viii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: 'feynman viii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
              RESOURCE.ANTIMONY,
            ],
          },
          {
            name: 'feynman viii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'feynman viii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.GOLD,
              RESOURCE.MERCURY,
            ],
          },
          {
            name: 'feynman viii-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
        ],
      },
      {
        name: 'feynman ix',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.EUROPIUM],
        moons: [
          {
            name: 'feynman ix-a',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
        ],
      },
    ],
  },
  {
    name: 'heisenberg',
    level: '55',
    planets: [
      {
        name: 'heisenberg i',
        resources: [],
        moons: [],
      },
      {
        name: 'heisenberg ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.FLUORINE,
          RESOURCE.TUNGSTEN,
          RESOURCE.IRIDIUM,
          RESOURCE.TETRAFLUORIDES,
        ],
        moons: [],
      },
      {
        name: 'heisenberg iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.SILVER,
        ],
        moons: [],
      },
      {
        name: 'heisenberg iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.FLUORINE,
          RESOURCE.TUNGSTEN,
          RESOURCE.TETRAFLUORIDES,
        ],
        moons: [],
      },
      {
        name: 'heisenberg v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.IRIDIUM,
          RESOURCE.PLATINUM,
        ],
        moons: [
          {
            name: 'heisenberg v-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.ARGON,
              RESOURCE.BERYLLIUM,
              RESOURCE.CHLOROSILANES,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
        ],
      },
      {
        name: 'heisenberg vi',
        resources: [],
        moons: [
          {
            name: 'heisenberg vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: 'heisenberg vi-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
              RESOURCE.LITHIUM,
            ],
          },
          {
            name: 'heisenberg vi-c',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
      {
        name: 'heisenberg vii',
        resources: [],
        moons: [
          {
            name: 'heisenberg vii-a',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
        ],
      },
      {
        name: 'heisenberg viii',
        resources: [],
        moons: [
          {
            name: 'heisenberg viii-a',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE, RESOURCE.LITHIUM],
          },
          {
            name: 'heisenberg viii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.LEAD,
              RESOURCE.TUNGSTEN,
              RESOURCE.TITANIUM,
            ],
          },
          {
            name: 'heisenberg viii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.CHLOROSILANES,
              RESOURCE.ALKANES,
            ],
          },
          {
            name: 'heisenberg viii-d',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
        ],
      },
      {
        name: 'heisenberg ix',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [],
      },
      {
        name: 'heisenberg x',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.FLUORINE,
          RESOURCE.GOLD,
        ],
        moons: [],
      },
    ],
  },
  {
    name: 'leviathan',
    level: '55',
    planets: [
      {
        name: 'leviathan i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [],
      },
      {
        name: 'leviathan ii',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.NEODYMIUM,
          RESOURCE.EUROPIUM,
        ],
        moons: [],
      },
      {
        name: 'leviathan iii',
        resources: [RESOURCE.CHLORINE, RESOURCE.LEAD],
        moons: [],
      },
      {
        name: 'leviathan iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.ALUMINUM,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.FLUORINE,
          RESOURCE.YTTERBIUM,
        ],
        moons: [],
      },
      {
        name: 'leviathan v',
        resources: [],
        moons: [
          {
            name: 'leviathan v-a',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.NEON],
          },
        ],
      },
      {
        name: 'leviathan vi',
        resources: [],
        moons: [
          {
            name: 'leviathan vi-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.GOLD],
          },
          {
            name: 'leviathan vi-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.CHLOROSILANES,
              RESOURCE.XENON,
            ],
          },
        ],
      },
      {
        name: 'leviathan vii',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [],
      },
    ],
  },
  {
    name: 'newton',
    level: '55',
    planets: [
      {
        name: 'newton i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [
          {
            name: 'newton i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'newton ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.TETRAFLUORIDES,
          RESOURCE.VANADIUM,
        ],
        moons: [
          {
            name: 'newton ii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: 'newton ii-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'newton iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.TUNGSTEN,
          RESOURCE.LITHIUM,
          RESOURCE.GOLD,
        ],
        moons: [],
      },
      {
        name: 'newton iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.CHLOROSILANES,
          RESOURCE.PLATINUM,
        ],
        moons: [],
      },
      {
        name: 'newton v',
        resources: [],
        moons: [
          {
            name: 'newton v-a',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
          {
            name: 'newton v-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.LEAD,
              RESOURCE.FLUORINE,
              RESOURCE.TUNGSTEN,
              RESOURCE.GOLD,
              RESOURCE.TITANIUM,
            ],
          },
          {
            name: 'newton v-c',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
        ],
      },
      {
        name: 'newton vi',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
        moons: [],
      },
    ],
  },
  {
    name: 'nirah',
    level: '55',
    planets: [
      {
        name: 'lontrah',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.BERYLLIUM,
        ],
        moons: [],
      },
      {
        name: 'delah',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.IRIDIUM,
          RESOURCE.TANTALUM,
        ],
        moons: [],
      },
      {
        name: ' kazarah',
        resources: [],
        moons: [
          {
            name: `ka'zaal`,
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.NICKEL],
          },
        ],
      },
      {
        name: 'nirah prime',
        resources: [],
        moons: [
          {
            name: `n'raal`,
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.TUNGSTEN],
          },
        ],
      },
      {
        name: 'umanah',
        resources: [RESOURCE.WATER, RESOURCE.LEAD],
        moons: [],
      },
    ],
  },
  {
    name: 'serpentis',
    level: '55',
    planets: [
      {
        name: 'serpentis i',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.URANIUM,
          RESOURCE.VANADIUM,
        ],
        moons: [],
      },
      {
        name: 'serpentis ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.BERYLLIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.TUNGSTEN,
          RESOURCE.LITHIUM,
        ],
        moons: [
          {
            name: 'serpentis ii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'serpentis ii-b',
            resources: [],
          },
        ],
      },
      {
        name: 'serpentis iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.FLUORINE,
        ],
        moons: [],
      },
      {
        name: 'serpentis iv',
        resources: [],
        moons: [
          {
            name: 'serpentis iv-a',
            resources: [],
          },
        ],
      },
      {
        name: 'serpentis v',
        resources: [],
        moons: [
          {
            name: 'serpentis v-a',
            resources: [],
          },
          {
            name: 'serpentis v-b',
            resources: [],
          },
          {
            name: 'serpentis v-c',
            resources: [],
          },
          {
            name: 'serpentis v-d',
            resources: [],
          },
        ],
      },
      {
        name: 'serpentis vi',
        resources: [],
        moons: [],
      },
    ],
  },
  {
    name: 'syrma',
    level: '55',
    planets: [
      {
        name: 'syrma i',
        resources: [
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
        ],
        moons: [
          {
            name: 'syrma i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'syrma i-b',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'syrma ii',
        resources: [
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.ALKANES,
          RESOURCE.PLATINUM,
          RESOURCE.PLUTONIUM,
        ],
        moons: [
          {
            name: 'syrma ii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'syrma iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.NICKEL,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.COBALT,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [],
      },
      {
        name: 'syrma iv',
        resources: [RESOURCE.WATER, RESOURCE.ALUMINUM, RESOURCE.ARGON],
        moons: [
          {
            name: 'syrma iv-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'syrma v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.FLUORINE,
          RESOURCE.IRIDIUM,
          RESOURCE.TETRAFLUORIDES,
          RESOURCE.PLATINUM,
        ],
        moons: [],
      },
      {
        name: 'syrma vi',
        resources: [],
        moons: [
          {
            name: 'syrma vi-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'syrma vi-b',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
          {
            name: 'syrma vi-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.PLATINUM,
              RESOURCE.TANTALUM,
              RESOURCE.YTTERBIUM,
            ],
          },
          {
            name: 'syrma vi-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
        ],
      },
      {
        name: 'syrma vii',
        resources: [],
        moons: [
          {
            name: 'syrma vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.ARGON,
              RESOURCE.CHLOROSILANES,
              RESOURCE.COBALT,
              RESOURCE.LITHIUM,
              RESOURCE.PLATINUM,
            ],
          },
          {
            name: 'syrma vii-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
        ],
      },
    ],
  },
];

export const HIGH_TIER_SYSTEMS = [...LEVEL_50_SYSTEMS, ...LEVEL_55_SYSTEMS];
