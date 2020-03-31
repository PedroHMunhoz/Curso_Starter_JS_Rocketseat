// 4º exercício
// 4.1 Desestruturação simples
// A partir do seguinte objeto:
//Obs: Alterado com sufixo empresa devido aos
const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};
//  Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
//  fim deve ser possível fazer o seguinte:

//Aqui exibimos o objeto empresa no console
console.log(empresa);

//Aqui o mesmo é desestruturado em variáveis
const {
  nome,
  endereco: { cidade, estado }
} = empresa;

//Aqui exibe-se as variáveis desestruturadas
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2 Desestruturação em parâmetros
// Na seguinte função:

// function mostraInfo(usuario) {
//   return `${usuario.nome} tem ${usuario.idade} anos.`;
// }

// Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
// separadamente e a função poder retornar apenas: return `${nome} tem ${idade} anos.`;

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}
const info = mostraInfo({ nome: "Diego", idade: 23 });
console.log(info);
