//Operadores REST e SPREAD
//Para instalar no Babel -> yarn add @babel/plugin-proposal-object-rest-spread
//Deve adicionar no Babelrs como objeto plugin para funcionar

//REST -> Serve para pegar o "resto"/"restante" das propriedades
const usuario = {
  nome: "Pedro",
  idade: "28",
  empresa: "Partner"
};

//Desestrutura o objeto pegando a prop nome na prop específica e o restante dos dados na propriedade "resto"
const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto); //Ao dar o log, o "resto" tem as demais propriedades do objeto

//Para usar com vetores (arrays)
const arr = [1, 2, 3, 4];

//Desestruturação do array, usando REST na propriedade C
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//Pode ser utilizado também para parâmetros de funções
//Dessa forma o "params" será um array com os dados informados nas chamadas da função, sejam eles quais e quantos forem
function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 3, 4));

//SPREAD -> serve para propagar/repassar as informações de um objeto/array para outra esturutra de dados
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//Dessa forma usamos o SPREAD para unir os dois vetores acima declarados, adicionando sempre ao final de um novo vetor
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//SPREAD -> Com objetos
const usuario1 = {
  nome: "Pedro",
  idade: "28",
  empresa: "Partner"
};

//Dessa forma o SPREAD copia todas as props do usuario1 pro usuario2, porém alteramos o nome apenas para Paçoca
const usuario2 = { ...usuario1, nome: "Paçoca" };

console.log(usuario2);
