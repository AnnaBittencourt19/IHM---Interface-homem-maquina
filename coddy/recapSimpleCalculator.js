let n1 = parseInt(inp[0]) // Don't change this line
let n2 = parseInt(inp[1]) // Don't change this line
let op = inp[2] // Don't change this line
let result = 0

if (op === "+"){
    result = n1+n2;
}
else if(op === "-"){
    result = n1-n2;
}
else if(op === "/"){
    result = n1/n2;
}
else if (op === "*"){
    result = n1*n2;
}

// se usar só + no lugar de "+" não funciona pois o + sozinho é um operador de soma e não algo que é possível comparar"


// Don't change the line below
console.log(`result = ${result}`)