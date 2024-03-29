export const LEVELS = [
  {
    digit: "1",
    color: "#119999",
  },
  {
    digit: "5",
    color: "#119999",
  },
  {
    digit: "10",
    color: "#119999",
  },
  {
    digit: "15",
    color: "#00FB00",
  },
  {
    digit: "20",
    color: "#00FB00",
  },
  {
    digit: "25",
    color: "#FFFF00",
  },
  {
    digit: "30",
    color: "#FFFF00",
  },
  {
    digit: "35",
    color: "#FB9400",
  },
  {
    digit: "40",
    color: "#FB9400",
  },
  {
    digit: "45",
    color: "#FB9400",
  },
  {
    digit: "50",
    color: "#FB9400",
  },
  {
    digit: "55",
    color: "#FC0623",
  },
  {
    digit: "60",
    color: "#FC0623",
  },
  {
    digit: "65",
    color: "#FC0623",
  },
  {
    digit: "70",
    color: "#FC0623",
  },
  {
    digit: "75",
    color: "#FC0623",
  },
];

const TYPE = {
  GAS: "gas",
  LIQUID: "liquid",
  SOLID: "solid",
};

const RARITY = {
  COMMON: {
    label: "common",
    color: "",
  },
  UNCOMMON: {
    label: "uncommon",
    color: "#73CCDF",
  },
  RARE: {
    label: "rare",
    color: "#9A7BFF",
  },
  EXOTIC: {
    label: "exotic",
    color: "#EEC162",
  },
  UNIQUE: {
    label: "unique",
    color: "#2FE070",
  },
};

