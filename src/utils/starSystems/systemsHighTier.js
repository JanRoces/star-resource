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

const LEVEL_60_SYSTEMS = [
  {
    name: 'alpha ternion',
    level: '60',
    planets: [
      {
        name: 'ternion i',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.EUROPIUM,
        ],
        moons: [],
      },
      {
        name: 'ternion ii',
        resources: [RESOURCE.URANIUM, RESOURCE.PLUTONIUM],
        moons: [],
      },
      {
        name: 'ternion iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.TUNGSTEN,
          RESOURCE.TITANIUM,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [
          {
            name: 'ternion iii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'ternion iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.MERCURY,
        ],
        moons: [],
      },
      {
        name: 'ternion v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.TUNGSTEN,
          RESOURCE.TANTALUM,
        ],
        moons: [
          {
            name: 'ternion v-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.CHLOROSILANES,
              RESOURCE.COBALT,
              RESOURCE.XENON,
            ],
          },
          {
            name: 'ternion v-b',
            resources: [],
          },
        ],
      },
      {
        name: 'ternion vi',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.FLUORINE,
          RESOURCE.TUNGSTEN,
          RESOURCE.TANTALUM,
          RESOURCE.TITANIUM,
        ],
        moons: [
          {
            name: 'ternion vi-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'ternion vii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.BERYLLIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.LITHIUM,
        ],
        moons: [],
      },
      {
        name: 'ternion viii',
        resources: [RESOURCE.WATER, RESOURCE.CHLORINE, RESOURCE.CHLOROSILANES],
        moons: [],
      },
      {
        name: 'ternion ix',
        resources: [],
        moons: [
          {
            name: 'ternion ix-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.NEON,
            ],
          },
          {
            name: 'ternion ix-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.NEON,
            ],
          },
          {
            name: 'ternion ix-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
            ],
          },
          {
            name: 'ternion ix-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'decaran',
    level: '60',
    planets: [
      {
        name: 'decaran i',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.CARBOXYLIC_ACIDS,
        ],
        moons: [],
      },
      {
        name: 'decaran ii',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.EUROPIUM,
        ],
        moons: [],
      },
      {
        name: 'decaran iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.TUNGSTEN,
          RESOURCE.PALLADIUM,
        ],
        moons: [],
      },
      {
        name: 'decaran iv',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [],
      },
      {
        name: 'decaran v',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [
          {
            name: 'decaran v-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'decaran v-b',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'decaran vi',
        resources: [],
        moons: [
          {
            name: 'decaran vi-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
        ],
      },
      {
        name: 'decaran vii',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [
          {
            name: 'decaran vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'decaran vii-b',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.URANIUM,
              RESOURCE.IRIDIUM,
              RESOURCE.VYTINIUM,
            ],
          },
        ],
      },
      {
        name: 'decaran viii',
        resources: [],
        moons: [
          {
            name: 'decaran viii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'decaran viii-b',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
        ],
      },
      {
        name: 'decaran ix',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [],
      },
    ],
  },
  {
    name: 'foucault',
    level: '60',
    planets: [
      {
        name: 'foucault iv',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.NEODYMIUM,
        ],
        moons: [],
      },
      {
        name: 'foucault v',
        resources: [],
        moons: [
          {
            name: 'foucault v-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'foucault v-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.ALKANES,
              RESOURCE.MERCURY,
            ],
          },
          {
            name: 'foucault v-c',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'foucault v-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.FLUORINE,
              RESOURCE.COBALT,
              RESOURCE.TUNGSTEN,
            ],
          },
        ],
      },
      {
        name: 'foucault vi',
        resources: [],
        moons: [
          {
            name: 'foucault vi-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.GOLD],
          },
          {
            name: 'foucault vi-b',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'foucault vi-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.COPPER,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
          {
            name: 'foucault vi-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'foucault vi-e',
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
        name: 'foucault vii',
        resources: [],
        moons: [
          {
            name: 'foucault vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.TUNGSTEN,
              RESOURCE.TITANIUM,
              RESOURCE.VANADIUM,
            ],
          },
          {
            name: 'foucault vii-b',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.PLATINUM],
          },
          {
            name: 'foucault vii-c',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'foucault vii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
            ],
          },
          {
            name: 'foucault vii-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.NEODYMIUM,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
        ],
      },
      {
        name: 'foucault viii',
        resources: [RESOURCE.WATER, RESOURCE.ARGON],
        moons: [
          {
            name: 'foucault viii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.IONIC_LIQUIDS,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'kang',
    level: '60',
    planets: [
      {
        name: 'kang i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.YTTERBIUM],
        moons: [],
      },
      {
        name: 'kang ii',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM, RESOURCE.BERYLLIUM],
        moons: [],
      },
      {
        name: 'kang iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.ALKANES,
          RESOURCE.SILVER,
        ],
        moons: [],
      },
      {
        name: 'kang iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.IRIDIUM,
          RESOURCE.VANADIUM,
        ],
        moons: [
          {
            name: 'kang iv-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
            ],
          },
          {
            name: 'kang iv-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.YTTERBIUM],
          },
          {
            name: 'kang iv-c',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'kang v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.COBALT,
          RESOURCE.ALKANES,
          RESOURCE.TANTALUM,
        ],
        moons: [],
      },
      {
        name: 'kang vi',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.TITANIUM,
          RESOURCE.ANTIMONY,
        ],
        moons: [
          {
            name: 'kang vi-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'kang vii',
        resources: [],
        moons: [
          {
            name: 'kang vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'kang vii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.URANIUM,
              RESOURCE.IRIDIUM,
            ],
          },
          {
            name: 'kang vii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.FLUORINE,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
          {
            name: 'kang vii-d',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
        ],
      },
      {
        name: 'kang viii',
        resources: [],
        moons: [
          {
            name: 'kang viii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: 'kang viii-b',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'kang viii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.IRON,
              RESOURCE.CHLOROSILANES,
              RESOURCE.ALKANES,
              RESOURCE.YTTERBIUM,
            ],
          },
          {
            name: 'kang viii-d',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.SILVER],
          },
        ],
      },
    ],
  },
  {
    name: 'maal',
    level: '60',
    planets: [
      {
        name: 'maal i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.YTTERBIUM],
        moons: [
          {
            name: 'maal i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'maal i-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'maal ii',
        resources: [RESOURCE.CHLORINE, RESOURCE.NICKEL, RESOURCE.IRON],
        moons: [
          {
            name: 'maal ii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'maal iii',
        resources: [
          RESOURCE.COPPER,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.ALKANES,
          RESOURCE.GOLD,
          RESOURCE.TITANIUM,
        ],
        moons: [
          {
            name: 'maal iii-a',
            resources: [],
          },
        ],
      },
      {
        name: 'maal iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.SILVER,
          RESOURCE.IRIDIUM,
          RESOURCE.MERCURY,
        ],
        moons: [],
      },
      {
        name: 'maal v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.COBALT,
          RESOURCE.SILVER,
        ],
        moons: [
          {
            name: 'maal v-a',
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
        name: 'maal vi',
        resources: [],
        moons: [
          {
            name: 'maal vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.CHLORINE,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.LITHIUM,
            ],
          },
          {
            name: 'maal vi-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'maal vi-c',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
        ],
      },
      {
        name: 'maal vii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.FLUORINE,
          RESOURCE.TUNGSTEN,
          RESOURCE.TETRAFLUORIDES,
          RESOURCE.PLATINUM,
        ],
        moons: [],
      },
      {
        name: 'maal viii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.IRIDIUM,
          RESOURCE.VANADIUM,
        ],
        moons: [
          {
            name: 'maal viii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
        ],
      },
      {
        name: 'maal ix',
        resources: [],
        moons: [
          {
            name: 'maal ix-a',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
          {
            name: 'maal ix-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.URANIUM,
              RESOURCE.VANADIUM,
              RESOURCE.ANTIMONY,
            ],
          },
          {
            name: 'maal ix-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: 'maal ix-d',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
        ],
      },
      {
        name: 'maal x',
        resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
        moons: [],
      },
    ],
  },
  {
    name: 'sparta',
    level: '60',
    planets: [
      {
        name: 'sparta i',
        resources: [
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
        name: 'sparta ii',
        resources: [
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.TUNGSTEN,
          RESOURCE.TITANIUM,
        ],
        moons: [
          {
            name: 'sparta ii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'sparta ii-b',
            resources: [],
          },
        ],
      },
      {
        name: 'sparta iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.FLUORINE,
        ],
        moons: [
          {
            name: 'sparta iii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
            ],
          },
        ],
      },
      {
        name: 'sparta iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.ALKANES,
          RESOURCE.CHLOROSILANES,
          RESOURCE.FLUORINE,
          RESOURCE.IONIC_LIQUIDS,
        ],
        moons: [],
      },
      {
        name: 'sparta v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.ALKANES,
          RESOURCE.PLATINUM,
          RESOURCE.TANTALUM,
        ],
        moons: [
          {
            name: 'sparta v-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'sparta vi',
        resources: [],
        moons: [
          {
            name: 'sparta vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'sparta vi-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.IRIDIUM,
              RESOURCE.PALLADIUM,
            ],
          },
          {
            name: 'sparta vi-c',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.SILVER],
          },
        ],
      },
      {
        name: 'sparta vii',
        resources: [],
        moons: [
          {
            name: 'sparta vii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.COBALT,
              RESOURCE.PLATINUM,
            ],
          },
          {
            name: 'sparta vii-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON],
          },
          {
            name: 'sparta vii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
        ],
      },
      {
        name: 'sparta viii',
        resources: [],
        moons: [
          {
            name: 'sparta viii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.CARBOXYLIC_ACIDS,
            ],
          },
          {
            name: 'sparta viii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.COPPER,
              RESOURCE.LEAD,
              RESOURCE.BERYLLIUM,
              RESOURCE.FLUORINE,
            ],
          },
          {
            name: 'sparta viii-c',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
    ],
  },
  {
    name: 'zelazny',
    level: '60',
    planets: [
      {
        name: 'zelazny i',
        resources: [RESOURCE.CHLORINE, RESOURCE.LEAD, RESOURCE.XENON],
        moons: [],
      },
      {
        name: 'zelazny ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.CHLOROSILANES,
          RESOURCE.TUNGSTEN,
          RESOURCE.TITANIUM,
        ],
        moons: [
          {
            name: 'zelazny ii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'zelazny iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.TUNGSTEN,
          RESOURCE.CAESIUM,
        ],
        moons: [],
      },
      {
        name: 'zelazny iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.CHLOROSILANES,
          RESOURCE.FLUORINE,
          RESOURCE.LITHIUM,
          RESOURCE.TETRAFLUORIDES,
        ],
        moons: [],
      },
      {
        name: 'zelazny v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.LITHIUM,
          RESOURCE.PLATINUM,
          RESOURCE.XENON,
        ],
        moons: [],
      },
      {
        name: 'zelazny vi',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.CHLOROSILANES,
          RESOURCE.LITHIUM,
        ],
        moons: [
          {
            name: 'zelazny vii',
            resources: [],
          },
          {
            name: 'zelazny vii-a',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
          },
          {
            name: 'zelazny vii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.COBALT,
              RESOURCE.PLATINUM,
              RESOURCE.TITANIUM,
            ],
          },
          {
            name: 'zelazny vii-c',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.TITANIUM],
          },
          {
            name: 'zelazny vii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.URANIUM,
              RESOURCE.ARGON,
              RESOURCE.IRIDIUM,
              RESOURCE.VANADIUM,
              RESOURCE.PALLADIUM,
              RESOURCE.PLUTONIUM,
            ],
          },
        ],
      },
      {
        name: 'zelazny viii',
        resources: [],
        moons: [
          {
            name: 'zelazny viii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.NEON,
            ],
          },
          {
            name: 'zelazny viii-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'zelazny viii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.SILVER,
              RESOURCE.PLATINUM,
              RESOURCE.PALLADIUM,
            ],
          },
          {
            name: 'zelazny viii-d',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'zelazmy viii-e',
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
];

