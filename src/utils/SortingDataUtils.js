export function ascendingOrderAlphabetical(fetchedData, attribute) {
  return fetchedData.sort(function (a, b) {
    if (a[attribute] < b[attribute]) {
      return -1;
    }
    if (a[attribute] > b[attribute]) {
      return 1;
    }
    return 0;
  });
}
