import { is } from "immutable";
// returns true if the Maps are equal
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
