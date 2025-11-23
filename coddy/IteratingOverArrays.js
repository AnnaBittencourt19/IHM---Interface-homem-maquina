function MaiorQueCinco(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(MaiorQueCinco(["banana", "uva", "computador", "ola", "javascript"]));
