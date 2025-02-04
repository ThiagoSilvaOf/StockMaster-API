const express = require("express");
const app = express();
const port = 3000;
const database = require("./src/database");
  
app.use(express.json());

database.db
  .sync({ force: true })
  .then((_) => {
    app.listen(3000, () => {
      console.info(`Serviço rodando na porta ${port}`);
    });
  })
  .catch((e) => {
    console.error(`Não foi possível realizar a conexão com banco:  ${e}`);
  });
