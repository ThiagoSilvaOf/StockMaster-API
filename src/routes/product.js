const express = require("express");
const productRouter = express.Router();
const ApiProduct = require("../api/product")


productRouter.get("/", ApiProduct.FindAll);
productRouter.get("/:id", ApiProduct.FindById);
productRouter.post("/", ApiProduct.Create);
productRouter.put("/:id", ApiProduct.Update);
productRouter.delete("/:id", ApiProduct.Delete);

module.exports = productRouter;