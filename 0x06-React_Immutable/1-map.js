const { Map } = require("immutable");

function getImmutableObject(obj) {
  // using Map constructor to convert
  // the object to an Immutable Map
  return new Map(obj);
}

const myObj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

const myMap = getImmutableObject(myObj);
console.log(myMap);
