//Declarado um objeto usuario qualquer
const usuario = {
  nome: "Pedro",
  idade: 28,
  endereco: {
    cidade: "Canoas",
    estado: "RS"
  }
};

console.log(usuario);

//Dessa forma, conseguimos desestrutura um objeto complexo passando entre chaves na variável o nome das propriedades que desejamos pegar
//Daqui em diante, é possível acessar esses dados diretamente pelo nome delas, sem precisar colocar o nome da variável pai antes
//Se deseja pegar dados de um objeto que está dentro do objeto, podemos dentro da desestruturação usar o mesmo objeto abrindo ele e
//pegando os dados de dentro do objeto filho que desejamos ler
const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

//É possível desestruturar também ao passar objetos por parâmetros para functions
function mostraNome({ nome, idade, endereco: { cidade } }) {
  console.log(nome, idade, cidade);
}
mostraNome(usuario);
