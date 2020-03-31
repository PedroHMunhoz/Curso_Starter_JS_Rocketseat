// 3º exercício
// Converta as funções nos seguintes trechos de código em Arrow Functions:
const arr = [1, 2, 3, 4, 5];

//Função Normal
arr.map(function(item) {
  return item + 10;
});

//Com Arrow Function
const somaArrow = arr.map(item => item + 10);
console.log(somaArrow);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: "Diego", idade: 23 };

//Function normal
// function mostraIdade(usuario) {
//   return usuario.idade;
// }

//Com Arrow Function e Const
const mostraIdade = usuario => {
  return usuario.idade;
};
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

//Function normal
// function mostraUsuario(nome = "Diego", idade = 18) {
//   return { nome, idade };
// }

const mostraUsuario = (nome = "Diego", idade = 18) => ({ nome, idade });
{
  {
    nome, idade;
  }
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
//Function normal
// const promise = function() {
//   return new Promise(function(resolve, reject) {
//     return resolve();
//   });
// };

//Com arrow function
//Aqui a primeira arrow encapsula a function anômima e a segunda arrow function encapsula a function da Promise
const promise = () => new Promise((resolve, reject) => resolve());
