const mongoose = require("mongoose"); //Importando o Mongoose para o banco de dados MongoDB
const Product = mongoose.model("Product"); //Importa o model de produtos

module.exports = {
  async index(req, res) {
    //Através de desustruturação, pega a page que veio via URL para passar ao método que faz o paginate
    const { page = 1 } = req.query;

    //Executa um select na tabela, sem filtros, trazendo todos os dados
    //Com o MongoosePaginate instalado, troca-se o find pelo paginate
    //O primeiro parâmetro pode ser o WHERE, caso exista e o segundo é a página atual e o limite de registros por página
    const products = await Product.paginate({}, { page, limit: 10 });

    //Retorna a resposta da requisição em formato JSON
    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  async store(req, res) {
    //Criação
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    //Busca o produto pelo ID e faz o update, conforme dados enviados no body da requisição
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true //O TRUE aqui serve para que ele retorne o novo produto, após o update, para a varíavel caso contrário irá retornar o produto antes do update
    });
    return res.json(product);
  },

  async destroy(req, res) {
    const product = await Product.findByIdAndRemove(req.params.id);
    return res.send();
  }
};
