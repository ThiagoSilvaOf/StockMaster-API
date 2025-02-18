const express = require("express");
const userRouter = express.Router();
const ApiUser = require("../api/user");
const authMiddleware = require("../middleware/auth");


// opções do USER
userRouter.get("/info", authMiddleware(), ApiUser.FindById);
userRouter.put("/", authMiddleware(), ApiUser.Update);
userRouter.delete("/", authMiddleware(), ApiUser.Delete);

// opções do ADMIN
userRouter.get("/", authMiddleware("admin"), ApiUser.FindAll);
userRouter.get("/:id", authMiddleware("admin"), ApiUser.FindById);
userRouter.post("/", authMiddleware("admin"), ApiUser.Create);
userRouter.put("/:id", authMiddleware("admin"), ApiUser.Update);
userRouter.delete("/:id", authMiddleware("admin"), ApiUser.Delete);

module.exports = userRouter;
