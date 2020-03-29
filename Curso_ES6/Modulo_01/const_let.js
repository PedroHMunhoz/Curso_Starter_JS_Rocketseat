// Uma constante não pode ser alterada pelo código, porém se ela for um objeto, é possível alterar propriedades
// desse objeto, pois não estamos alterando a constante diretamente
const usuario = { nome: "Pedro" };

usuario.nome = "Pedro Munhoz";

//Let são variáveis de escopo e podem ser alteradas. São como se fosse as var do JS Vanilla
function teste(x) {
  let y = 2;

  y = 5;
  console.log(x, y);
}

teste(10);
