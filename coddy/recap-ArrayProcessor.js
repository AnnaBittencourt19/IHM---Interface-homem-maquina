function processArray(arr) {
    //1. remover o ultimo
    arr.pop();
    //2. Adicionar o 10 no final
    arr.push(10);
    //3. organizar o array
    arr.sort()
    //4. Verificar se o 5 está no array
    if (arr.includes(5)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 5) {
                arr[i] = 50;
            }
        }
    }
    arr.reverse();
    return arr;
}
console.log(processArray([1, 2, 3, 4, 5, 6]));