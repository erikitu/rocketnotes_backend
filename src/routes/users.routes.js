const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload")

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");

const ensureAthenticated = require("../middlewares/ensureAthenticated")

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController()

// query params são opcionais
userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAthenticated, usersController.update);
userRoutes.patch("/avatar", ensureAthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = userRoutes;