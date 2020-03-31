// 2º exercício
// A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

// 2.1 Utilizando o map
// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
const arrMap = usuarios.map(function(usuario) {
  return usuario["idade"];
});
console.log(arrMap);

// 2.2 Utilizando o filter
// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
const arrRSMaiores = usuarios.filter(function(usuario) {
  return usuario["idade"] > 18 && usuario["empresa"] === "Rocketseat";
});
console.log(arrRSMaiores);

// 2.3 Utilizando o find
// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const arrGoogle = usuarios.find(function(usuario) {
  return usuario["empresa"] === "Google";
});
console.log(arrGoogle);

// 2.4 Unindo operações
// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:
const arrMaiores50 = usuarios
  .map(function(usuario) {
    usuario["idade"] = usuario["idade"] * 2; //Multiplica a idade de cada usuário por 2
    return usuario; //Retorna o usuário
  })
  .filter(function(usuario) {
    return usuario["idade"] <= 50; //Aqui, verifico se a idade do usuário, após ação do map, é menor ou igual a 50
  });
console.log(arrMaiores50);
