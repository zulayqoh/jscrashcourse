/**
 * functions are like variables except that they do not store ordinary values
 * However, they store behaviours or repetitive tasks
 */

 // ES5
function sayHelloTo(name) {
  return "Hello " + name;
}

// We can do this because function is a first class citizen in JS
var greet = function(name) {
  return "I am greeting you, " + name;
}

console.log(greet("Mandarin"));

// ES6 or ES2015
const greet2015 = name => "I am greeting you, " + name;
const sayAge = (age, unit = 'years') => `I am  ${age} ${unit} old`;

console.log(sayAge(5));
console.log(sayAge(5, 'months'));
