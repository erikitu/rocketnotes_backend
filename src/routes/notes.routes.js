const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAthenticated = require("../middlewares/ensureAthenticated")

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.use(ensureAthenticated)

// query params são opcionais
notesRoutes.get("/", notesController.index);
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;