const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAthenticated = require("../middlewares/ensureAthenticated")

const tagsRoutes = Router();

const tagsController = new TagsController();

// query params são opcionais
tagsRoutes.get("/", ensureAthenticated, tagsController.index);

module.exports = tagsRoutes;