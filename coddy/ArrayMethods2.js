function findElement(arr, num){
    let tem_no_array = arr.includes(num);
    if (tem_no_array){
        return arr.indexOf(num);
    } else {
        return -1;
    }
}
console.log(findElement([1, 2, 3, 4], 5))
// Para executar no vscode: extensão code runner e atalho ctrl+opt+n