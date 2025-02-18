const express = require("express");
const productRouter = express.Router();
const ApiProduct = require("../api/product")
const authMiddleware = require("../middleware/auth");


productRouter.get("/", authMiddleware(), ApiProduct.FindAll);
productRouter.get("/:id", authMiddleware(), ApiProduct.FindById);
productRouter.post("/", authMiddleware(), ApiProduct.Create);
productRouter.put("/:id", authMiddleware(), ApiProduct.Update);
productRouter.delete("/:id", authMiddleware(), ApiProduct.Delete);

module.exports = productRouter;