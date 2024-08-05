const { Router } = require("express")
const UserController = require("../controllers/usersController")
const usersRouter = Router()
const ensureAuth = require('../middleware/ensureAuth')
const userController = new UserController();

usersRouter.post('/', userController.create)
usersRouter.put('/', ensureAuth, userController.update)


module.exports = usersRouter