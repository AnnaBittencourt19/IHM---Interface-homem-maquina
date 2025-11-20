function fizzbuzz(num) {
  let escrito; 
  if (num % 3 === 0 && num % 7 === 0) { 
    escrito = "FizzBuzz";
  }
  else if (num % 3 === 0) {
    escrito = "Fizz";
  } else if (num % 7 === 0) {
    escrito = "Buzz";
  }
  else {
    escrito = num;
  }
  return escrito;
}

let resultado = fizzbuzz(21);
console.log(`Welcome to ${resultado}!`);
