/**
 * scopes relates to where a certain variable cna still be referenced
 */

const factorial = (n) => {
  // let total = 1;
  
  // while (n > 0) {
  //   total *= n;
  //   n -= 1;
  // }

  // return total;

  /* let's discuss recursions later
    if (n == 0) return 1;
    return (n) * factorial(n - 1);
  */
}

// factorial(5) = 5 * factorial(4) = 5 * 24 = 120
// factorial(4) = 4 * factorial(3) = 4 * 6  = 24
// factorial(3) = 3 * factorial(2) = 3 * 2  = 6
// factorial(2) = 2 * factorial(1) = 2 * 1  = 2
// factorial(1) = 1 * factorial(0) = 1 * 1  = 1
// factorial(0) = 1

console.log(factorial(5));

sayHelloTo
eat // after eating, belch 
drink