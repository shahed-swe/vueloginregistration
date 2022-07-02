const express = require("express")
const UserRouter = express.Router()
const UserController = require("../controllers/user.controller")

// UserRouter
UserRouter.post("/registration", UserController.Registration);
UserRouter.post("/login", UserController.Login)


module.exports = { UserRouter };