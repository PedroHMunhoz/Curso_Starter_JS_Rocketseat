const express = require("express"); //Importando o Express para usar
const cors = require("cors"); //Importa o CORS, usado para permitir acesso de aplicações externas à API
const mongoose = require("mongoose"); //Importando o Mongoose para o banco de dados MongoDB
const requireDir = require("require-dir"); //Importa o pacote Require-Dir

//Iniciando o app
const app = express();

//Configura a aplicação para receber requisições com dados no formato JSON
app.use(express.json());

//Configura a aplicação para permitir o acesso por terceiros
app.use(cors());

//Iniciando o banco de dados
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Usando o RequireDir é possível apontar um diretório para as models, sem precisar ficar dando require em cada uma delas
requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3001);
