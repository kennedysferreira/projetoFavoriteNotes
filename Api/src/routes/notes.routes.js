const { Router } = require("express")

const NotesController = require("../controllers/notesController")
const notesRouter = Router()

const noteController = new NotesController();

notesRouter.post('/:user_id', noteController.create)
notesRouter.get('/:id', noteController.show)
notesRouter.delete('/:id', noteController.delete)
notesRouter.get('/', noteController.index)

module.exports = notesRouter
