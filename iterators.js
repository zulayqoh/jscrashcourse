const fruits = ['Banana', 'Mango', 'Strawberry'];
// for each
// ES6
fruits.forEach(fruit => console.log(fruit));

// ES5
fruits.forEach(function (fruit) {
  console.log('-' + fruit);
});


// Mutating an array in place
// fruits.forEach((fruit, i) => {
//   fruits[i] = fruit + 's';
// })
// console.log(fruits);


// map
// ES6
const pluralFruits = fruits.map(fruit => fruit + 's');
console.log(pluralFruits);

const numbers = [1, 2, 3, 4, 5, 6];
const sum = numbers.reduce((acc, ele) => acc + ele);
console.log(sum);

const product = numbers.reduce((acc, ele) => { return acc * ele }, 10);
console.log(product);

const even = numbers.reduce((acc, ele) => {
  if (ele % 2 === 0) {
    return [...acc, ele]
  }
  return acc;
}, []);
console.log(even);

const odd = numbers.reduce((acc, ele) => {
  if (ele % 2 !== 0) {
    return [...acc, ele]
  }
  return acc;
}, []);
console.log(odd);

const evenFilter = numbers.filter((num) => num % 2 == 0);
console.log(evenFilter);

// array = [1,2,3,4,5,6], acc = [], if even, return acc + even value, if odd, return acc 

// index = 0, ele = 1, acc = []
// index = 1, ele = 2, acc = [...acc, 2] = [2]
// index = 2, ele = 3, acc = [2]
// index = 3, ele = 4, acc = [...acc, 4] = [2, 4]
