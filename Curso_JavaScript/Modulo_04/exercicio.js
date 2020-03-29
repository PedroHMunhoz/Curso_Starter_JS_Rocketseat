// 1º exercício
// Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
// segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
// idade o resultado deve cair no .then, caso contrário, no .catch
// function checaIdade(idade) {
//   return new Promise(function(resolve, reject) {
//     if (idade >= 18) {
//       resolve("Maior que 18");
//     } else {
//       reject("Menor que 18");
//     }
//   });
// }

// checaIdade(20)
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// 2º exercício
// Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
// nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
// URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
// URL de exemplo: https://api.github.com/users/diego3g/repos
// Basta alterar "diego3g" pelo nome do usuário.
function buscarRepos() {
  var container = document.querySelector("#app");
  var inputElement = document.querySelector("#app input");
  var ul = document.createElement("ul");
  if (inputElement.value !== "") {
    axios
      .get("https://api.github.com/users/diego3g/repos")
      .then(function(response) {
        var retorno = JSON.parse(response);
        console.log(response);
      })
      .catch(function(error) {
        console.warn(error);
      });

    var li = document.createElement("li");
    li.innerHTML = inputElement.value;
    ul.appendChild(li);
    container.appendChild(li);
  }
}