const LEVEL_65_SYSTEMS = [
  {
    name: 'charybdis',
    level: '65',
    planets: [
      {
        name: 'charybdis i',
        resources: [RESOURCE.IRON, RESOURCE.LEAD, RESOURCE.URANIUM],
        moons: [],
      },
      {
        name: 'charybdis ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.ARGON,
          RESOURCE.BERYLLIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.NEODYMIUM,
          RESOURCE.EUROPIUM,
        ],
        moons: [],
      },
      {
        name: 'charybdis iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.CHLOROSILANES,
          RESOURCE.CAESIUM,
        ],
        moons: [],
      },
      {
        name: 'charybdis iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.IRIDIUM,
          RESOURCE.GOLD,
        ],
        moons: [
          {
            name: 'charybdis iv-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NEODYMIUM,
            ],
          },
        ],
      },
      {
        name: 'charybdis v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.TUNGSTEN,
          RESOURCE.GOLD,
          RESOURCE.TITANIUM,
          RESOURCE.ANTIMONY,
        ],
        moons: [
          {
            name: 'charybdis v-a',
            resources: [],
          },
        ],
      },
      {
        name: 'charybdis vi',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.FLUORINE,
          RESOURCE.COBALT,
          RESOURCE.IRIDIUM,
          RESOURCE.PLATINUM,
        ],
        moons: [
          {
            name: 'charybdis vi-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: 'charybdis vi-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.ALKANES,
              RESOURCE.TANTALUM,
            ],
          },
        ],
      },
      {
        name: 'charybdis vii',
        resources: [],
        moons: [
          {
            name: 'charybdis vii-a',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'charybdis vii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
          {
            name: 'charybdis vii-c',
            resources: [RESOURCE.WATER, RESOURCE.LEAD, RESOURCE.MERCURY],
          },
          {
            name: 'charybdis vii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.COBALT,
              RESOURCE.PLATINUM,
              RESOURCE.TANTALUM,
            ],
          },
        ],
      },
      {
        name: 'charybdis viii',
        resources: [],
        moons: [
          {
            name: 'charybdis viii-a',
            resources: [RESOURCE.WATER, RESOURCE.LEAD],
          },
          {
            name: 'charybdis viii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.ARGON,
              RESOURCE.BENZENE,
              RESOURCE.CARBOXYLIC_ACIDS,
              RESOURCE.NEON,
            ],
          },
        ],
      },
      {
        name: 'charybdis ix',
        resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
        moons: [],
      },
    ],
  },
  {
    name: 'enlil',
    level: '65',
    planets: [
      {
        name: 'enlil i',
        resources: [
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.COBALT,
          RESOURCE.PLATINUM,
        ],
        moons: [
          {
            name: 'enlil i-a',
            resources: [
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.IRIDIUM,
            ],
          },
        ],
      },
      {
        name: 'enlil ii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.BERYLLIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.ALKANES,
          RESOURCE.TANTALUM,
        ],
        moons: [
          {
            name: 'enlil ii-a',
            resources: [],
          },
        ],
      },
      {
        name: 'enlil iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.ALKANES,
          RESOURCE.TANTALUM,
        ],
        moons: [],
      },
      {
        name: 'enlil iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
        ],
        moons: [
          {
            name: 'enlil iv-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
        ],
      },
      {
        name: 'enlil v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.URANIUM,
          RESOURCE.FLUORINE,
          RESOURCE.IRIDIUM,
          RESOURCE.VANADIUM,
        ],
        moons: [],
      },
      {
        name: 'enlil vi',
        resources: [],
        moons: [
          {
            name: 'enlil vi-a',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.NEON],
          },
          {
            name: 'enlil vi-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.FLUORINE,
              RESOURCE.TUNGSTEN,
              RESOURCE.GOLD,
            ],
          },
          {
            name: 'enlil vi-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.FLUORINE,
              RESOURCE.GOLD,
            ],
          },
          {
            name: 'enlil vi-d',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
        ],
      },
      {
        name: 'enlil vii',
        resources: [],
        moons: [
          {
            name: 'enlil vii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
    ],
  },
  {
    name: 'leonis',
    level: '65',
    planets: [
      {
        name: 'leonis i',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.SILVER,
          RESOURCE.NEODYMIUM,
        ],
        moons: [
          {
            name: 'leonis i-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: 'leonis i-b',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.NICKEL,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.SILVER,
            ],
          },
        ],
      },
      {
        name: 'leonis ii',
        resources: [
          RESOURCE.HELIUM_3,
          RESOURCE.ALUMINUM,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.BERYLLIUM,
          RESOURCE.SILVER,
          RESOURCE.MERCURY,
        ],
        moons: [
          {
            name: 'leonis ii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'leonis iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.URANIUM,
          RESOURCE.IRIDIUM,
          RESOURCE.PLUTONIUM,
        ],
        moons: [],
      },
      {
        name: 'leonis iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.CHLOROSILANES,
          RESOURCE.COBALT,
          RESOURCE.ALKANES,
          RESOURCE.PLATINUM,
        ],
        moons: [],
      },
      {
        name: 'leonis v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.CHLOROSILANES,
          RESOURCE.ALKANES,
          RESOURCE.LITHIUM,
        ],
        moons: [
          {
            name: 'leonis v-a',
            resources: [],
          },
        ],
      },
      {
        name: 'leonis vi',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.COBALT,
        ],
        moons: [],
      },
      {
        name: 'leonis vii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.COBALT,
        ],
        moons: [],
      },
      {
        name: 'leonis viii',
        resources: [],
        moons: [
          {
            name: 'leonis viii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.COPPER,
              RESOURCE.LEAD,
              RESOURCE.SILVER,
            ],
          },
          {
            name: 'leonis viii-b',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
          {
            name: 'leonis viii-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.ARGON,
              RESOURCE.ALKANES,
              RESOURCE.YTTERBIUM,
            ],
          },
        ],
      },
      {
        name: 'leonis ix',
        resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.COBALT],
        moons: [],
      },
    ],
  },
  {
    name: 'proxima ternion',
    level: '65',
    planets: [
      {
        name: 'proxima ternion i',
        resources: [],
        moons: [
          {
            name: 'proxima ternion i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'proxima ternion i-b',
            resources: [RESOURCE.LEAD, RESOURCE.FLUORINE, RESOURCE.SILVER],
          },
          {
            name: 'proxima ternion i-c',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'proxima ternion ii',
        resources: [],
        moons: [],
      },
      {
        name: 'proxima ternion iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.NICKEL,
          RESOURCE.FLUORINE,
          RESOURCE.CAESIUM,
        ],
        moons: [],
      },
      {
        name: 'proxima ternion iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.IRON,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.LITHIUM,
          RESOURCE.PLUTONIUM,
        ],
        moons: [
          {
            name: 'proxima ternion iv-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.EUROPIUM,
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'rana',
    level: '65',
    planets: [
      {
        name: 'rana i',
        resources: [
          RESOURCE.IRON,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.ALKANES,
          RESOURCE.TUNGSTEN,
          RESOURCE.TANTALUM,
          RESOURCE.TITANIUM,
          RESOURCE.VANADIUM,
        ],
        moons: [
          {
            name: 'rana i-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
          },
          {
            name: 'rana i-b',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
          {
            name: 'rana i-c',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'rana ii',
        resources: [
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.SILVER,
        ],
        moons: [
          {
            name: 'rana ii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'rana iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.NICKEL,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.TUNGSTEN,
          RESOURCE.PLATINUM,
        ],
        moons: [
          {
            name: 'rana iii-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON, RESOURCE.YTTERBIUM],
          },
        ],
      },
      {
        name: 'rana iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.BENZENE,
          RESOURCE.SILVER,
        ],
        moons: [],
      },
      {
        name: 'rana v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.LEAD,
          RESOURCE.ARGON,
          RESOURCE.FLUORINE,
          RESOURCE.TUNGSTEN,
          RESOURCE.TITANIUM,
        ],
        moons: [
          {
            name: 'rana v-a',
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
        name: 'rana vi',
        resources: [],
        moons: [
          {
            name: 'rana vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
          {
            name: 'rana vi-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.URANIUM,
              RESOURCE.CHLOROSILANES,
              RESOURCE.ALKANES,
              RESOURCE.LITHIUM,
            ],
          },
          {
            name: 'rana vi-c',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL, RESOURCE.PALLADIUM],
          },
          {
            name: 'rana vi-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.FLUORINE,
              RESOURCE.SILVER,
            ],
          },
          {
            name: 'rana vi-e',
            resources: [RESOURCE.WATER, RESOURCE.NICKEL],
          },
        ],
      },
      {
        name: 'rana vii',
        resources: [],
        moons: [
          {
            name: 'rana vii-a',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
          {
            name: 'rana vii-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.NEON],
          },
        ],
      },
      {
        name: 'rana viii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.COPPER,
          RESOURCE.FLUORINE,
          RESOURCE.TETRAFLUORIDES,
          RESOURCE.IONIC_LIQUIDS,
        ],
        moons: [],
      },
      {
        name: 'rana ix',
        resources: [],
        moons: [
          {
            name: 'rana ix-a',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'rana ix-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER],
          },
        ],
      },
    ],
  },
  {
    name: 'schrodinger',
    level: '65',
    planets: [
      {
        name: 'schrodinger i',
        resources: [RESOURCE.HELIUM_3, RESOURCE.ALUMINUM],
        moons: [
          {
            name: 'schrodinger i-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
            ],
          },
        ],
      },
      {
        name: 'schrodinger ii',
        resources: [
          RESOURCE.CHLORINE,
          RESOURCE.LEAD,
          RESOURCE.URANIUM,
          RESOURCE.CHLOROSILANES,
          RESOURCE.TUNGSTEN,
          RESOURCE.TITANIUM,
          RESOURCE.PLUTONIUM,
          RESOURCE.ALDUMITE,
        ],
        moons: [],
      },
      {
        name: 'schrodinger iii',
        resources: [
          RESOURCE.WATER,
          RESOURCE.CHLORINE,
          RESOURCE.NICKEL,
          RESOURCE.IRON,
          RESOURCE.ARGON,
          RESOURCE.COBALT,
        ],
        moons: [
          {
            name: 'schrodinger iii-a',
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
        name: 'schrodinger iv',
        resources: [
          RESOURCE.WATER,
          RESOURCE.ALUMINUM,
          RESOURCE.CHLORINE,
          RESOURCE.COPPER,
          RESOURCE.BENZENE,
          RESOURCE.CHLOROSILANES,
          RESOURCE.FLUORINE,
          RESOURCE.NEODYMIUM,
        ],
        moons: [],
      },
      {
        name: 'schrodinger v',
        resources: [
          RESOURCE.WATER,
          RESOURCE.NICKEL,
          RESOURCE.URANIUM,
          RESOURCE.IRIDIUM,
          RESOURCE.VANADIUM,
        ],
        moons: [
          {
            name: 'schrodinger v-a',
            resources: [RESOURCE.HELIUM_3, RESOURCE.IRON],
          },
        ],
      },
      {
        name: 'schrodinger vi',
        resources: [],
        moons: [
          {
            name: 'schrodinger vi-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.LEAD,
              RESOURCE.SILVER,
              RESOURCE.MERCURY,
            ],
          },
          {
            name: 'schrodinger vi-b',
            resources: [RESOURCE.WATER, RESOURCE.COPPER, RESOURCE.FLUORINE],
          },
          {
            name: 'schrodinger vi-c',
            resources: [
              RESOURCE.WATER,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.ARGON,
              RESOURCE.ALKANES,
              RESOURCE.TANTALUM,
              RESOURCE.CARBOXYLIC_ACIDS,
              RESOURCE.NEON,
            ],
          },
        ],
      },
      {
        name: 'schrodinger vii',
        resources: [],
        moons: [
          {
            name: 'schrodinger vii-a',
            resources: [
              RESOURCE.HELIUM_3,
              RESOURCE.ALUMINUM,
              RESOURCE.BERYLLIUM,
              RESOURCE.NEODYMIUM,
            ],
          },
          {
            name: 'schrodinger vii-b',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.NEON],
          },
          {
            name: 'schrodinger vii-c',
            resources: [RESOURCE.WATER, RESOURCE.ARGON, RESOURCE.BENZENE],
          },
        ],
      },
      {
        name: 'schrodinger viii',
        resources: [],
        moons: [
          {
            name: 'schrodinger viii-a',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.NICKEL,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.URANIUM,
              RESOURCE.COBALT,
              RESOURCE.ALKANES,
            ],
          },
          {
            name: 'schrodinger viii-b',
            resources: [
              RESOURCE.WATER,
              RESOURCE.COPPER,
              RESOURCE.TETRAFLUORIDES,
            ],
          },
          {
            name: 'schrodinger viii-c',
            resources: [RESOURCE.WATER, RESOURCE.CHLORINE],
          },
          {
            name: 'schrodinger viii-d',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.CHLOROSILANES,
            ],
          },
          {
            name: 'schrodinger viii-e',
            resources: [
              RESOURCE.WATER,
              RESOURCE.CHLORINE,
              RESOURCE.IRON,
              RESOURCE.LEAD,
              RESOURCE.LITHIUM,
              RESOURCE.DYSPROSIUM,
            ],
          },
        ],
      },
    ],
  },
];

export const HIGH_TIER_SYSTEMS = [
  ...LEVEL_50_SYSTEMS,
  ...LEVEL_55_SYSTEMS,
  ...LEVEL_60_SYSTEMS,
  ...LEVEL_65_SYSTEMS,
];
