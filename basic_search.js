/*
  Write an algorithm that searches for an item in an array
  If the item is in the array, return `I found item at index i`
  If not found, return item was not found

  Example basicSearch([1,2,3], 1) -> I found 1 at index 0
  basicSearch([1,2,3], 4) -> 4 was not found
*/

const basicSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return `I found ${item} at index ${i}`;
    }
  }
  return `${item} was not found`;
}
console.log(basicSearch([1, 2, 3], 1));
console.log(basicSearch([1, 'Banana', 4], 'Banana'));
console.log(basicSearch([1, 2, 3], 4));