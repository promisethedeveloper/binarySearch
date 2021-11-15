function binarySearch(array, targetElement) {
  array.sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let middleValue = array[middleIndex];

    if (middleValue === targetElement) {
        return middleIndex;
    } else if (middleValue > targetElement) {
      rightIndex = middleIndex - 1;
    } else if (middleValue < targetElement) {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([2,4,6,8,10,12,14,16,18,20,22], 22))