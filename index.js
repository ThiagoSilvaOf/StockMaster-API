const express = require("express");
const app = express();
const port = 3000;
const database = require("./src/database");
const userRouter = require("./src/routes/user");
const productRouter = require("./src/routes/product");
const organizationRouter = require("./src/routes/organization");
const inventoryRouter = require("./src/routes/inventory");
const movementRouter = require("./src/routes/iventoryMovement");
const apiUser = require("./src/api/user");

app.use(express.json());
app.post("/api/v1/login", apiUser.Login);

app.use("/api/v1/organization", organizationRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/inventory", inventoryRouter);
app.use("/api/v1/inventorymovement", movementRouter);

database.db
  .sync({ force: false })
  .then((_) => {
    app.listen(3000, () => {
      console.info(`Serviço rodando na porta ${port}`);
    });
  })
  .catch((e) => {
    console.error(`Não foi possível realizar a conexão com banco:  ${e}`);
  });
