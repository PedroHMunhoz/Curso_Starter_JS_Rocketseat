//Declara um array qualquer de números
const arr = [1, 3, 4, 5, 6];

//Arrow Functions podem ser usadas para funções anônimas para reduzir verbosidade do código
const newArray = arr.map(item => item * 2);

console.log(newArray);

//Pode-se usar arrow functions para retornar objetos, porém nesse caso elas devem ser englobadas em parênteses
//caso contrário o retorno não funcionará. Sem parêntese somente quando forem retornos primitivos
const teste = () => ({ nome: "Diego" });

console.log(teste());
