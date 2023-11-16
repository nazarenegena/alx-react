const Immutable = require("immutable");

function getImmutableObject(obj) {
  // using fromJS to convert the object
  // to an Immutable Map
  return Immutable.fromJS(obj);
}
