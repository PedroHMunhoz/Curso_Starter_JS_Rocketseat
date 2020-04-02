// // alert("ASDADS");
// // // import * as funcoes from "./funcoes";

// // // console.log(funcoes.soma(1, 2));
// // // console.log(funcoes.sub(4, 2));

// const minhaPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("OK");
//     }, 2000);
//   });

// //Chamada antes do ES8
// // minhaPromise().then(response => {
// //   console.log(response);
// // });

// // async function executaPromise() {
// //   //   const response = await minhaPromise();
// //   //   console.log(response);

// //   //FAzendo dessa forma, o JS vai esperar cada uma delas executar antes de chamar a próxima
// //   console.log(await minhaPromise());
// //   console.log(await minhaPromise());
// //   console.log(await minhaPromise());
// // }

// // executaPromise();

// const executaPromise = async () => {
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// };

// executaPromise();

// import axios from "axios";

// class Api {
//   static async getUserInfo(username) {
//     try {
//       const response = await axios.get(
//         `https://api.github.com/users/${username}`
//       );
//       console.log(response);
//     } catch (err) {
//       console.warn("Erro na API");
//     }
//   }
// }

// Api.getUserInfo("PedroHMunhoz");
// Api.getUserInfo("PedroHMunhoz2");

import api from "./api";

class App {
  constructor() {
    //Array que irá guardar os repositórios a serem listados
    this.repositories = [];

    //Busca a referência ao form HTML que dará o submit
    this.formEl = document.getElementById("repo-form");

    //Busca a referência ao input onde serão digitados os valores
    this.inputEl = document.querySelector("input[name=repository]");

    //Busca a referência da listagem HTML
    this.listEl = document.getElementById("repo-list");

    //Chama o método para registrar os eventos necessários
    this.registerHandlers();
  }

  registerHandlers() {
    //Define o evento que irá tratar o OnSubmit do Form
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading) {
      let loadingEl = document.createElement("span");
      loadingEl.appendChild(document.createTextNode("Carregando"));
      loadingEl.setAttribute("id", "loading");

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById("loading").remove();
    }
  }

  async addRepository(event) {
    event.preventDefault(); //Evita o comportamento padrão do submit do form

    const repoInput = this.inputEl.value;

    //Se estiver vazio, sai da rotina
    if (repoInput.length === 0) return;

    this.setLoading();

    try {
      //Faz a requisição via GET para a API
      const response = await api.get(`/repos/${repoInput}`);

      //Fazendo a desustruturação da response da API em um objeto
      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;

      //Adiciona um novo repositório no array de repositories
      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });

      //Limpa o input
      this.inputEl.value = "";

      //Chama o método que vai desenhar os <li> na tela
      this.render();
    } catch (error) {
      alert("O repositório não existe!");
    }

    this.setLoading(false);
  }

  render() {
    this.listEl.innerHTML = "";

    this.repositories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.appendChild(document.createTextNode("Acessar"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

//Instancia a classe
//É possível instanciar sem precisar atribuir à uma variável, se não for necessário
new App();
