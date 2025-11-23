let arr = inp.split(",").map(Number);
let result = [] 
arr.forEach((num, index) => {
    if((num < 50) || (num % 5 == 0)){
        result.push(num)
    }
});
console.log(result)
