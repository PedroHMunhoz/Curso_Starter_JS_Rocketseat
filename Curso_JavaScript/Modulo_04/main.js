// var xhr = new XMLHttpRequest();

// xhr.open("GET", "https://api.github.com/users/pedrohmunhoz");
// xhr.send(null);

// xhr.onreadystatechange = function() {
//   //4 significa que a requisição retornou dados
//   if (xhr.readyState === 4) {
//     console.log(JSON.parse(xhr.responseText));
//   }
// };

//Promises
// var minhaPromise = function() {
//   return new Promise(function(resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://api.github.com/users/pedrohmunhoz");
//     xhr.send(null);

//     xhr.onreadystatechange = function() {
//       //4 significa que a requisição retornou dados
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         } else {
//           reject("Erro na requisição");
//         }
//       }
//     };
//   });
// };

// var resultado = minhaPromise()
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.warn(error);
//   });

//Usando AXIOS
axios
  .get("https://api.github.com/users/diego3g/repos")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
