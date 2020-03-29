//Declara um array qualquer de números
const arr = [1, 3, 4, 5, 8, 9];

//O map serve pra percorer o vetor e retornar algo de dentro dele
//Usando o item como parâmetro da function do map, ele executa rotinas com cada item do vetor
//É possível passar como parâmetro o item do vetor e o index, para que sejam executadas rotinas com o indice de cada elemento do array
const newArr = arr.map(function(item, index) {
  return item * 2;
});

console.log(newArr);

//O Reduce consome todo o vetor e transforma ele em uma única varíavel, um único item
//Cada vez que ele executar, ele vai pegar o total e somar com o next
//1ª execução: Total = 0, Next = 1
//2ª execução: Total 1, Next = 3
//3ª execução: Total = 4, Next = 4...
const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);

//Faz um filtro no array, retornando um novo array com o resultado. A expressão dentro do filter deve obrigatoriamente retornar TRUE ou FALSE
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);

//Verifica se a informação passada existe dentro do array. Se existir, retorna a informação. Se não existir, retorna undefined
const find = arr.find(function(item) {
  return item === 2;
});

console.log(find);
