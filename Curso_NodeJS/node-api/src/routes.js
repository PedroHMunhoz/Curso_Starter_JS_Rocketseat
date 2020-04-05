const express = require("express"); //Importando o Express para usar
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

//Criando uma rota GET
//O parametro REQ é a requisição enviada, podemos pegar todos os dados através dele
//O parametro RES é a resposta que será enviada ao requisitante após o processamento
routes.get("/products", ProductController.index);

//Cria a rota para buscar o produto pelo ID
routes.get("/products/:id", ProductController.show);

//Cria uma rota POST, para criar um produto
routes.post("/products", ProductController.store);

//Cria a rota para buscar o produto pelo ID e atualizar o mesmo
routes.put("/products/:id", ProductController.update);

//Cria uma rota DELETE, para DELETAR um produto
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;
