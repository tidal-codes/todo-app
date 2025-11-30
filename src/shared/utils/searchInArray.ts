export function searchInArray(Array: Array<{ hi: number }>, fn: (val) => void) {
  return Array.filter(fn);
}
