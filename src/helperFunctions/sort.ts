import { ContentRow } from "../interfaces/content";

export default function dynamicSort(property: string, direction: string): (a: ContentRow, b: ContentRow) => number {
  const sortOrder: number = direction === "asc" ? 1 : -1;
  return function(a: ContentRow, b: ContentRow) {
    const result =
      a[property].toLowerCase() < b[property].toLowerCase()
        ? -1
        : a[property].toLowerCase() > b[property].toLowerCase()
        ? 1
        : 0;
    return result * sortOrder;
  };
}
