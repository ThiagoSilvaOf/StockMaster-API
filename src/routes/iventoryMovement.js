const express = require("express");
const movementRouter = express.Router();
const ApiInventoryMovement = require("../api/iventoryMovement")

movementRouter.get("/", ApiInventoryMovement.FindAll);
movementRouter.get("/:id", ApiInventoryMovement.FindById);
movementRouter.post("/", ApiInventoryMovement.Create);
movementRouter.put("/:id", ApiInventoryMovement.Update);
movementRouter.delete("/:id", ApiInventoryMovement.Delete);

module.exports = movementRouter;