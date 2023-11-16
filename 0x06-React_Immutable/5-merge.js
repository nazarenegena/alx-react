import { List, Map } from "immutable";
// returns a List containing the values of the two pages
export const concatElements = (page1, page2) => List(page1).concat(List(page2));

export const mergeElements = (page1, page2) => Map(page1).concat(Map(page2));
