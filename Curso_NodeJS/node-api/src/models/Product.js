const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

//Cria o schema do objeto, que será igual a tabela da base de dados
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema);
