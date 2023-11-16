export const { Map } = require("immutable");

const myObj = {
  1: "Liam",
  2: "Noah",
  3: "Elijah",
  4: "Oliver",
  5: "Jacob",
  6: "Lucas",
};

export const map = new Map(myObj);

export const map2 = map.set(2, "Benjamin").set(4, "Oliver");
