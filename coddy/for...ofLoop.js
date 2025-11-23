function countVowels(palavra){
    let contador = 0;
    for (letra of palavra){
        if ("aeiouAEIOU".includes(letra)){
            contador += 1;
        }
    }
    return contador;
}
console.log(countVowels("Hello World"));