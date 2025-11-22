function swapEnds(arr){
    let lastElement = arr.pop();
    let firstElement = arr.shift();
    firstElement = lastElement;
    lastElement = firstElement;
    console.log(arr);
    return arr;
}
console.log(swapEnds([1, 2, 3, 4]))