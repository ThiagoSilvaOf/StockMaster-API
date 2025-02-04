const express = require("express");
const userRouter = express.Router();

// opções do USER
userRouter.get("/info", () => {});
userRouter.put("/", () => {});
userRouter.delete("/", () => {});

// opções do ADMIN
userRouter.get("/", () => {});
userRouter.get("/:id", () => {});
userRouter.post("/", () => {});
userRouter.put("/:id", () => {});
userRouter.delete("/:id", () => {});

module.exports = userRouter;