export const RESOURCE = {
  ALDUMITE: {
    name: "aldumite",
    symbol: "Ad",
    type: TYPE.SOLID,
    rarity: RARITY.UNIQUE,
    backgroundColor: "#BB8CFF",
    id: "00005DEC",
  },
  ALKANES: {
    name: "alkanes",
    symbol: "HnCn",
    type: TYPE.LIQUID,
    rarity: RARITY.UNCOMMON,
    backgroundColor: "#A14B54",
    id: "0000557D",
  },
  ALUMINUM: {
    name: "aluminum",
    symbol: "Al",
    type: TYPE.SOLID,
    rarity: RARITY.COMMON,
    backgroundColor: "#344A49",
    id: "00005570",
  },
  ANTIMONY: {
    name: "antimony",
    symbol: "Sb",
    type: TYPE.SOLID,
    rarity: RARITY.EXOTIC,
    backgroundColor: "#DBC059",
    id: "0000557B",
  },
  ARGON: {
    name: "argon",
    symbol: "Ar",
    type: TYPE.GAS,
    rarity: RARITY.COMMON,
    backgroundColor: "#19485F",
    id: "00005588",
  },
  AQUEOUS_HEMATITE: {
    name: "aqueous hematite",
    symbol: "Aq",
    type: TYPE.SOLID,
    rarity: RARITY.UNIQUE,
    backgroundColor: "#FF4546",
    id: "0029D022",
  },
  BENZENE: {
    name: "benzene",
    symbol: "C6Hn",
    type: TYPE.GAS,
    rarity: RARITY.UNCOMMON,
    backgroundColor: "#2C5E7D",
    id: "00005585",
  },
  BERYLLIUM: {
    name: "beryllium",
    symbol: "Be",
    type: TYPE.SOLID,
    rarity: RARITY.UNCOMMON,
    backgroundColor: "#366661",
    id: "000057D9",
  },
  CAELUMITE: {
    name: "caelumite",
    symbol: "Ct",
    type: TYPE.SOLID,
    rarity: RARITY.UNIQUE,
    backgroundColor: "#FF7F00",
    id: "00005DEC",
  },
  CAESIUM: {
    name: "caesium",
    symbol: "Cs",
    type: TYPE.GAS,
    rarity: RARITY.EXOTIC,
    backgroundColor: "#8A84FE",
    id: "000057DF",
  },
  CARBOXYLIC_ACIDS: {
    name: "carboxylic acids",
    symbol: "R-COC",
    type: TYPE.LIQUID,
    rarity: RARITY.RARE,
    backgroundColor: "#3A7B9B",
    id: "00005586",
  },
  CHLORINE: {
    name: "chlorine",
    symbol: "Cl",
    type: TYPE.GAS,
    rarity: RARITY.COMMON,
    backgroundColor: "#3D4651",
    id: "0000557C",
  },
  CHLOROSILANES: {
    name: "chlorosilanes",
    symbol: "SiH3Cl",
    type: TYPE.LIQUID,
    rarity: RARITY.UNCOMMON,
    backgroundColor: "#4E5D94",
    id: "0000557E",
  },
  COBALT: {
    name: "cobalt",
    symbol: "Co",
    type: TYPE.SOLID,
    rarity: RARITY.UNCOMMON,
    backgroundColor: "#33588E",
    id: "00005575",
  },
  COPPER: {
    name: "copper",
    symbol: "Cu",
    type: TYPE.SOLID,
    rarity: RARITY.COMMON,
    backgroundColor: "#27554A",
    id: "00005576",
  },
  DYSPROSIUM: {
    name: "dysprosium",
    symbol: "Dy",
    type: TYPE.SOLID,
    rarity: RARITY.EXOTIC,
    backgroundColor: "#78A2B6",
    id: "00005569",
  },
  EUROPIUM: {
    name: "europium",
    symbol: "Eu",
    type: TYPE.SOLID,
    rarity: RARITY.EXOTIC,
    backgroundColor: "#9FD0CD",
    id: "000057E1",
  },
  FLUORINE: {
    name: "fluorine",
    symbol: "F",
    type: TYPE.GAS,
    rarity: RARITY.UNCOMMON,
    backgroundColor: "#30776C",
    id: "00005577",
  },
  GOLD: {
    name: "gold",
    symbol: "Au",
    type: TYPE.SOLID,
    rarity: RARITY.RARE,
    backgroundColor: "#C89C50",
    id: "00005579",
  },
  HELIUM_3: {
    name: "helium-3",
    symbol: "He-3",
    type: TYPE.GAS,
    rarity: RARITY.COMMON,
    backgroundColor: "#7AB26B",
    id: "0000558E",
  },
  IONIC_LIQUIDS: {
    name: "ionic liquids",
    symbol: "IL",
    type: TYPE.LIQUID,
    rarity: RARITY.EXOTIC,
    backgroundColor: "#4BD7BA",
    id: "0000557A",
  },
  INDICITE: {
    name: "indicite",
    symbol: "Ie",
    type: TYPE.SOLID,
    rarity: RARITY.UNIQUE,
    backgroundColor: "#D7FFFF",
    id: "0004BA37",
  },
  IRIDIUM: {
    name: "iridium",
    symbol: "Ir",
    type: TYPE.SOLID,
    rarity: RARITY.UNCOMMON,
    backgroundColor: "#716E2B",
    id: "0000558A",
  },
  IRON: {
    name: "iron",
    symbol: "Fe",
    type: TYPE.SOLID,
    rarity: RARITY.COMMON,
    backgroundColor: "#75403A",
    id: "0000556E",
  },
  LEAD: {
    name: "lead",
    symbol: "Pb",
    type: TYPE.SOLID,
    rarity: RARITY.COMMON,
    backgroundColor: "#444F53",
    id: "00005568",
  },
  LITHIUM: {
    name: "lithium",
    symbol: "Li",
    type: TYPE.SOLID,
    rarity: RARITY.RARE,
    backgroundColor: "#5A74CB",
    id: "0000557F",
  },
  MERCURY: {
    name: "mercury",
    symbol: "Hg",
    type: TYPE.LIQUID,
    rarity: RARITY.RARE,
    backgroundColor: "#AB958A",
    id: "0027C4A1",
  },
  NEODYMIUM: {
    name: "neodymium",
    symbol: "Nd",
    type: TYPE.SOLID,
    rarity: RARITY.RARE,
    backgroundColor: "#6A9C9A",
    id: "00005580",
  },
  NEON: {
    name: "neon",
    symbol: "Ne",
    type: TYPE.GAS,
    rarity: RARITY.EXOTIC,
    backgroundColor: "#2CA1C2",
    id: "00005587",
  },
  NICKEL: {
    name: "nickel",
    symbol: "Ni",
    type: TYPE.SOLID,
    rarity: RARITY.COMMON,
    backgroundColor: "#5E4421",
    id: "00005572",
  },
  PALLADIUM: {
    name: "palladium",
    symbol: "Pd",
    type: TYPE.SOLID,
    rarity: RARITY.EXOTIC,
    backgroundColor: "#DAA140",
    id: "00005574",
  },
  PLATINUM: {
    name: "platinum",
    symbol: "Pt",
    type: TYPE.SOLID,
    rarity: RARITY.RARE,
    backgroundColor: "#4970A7",
    id: "00005573",
  },
  PLUTONIUM: {
    name: "plutonium",
    symbol: "Pu",
    type: TYPE.SOLID,
    rarity: RARITY.EXOTIC,
    backgroundColor: "#B8B644",
    id: "0000558C",
  },
  ROTHICITE: {
    name: "rothicite",
    symbol: "Rc",
    type: TYPE.SOLID,
    rarity: RARITY.UNIQUE,
    backgroundColor: "#FB9475",
    id: "000028DF",
  },
  SILVER: {
    name: "silver",
    symbol: "Ag",
    type: TYPE.SOLID,
    rarity: RARITY.UNCOMMON,
    backgroundColor: "#7E736D",
    id: "0000556A",
  },
  TANTALUM: {
    name: "tantalum",
    symbol: "Ta",
    type: TYPE.SOLID,
    rarity: RARITY.RARE,
    backgroundColor: "#BD5D5F",
    id: "0000556F",
  },
  TASINE: {
    name: "tasine",
    symbol: "Tsn",
    type: TYPE.GAS,
    rarity: RARITY.UNIQUE,
    backgroundColor: "#FBDC4C",
    id: "00005DED",
  },
  TETRAFLUORIDES: {
    name: "tetrafluorides",
    symbol: "xF4",
    type: TYPE.GAS,
    rarity: RARITY.RARE,
    backgroundColor: "#35A18A",
    id: "00005578",
  },
  TITANIUM: {
    name: "titanium",
    symbol: "Ti",
    type: TYPE.SOLID,
    rarity: RARITY.RARE,
    backgroundColor: "#6A8795",
    id: "0000556D",
  },
  TUNGSTEN: {
    name: "tungsten",
    symbol: "W",
    type: TYPE.SOLID,
    rarity: RARITY.UNCOMMON,
    backgroundColor: "#586C76",
    id: "0000556B",
  },
  URANIUM: {
    name: "uranium",
    symbol: "U",
    type: TYPE.SOLID,
    rarity: RARITY.COMMON,
    backgroundColor: "#4A4910",
    id: "00005589",
  },
  VANADIUM: {
    name: "vanadium",
    symbol: "V",
    type: TYPE.SOLID,
    rarity: RARITY.RARE,
    backgroundColor: "#8D8D34",
    id: "0000558B",
  },
  VERYL: {
    name: "veryl",
    symbol: "Vr",
    type: TYPE.SOLID,
    rarity: RARITY.EXOTIC,
    backgroundColor: "#28D6E7",
    id: "00005DEE",
  },
  VYTINIUM: {
    name: "vytinium",
    symbol: "Vy",
    type: TYPE.SOLID,
    rarity: RARITY.EXOTIC,
    backgroundColor: "#EDED57",
    id: "00005DEF",
  },
  WATER: {
    name: "water",
    symbol: "H20",
    type: TYPE.LIQUID,
    rarity: RARITY.COMMON,
    backgroundColor: "#6FA29E",
    id: "00005591",
  },
  XENON: {
    name: "xenon",
    symbol: "Xe",
    type: TYPE.GAS,
    rarity: RARITY.RARE,
    backgroundColor: "#8598FF",
    id: "000057DD",
  },
  YTTERBIUM: {
    name: "ytterbium",
    symbol: "Yb",
    type: TYPE.SOLID,
    rarity: RARITY.EXOTIC,
    backgroundColor: "#D4826B",
    id: "00005571",
  },
};

const COMMON_RESOURCES = [];
const UNCOMMON_RESOURCES = [];
const RARE_RESOURCES = [];
const EXOTIC_RESOURCES = [];
const UNIQUE_RESOURCES = [];

Object.values(RESOURCE).forEach((resource) => {
  switch (resource.rarity) {
    case RARITY.UNIQUE:
      UNIQUE_RESOURCES.push(resource);
      break;
    case RARITY.EXOTIC:
      EXOTIC_RESOURCES.push(resource);
      break;
    case RARITY.RARE:
      RARE_RESOURCES.push(resource);
      break;
    case RARITY.UNCOMMON:
      UNCOMMON_RESOURCES.push(resource);
      break;
    default:
      COMMON_RESOURCES.push(resource);
      break;
  }
});

export {
  COMMON_RESOURCES,
  UNCOMMON_RESOURCES,
  RARE_RESOURCES,
  EXOTIC_RESOURCES,
  UNIQUE_RESOURCES,
};
