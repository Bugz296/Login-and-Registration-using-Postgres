const Express = require("express");
const Router = Express.Router();
const UserController = require(`./controllers/users`);

Router.get("/", UserController.index);
Router.post("/login", UserController.login);
Router.post("/register", UserController.register);
Router.post("/home", UserController.home);

module.exports = Router;