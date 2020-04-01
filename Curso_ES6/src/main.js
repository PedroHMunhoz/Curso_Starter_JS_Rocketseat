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

import axios from "axios";

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response);
    } catch (err) {
      console.warn("Erro na API");
    }
  }
}

Api.getUserInfo("PedroHMunhoz");
Api.getUserInfo("PedroHMunhoz2");
