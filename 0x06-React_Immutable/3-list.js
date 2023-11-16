//  accepts an array as parameter &
// converts it into an immutable List
const { List } = require("immutable");

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  return list.push(element);
}
