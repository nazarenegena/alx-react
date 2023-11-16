import { Map } from "immutable";
// returns a List containing the values of the two pages
export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}
