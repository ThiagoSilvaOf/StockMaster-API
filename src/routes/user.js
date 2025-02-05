const express = require("express");
const userRouter = express.Router();
const ApiUser = require("../api/user")


// opções do USER
userRouter.get("/info", ApiUser.FindById);
userRouter.put("/", ApiUser.Update);
userRouter.delete("/", ApiUser.Delete);

// opções do ADMIN
userRouter.get("/", ApiUser.FindAll);
userRouter.get("/:id", ApiUser.FindById);
userRouter.post("/", ApiUser.Create);
userRouter.put("/:id", ApiUser.Update);
userRouter.delete("/:id", ApiUser.Delete);

module.exports = userRouter;
