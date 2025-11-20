let n = parseInt(inp);

function fizzbuzz(num) {
  if (num % 3 === 0 && num % 7 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 7 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

console.log("Welcome to FizzBuzz!");

//loop fica fora da function
for (let i = 1; i <= n; i++) {
  console.log(fizzbuzz(i));
}
