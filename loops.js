console.log("======== Explaining For loop ==========")
const fruits = ['Banana', 'Mango', 'Strawberry'];

for (let index = 0; index < fruits.length; index++) {
  const element = fruits[index];
  console.log(element);
}

console.log("======== Explaining While loop ==========")
let index = 0;
while (index < fruits.length) {
  const element = fruits[index];
  console.log(element);
  index += 1;
}

// Searching for Mango
for (let index = 0; index < fruits.length; index++) {
  console.log(index);
  if (fruits[index] === 'Mango') {
    console.log('We found Mango');
    break;
  }
}

