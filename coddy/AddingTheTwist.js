let n = parseInt(inp);

function fizzbuzz(num) {
  if (num % 3 === 0 && num % 7 === 0) {
    return "FizzBuzz";
  } 
  else if (num.toString().includes('3') && (num % 3 != 0 && num % 7 != 0)){ // o enunciado engana com o "or" porém em inglês or depois de by quer dizer "e"
    //includes verifica se o número contém o dígito 3 (porém só serve para string por isso o toString())
    return "Almost Fizz";
  }
  else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 7 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

console.log("Welcome to FizzBuzz!");

// loop de 1 até n
for (let i = 1; i <= n; i++) {
  console.log(fizzbuzz(i));
}
