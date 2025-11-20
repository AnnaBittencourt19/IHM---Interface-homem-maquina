# Introdução ao JavaScript
- A Javascript é usada para deixar uma página web interativa.
- HTML e CSS: Marcação 
- Javascript: Lógica

# Variáveis mutáveis

- Uma variável aponta para um endereço de memória específico que armazena um valor, elas recebem um nome, esse nome é usado para acessar o valor armazenado.
- Para criar uma variável usamos a palavra LET
```
let hello; //declaração de uma variavel que se chama hello
```
- Em JavaScript uma string pode ser declarada com aspas simples ou duplas.
```
let hello = 'Hello'
// iniciação e declaração da variável hello
```
- Para imprimir um valor em JavaScript usamos console.log(nome_variavel_que_sera_impressa). Equivale ao cout (c++) e ao println(Java)
```
console.log(hello); //código para imprimir o que está armazenado na variavel hello
```
- É possível reatribuir (mudar) o valor de uma variável em JavaScript, basta apenas escrever seu nome e o novo valor. Exemplo: (vamos mudar o valor da variável hello para world):
```
hello = "World"
//o novo valor atribuido para a variavel hello é World
```
- Uma boa prática na criação de variáveis com palavras compostas é escrever assim: segundaLetra
- Exercício do freeCodeCamp:
```
let character = 'Hello'; //Declaração de uma variavel chamada character com o valor Hello (string)

console.log(character); //imprimir o valor de character

character = "World"; //reatribuir o valor dessa variavel para World

let secondCharacter; //criação de outra variavel

secondCharacter = character; // essa variavel tera o valor World pois atribuimos a ela o conteudo da variavel character

console.log(secondCharacter); //imprimir o valor de secondCharacter
```
- Código envolvendo números: 
```
let character = 'Hello';

let count = 8; 

console.log(count +1); // vai ser impresso o valor de count mais uma unidade (nesse caso, será impresso 9), dá para fazer outras operações como divisão(/) e multiplicação (*)

```


# Arrays
- Os arrays são as estruturas de dados mais básicas, um array pode conter uma série de valores.
- Arrays são declarados com o uso de [\]
```
let rows = ["Naomi", "Quincy", "CamperChan"]; //criação de um array chamado rows com 3 elementos

console.log(rows[0]); //vai imprimir o primeiro elemento do array rows

rows[2] = 10; //vai mudar 

console.log(rows); //vai imprimir todos os elementos do array rows

```

- Para ver qual elemento está no último índice do array:
```
let rows = ["Naomi", "Quincy", "CamperChan"];

console.log(rows[0]); //primeiro elemento do array 

rows[2] = 10; //muda o valor do elemento de índice 2 (o último)

console.log(rows); // vai imprimir todos os elementos do array

let ver = rows[rows.length - 1]; //criamos uma variavel chamada "ver" nela armazenamos o elemento que está no último índice

console.log(ver) //vai imprimir o último elemento

```
- Lenght é um método de JavaScript que mostra o tamanho de um array. 
- Exemplo: Declarando um array e seu valor:
```
let array = new Array(5) //criação de um array com 5 posições

console.log(array.length) // vai imprimir 5 no console

```
![[Pasted image 20250808201451.png]]

- Método push em array: É um método que "empurra" um valor para o final de um array (para a última posição).
- Exemplo do método push:
```
let rows = ["Naomi", "Quincy", "CamperChan"];

rows.push("freeCodeCamp"); //adicionamos "freeCodeCamp" como último elemento, agora nosso array possui 4 elementos

console.log(rows);
//O Array fica assim ao ser imprimido:[ 'Naomi', 'Quincy', 'CamperChan', 'freeCodeCamp' ]
```

