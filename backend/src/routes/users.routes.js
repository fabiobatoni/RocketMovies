const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();

userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAuthenticated, usersController.update);
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (req, res) => {
    console.log(req.file.filename);
    res.json();
})

module.exports = userRoutes;