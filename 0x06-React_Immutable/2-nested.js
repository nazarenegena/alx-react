// Requiring the lodash library
const _ = require("lodash");

function accessImmutableObject(object, array) {
  let NewObject = object;
  return _.get(NewObject, array);
}

module.exports = accessImmutableObject;

console.log(
  accessImmutableObject(
    {
      name: {
        first: "Guillaume",
        last: "Salva",
      },
    },
    ["name", "first"]
  )
);
