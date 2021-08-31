import cuid from "cuid";


export const sampleData = [
  {
    id: cuid(),
    description: "Buy Milk 🥛",
    status: "active",
    file: null,
    imgUrl: null,
  },
  {
    id: cuid(),
    description: "Buy Cat 🙀",
    status: "completed",
    file: null,
    imgUrl: null,
  },
];
