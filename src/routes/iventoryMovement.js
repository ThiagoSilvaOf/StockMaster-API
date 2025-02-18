const express = require("express");
const movementRouter = express.Router();
const ApiInventoryMovement = require("../api/iventoryMovement")
const authMiddleware = require("../middleware/auth");


movementRouter.get("/:inventoryId/", authMiddleware(), ApiInventoryMovement.FindAll);
movementRouter.get("/:inventoryId/:id", authMiddleware(), ApiInventoryMovement.FindById);
movementRouter.post("/:inventoryId", authMiddleware(), ApiInventoryMovement.Create);
movementRouter.put("/:inventoryId/:id", authMiddleware(), ApiInventoryMovement.Update);
movementRouter.delete("/:inventoryId/:id", authMiddleware(), ApiInventoryMovement.Delete);

module.exports = movementRouter;