import cuid from "cuid";


export const sampleData = [
    {
        id: cuid(),
        description: "Buy Milk 🥛",
        status: "active"
    },
    {
        id: cuid(),
        description: "Buy Cat 🙀",
        status: "completed"
    }

];
