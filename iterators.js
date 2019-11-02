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