- Em casos de arrays com tamanho definido, caso o array esteja cheio e usamos o método push será adicionado mais um elemento ao array (posição). Exemplo: 
```
let array = new Array(5); //Criamos um array com 5 posições
array[0] = 12;
array[1] = 13;
array[2] = 14;
array[3] = 15;
array[4] = 16; //declaramos as 5 posições
array.push(17); //Ao fazermos array.push(17) adicionamos um novo elemento (17) ao final do array e uma nova posição (a sexta)

console.log(array); // [12, 13, 14, 15, 16, 17] //os 6 elementos serão impressos no console
```

- Outro método importante de JavaScript é o .pop() ele elimina o último elemento de um array e o retorna. Exemplo: 
```
let rows = ["Naomi", "Quincy", "CamperChan"]; //criação do array

rows.push("freeCodeCamp"); //definição do último elemento como "freeCodeCamp"

let popped = rows.pop(); //criação de uma variável chamada popped, ela será usada para remover o ultimo elemento do array e retorna-lo

console.log(popped); //vai retornar "frreCodeCamp"e remove-lo do array

console.log(rows);
//vai imprimir [ 'Naomi', 'Quincy', 'CamperChan' ] sem "freeCodeCamp" ele foi removido usando o método pop
```

# Variável constante

- Quando declaramos uma variável com a palavra let estamos criamos uma variável mutável, ou seja, ela poderá sofrer alterações do seu valor posteriormente
- Já uma variável declarada com a palavra const não pode ser retribuída ao longo do código, muda-las causaria um erro. Exemplo de criação de variáveis constantes:
```
const character = "Hello";

const count = 8;

const rows = [];
```

# Loop For

- Para executar uma tarefa repetidamente até que uma condição seja atendida, usamos o loop for. 
- A estrutura de um loop for é assim: 
```
for (início; condição; passo) {
  ações a fazer repetidamente;
}
// explicando em português e de um jeito fácil o loop for
```
- Explicação em código(na prática):
```
for (let i = 0; i < 5; i++) {  

//inicio: variavel i que inicia no valor 0
//condição: i < 5 (enquanto a variavel i for menor que 5)
//passo: i++ (i= i+ 1) a cada passada no loop adiciona 1 no valor de i (variavel inicial)

  console.log("Número: " + i); // executa essa linha a cada repetição (vai executar até a variavel i ser maior ou igual 5)
  
}

```
- O que significa cada coisa no loop for?
	- Iterador (início): É uma variável que controla quantas vezes o seu loop vai rodar (iterar). Geralmente, ela começa com um valor inicial e muda a cada repetição, ajudando a saber quando parar.
	- Condição: É uma regra que o loop verifica a cada vez que começa uma repetição para saber se deve continuar ou parar. Quando a condição for verdadeira, o loop roda mais uma vez. Quando a condição for falsa, o loop para.
	- Iteração(passo): É o que você faz para atualizar o valor do iterador (início) depois que o código dentro do loop rodar.

- Exemplo de loop for: 
```
const count = 8;

for (let i = 0; i < count; i = i + 1) {

// interador: i (0)
//condição: i ser menor que count (i<8)
//iteração: i = i +1
	console.log(i);

}
```

# for ... of
- É uma forma de percorrer elementos em objetos iteráveis(como arrays, strings, maps, sets).
- O JavaScript trata uma String como um objeto iterável 
- Objeto iterável: Que pode ser percorrido, que permite acessar seus elementos

- Exemplo simples utilizando um vetor:
```
const frutas = ["maçã", "banana", "laranja"];

for(const fruta of frutas){
	console.log(fruta);
}

```
Saída: 
```
maçã
banana 
laranja
```

- Exemplo simples com String:
```
const palavra = "Olá";

for (const letra of palavra){
	console.log;
}
```
Saída:
```
o
l
á
```
- O nome de uma variável não importa, ela será apenas um apelido para o elemento
- A estrutura básica do for...of é:
```
for (variavel of iterável){

}
```






- /n pula linha

## Function
```
function addTwoNumbers(num1, num2) {

return num1 + num2;

}

  

const sum = addTwoNumbers(5, 10);

console.log(sum)
```
