//Object Short Syntax
const nome = "Pedro";
const idade = 28;

//Quando o nome de uma propriedade do objeto for IGUAL ao nome da varíavel, não precisa colocar dois pontos (:) e o valor
//pode manter somente o nome que o JS entenderá
const usuario = {
  nome,
  idade,
  empresa: "Partner"
};

console.log(usuario);
